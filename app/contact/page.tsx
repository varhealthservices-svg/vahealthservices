import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact Us | Virginia HealthCare Services" };

export default function Contact() {
  return (
    <>
      <section className="relative h-[280px]">
        <Image src="/images/contact-hero.jpg" alt="Contact Us" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="max-w-6xl mx-auto px-6 w-full">
            <h1 className="text-white font-black text-5xl mb-2">Contact Us</h1>
            <p className="text-white/90 text-lg">We&apos;d love to hear from you</p>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-14 text-center">
        <h2 className="text-2xl font-bold mb-2">If you or a loved one needs services, feel free to reach out to us.</h2>
        <p className="text-gray-600 mb-1">Physicians and case managers please use the same form below</p>
        <p className="text-gray-600">
          or call us directly at{" "}
          <a href="tel:+17033335288" className="text-[var(--brand-blue)] font-semibold">
            (703) 333-5288
          </a>
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-2xl shadow-md p-2">
          {/* Original JotForm HIPAA-compliant contact form */}
          <iframe
            id="JotFormIFrame-201517648344052"
            title="Contact Form"
            allowTransparency
            allowFullScreen
            allow="geolocation; microphone; camera"
            src="https://hipaa.jotform.com/201517648344052"
            frameBorder={0}
            scrolling="no"
            style={{ minWidth: "100%", height: 700, border: "none" }}
          />
        </div>
      </section>

      <section className="bg-[var(--brand-blue-light)]/10 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-2">We have branches serving the Northern Virginia Area</h2>
          <p className="text-gray-600">Feel free to contact an office close to you</p>
        </div>
      </section>
    </>
  );
}
