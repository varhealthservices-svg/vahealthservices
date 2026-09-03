import Image from "next/image";
import type { Metadata } from "next";
import { jobDescriptionHtml } from "./job-content";

export const metadata: Metadata = { title: "Careers | Virginia HealthCare Services" };

export default function Careers() {
  return (
    <>
      <section className="relative h-[280px]">
        <Image src="/images/careers-hero.jpg" alt="Careers" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center">
          <h1 className="max-w-6xl mx-auto px-6 w-full text-white font-black text-5xl">Careers</h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Open Positions</h2>

        <details className="group bg-gray-50 rounded-2xl overflow-hidden mb-4">
          <summary className="cursor-pointer list-none flex items-center justify-between px-6 py-5 font-semibold text-gray-800 hover:bg-gray-100">
            Director of Medical Laser Systems (Annandale, VA)
            <span className="text-[var(--brand-blue)] text-xl group-open:rotate-45 transition-transform">+</span>
          </summary>
          <div
            className="px-6 pb-8 prose prose-sm max-w-none text-gray-700 [&_h3]:font-bold [&_h3]:mt-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6"
            dangerouslySetInnerHTML={{ __html: jobDescriptionHtml }}
          />
        </details>

        <div className="mt-12 bg-[var(--brand-blue-light)]/10 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold mb-2">Interested in joining our team?</h3>
          <p className="text-gray-600 mb-5">Send your resume and cover letter to our HR department.</p>
          <a
            href="/contact"
            className="inline-block bg-[var(--brand-blue)] hover:bg-[var(--brand-blue-light)] text-white font-semibold px-8 py-3 rounded-full transition"
          >
            Apply Now
          </a>
        </div>
      </section>
    </>
  );
}
