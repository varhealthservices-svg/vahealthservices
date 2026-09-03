import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "About | Virginia HealthCare Services" };

const team = [
  { name: "Elithia Cornwell", role: "Vice President of Operations", img: "/images/team-cornwell.jpg", bio: "Elithia Cornwell, Vice President of Operations, has over 12 years of expertise. Her areas of emphasis are organizational culture and change, administrative simplicity, and leadership development. Elithia inherently understands that our relationships with community partners comprised of hospitals, case managers and physicians, patients, and amazing staff are the most valuable assets our organization can have. She is driven by the unrelenting pursuit of patient driven focus." },
  { name: "Conrad Aquino, MD", role: "Director of Clinical Services", img: "/images/team-conrad.jpg", bio: "Dr. Conrad Aquino is a physician, nurse, and award-winning author with over 20 years of healthcare experience. His strong clinical background makes Dr. Aquino a good resource to the team. Throughout his career, he has successfully undergone several CMS and Joint Commission surveys and multiple ADRs." },
  { name: "Brook Ladd, LPN", role: "Regional Director", img: "/images/team-brook.jpg", bio: "Brook Ladd, LPN, has worked in the health care industry for 20 years. She has experience in Nursing, Business Development, Special Programming and specializes in Home Health Care. As a seasoned Regional Director, she is passionate about advancing collaborations across the post-acute platform." },
  { name: "Nateisha Sullivan, LPN", role: "Patient Care Coordinator", img: "/images/team-nateisha.jpg", bio: "Nateisha Sullivan has been a Nurse for over 26 years. As the Director of several Skilled Nursing Facilities, she maintained a high standard of Quality Assurance and Infection Control. She ensures the line of communication remains open between the Clinical/Field Staff, Patients and Upper Management." },
  { name: "Zakiya Collazo-Clark", role: "Human Resources", img: "/images/team-zakiya.jpg", bio: "Zakiya Collazo-Clark has over 12 years experience in Administration and 8 in the Healthcare field with studies in Medical Billing as well. Her love for meeting new people, open lines of communication, and employee/administration relations make her a great representation for this organization." },
];

export default function About() {
  return (
    <>
      <section className="relative h-[320px]">
        <Image src="/images/about-hero.jpg" alt="About Us" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <h1 className="max-w-6xl mx-auto px-6 w-full text-white font-black text-5xl">About Us</h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Vision / Mission Statement</h2>
        <p className="text-xl text-gray-600 italic">
          &ldquo;Treating the illness is only incidental to what we do — caring for the person within the patient.&rdquo;
        </p>
      </section>

      <section className="bg-[var(--brand-blue-light)]/10 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6">Message from the President</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>Welcome to Virginia HealthCare Services. As President, I thank you for your interest in our company. Originated in 2005, Virginia HealthCare Services is one of the leading Medicare certified home health providers in Northern Virginia. We have three locations within the Northern Virginia/DC Metropolitan area.</p>
            <p>We pride ourselves on our professional services and uncompromising stance on providing the best patient care. What most sets our company apart is the caliber of the people that make up our core. We have put together a diverse and talented team of individuals that cannot be matched by our competitors.</p>
            <p>We would love the opportunity to welcome you as a patient and to exceed your expectations by providing the highest level of care.</p>
            <p>Sincerely,<br /><strong>Dr. Hussein Ibrahim, PT, DPT</strong></p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-14">Our Team</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {team.map((m) => (
            <div key={m.name} className="text-center">
              <div className="relative w-40 h-40 mx-auto mb-4 rounded-2xl overflow-hidden shadow">
                <Image src={m.img} alt={m.name} fill className="object-cover" />
              </div>
              <h3 className="font-bold">{m.name}</h3>
              <p className="text-sm text-[var(--brand-blue)] font-semibold mb-2">{m.role}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{m.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--brand-blue-light)]/10 py-10">
        <p className="max-w-4xl mx-auto px-6 text-sm text-gray-600 italic text-center leading-relaxed">
          Virginia HealthCare Services provides equal employment opportunity and client services. In compliance with Title VI of the Civil Rights Act of 1964, Section 504 of the Rehabilitation Act of 1973, and the Age Discrimination Act of 1975, the company protects employees and clients from unlawful discrimination against race, color, sexual orientation, age, disability, gender, religion, national origin, handicap, ancestry, or ethnic background.
        </p>
      </section>
    </>
  );
}
