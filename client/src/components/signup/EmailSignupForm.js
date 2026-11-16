"use client";

import { useState } from "react";

export default function EmailSignupForm() {
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
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
