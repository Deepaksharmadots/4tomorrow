import LegalDocument from "../../components/legal/LegalDocument";
import privacyPolicy from "../../content/privacy-policy";

export const metadata = {
  title: "Privacy Policy | 4tomorrow",
  description: "Placeholder privacy policy for 4tomorrow.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalDocument
      title={privacyPolicy.title}
      sections={privacyPolicy.sections}
    />
  );
}
