"use client";

import { useEffect, useRef, useState } from "react";

/* -------------------------------------------------------------------------- */
/*  Theme tokens (taken from Medify core/includes/default-options.php)         */
/* -------------------------------------------------------------------------- */

const NAVY = "#0a3380";
const ORANGE = "#ff9e21";
const BLUE = "#2ea6f7";
const TEAL = "#4ec8d8";
const MUTED = "#93919d";
const DARK = "#313131";

const TEAL_GRADIENT = `linear-gradient(105deg, ${TEAL} 0%, ${BLUE} 100%)`;

/* -------------------------------------------------------------------------- */
/*  Placeholder image block — swap for <Image /> once real assets are added    */
/* -------------------------------------------------------------------------- */

function Placeholder({
  label,
  className = "",
  tone = "cool",
}: {
  label: string;
  className?: string;
  tone?: "cool" | "warm" | "grey";
}) {
  const tones: Record<string, string> = {
    cool: "linear-gradient(135deg,#dbeafe 0%,#bfdbfe 55%,#a5d8ef 100%)",
    warm: "linear-gradient(135deg,#fef3e2 0%,#fde4c4 100%)",
    grey: "linear-gradient(135deg,#eef1f5 0%,#dde3ea 100%)",
  };

  return (
    <div
      className={`relative overflow-hidden flex items-center justify-center ${className}`}
      style={{ background: tones[tone] }}
      role="img"
      aria-label={`${label} (placeholder)`}
    >
      <svg
        viewBox="0 0 24 24"
        className="w-10 h-10 opacity-30"
        fill="none"
        stroke={NAVY}
        strokeWidth="1.5"
      >
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="8.5" cy="9.5" r="1.5" />
        <path d="M21 16l-5-5-5 5-3-3-5 5" />
      </svg>
      <span
        className="absolute bottom-2 right-3 text-[10px] tracking-wide uppercase opacity-40"
        style={{ color: NAVY }}
      >
        {label}
      </span>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Small section eyebrow: "— BENEFITS —"                                     */
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
      className={`flex items-center gap-2 mb-4 ${
        center ? "justify-center" : ""
      }`}
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
          // easeOutCubic
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
      <div
        className="text-4xl md:text-5xl font-extrabold"
        style={{ color: ORANGE }}
      >
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
/*  Icons (inline, so no icon dependency is required)                         */
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

function CaduceusIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 32 32" className="w-10 h-10" stroke={color} {...iconProps}>
      <path d="M16 4v24" />
      <path d="M8 9c0-3 3-5 8-5s8 2 8 5" />
      <path d="M10 14c2 2 10 2 12 0" />
      <path d="M11 20c2 2 8 2 10 0" />
      <path d="M16 28c-3 0-5-2-5-4h10c0 2-2 4-5 4Z" />
    </svg>
  );
}

function ResearchIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 32 32" className="w-10 h-10" stroke={color} {...iconProps}>
      <rect x="7" y="4" width="18" height="24" rx="2" />
      <path d="M11 11h10M11 16h10M11 21h6" />
      <circle cx="22" cy="22" r="4" />
      <path d="M22 20v4M20 22h4" />
    </svg>
  );
}

function AwardIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 32 32" className="w-10 h-10" stroke={color} {...iconProps}>
      <path d="M10 5h12v5a6 6 0 0 1-12 0V5Z" />
      <path d="M10 7H7v2a4 4 0 0 0 3 3.9M22 7h3v2a4 4 0 0 1-3 3.9" />
      <path d="M16 16v6M12 27h8l-1-5h-6l-1 5Z" />
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

function TeddyIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 32 32" className="w-12 h-12" stroke={color} {...iconProps}>
      <circle cx="16" cy="17" r="8" />
      <circle cx="8" cy="8" r="4" />
      <circle cx="24" cy="8" r="4" />
      <circle cx="13" cy="16" r="1" />
      <circle cx="19" cy="16" r="1" />
      <path d="M13 21c1.5 1.5 4.5 1.5 6 0" />
    </svg>
  );
}

function MicroscopeIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 32 32" className="w-12 h-12" stroke={color} {...iconProps}>
      <path d="M13 5h5l2 8h-9l2-8Z" />
      <path d="M15 13v6" />
      <path d="M9 25a9 9 0 0 1 14-7" />
      <path d="M6 27h20" />
      <path d="M11 19h8" />
    </svg>
  );
}

function ClockIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 32 32" className="w-12 h-12" stroke={color} {...iconProps}>
      <circle cx="16" cy="16" r="12" />
      <path d="M16 9v7l5 3" />
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

/* -------------------------------------------------------------------------- */
/*  Decorative background cross (the theme sprinkles these behind sections)    */
/* -------------------------------------------------------------------------- */

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
      <path
        d="M12 2h8v10h10v8H20v10h-8V20H2v-8h10V2Z"
        fill={color}
      />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*  Data                                                                      */
/* -------------------------------------------------------------------------- */

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Pages", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Portfolio", href: "#" },
  { label: "Shop", href: "#" },
  { label: "Contacts", href: "#" },
];

const FEATURE_CARDS = [
  { title: "Premium Care", label: "Premium care" },
  { title: "Quality Therapy", label: "Quality therapy" },
  { title: "Laboratory Tests", label: "Laboratory tests" },
];

const COUNTERS = [
  { target: 1200, label: "Satisfied Patients", Icon: HeartPulseIcon },
  { target: 32, label: "Health Sections", Icon: CaduceusIcon },
  { target: 78, label: "Kinds of Research", Icon: ResearchIcon },
  { target: 15, label: "Awards Winning", Icon: AwardIcon },
];

const SERVICE_CARDS = [
  { title: "Family Care", Icon: StethoscopeIcon },
  { title: "Pediatrics Care", Icon: TeddyIcon },
  { title: "Advanced Care", Icon: MicroscopeIcon },
];

const SERVICE_BODY =
  "Family medicine is one of the most demanded fields in the provision of medical care in Europe.";

const GALLERY_FILTERS = [
  "All",
  "Clinic",
  "Family",
  "Laboratory",
  "Pediatrics",
  "Therapy",
];

const GALLERY_ITEMS = [
  { label: "Clinic reception", category: "Clinic" },
  { label: "Doctors reviewing scan", category: "Laboratory" },
  { label: "Blood pressure check", category: "Therapy" },
  { label: "MRI scanner", category: "Laboratory" },
  { label: "Surgeon at work", category: "Clinic" },
  { label: "Pediatric check-up", category: "Pediatrics" },
];

const POSTS = [
  {
    tag: "TIPS",
    date: "August 5, 2019",
    title: "How to Choose the Specialist in Massage",
    label: "Doctor with family",
  },
  {
    tag: "BEAUTY",
    date: "August 5, 2019",
    title: "Hospital Nursing Care: Some Observations",
    label: "Nurses at a screen",
  },
  {
    tag: "TIPS",
    date: "August 5, 2019",
    title: "Boostrix for Vacination of Adults Against Diphteria",
    label: "Child receiving care",
  },
];

const OPEN_HOURS = [
  ["Monday", "8.00 - 21.00"],
  ["Tuesday", "8.00 - 21.00"],
  ["Wednesday", "8.00 - 21.00"],
  ["Thursday", "8.00 - 21.00"],
  ["Friday", "8.00 - 21.00"],
  ["Saturday/Sunday", "8.00 - 18.00"],
];

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function FamilyDoctorPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleGallery =
    activeFilter === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <div
      className="bg-white"
      style={{ fontFamily: "var(--font-nunito), system-ui, sans-serif" }}
    >
      {/* ---------------------------------------------------------------- */}
      {/*  Header                                                          */}
      {/* ---------------------------------------------------------------- */}
      <header
        className="sticky top-0 z-50"
        style={{ background: DARK }}
      >
        <div className="mx-auto max-w-[1200px] px-6 h-[76px] flex items-center justify-between">
          <button
            aria-label="Open menu"
            className="text-white/90 hover:text-white transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>

          <a href="#" className="flex items-center gap-3">
            <svg viewBox="0 0 40 40" className="w-9 h-9">
              <defs>
                <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor={TEAL} />
                  <stop offset="100%" stopColor={BLUE} />
                </linearGradient>
              </defs>
              <path
                d="M15 3h10v12h12v10H25v12H15V25H3V15h12V3Z"
                fill="url(#logoGrad)"
              />
              <path
                d="M8 20h6l2-4 3 8 2-4h9"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="leading-none">
              <span className="block text-2xl font-extrabold text-white">
                Medify
              </span>
              <span className="block text-[11px] tracking-wide text-white/60">
                Clinic of Future
              </span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-bold text-white/85 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            aria-label="Search"
            className="text-white/90 hover:text-white transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round">
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3.5-3.5" />
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
              className="text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.12]"
              style={{ color: NAVY }}
            >
              Hi! I`m <span style={{ color: TEAL }}>Dr.Paul May,</span>
              <br />
              Family Therapist
            </h1>

            <p
              className="mt-6 max-w-[430px] text-[15px] leading-[1.9]"
              style={{ color: "#5b6b8c" }}
            >
              Since the first days of operation of Medify, our team has been
              focused on building a high-quality medical service.
            </p>

            <a
              href="#"
              className="inline-block mt-8 rounded-md px-7 py-3.5 text-sm font-extrabold text-white shadow-lg transition-transform hover:-translate-y-0.5"
              style={{ background: BLUE }}
            >
              Book an Appoinment
            </a>
          </div>

          <div className="relative h-[320px] lg:h-[560px]">
            <Placeholder
              label="Dr. Paul May portrait"
              className="absolute inset-0"
              tone="grey"
            />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  2. Benefits (teal band)                                          */}
      {/* ---------------------------------------------------------------- */}
      <section
        className="relative pt-20 pb-40"
        style={{ background: TEAL_GRADIENT }}
      >
        <div className="mx-auto max-w-[1200px] px-6">
          <Eyebrow color="#ffffff">Benefits</Eyebrow>

          <h2 className="text-3xl md:text-[42px] font-extrabold text-white leading-[1.25] max-w-[760px]">
            Qualified Therapist Consultation at Any Time at Any Place
          </h2>

          <p className="mt-8 max-w-[760px] text-[15px] leading-[2] text-white/95">
            Family medicine is a principle of medical support where the general
            practitioner is assigned to the family for many years.{" "}
            <strong className="font-extrabold">
              Family medicine is one of the most demanded fields.
            </strong>
          </p>

          <p
            className="mt-8 text-right text-3xl md:text-4xl text-white/95"
            style={{ fontFamily: "var(--font-signature), cursive" }}
          >
            Paul May, therapist
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  3. Three overlapping feature cards                               */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-[#f8f9fb] pb-24">
        <div className="mx-auto max-w-[1200px] px-6 -mt-32">
          <div className="grid md:grid-cols-2 gap-8 max-w-[840px] mx-auto">
            {FEATURE_CARDS.slice(0, 2).map((card) => (
              <FeatureCard key={card.title} {...card} />
            ))}
          </div>

          <div className="mt-10 max-w-[400px] mx-auto">
            <FeatureCard {...FEATURE_CARDS[2]} />
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
      {/*  5. About me                                                      */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <Eyebrow>About me</Eyebrow>

          <h2
            className="text-3xl md:text-[40px] font-extrabold leading-[1.25] max-w-[520px]"
            style={{ color: NAVY }}
          >
            Professional Medical Care in Full Measure
          </h2>

          <div
            className="mt-8 space-y-6 max-w-[760px] text-[15px] leading-[2]"
            style={{ color: MUTED }}
          >
            <p>
              For us, there are no minor aspects, because a quality result always
              depends on trifles. Over the years of our activities, we have
              gained the unique experience of organizing medical services for
              citizens and foreign nationals.
            </p>
            <p>
              Private patients, international organizations and corporate
              businesses feel safe and comfortable in establishing relationships.
            </p>
          </div>

          <a
            href="#"
            className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold transition-colors hover:opacity-80"
            style={{ color: TEAL }}
          >
            Read More
            <ArrowRight />
          </a>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  6. Advanced services (teal band)                                 */}
      {/* ---------------------------------------------------------------- */}
      <section
        className="relative overflow-hidden pt-20 pb-24"
        style={{ background: TEAL_GRADIENT }}
      >
        <Cross className="left-[8%] bottom-[18%]" size={70} opacity={0.14} />
        <Cross className="right-[6%] top-[14%]" size={44} opacity={0.14} />

        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <Eyebrow color="#ffffff" center bothSides>
            Advanced Services
          </Eyebrow>

          <h2 className="text-3xl md:text-[42px] font-extrabold text-white">
            What Can I Offer for You
          </h2>

          <p className="mt-6 mx-auto max-w-[640px] text-[15px] leading-[1.9] text-white/90">
            We have introduced the principle of family medicine, which means that
            the family practitioner will handle the majority of medical requests,
            with a specialists involved only if necessary.
          </p>

          <div className="mt-14 grid md:grid-cols-2 gap-8 max-w-[760px] mx-auto">
            {SERVICE_CARDS.slice(0, 2).map(({ title, Icon }) => (
              <ServiceCard key={title} title={title} Icon={Icon} />
            ))}
          </div>

          <div className="mt-8 max-w-[364px] mx-auto">
            <ServiceCard
              title={SERVICE_CARDS[2].title}
              Icon={SERVICE_CARDS[2].Icon}
            />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  7. Full-width image band                                         */}
      {/* ---------------------------------------------------------------- */}
      <section>
        <Placeholder
          label="Doctor with a child"
          className="w-full h-[280px] md:h-[420px]"
          tone="cool"
        />
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  8. Health tips gallery                                           */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Health Tips</Eyebrow>
              <h2
                className="text-3xl md:text-[40px] font-extrabold"
                style={{ color: NAVY }}
              >
                Safety &amp; Comfortable
              </h2>
            </div>

            <a
              href="#"
              className="rounded-md px-7 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
              style={{ background: BLUE }}
            >
              View More
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {GALLERY_FILTERS.map((filter) => {
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
            {visibleGallery.map((item) => (
              <div
                key={item.label}
                className="group relative rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(16,49,120,0.08)]"
              >
                <Placeholder
                  label={item.label}
                  className="h-[230px] transition-transform duration-500 group-hover:scale-105"
                  tone="cool"
                />
              </div>
            ))}
          </div>

          {visibleGallery.length === 0 && (
            <p className="mt-10 text-center text-sm" style={{ color: MUTED }}>
              Nothing in this category yet.
            </p>
          )}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  9. Emergency call band                                           */}
      {/* ---------------------------------------------------------------- */}
      <section
        className="relative overflow-hidden py-16 text-center"
        style={{ background: TEAL_GRADIENT }}
      >
        <div className="absolute inset-0 flex items-center justify-center opacity-15">
          <CaduceusIcon color="#ffffff" />
        </div>

        <div className="relative mx-auto max-w-[1200px] px-6">
          <p className="text-lg md:text-2xl font-bold text-white">
            Need a Doctor for Check-up? Call for an Emergency Service!
          </p>
          <a
            href="tel:+812345678912"
            className="mt-4 block text-3xl md:text-[42px] font-extrabold text-white hover:opacity-90 transition-opacity"
          >
            +8 (123) 456 789 12
          </a>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  10. Latest news                                                  */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-[#f8f9fb] py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="text-center">
            <Eyebrow center bothSides>
              Our Media
            </Eyebrow>
            <h2
              className="text-3xl md:text-[42px] font-extrabold"
              style={{ color: NAVY }}
            >
              Read Latest News
            </h2>
            <p
              className="mt-5 mx-auto max-w-[640px] text-[15px] leading-[1.9]"
              style={{ color: MUTED }}
            >
              We have introduced the principle of family medicine, which means
              that the family practitioner will handle the majority of medical
              requests, with a specialists involved only if necessary.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {POSTS.map((post) => (
              <article key={post.title}>
                <div className="relative rounded-xl overflow-hidden">
                  <Placeholder label={post.label} className="h-[210px]" tone="cool" />
                  <span
                    className="absolute left-4 top-4 rounded bg-white px-3 py-1 text-[11px] font-extrabold tracking-wide"
                    style={{ color: BLUE }}
                  >
                    {post.tag}
                  </span>
                </div>

                <p
                  className="mt-5 text-[11px] font-bold uppercase tracking-[0.12em]"
                  style={{ color: MUTED }}
                >
                  {post.date}
                </p>

                <h3
                  className="mt-2 text-xl font-extrabold leading-snug"
                  style={{ color: NAVY }}
                >
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    {post.title}
                  </a>
                </h3>

                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold"
                  style={{ color: TEAL }}
                >
                  Read More
                  <ArrowRight />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  11. Footer                                                       */}
      {/* ---------------------------------------------------------------- */}
      <footer className="bg-white pt-20">
        <div className="mx-auto max-w-[1200px] px-6 grid md:grid-cols-2 gap-14">
          <div>
            <h3
              className="text-lg font-extrabold"
              style={{ color: NAVY }}
            >
              Our Contacts
            </h3>

            <ul className="mt-6 space-y-5 text-[14px]" style={{ color: MUTED }}>
              <ContactRow icon="pin">
                27 Division St, New York,
                <br />
                NY 10002, USA
              </ContactRow>
              <ContactRow icon="phone">
                Call Us 24/7
                <br />
                +8 (123) 456 789 12
              </ContactRow>
              <ContactRow icon="clock">
                Mon - Fri: 8.00 - 20.00
                <br />
                St - Sun: 9.00 - 16.00
              </ContactRow>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-extrabold" style={{ color: NAVY }}>
              Open Hours
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
          <div className="mx-auto max-w-[1200px] px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[13px]" style={{ color: MUTED }}>
            <p>
              <a href="#" className="hover:underline">Terms of use</a>
              {" | "}
              <a href="#" className="hover:underline">Privacy Environmental Policy</a>
            </p>
            <p>
              Copyright © 2024 Medify by{" "}
              <a href="#" className="underline" style={{ color: BLUE }}>
                WebGeniusLab
              </a>
              . All Rights Reserved.
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

function FeatureCard({ title, label }: { title: string; label: string }) {
  return (
    <div className="relative pb-12">
      <div className="rounded-xl overflow-hidden shadow-[0_16px_40px_rgba(16,49,120,0.12)]">
        <Placeholder label={label} className="h-[220px]" tone="cool" />
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[78%] rounded-lg bg-white px-6 py-5 text-center shadow-[0_14px_34px_rgba(16,49,120,0.14)]">
        <span className="text-lg font-extrabold" style={{ color: NAVY }}>
          {title}
        </span>
      </div>
    </div>
  );
}

function ServiceCard({
  title,
  Icon,
}: {
  title: string;
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
        {SERVICE_BODY}
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
