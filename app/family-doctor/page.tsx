"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/* -------------------------------------------------------------------------- */
/*  Theme tokens                                                              */
/* -------------------------------------------------------------------------- */

const NAVY = "#0a3380";
const ORANGE = "#ff9e21";
const BLUE = "#2ea6f7";
const TEAL = "#4ec8d8";
const MUTED = "#93919d";

const TEAL_GRADIENT = `linear-gradient(105deg, ${TEAL} 0%, ${BLUE} 100%)`;

const PHONE_DISPLAY = "(703) 333-5288";
const PHONE_HREF = "tel:+17033335288";

/* -------------------------------------------------------------------------- */
/*  Section eyebrow                                                           */
/* -------------------------------------------------------------------------- */

function Eyebrow({
  children,
  color = ORANGE,
  center = false,
  bothSides = false,
}: {
  children: React.ReactNode;
  color?: string;
  center?: boolean;
  bothSides?: boolean;
}) {
  const dash = (
    <span
      aria-hidden
      className="inline-block h-[2px] w-3 align-middle"
      style={{ background: color }}
    />
  );

  return (
    <div
      className={`flex items-center gap-2 mb-4 ${center ? "justify-center" : ""}`}
      style={{ color }}
    >
      {bothSides && dash}
      <span className="text-xs font-extrabold tracking-[0.14em] uppercase">
        {children}
      </span>
      {dash}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Animated counter                                                          */
/* -------------------------------------------------------------------------- */

function Counter({ target, label }: { target: number; label: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || started.current) return;
        started.current = true;

        const duration = 1600;
        const start = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(Math.round(target * eased));
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-extrabold" style={{ color: ORANGE }}>
        {value}+
      </div>
      <div
        className="mt-2 text-[11px] font-extrabold tracking-[0.12em] uppercase"
        style={{ color: NAVY }}
      >
        {label}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Icons                                                                     */
/* -------------------------------------------------------------------------- */

const iconProps = {
  fill: "none",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function HeartPulseIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 32 32" className="w-10 h-10" stroke={color} {...iconProps}>
      <path d="M16 27S4 20 4 12.5A6.5 6.5 0 0 1 16 9a6.5 6.5 0 0 1 12 3.5C28 20 16 27 16 27Z" />
      <path d="M6 16h5l2-4 3 8 2-4h8" />
    </svg>
  );
}

function CalendarIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 32 32" className="w-10 h-10" stroke={color} {...iconProps}>
      <rect x="5" y="7" width="22" height="20" rx="2" />
      <path d="M5 13h22M11 4v6M21 4v6" />
    </svg>
  );
}

function TeamIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 32 32" className="w-10 h-10" stroke={color} {...iconProps}>
      <circle cx="12" cy="11" r="4" />
      <circle cx="23" cy="13" r="3" />
      <path d="M4 26c0-4.4 3.6-7 8-7s8 2.6 8 7" />
      <path d="M22 19c3.4 0 6 2 6 5" />
    </svg>
  );
}

function ProgramIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 32 32" className="w-10 h-10" stroke={color} {...iconProps}>
      <rect x="7" y="4" width="18" height="24" rx="2" />
      <path d="M11 11h10M11 16h10M11 21h6" />
    </svg>
  );
}

function StethoscopeIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 32 32" className="w-12 h-12" stroke={color} {...iconProps}>
      <path d="M9 4v7a6 6 0 0 0 12 0V4" />
      <path d="M7 4h4M19 4h4" />
      <path d="M15 17v3a6 6 0 0 0 12 0v-2" />
      <circle cx="27" cy="14" r="3" />
    </svg>
  );
}

function TherapyIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 32 32" className="w-12 h-12" stroke={color} {...iconProps}>
      <circle cx="16" cy="6" r="3" />
      <path d="M16 9v9M16 18l-5 9M16 18l5 9M8 13l8-2 8 2" />
    </svg>
  );
}

function ShieldIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 32 32" className="w-12 h-12" stroke={color} {...iconProps}>
      <path d="M16 3l11 4v9c0 7-5 11-11 13-6-2-11-6-11-13V7l11-4Z" />
      <path d="M11 16l3.5 3.5L22 12" />
    </svg>
  );
}

function HomeHeartIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 32 32" className="w-12 h-12" stroke={color} {...iconProps}>
      <path d="M4 14 16 4l12 10" />
      <path d="M7 13v14h18V13" />
      <path d="M16 24s-4-2.5-4-5a2.4 2.4 0 0 1 4-1.5A2.4 2.4 0 0 1 20 19c0 2.5-4 5-4 5Z" />
    </svg>
  );
}

function HandsIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 32 32" className="w-12 h-12" stroke={color} {...iconProps}>
      <path d="M6 18V9a2 2 0 0 1 4 0v6" />
      <path d="M10 15V7a2 2 0 0 1 4 0v8" />
      <path d="M14 15V8a2 2 0 0 1 4 0v9" />
      <path d="M18 17v-4a2 2 0 0 1 4 0v8a7 7 0 0 1-7 7h-2a7 7 0 0 1-7-7v-3" />
    </svg>
  );
}

function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={`w-3.5 h-3.5 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 3l5 5-5 5" />
    </svg>
  );
}

function Cross({
  className = "",
  size = 40,
  color = "#ffffff",
  opacity = 0.5,
}: {
  className?: string;
  size?: number;
  color?: string;
  opacity?: number;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 32 32"
      width={size}
      height={size}
      className={`absolute pointer-events-none ${className}`}
      style={{ opacity }}
    >
      <path d="M12 2h8v10h10v8H20v10h-8V20H2v-8h10V2Z" fill={color} />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*  Content                                                                   */
/* -------------------------------------------------------------------------- */

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Insurance", href: "#insurance" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

/* Three lines of business, mirroring the reference site's top-level split. */
const CARE_LINES = [
  {
    title: "Home Health",
    src: "/images/home/home-health.webp",
    alt: "A home health nurse checking an older man's blood pressure in his living room",
    href: "/services",
  },
  {
    title: "Palliative Care",
    src: "/images/home/palliative.webp",
    alt: "A caregiver holding an elderly patient's hand over a soft blanket",
    href: "/services",
  },
  {
    title: "Hospice",
    src: "/images/home/hospice.webp",
    alt: "A quiet sunlit bedroom with an armchair and fresh flowers beside the bed",
    href: "/services",
  },
];

/* Counters — whole numbers only, no percentages or quality ratings. */
const COUNTERS = [
  { target: 20, label: "Years of Service", Icon: CalendarIcon },
  { target: 700, label: "Patients Under Care", Icon: HeartPulseIcon },
  { target: 100, label: "Team Members", Icon: TeamIcon },
  { target: 12, label: "Clinical Programs", Icon: ProgramIcon },
];

const SERVICE_CARDS = [
  {
    title: "Skilled Nursing",
    Icon: StethoscopeIcon,
    body: "Registered and licensed practical nurses provide disease education, medication management, wound and ostomy care, infusion therapy, and pain management in the home.",
  },
  {
    title: "Skilled Therapy",
    Icon: TherapyIcon,
    body: "Physical, occupational, and speech therapists work with you at home to restore strength, mobility, and independence after illness, injury, or surgery.",
  },
  {
    title: "Specialty Programs",
    Icon: ShieldIcon,
    body: "Certified wound therapy, lymphedema treatment, Parkinson's and MS care, tracheostomy and ostomy care, and orthopedic protocols for knee, hip, and shoulder.",
  },
];

const SERVICE_FILTERS = [
  "All",
  "Nursing",
  "Therapy",
  "Support",
  "Specialty",
];

const SERVICE_GRID = [
  {
    title: "Skilled Nursing",
    category: "Nursing",
    src: "/images/home/nursing.webp",
    alt: "A nurse reviewing a medication list with an older woman at her kitchen table",
    text: "Disease education, medication management, wound and ostomy care.",
  },
  {
    title: "Physical Therapy",
    category: "Therapy",
    src: "/images/home/physical-therapy.webp",
    alt: "A physical therapist steadying an older man during a balance exercise at home",
    text: "Restoring strength, balance, and mobility after surgery or illness.",
  },
  {
    title: "Occupational Therapy",
    category: "Therapy",
    src: "/images/home/occupational-therapy.webp",
    alt: "An occupational therapist showing a patient how to use a bathroom grab bar",
    text: "Regaining independence in daily activities within the home.",
  },
  {
    title: "Speech Therapy",
    category: "Therapy",
    src: "/images/home/speech-therapy.webp",
    alt: "A speech therapist working through picture cards with an older man at a table",
    text: "Support for speech, language, and swallowing difficulties.",
  },
  {
    title: "Home Health Aide",
    category: "Support",
    src: "/images/home/home-health-aide.webp",
    alt: "An aide supporting an elderly woman as she walks with a rolling walker",
    text: "Certified nursing assistants help with bathing and daily living.",
  },
  {
    title: "Medical Social Work",
    category: "Support",
    src: "/images/home/social-work.webp",
    alt: "A medical social worker talking with a patient and his daughter at home",
    text: "Connecting patients and families to community resources.",
  },
  {
    title: "Physician House Calls",
    category: "Nursing",
    src: "/images/home/house-calls.webp",
    alt: "A physician listening to an older man's chest during a home visit",
    text: "In-home physician visits for patients who cannot travel.",
  },
  {
    title: "Certified Wound Therapy",
    category: "Specialty",
    src: "/images/home/wound-care.webp",
    alt: "A nurse applying a clean dressing to a patient's lower leg at home",
    text: "Specialized wound management for complex and chronic wounds.",
  },
  {
    title: "Infusion & Pain Management",
    category: "Specialty",
    src: "/images/home/infusion.webp",
    alt: "A nurse adjusting an infusion line beside an armchair in a sunlit living room",
    text: "IV therapy and pain management delivered safely at home.",
  },
];

/* Clinical programs — taken verbatim from the company's clinical deck. */
const CLINICAL_PROGRAMS = [
  "Total Joint Replacement",
  "Hospital to Home",
  "SNF to Home",
  "Congestive Heart Failure",
  "Post Acute Care Home Health",
  "Steady Steps Fall Prevention",
  "Bariatric Care",
  "Wound Care",
  "Diabetes",
  "Cardiac",
  "Chronic Edema",
  "Orthopedic Rehab",
];

const TESTIMONIALS = [
  {
    author: "Jeanne B.",
    text: "My physical therapist was so helpful and kind, she always worked with the energy level I had. Her compassion was beyond excellent and her knowledge was measurable to her many years of experience.",
  },
  {
    author: "Linda W.",
    text: "I recommend my therapist, she is outstanding, who did an excellent job treating me after my surgery. When I saw back my surgeon, he was impressed by the progress I have made, thanks to her guidance and direction.",
  },
  {
    author: "Margaret P.",
    text: "Everyone that came to my home were very respectful, kind, and caring. I would highly recommend Virginia HealthCare Services.",
  },
];

const INSURANCE_GROUPS = [
  {
    group: "Medicare",
    plans: [
      "Medicare Traditional",
      "Aetna Medicare / My Nexus Aetna",
      "Anthem Medicare / My Nexus Anthem",
      "UHC Medicare",
      "Humana Medicare",
      "Cigna Medicare",
      "Virginia Premier Elite Medicare",
      "Aetna Better Health Medicare",
      "BC Medicare",
    ],
  },
  {
    group: "Medicaid",
    plans: [
      "Optima Health Medicaid",
      "UHC Medicaid",
      "VA Elite Premier Medicaid",
      "Aetna Better Health Medicaid",
      "Anthem HealthKeepers",
    ],
  },
  {
    group: "Commercial",
    plans: [
      "Aetna",
      "Blue Cross Blue Shield",
      "BC Federal",
      "United Healthcare",
      "Cigna",
    ],
  },
  {
    group: "Military",
    plans: ["Tricare", "Humana Military"],
  },
];

const OPEN_HOURS = [
  ["Monday", "9:00 - 17:00"],
  ["Tuesday", "9:00 - 17:00"],
  ["Wednesday", "9:00 - 17:00"],
  ["Thursday", "9:00 - 17:00"],
  ["Friday", "9:00 - 17:00"],
  ["On-call nursing", "24 / 7"],
];

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleServices =
    activeFilter === "All"
      ? SERVICE_GRID
      : SERVICE_GRID.filter((item) => item.category === activeFilter);

  return (
    <div
      className="bg-white"
      style={{ fontFamily: "var(--font-nunito), system-ui, sans-serif" }}
    >
      {/* ---------------------------------------------------------------- */}
      {/*  Header                                                          */}
      {/* ---------------------------------------------------------------- */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-[0_2px_12px_rgba(16,49,120,0.06)]">
        <div className="mx-auto max-w-[1200px] px-6 h-[84px] flex items-center justify-between gap-6">
          <a href="/" className="flex items-center shrink-0">
            <Image
              src="/images/logo.svg"
              alt="Virginia HealthCare Services"
              width={791}
              height={153}
              priority
              className="h-9 md:h-11 w-auto"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-bold transition-opacity hover:opacity-70"
                style={{ color: NAVY }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={PHONE_HREF}
            className="hidden md:inline-block rounded-full px-5 py-2.5 text-sm font-extrabold text-white shrink-0"
            style={{ background: BLUE }}
          >
            {PHONE_DISPLAY}
          </a>

          <button
            aria-label="Open menu"
            className="lg:hidden transition-opacity hover:opacity-70"
            style={{ color: NAVY }}
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* ---------------------------------------------------------------- */}
      {/*  1. Hero                                                          */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-[#f2f5f8]">
        <Cross className="left-[28%] top-[22%]" size={34} color={BLUE} opacity={0.12} />
        <Cross className="left-[4%] bottom-[12%]" size={26} color={BLUE} opacity={0.15} />

        <div className="mx-auto max-w-[1200px] px-6 grid lg:grid-cols-2 items-center gap-8 min-h-[560px]">
          <div className="py-16 lg:py-24 relative z-10">
            <h1
              className="text-4xl md:text-5xl lg:text-[54px] font-extrabold leading-[1.12]"
              style={{ color: NAVY }}
            >
              Live Big. <span style={{ color: TEAL }}>Live Bold.</span>
              <br />
              Care That Comes Home.
            </h1>

            <p
              className="mt-6 max-w-[470px] text-[15px] leading-[1.9]"
              style={{ color: "#5b6b8c" }}
            >
              In-home nursing and rehabilitation across Northern Virginia since
              2005. Accredited by The Joint Commission and certified by Medicare
              and Medicaid.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-block rounded-md px-7 py-3.5 text-sm font-extrabold text-white shadow-lg transition-transform hover:-translate-y-0.5"
                style={{ background: BLUE }}
              >
                Schedule an In-Home Assessment
              </a>
              <a
                href={PHONE_HREF}
                className="inline-block rounded-md border-2 px-7 py-3 text-sm font-extrabold transition-colors"
                style={{ borderColor: BLUE, color: BLUE }}
              >
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <div className="relative h-[320px] lg:h-[560px]">
            <Image
              src="/images/home/hero.webp"
              alt="A home health nurse sitting with an elderly woman in her living room"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  2. Positioning band                                              */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative pt-20 pb-40" style={{ background: TEAL_GRADIENT }}>
        <div className="mx-auto max-w-[1200px] px-6">
          <Eyebrow color="#ffffff">Why Families Choose Us</Eyebrow>

          <h2 className="text-3xl md:text-[42px] font-extrabold text-white leading-[1.25] max-w-[780px]">
            Skilled Care at Home, Started Within 24 Hours of Referral
          </h2>

          <p className="mt-8 max-w-[780px] text-[15px] leading-[2] text-white/95">
            Recovery happens faster in familiar surroundings. Our nurses,
            therapists, and aides bring hospital-level skill into your home and
            coordinate directly with your physician.{" "}
            <strong className="font-extrabold">
              Care begins within 24 hours of your referral.
            </strong>
          </p>

          <p
            className="mt-8 text-right text-3xl md:text-4xl text-white/95"
            style={{ fontFamily: "var(--font-signature), cursive" }}
          >
            Serving Northern Virginia since 2005
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  3. Three lines of care                                           */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-[#f8f9fb] pb-24">
        <div className="mx-auto max-w-[1200px] px-6 -mt-32">
          <div className="grid md:grid-cols-2 gap-8 max-w-[840px] mx-auto">
            {CARE_LINES.slice(0, 2).map((card) => (
              <CareLineCard key={card.title} {...card} />
            ))}
          </div>

          <div className="mt-10 max-w-[400px] mx-auto">
            <CareLineCard {...CARE_LINES[2]} />
          </div>
        </div>

        {/* 4. Counters */}
        <div className="mx-auto max-w-[1100px] px-6 pt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {COUNTERS.map(({ target, label, Icon }) => (
              <div key={label} className="flex flex-col items-center">
                <Icon color={ORANGE} />
                <div className="mt-4">
                  <Counter target={target} label={label} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  5. About                                                         */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <Eyebrow>About Us</Eyebrow>

          <h2
            className="text-3xl md:text-[40px] font-extrabold leading-[1.25] max-w-[560px]"
            style={{ color: NAVY }}
          >
            Reliable, Competent, and Timely Home Health Care
          </h2>

          <div
            className="mt-8 space-y-6 max-w-[780px] text-[15px] leading-[2]"
            style={{ color: MUTED }}
          >
            <p>
              Virginia HealthCare Services has provided in-home nursing and
              rehabilitation across Northern Virginia since 2005. From our office
              in Annandale, a team of more than one hundred clinicians and support
              staff cares for patients throughout the region.
            </p>
            <p>
              We are accredited by The Joint Commission and certified by the
              Centers for Medicare and Medicaid Services. Every patient receives a
              personalized care plan built on a comprehensive assessment and
              updated as recovery progresses, with our clinical team coordinating
              closely with your physician.
            </p>
          </div>

          <a
            href="/about"
            className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold transition-colors hover:opacity-80"
            style={{ color: TEAL }}
          >
            Read More
            <ArrowRight />
          </a>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  6. What we offer                                                 */}
      {/* ---------------------------------------------------------------- */}
      <section
        className="relative overflow-hidden pt-20 pb-24"
        style={{ background: TEAL_GRADIENT }}
      >
        <Cross className="left-[8%] bottom-[18%]" size={70} opacity={0.14} />
        <Cross className="right-[6%] top-[14%]" size={44} opacity={0.14} />

        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <Eyebrow color="#ffffff" center bothSides>
            What We Provide
          </Eyebrow>

          <h2 className="text-3xl md:text-[42px] font-extrabold text-white">
            Care Built Around Your Recovery
          </h2>

          <p className="mt-6 mx-auto max-w-[660px] text-[15px] leading-[1.9] text-white/90">
            Our clinicians work under your physician&apos;s direction to help you
            or your loved one reach their maximum potential at home.
          </p>

          <div className="mt-14 grid md:grid-cols-2 gap-8 max-w-[760px] mx-auto">
            {SERVICE_CARDS.slice(0, 2).map((card) => (
              <ServiceCard key={card.title} {...card} />
            ))}
          </div>

          <div className="mt-8 max-w-[364px] mx-auto">
            <ServiceCard {...SERVICE_CARDS[2]} />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  7. Clinical programs band                                        */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative">
        <Image
          src="/images/home/recovery-wide.webp"
          alt="A therapist walking alongside an older man using a cane in his hallway"
          width={2000}
          height={840}
          sizes="100vw"
          className="w-full h-[280px] md:h-[420px] object-cover"
        />
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <Eyebrow center bothSides>
            Clinical Programs
          </Eyebrow>
          <h2
            className="text-3xl md:text-[40px] font-extrabold"
            style={{ color: NAVY }}
          >
            Programs for Complex Recovery
          </h2>
          <p
            className="mt-5 mx-auto max-w-[680px] text-[15px] leading-[1.9]"
            style={{ color: MUTED }}
          >
            Structured pathways for patients transitioning home from a hospital or
            skilled nursing facility. Program details and pathways are available
            on request.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {CLINICAL_PROGRAMS.map((program) => (
              <span
                key={program}
                className="rounded-full border px-5 py-2 text-sm font-bold"
                style={{ borderColor: "#dbe6f5", color: NAVY }}
              >
                {program}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  8. Services grid with filters                                    */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-[#f8f9fb] py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Our Services</Eyebrow>
              <h2
                className="text-3xl md:text-[40px] font-extrabold"
                style={{ color: NAVY }}
              >
                Everything We Bring Home
              </h2>
            </div>

            <a
              href="/services"
              className="rounded-md px-7 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
              style={{ background: BLUE }}
            >
              View All Services
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {SERVICE_FILTERS.map((filter) => {
              const active = filter === activeFilter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className="rounded px-4 py-1.5 text-sm font-bold transition-colors"
                  style={{
                    background: active ? TEAL : "transparent",
                    color: active ? "#ffffff" : TEAL,
                  }}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {visibleServices.map((item) => (
              <article
                key={item.title}
                className="group rounded-xl overflow-hidden bg-white shadow-[0_10px_30px_rgba(16,49,120,0.08)]"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={800}
                  height={480}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                  className="h-[190px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-6">
                  <h3 className="text-lg font-extrabold" style={{ color: NAVY }}>
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.8]" style={{ color: MUTED }}>
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  9. Call band                                                     */}
      {/* ---------------------------------------------------------------- */}
      <section
        className="relative overflow-hidden py-16 text-center"
        style={{ background: TEAL_GRADIENT }}
      >
        <div className="relative mx-auto max-w-[1200px] px-6">
          <p className="text-lg md:text-2xl font-bold text-white">
            Ready to start care? Speak with our team today.
          </p>
          <a
            href={PHONE_HREF}
            className="mt-4 block text-3xl md:text-[42px] font-extrabold text-white hover:opacity-90 transition-opacity"
          >
            {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  10. Testimonials                                                 */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="text-center">
            <Eyebrow center bothSides>
              Testimonials
            </Eyebrow>
            <h2
              className="text-3xl md:text-[42px] font-extrabold"
              style={{ color: NAVY }}
            >
              What Our Patients Say
            </h2>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((item) => (
              <figure
                key={item.author}
                className="rounded-xl bg-[#f8f9fb] p-8 shadow-[0_10px_30px_rgba(16,49,120,0.06)]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-8 h-8 mb-4"
                  fill={TEAL}
                  opacity="0.35"
                >
                  <path d="M10 6v6a6 6 0 0 1-6 6V15a3 3 0 0 0 3-3H4V6h6Zm10 0v6a6 6 0 0 1-6 6V15a3 3 0 0 0 3-3h-3V6h6Z" />
                </svg>

                <blockquote
                  className="text-[15px] leading-[1.9]"
                  style={{ color: MUTED }}
                >
                  {item.text}
                </blockquote>

                <figcaption
                  className="mt-6 text-sm font-extrabold"
                  style={{ color: NAVY }}
                >
                  {item.author}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  11. Insurance                                                    */}
      {/* ---------------------------------------------------------------- */}
      <section id="insurance" className="bg-[#f8f9fb] py-24 scroll-mt-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="text-center">
            <Eyebrow center bothSides>
              Insurance
            </Eyebrow>
            <h2
              className="text-3xl md:text-[42px] font-extrabold"
              style={{ color: NAVY }}
            >
              Health Plans We Accept
            </h2>
            <p
              className="mt-5 mx-auto max-w-[640px] text-[15px] leading-[1.9]"
              style={{ color: MUTED }}
            >
              Coverage varies by plan and by the services ordered. Call us and we
              will verify your benefits before care begins.
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INSURANCE_GROUPS.map(({ group, plans }) => (
              <div
                key={group}
                className="rounded-xl bg-white p-7 shadow-[0_10px_30px_rgba(16,49,120,0.06)]"
              >
                <h3
                  className="text-lg font-extrabold pb-3 mb-4 border-b"
                  style={{ color: NAVY, borderColor: "#e8eef7" }}
                >
                  {group}
                </h3>
                <ul className="space-y-2.5">
                  {plans.map((plan) => (
                    <li
                      key={plan}
                      className="flex gap-2 text-[14px] leading-[1.6]"
                      style={{ color: MUTED }}
                    >
                      <span style={{ color: TEAL }}>&bull;</span>
                      {plan}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  12. Footer                                                       */}
      {/* ---------------------------------------------------------------- */}
      <footer className="bg-white pt-20">
        <div className="mx-auto max-w-[1200px] px-6 grid md:grid-cols-2 gap-14">
          <div>
            <h3 className="text-lg font-extrabold" style={{ color: NAVY }}>
              Our Contacts
            </h3>

            <ul className="mt-6 space-y-5 text-[14px]" style={{ color: MUTED }}>
              <ContactRow icon="pin">
                7010 Little River Turnpike, Suite 400
                <br />
                Annandale, VA 22003
              </ContactRow>
              <ContactRow icon="phone">
                Call Us
                <br />
                <a href={PHONE_HREF} className="hover:underline">
                  {PHONE_DISPLAY}
                </a>
              </ContactRow>
              <ContactRow icon="clock">
                Serving Northern Virginia
                <br />
                and the DC Metro Area
              </ContactRow>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-extrabold" style={{ color: NAVY }}>
              Office Hours
            </h3>

            <ul className="mt-6 space-y-3">
              {OPEN_HOURS.map(([day, hours]) => (
                <li key={day} className="flex items-center gap-3 text-[14px]">
                  <span style={{ color: MUTED }}>{day}</span>
                  <span className="flex-1 border-b border-dotted border-gray-300" />
                  <span style={{ color: BLUE }}>{hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-100">
          <div
            className="mx-auto max-w-[1200px] px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[13px]"
            style={{ color: MUTED }}
          >
            <p>
              <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
              {" | "}
              <a href="/terms-of-service" className="hover:underline">Terms of Service</a>
              {" | "}
              <a href="/disclaimer" className="hover:underline">Disclaimer</a>
            </p>
            <p>
              Copyright © {new Date().getFullYear()} Virginia HealthCare
              Services. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Sub-components                                                            */
/* -------------------------------------------------------------------------- */

function CareLineCard({
  title,
  src,
  alt,
  href,
}: {
  title: string;
  src: string;
  alt: string;
  href: string;
}) {
  return (
    <a href={href} className="relative block pb-12 group">
      <div className="rounded-xl overflow-hidden shadow-[0_16px_40px_rgba(16,49,120,0.12)]">
        <Image
          src={src}
          alt={alt}
          width={800}
          height={560}
          sizes="(max-width: 768px) 100vw, 400px"
          className="h-[220px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[78%] rounded-lg bg-white px-6 py-5 text-center shadow-[0_14px_34px_rgba(16,49,120,0.14)]">
        <span className="text-lg font-extrabold" style={{ color: NAVY }}>
          {title}
        </span>
      </div>
    </a>
  );
}

function ServiceCard({
  title,
  body,
  Icon,
}: {
  title: string;
  body: string;
  Icon: ({ color }: { color: string }) => React.JSX.Element;
}) {
  return (
    <div className="rounded-xl bg-white px-8 py-10 text-center shadow-[0_18px_44px_rgba(16,49,120,0.14)]">
      <div className="flex justify-center">
        <Icon color={BLUE} />
      </div>
      <h3 className="mt-6 text-xl font-extrabold" style={{ color: NAVY }}>
        {title}
      </h3>
      <p className="mt-4 text-[14px] leading-[1.9]" style={{ color: MUTED }}>
        {body}
      </p>
    </div>
  );
}

function ContactRow({
  icon,
  children,
}: {
  icon: "pin" | "phone" | "clock";
  children: React.ReactNode;
}) {
  const paths: Record<string, React.JSX.Element> = {
    pin: (
      <>
        <path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    phone: (
      <path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z" />
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 7v5l3 2" />
      </>
    ),
  };

  return (
    <li className="flex gap-4">
      <span
        className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
        style={{ background: "rgba(255,158,33,0.14)" }}
      >
        <svg
          viewBox="0 0 24 24"
          className="w-4 h-4"
          fill="none"
          stroke={ORANGE}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {paths[icon]}
        </svg>
      </span>
      <span className="leading-[1.7]">{children}</span>
    </li>
  );
}

/* Unused icon kept for future service cards. */
export { HomeHeartIcon, HandsIcon };
