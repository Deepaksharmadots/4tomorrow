import SignupLogo from "./SignupLogo";
import SignupProgress from "./SignupProgress";
import SocialSignupButtons from "./SocialSignupButtons";
import EmailSignupForm from "./EmailSignupForm";
import SignupLegal from "./SignupLegal";

export default function SignupCard() {
  return (
    <section className="signup-page">
      <div className="signup-card">
        <SignupLogo />
        <SignupProgress current={1} total={3} />
        <h1 id="signup-title" className="signup-title">
          Create your account
        </h1>
        <p className="signup-lead">
          Emissions reporting for Australian businesses. Free to set up, no card
          needed.
        </p>
        <SocialSignupButtons />
        <div className="signup-divider" role="separator">
          <span>OR</span>
        </div>
        <EmailSignupForm />
        <SignupLegal />
      </div>
    </section>
  );
}
