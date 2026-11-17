"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { DEMO_SIGNUP_ENABLED } from "../../lib/demo-signup";
import OtpInput from "./OtpInput";

const SAMPLE_CODE = ["4", "1", "9", "2", "", ""];

export default function VerificationActions() {
  const router = useRouter();
  const [digits, setDigits] = useState(SAMPLE_CODE);
  const complete = digits.every((digit) => digit !== "");

  function handleSubmit(event) {
    event.preventDefault();
    if (!DEMO_SIGNUP_ENABLED || !complete) return;
    router.push("/signup/business");
  }

  return (
    <form className="signup-verify-form" onSubmit={handleSubmit} noValidate>
      <OtpInput value={digits} onChange={setDigits} />
      <p className="signup-expire">The code expires in 10 minutes.</p>
      <button type="submit" className="signup-verify" disabled={!complete}>
        Verify
      </button>
    </form>
  );
}
