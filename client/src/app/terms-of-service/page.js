import LegalDocument from "../../components/legal/LegalDocument";
import termsOfService from "../../content/terms-of-service";

export const metadata = {
  title: "Terms of Service | 4tomorrow",
  description: "Placeholder terms of service for 4tomorrow.",
};

export default function TermsOfServicePage() {
  return (
    <LegalDocument
      title={termsOfService.title}
      sections={termsOfService.sections}
    />
  );
}
