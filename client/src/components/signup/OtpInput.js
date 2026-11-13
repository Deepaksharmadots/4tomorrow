"use client";

import { useEffect, useRef } from "react";

const LENGTH = 6;

export default function OtpInput({ value, onChange }) {
  const inputsRef = useRef([]);
  const didFocus = useRef(false);

  useEffect(() => {
    if (didFocus.current) return;
    didFocus.current = true;
    const firstEmpty = value.findIndex((digit) => digit === "");
    const index = firstEmpty === -1 ? LENGTH - 1 : firstEmpty;
    inputsRef.current[index]?.focus();
  }, [value]);

  function commit(next, focusIndex) {
    onChange(next);
    const index = Math.max(0, Math.min(LENGTH - 1, focusIndex));
    requestAnimationFrame(() => inputsRef.current[index]?.focus());
  }

  function fillFrom(start, digits) {
    const next = [...value];
    const chars = digits.slice(0, LENGTH - start);
    chars.split("").forEach((char, offset) => {
      next[start + offset] = char;
    });
    commit(next, Math.min(start + chars.length, LENGTH - 1));
  }

  function handleChange(index, event) {
    const digits = event.target.value.replace(/\D/g, "");
    if (!digits) {
      const next = [...value];
      next[index] = "";
      onChange(next);
      return;
    }
    if (digits.length > 1) {
      fillFrom(index, digits);
      return;
    }
    const next = [...value];
    next[index] = digits;
    commit(next, index < LENGTH - 1 ? index + 1 : index);
  }

  function handleKeyDown(index, event) {
    if (event.key === "Backspace") {
      event.preventDefault();
      const next = [...value];
      if (value[index]) {
        next[index] = "";
        onChange(next);
        return;
      }
      if (index > 0) {
        next[index - 1] = "";
        commit(next, index - 1);
      }
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      inputsRef.current[Math.max(0, index - 1)]?.focus();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      inputsRef.current[Math.min(LENGTH - 1, index + 1)]?.focus();
    }
  }

  function handlePaste(event) {
    const digits = event.clipboardData.getData("text").replace(/\D/g, "");
    if (!digits) return;
    event.preventDefault();
    const start = digits.length >= LENGTH ? 0 : Number(event.target.dataset.index);
    fillFrom(start, digits);
  }

  return (
    <div className="signup-otp" role="group" aria-label="6-digit verification code">
      {value.map((digit, index) => (
        <input
          key={index}
          ref={(node) => {
            inputsRef.current[index] = node;
          }}
          data-index={index}
          value={digit}
          onChange={(event) => handleChange(index, event)}
          onKeyDown={(event) => handleKeyDown(index, event)}
          onPaste={handlePaste}
          type="text"
          inputMode="numeric"
          autoComplete={index === 0 ? "one-time-code" : "off"}
          aria-label={`Digit ${index + 1} of ${LENGTH}`}
          maxLength={1}
          pattern="[0-9]*"
        />
      ))}
    </div>
  );
}
