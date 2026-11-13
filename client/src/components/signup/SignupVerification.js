import Link from "next/link";
import SignupLogo from "./SignupLogo";
import SignupProgress from "./SignupProgress";
import VerificationActions from "./VerificationActions";

const PLACEHOLDER_EMAIL = "harry@meridianbp.com.au";

export default function SignupVerification() {
  return (
    <section className="signup-page">
      <div className="signup-card">
        <SignupLogo />
        <SignupProgress current={2} total={3} />
        <h1 id="verify-title" className="signup-title">
          Check your email
        </h1>
        <p className="signup-lead">
          We sent a 6-digit code to <strong>{PLACEHOLDER_EMAIL}</strong>
        </p>
        <VerificationActions />
        <p className="signup-resend">
          Didn&apos;t get it? <span>Resend in 47s</span>
        </p>
        <p className="signup-alt">
          Check your junk folder, or{" "}
          <Link href="/">try a different method</Link>
        </p>
        <p className="signup-switch">
          Wrong address? <Link href="/">Change it</Link>
        </p>
      </div>
    </section>
  );
}
