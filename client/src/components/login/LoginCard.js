import Link from "next/link";
import EmailSignupForm from "../signup/EmailSignupForm";
import SignupLogo from "../signup/SignupLogo";
import SocialSignupButtons from "../signup/SocialSignupButtons";

export default function LoginCard() {
  return (
    <section className="signup-page">
      <div className="signup-card">
        <SignupLogo />
        <h1 id="login-title" className="signup-title">
          Sign in
        </h1>
        <p className="signup-lead">
          Sign in to continue managing your business emissions reporting.
        </p>
        <SocialSignupButtons />
        <div className="signup-divider" role="separator">
          <span>OR</span>
        </div>
        <EmailSignupForm />
        <p className="signup-switch">
          Don&apos;t have an account? <Link href="/signup">Sign up</Link>
        </p>
      </div>
    </section>
  );
}
