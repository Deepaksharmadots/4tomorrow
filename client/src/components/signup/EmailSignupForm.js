"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { DEMO_SIGNUP_ENABLED } from "../../lib/demo-signup";

export default function EmailSignupForm({ continueHref }) {
  const router = useRouter();
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const trimmed = email.trim();
    if (!DEMO_SIGNUP_ENABLED || !continueHref || !trimmed) return;
    const params = new URLSearchParams({ email: trimmed });
    router.push(`${continueHref}?${params.toString()}`);
  }

  return (
    <form className="signup-form" onSubmit={handleSubmit} noValidate>
      <label htmlFor="work-email">Work email</label>
      <input
        id="work-email"
        name="email"
        type="email"
        inputMode="email"
        autoComplete="email"
        placeholder="Enter your work email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <button type="submit">Continue with email</button>
    </form>
  );
}
