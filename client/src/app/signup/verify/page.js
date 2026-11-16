import SignupVerification from "../../../components/signup/SignupVerification";

export const metadata = {
  title: "Check your email | 4tomorrow",
  description: "Enter the 6-digit code sent to your work email.",
};

export default function VerifyEmailPage() {
  return <SignupVerification />;
}
