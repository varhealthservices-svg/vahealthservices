import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = { title: "Terms of Service | Virginia HealthCare Services" };

export default function TermsOfService() {
  return (
    <LegalPage title="Terms of Service">
      <p><em>Last updated: [date]. This is placeholder text — please replace with your reviewed terms of service before publishing.</em></p>
      <h3>Use of This Website</h3>
      <p>This website is provided for informational purposes about Virginia HealthCare Services and its home health offerings. Content should not be treated as medical advice.</p>
      <h3>No Medical Advice</h3>
      <p>Information on this site does not replace consultation with a qualified healthcare provider. For medical emergencies, call 911.</p>
      <h3>Limitation of Liability</h3>
      <p>Virginia HealthCare Services is not liable for any damages arising from use of this website to the fullest extent permitted by law.</p>
    </LegalPage>
  );
}
