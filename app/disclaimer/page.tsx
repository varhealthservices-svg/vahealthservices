import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = { title: "Disclaimer | Virginia HealthCare Services" };

export default function Disclaimer() {
  return (
    <LegalPage title="Disclaimer">
      <p><em>Last updated: [date]. This is placeholder text — please replace with your reviewed disclaimer before publishing.</em></p>
      <p>The information provided by Virginia HealthCare Services on this website is for general informational purposes only. All information is provided in good faith; however, we make no representation or warranty of any kind regarding accuracy, adequacy, or completeness.</p>
      <p>Nothing on this site constitutes medical advice. Always consult your physician or a qualified healthcare provider regarding any medical condition.</p>
    </LegalPage>
  );
}
