import SignupLogo from "./SignupLogo";
import SignupProgress from "./SignupProgress";
import BusinessInformationForm from "./BusinessInformationForm";

export default function SignupStepThree() {
  return (
    <section className="signup-page">
      <div className="signup-card">
        <SignupLogo />
        <SignupProgress current={3} total={3} />
        <h1 id="business-title" className="signup-title">
          About your business
        </h1>
        <p className="signup-lead">
          Four things, then you&apos;re in. We&apos;ll ask for the rest when we
          need it.
        </p>
        <BusinessInformationForm />
      </div>
    </section>
  );
}
