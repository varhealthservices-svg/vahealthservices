"use client";

import Image from "next/image";

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

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Insurance", href: "/#insurance" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

/* -------------------------------------------------------------------------- */
/*  Shared bits                                                               */
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
/*  Specialization icons                                                      */
/* -------------------------------------------------------------------------- */

const iconProps = {
  fill: "none",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Ico({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 32 32" className="w-9 h-9" stroke={BLUE} {...iconProps}>
      {children}
    </svg>
  );
}

const SPECIALIZATIONS = [
  {
    title: "Skilled Nursing",
    icon: (
      <Ico>
        <path d="M9 4v7a6 6 0 0 0 12 0V4M7 4h4M19 4h4" />
        <path d="M15 17v3a6 6 0 0 0 12 0v-2" />
        <circle cx="27" cy="14" r="3" />
      </Ico>
    ),
  },
  {
    title: "Physical Therapy",
    icon: (
      <Ico>
        <circle cx="16" cy="6" r="3" />
        <path d="M16 9v9M16 18l-5 9M16 18l5 9M8 13l8-2 8 2" />
      </Ico>
    ),
  },
  {
    title: "Occupational Therapy",
    icon: (
      <Ico>
        <path d="M6 18V9a2 2 0 0 1 4 0v6" />
        <path d="M10 15V7a2 2 0 0 1 4 0v8" />
        <path d="M14 15V8a2 2 0 0 1 4 0v9" />
        <path d="M18 17v-4a2 2 0 0 1 4 0v8a7 7 0 0 1-7 7h-2a7 7 0 0 1-7-7v-3" />
      </Ico>
    ),
  },
  {
    title: "Speech Therapy",
    icon: (
      <Ico>
        <path d="M5 8a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H14l-6 5v-5a3 3 0 0 1-3-3V8Z" />
        <path d="M12 13h8" />
      </Ico>
    ),
  },
  {
    title: "Home Health Aide",
    icon: (
      <Ico>
        <path d="M4 14 16 4l12 10" />
        <path d="M7 13v14h18V13" />
        <path d="M16 24s-4-2.5-4-5a2.4 2.4 0 0 1 4-1.5A2.4 2.4 0 0 1 20 19c0 2.5-4 5-4 5Z" />
      </Ico>
    ),
  },
  {
    title: "Medical Social Work",
    icon: (
      <Ico>
        <circle cx="12" cy="11" r="4" />
        <circle cx="23" cy="13" r="3" />
        <path d="M4 26c0-4.4 3.6-7 8-7s8 2.6 8 7" />
        <path d="M22 19c3.4 0 6 2 6 5" />
      </Ico>
    ),
  },
  {
    title: "Physician House Calls",
    icon: (
      <Ico>
        <rect x="4" y="10" width="24" height="16" rx="3" />
        <path d="M12 10V7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3" />
        <path d="M16 15v6M13 18h6" />
      </Ico>
    ),
  },
  {
    title: "Specialty Programs",
    icon: (
      <Ico>
        <path d="M16 3l11 4v9c0 7-5 11-11 13-6-2-11-6-11-13V7l11-4Z" />
        <path d="M11 16l3.5 3.5L22 12" />
      </Ico>
    ),
  },
];

/* -------------------------------------------------------------------------- */
/*  Content                                                                   */
/* -------------------------------------------------------------------------- */

const SPECIALTY_SERVICES = [
  "Certified Wound Therapy",
  "Infusion Therapy",
  "Pain Management",
  "Tracheostomy Care",
  "Ostomy / Colostomy Care",
  "Parkinson's & Multiple Sclerosis",
  "Lymphedema Certified Treatment",
  "24 Hour Start of Care",
];

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

const CLINICAL_PATHWAYS = [
  "COPD",
  "AMI",
  "CHF",
  "Diabetes",
  "Pneumonia",
  "Bariatric",
];

const CARE_LINES = [
  {
    id: "home-health",
    title: "Home Health",
    src: "/images/home/home-health.webp",
    alt: "A home health nurse checking an older man's blood pressure in his living room",
    body: "Skilled nursing, physical, occupational, and speech therapy, home health aide services, and medical social work — all delivered in your own home under your physician's direction. We specialize in wound care, IV care, post-surgical care, joint replacements, diabetic management, and COPD and CHF management.",
  },
  {
    id: "palliative",
    title: "Palliative Care",
    src: "/images/home/palliative.webp",
    alt: "A caregiver holding an elderly patient's hand over a soft blanket",
    body: "Relief from the symptoms and stress of a serious illness, provided alongside curative treatment. Our team focuses on comfort, symptom management, and support for both the patient and the family at any stage of illness.",
  },
  {
    id: "hospice",
    title: "Hospice",
    src: "/images/home/hospice.webp",
    alt: "A quiet sunlit bedroom with an armchair and fresh flowers beside the bed",
    body: "Compassionate care in the final stages of life, with nurses, aides, social workers, and chaplains supporting the patient and their loved ones at home. Care is centred on dignity, comfort, and family support.",
  },
];

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function ServicesPage() {
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.svg"
              alt="Virginia HealthCare Services"
              width={791}
              height={153}
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
      {/*  1. Page banner                                                   */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative h-[300px] md:h-[340px]">
        <Image
          src="/images/home/recovery-wide.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/70" />

        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <h1
            className="text-4xl md:text-[46px] font-extrabold"
            style={{ color: NAVY }}
          >
            Services
          </h1>
          <nav className="mt-3 flex items-center gap-2 text-sm font-bold" style={{ color: MUTED }}>
            <a href="/" className="hover:opacity-70" style={{ color: BLUE }}>
              Home
            </a>
            <span>&rsaquo;</span>
            <span>Services</span>
          </nav>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  2. Specializations                                               */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <Eyebrow center bothSides>
            Our Specialization
          </Eyebrow>

          <h2
            className="text-3xl md:text-[42px] font-extrabold"
            style={{ color: NAVY }}
          >
            Everything We Bring Home
          </h2>

          <p
            className="mt-6 mx-auto max-w-[680px] text-[15px] leading-[1.9]"
            style={{ color: MUTED }}
          >
            A full home health team working under your physician&apos;s
            direction, serving Northern Virginia and the DC metro area.
          </p>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-14">
            {SPECIALIZATIONS.map((item) => (
              <div key={item.title} className="flex flex-col items-center">
                <span
                  className="flex h-[86px] w-[86px] items-center justify-center rounded-full border"
                  style={{ borderColor: "#dbe9f8" }}
                >
                  {item.icon}
                </span>
                <h3
                  className="mt-5 text-base font-extrabold"
                  style={{ color: NAVY }}
                >
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  3. Lines of care                                                 */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-[#f8f9fb] py-24">
        <div className="mx-auto max-w-[1200px] px-6 space-y-20">
          {CARE_LINES.map((line, index) => (
            <div
              key={line.id}
              id={line.id}
              className="grid lg:grid-cols-2 gap-12 items-center scroll-mt-28"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="rounded-xl overflow-hidden shadow-[0_16px_40px_rgba(16,49,120,0.12)]">
                  <Image
                    src={line.src}
                    alt={line.alt}
                    width={800}
                    height={560}
                    sizes="(max-width: 1024px) 100vw, 560px"
                    className="w-full h-[300px] object-cover"
                  />
                </div>
              </div>

              <div>
                <h2
                  className="text-3xl md:text-[36px] font-extrabold"
                  style={{ color: NAVY }}
                >
                  {line.title}
                </h2>
                <p
                  className="mt-6 text-[15px] leading-[2]"
                  style={{ color: MUTED }}
                >
                  {line.body}
                </p>
                <a
                  href="/contact"
                  className="mt-7 inline-block rounded-md px-7 py-3 text-sm font-extrabold text-white transition-transform hover:-translate-y-0.5"
                  style={{ background: BLUE }}
                >
                  Request a Referral
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  4. Specialty services                                            */}
      {/* ---------------------------------------------------------------- */}
      <section
        className="relative overflow-hidden py-24"
        style={{ background: TEAL_GRADIENT }}
      >
        <Cross className="left-[6%] bottom-[16%]" size={70} opacity={0.14} />
        <Cross className="right-[7%] top-[12%]" size={44} opacity={0.14} />

        <div className="relative mx-auto max-w-[1200px] px-6 text-center">
          <Eyebrow color="#ffffff" center bothSides>
            Specialty Services
          </Eyebrow>

          <h2 className="text-3xl md:text-[42px] font-extrabold text-white">
            Advanced Care at Home
          </h2>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SPECIALTY_SERVICES.map((service) => (
              <div
                key={service}
                className="rounded-lg bg-white/15 backdrop-blur-sm px-5 py-4 text-sm font-bold text-white"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  5. Clinical programs                                             */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <Eyebrow center bothSides>
            Clinical Programs
          </Eyebrow>

          <h2
            className="text-3xl md:text-[42px] font-extrabold"
            style={{ color: NAVY }}
          >
            Programs for Complex Recovery
          </h2>

          <p
            className="mt-6 mx-auto max-w-[680px] text-[15px] leading-[1.9]"
            style={{ color: MUTED }}
          >
            Structured pathways for patients transitioning home from a hospital
            or skilled nursing facility. Program details and pathways are
            available on request.
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

          <div className="mt-14 mx-auto max-w-[760px] rounded-xl bg-[#f8f9fb] px-8 py-8">
            <h3 className="text-lg font-extrabold" style={{ color: NAVY }}>
              Clinical Pathways
            </h3>
            <p className="mt-2 text-[14px]" style={{ color: MUTED }}>
              Available upon request, along with orthopedic protocols for knee,
              hip, and shoulder.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-2.5">
              {CLINICAL_PATHWAYS.map((pathway) => (
                <span
                  key={pathway}
                  className="rounded px-4 py-1.5 text-sm font-bold text-white"
                  style={{ background: TEAL }}
                >
                  {pathway}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  6. Call band                                                     */}
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
      {/*  7. Footer                                                        */}
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
              {[
                ["Monday", "9:00 - 17:00"],
                ["Tuesday", "9:00 - 17:00"],
                ["Wednesday", "9:00 - 17:00"],
                ["Thursday", "9:00 - 17:00"],
                ["Friday", "9:00 - 17:00"],
                ["On-call nursing", "24 / 7"],
              ].map(([day, hours]) => (
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
/*  Footer contact row                                                        */
/* -------------------------------------------------------------------------- */

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
