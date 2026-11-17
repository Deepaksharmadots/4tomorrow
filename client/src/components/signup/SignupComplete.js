import Link from "next/link";
import SignupLogo from "./SignupLogo";

export default function SignupComplete() {
  return (
    <section className="signup-page">
      <div className="signup-card">
        <SignupLogo />
        <h1 id="complete-title" className="signup-title">
          Congratulations!
        </h1>
        <p className="signup-lead">
          Your account setup has been completed successfully. Welcome to
          4tomorrow!
        </p>
        <Link href="/login" className="signup-verify">
          Continue to Login
        </Link>
      </div>
    </section>
  );
}
