import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = { title: "Privacy Policy | Virginia HealthCare Services" };

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy">
      <p><em>Last updated: [date]. This is placeholder text — please replace with your reviewed, HIPAA-compliant privacy policy before publishing.</em></p>
      <p>Virginia HealthCare Services (&quot;we&quot;, &quot;us&quot;) respects your privacy and is committed to protecting the personal and health information you share with us in accordance with applicable federal and Virginia state law, including HIPAA.</p>
      <h3>Information We Collect</h3>
      <p>We may collect contact details, health information relevant to care coordination, and information submitted through our website forms.</p>
      <h3>How We Use Information</h3>
      <p>Information is used to coordinate care, respond to inquiries, and comply with legal and regulatory obligations. We do not sell personal information.</p>
      <h3>Contact Us</h3>
      <p>Questions about this policy can be directed to our office at (703) 333-5288.</p>
    </LegalPage>
  );
}
