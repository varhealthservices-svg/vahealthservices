import Image from "next/image";
import Link from "next/link";

const services = [
  { title: "Skilled Nursing", text: "Our trained registered nurses and licensed practical nurses can perform disease education, medication management, wound and ostomy, and other nursing services." },
  { title: "Aide Services", text: "We provide personal care with our certified nursing assistants. Our home health aides can assist in bathing and other activities of daily living." },
  { title: "Skilled Therapy", text: "We provide physical, occupational, and speech therapy at home to assist in your recovery to get you or your loved one to their maximum potential." },
  { title: "Specialty Programs", text: "Our company developed specific programs to provide specialized care including total joint replacements, wound management, and congestive heart failure." },
];

const testimonials = [
  { author: "Jeanne B.", text: "My physical therapist was so helpful and kind, she always worked with the energy level I had. Her compassion was beyond excellent and her knowledge was measurable to her many years of experience." },
  { author: "Linda W.", text: "I recommend my therapist, she is outstanding, who did an excellent job treating me after my surgery. When I saw back my surgeon, he was impressed by the progress I have made, thanks to her guidance and direction." },
  { author: "Margaret P.", text: "Everyone that came to my home were very respectful, kind, and caring. I would highly recommend Virginia HealthCare Services." },
];

export default function Home() {
  return (
    <>
      <section className="relative">
        <div className="relative h-[520px] w-full">
          <Image src="/images/Home-Splash.jpg" alt="Virginia HealthCare Services" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/25" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto px-6 w-full">
            <h1 className="text-white font-black text-5xl md:text-6xl leading-tight drop-shadow-lg">
              Live Big.<br />Live Bold.
            </h1>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/services" className="bg-white text-[var(--brand-blue)] font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
                Home Health
              </Link>
              <Link href="/services#hospice" className="bg-white text-[var(--brand-blue)] font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
                Hospice
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#b51919] text-white text-center text-sm py-3 px-6">
        <strong>COVID-19 Notice:</strong> Our company continues to provide services during the pandemic practicing CDC recommended guidelines.{" "}
        <a href="https://www.cdc.gov/coronavirus/2019-ncov/index.html" target="_blank" rel="noopener noreferrer" className="underline font-semibold">
          LEARN MORE
        </a>
      </div>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-black text-center mb-14">Services</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-3 text-[var(--brand-blue)]">{s.title}</h3>
              <p className="text-gray-600 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--brand-blue-light)]/20 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.author} className="bg-white rounded-2xl p-8 shadow-sm">
              <p className="text-gray-600 italic leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
              <p className="font-semibold text-[var(--brand-blue)]">{t.author}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Schedule an in-home assessment today!</h2>
        <Link href="/contact" className="inline-block bg-[var(--brand-blue)] hover:bg-[var(--brand-blue-light)] text-white font-semibold px-8 py-4 rounded-full transition">
          Contact Us
        </Link>
      </section>
    </>
  );
}
