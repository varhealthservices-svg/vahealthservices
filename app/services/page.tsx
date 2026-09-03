import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Services | Virginia HealthCare Services" };

const homeHealthServices = [
  { title: "Skilled Nursing", img: "/images/service-Nursing.jpg" },
  { title: "Speech Therapy", img: "/images/service-Speech-Therapy.jpg" },
  { title: "Physical Therapy", img: "/images/service-Physical-Therapy.jpg" },
  { title: "Aide Services", img: "/images/service-Aide.jpg" },
  { title: "Occupational Therapy", img: "/images/service-Occupational-Therapy.jpg" },
  { title: "Social Worker", img: "/images/service-Social-Worker.jpg" },
  { title: "Specialty Programs", img: "/images/service-Specialty-Program.jpg" },
];

export default function Services() {
  return (
    <>
      <section className="relative h-[320px]">
        <Image src="/images/services-hero.jpg" alt="Services" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <h1 className="max-w-6xl mx-auto px-6 w-full text-white font-black text-5xl">Services</h1>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-4">Home Health</h2>
        <p className="text-gray-600 leading-relaxed max-w-3xl mb-12">
          We provide home health care services in the Northern Virginia area including Skilled Nursing, Physical Therapy, Occupational Therapy, Speech Therapy/Speech Language Pathology. Specializing in wound care, IV care, post-surgical care, joint replacements, diabetic management, COPD and CHF management, and more.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {homeHealthServices.map((s) => (
            <div key={s.title} className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition group">
              <div className="relative h-48">
                <Image src={s.img} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-center text-gray-800">{s.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="hospice" className="bg-[var(--brand-blue-light)]/10 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Hospice</h2>
            <p className="text-gray-600 leading-relaxed">
              We are in the process of undergoing certification for home hospice to provide you with nurses, aides, social workers, and chaplains at the last stages of life.
            </p>
          </div>
          <div className="relative h-64 rounded-2xl overflow-hidden shadow-sm">
            <Image src="/images/service-Hospice.jpg" alt="Hospice" fill className="object-cover" />
          </div>
        </div>
      </section>
    </>
  );
}
