"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import {
  BLUE,
  MUTED,
  NAVY,
  ORANGE,
  TEAL,
  TEAL_GRADIENT,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "../components/theme";

/* -------------------------------------------------------------------------- */
/*  Theme tokens                                                              */
/* -------------------------------------------------------------------------- */






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
      <div className="text-4xl md:text-5xl font-extrabold text-white">
        {value}+
      </div>
      <div className="mt-2 text-[11px] font-extrabold tracking-[0.12em] uppercase text-white/85">
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
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function HeartHandsIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 32 32" className="w-12 h-12" stroke={color} {...iconProps}>
      <path d="M16 14s-3-2-3-4a2 2 0 0 1 3-1.4A2 2 0 0 1 19 10c0 2-3 4-3 4Z" />
      <path d="M6 20V13a2 2 0 0 1 4 0v4" />
      <path d="M22 17v-4a2 2 0 0 1 4 0v8a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8v-1" />
    </svg>
  );
}

function BadgeIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 32 32" className="w-12 h-12" stroke={color} {...iconProps}>
      <circle cx="16" cy="13" r="8" />
      <path d="M11 19l-2 10 7-4 7 4-2-10" />
      <path d="M12.5 13l2.5 2.5L20 10" />
    </svg>
  );
}

function TeamIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 32 32" className="w-12 h-12" stroke={color} {...iconProps}>
      <circle cx="12" cy="11" r="4" />
      <circle cx="23" cy="13" r="3" />
      <path d="M4 26c0-4.4 3.6-7 8-7s8 2.6 8 7" />
      <path d="M22 19c3.4 0 6 2 6 5" />
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

function HeartPulseIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 32 32" className="w-10 h-10" stroke={color} {...iconProps}>
      <path d="M16 27S4 20 4 12.5A6.5 6.5 0 0 1 16 9a6.5 6.5 0 0 1 12 3.5C28 20 16 27 16 27Z" />
      <path d="M6 16h5l2-4 3 8 2-4h8" />
    </svg>
  );
}

function StaffIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 32 32" className="w-10 h-10" stroke={color} {...iconProps}>
      <circle cx="16" cy="9" r="5" />
      <path d="M6 28c0-5.5 4.5-9 10-9s10 3.5 10 9" />
    </svg>
  );
}

function PinIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 32 32" className="w-10 h-10" stroke={color} {...iconProps}>
      <path d="M16 29s10-8.5 10-16a10 10 0 1 0-20 0c0 7.5 10 16 10 16Z" />
      <circle cx="16" cy="13" r="3.5" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*  Content                                                                   */
/* -------------------------------------------------------------------------- */

const VALUE_CARDS = [
  {
    title: "Person-Centered Care",
    Icon: HeartHandsIcon,
    body: "Treating the illness is only incidental to what we do — caring for the person within the patient.",
  },
  {
    title: "Accredited & Certified",
    Icon: BadgeIcon,
    body: "Accredited by The Joint Commission and certified by the Centers for Medicare and Medicaid Services.",
  },
  {
    title: "A Team You Can Trust",
    Icon: TeamIcon,
    body: "A diverse, experienced clinical and administrative team serving Northern Virginia since 2005.",
  },
];

const COUNTERS = [
  { target: 20, label: "Years of Service", Icon: CalendarIcon },
  { target: 700, label: "Patients Under Care", Icon: HeartPulseIcon },
  { target: 100, label: "Team Members", Icon: StaffIcon },
  { target: 3, label: "Locations", Icon: PinIcon },
];

const TEAM = [
  {
    name: "Elithia Cornwell",
    role: "Vice President of Operations",
    img: "/images/team-cornwell.jpg",
    bio: "Elithia Cornwell, Vice President of Operations, has over 12 years of expertise. Her areas of emphasis are organizational culture and change, administrative simplicity, and leadership development. Elithia inherently understands that our relationships with community partners comprised of hospitals, case managers and physicians, patients, and amazing staff are the most valuable assets our organization can have. She is driven by the unrelenting pursuit of patient driven focus.",
  },
  {
    name: "Conrad Aquino, MD",
    role: "Director of Clinical Services",
    img: "/images/team-conrad.jpg",
    bio: "Dr. Conrad Aquino is a physician, nurse, and award-winning author with over 20 years of healthcare experience. His strong clinical background makes Dr. Aquino a good resource to the team. Throughout his career, he has successfully undergone several CMS and Joint Commission surveys and multiple ADRs.",
  },
  {
    name: "Brook Ladd, LPN",
    role: "Regional Director",
    img: "/images/team-brook.jpg",
    bio: "Brook Ladd, LPN, has worked in the health care industry for 20 years. She has experience in Nursing, Business Development, Special Programming and specializes in Home Health Care. As a seasoned Regional Director, she is passionate about advancing collaborations across the post-acute platform.",
  },
  {
    name: "Nateisha Sullivan, LPN",
    role: "Patient Care Coordinator",
    img: "/images/team-nateisha.jpg",
    bio: "Nateisha Sullivan has been a Nurse for over 26 years. As the Director of several Skilled Nursing Facilities, she maintained a high standard of Quality Assurance and Infection Control. She ensures the line of communication remains open between the Clinical/Field Staff, Patients and Upper Management.",
  },
  {
    name: "Zakiya Collazo-Clark",
    role: "Human Resources",
    img: "/images/team-zakiya.jpg",
    bio: "Zakiya Collazo-Clark has over 12 years experience in Administration and 8 in the Healthcare field with studies in Medical Billing as well. Her love for meeting new people, open lines of communication, and employee/administration relations make her a great representation for this organization.",
  },
];

const FEATURES = [
  {
    title: "Medicare Certified",
    body: "One of the leading Medicare certified home health providers in Northern Virginia, with three locations across the Northern Virginia and DC metropolitan area.",
  },
  {
    title: "Professional Staff",
    body: "What most sets our company apart is the caliber of the people that make up our core — a diverse and talented team that cannot be matched by our competitors.",
  },
];

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function AboutPage() {
  return (
    <div
      className="bg-white"
      style={{ fontFamily: "var(--font-nunito), system-ui, sans-serif" }}
    >
      {/* ---------------------------------------------------------------- */}
      {/*  Header                                                          */}
      {/* ---------------------------------------------------------------- */}
      <SiteHeader />

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
            About Us
          </h1>
          <nav
            className="mt-3 flex items-center gap-2 text-sm font-bold"
            style={{ color: MUTED }}
          >
            <a href="/" className="hover:opacity-70" style={{ color: BLUE }}>
              Home
            </a>
            <span>&rsaquo;</span>
            <span>About Us</span>
          </nav>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  2. Mission + value cards                                         */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <Eyebrow center bothSides>
            Our Mission
          </Eyebrow>

          <h2
            className="text-3xl md:text-[42px] font-extrabold"
            style={{ color: NAVY }}
          >
            We Care About Your Health
          </h2>

          <blockquote
            className="mt-8 mx-auto max-w-[760px] text-xl md:text-2xl italic leading-[1.7]"
            style={{ color: TEAL }}
          >
            &ldquo;Treating the illness is only incidental to what we do — caring
            for the person within the patient.&rdquo;
          </blockquote>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {VALUE_CARDS.map(({ title, body, Icon }) => (
              <div
                key={title}
                className="h-full rounded-xl bg-white px-8 py-10 text-center shadow-[0_18px_44px_rgba(16,49,120,0.10)]"
              >
                <div className="flex justify-center">
                  <Icon color={BLUE} />
                </div>
                <h3
                  className="mt-6 text-xl font-extrabold"
                  style={{ color: NAVY }}
                >
                  {title}
                </h3>
                <p
                  className="mt-4 text-[14px] leading-[1.9]"
                  style={{ color: MUTED }}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  3. Counters band                                                 */}
      {/* ---------------------------------------------------------------- */}
      <section className="py-14" style={{ background: TEAL_GRADIENT }}>
        <div className="mx-auto max-w-[1100px] px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {COUNTERS.map(({ target, label, Icon }) => (
              <div key={label} className="flex flex-col items-center">
                <Icon color="#ffffff" />
                <div className="mt-3">
                  <Counter target={target} label={label} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  4. Message from the President                                    */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-[#f8f9fb] py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="text-center">
            <Eyebrow center bothSides>
              Our Features
            </Eyebrow>
            <h2
              className="text-3xl md:text-[42px] font-extrabold"
              style={{ color: NAVY }}
            >
              Excellence Is Our Speciality
            </h2>
          </div>

          <div className="mt-14 grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              {FEATURES.map((feature) => (
                <div key={feature.title}>
                  <h3
                    className="text-[13px] font-extrabold tracking-[0.12em] uppercase"
                    style={{ color: BLUE }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="mt-2 text-[15px] leading-[1.9]"
                    style={{ color: MUTED }}
                  >
                    {feature.body}
                  </p>
                </div>
              ))}

              <div className="rounded-xl overflow-hidden shadow-[0_16px_40px_rgba(16,49,120,0.12)]">
                <Image
                  src="/images/home/home-health.webp"
                  alt="A home health nurse checking a patient's blood pressure at home"
                  width={800}
                  height={560}
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="w-full h-[280px] object-cover"
                />
              </div>
            </div>

            <div className="rounded-2xl bg-white p-8 md:p-10 shadow-[0_18px_50px_rgba(16,49,120,0.10)]">
              <h3
                className="text-2xl font-extrabold"
                style={{ color: NAVY }}
              >
                Message from the President
              </h3>

              <div
                className="mt-6 space-y-5 text-[15px] leading-[1.95]"
                style={{ color: MUTED }}
              >
                <p>
                  Welcome to Virginia HealthCare Services. As President, I thank
                  you for your interest in our company. Originated in 2005,
                  Virginia HealthCare Services is one of the leading Medicare
                  certified home health providers in Northern Virginia. We have
                  three locations within the Northern Virginia/DC Metropolitan
                  area.
                </p>
                <p>
                  We pride ourselves on our professional services and
                  uncompromising stance on providing the best patient care. What
                  most sets our company apart is the caliber of the people that
                  make up our core. We have put together a diverse and talented
                  team of individuals that cannot be matched by our competitors.
                </p>
                <p>
                  We would love the opportunity to welcome you as a patient and
                  to exceed your expectations by providing the highest level of
                  care.
                </p>
              </div>

              <p
                className="mt-8 text-2xl md:text-3xl"
                style={{
                  fontFamily: "var(--font-signature), cursive",
                  color: TEAL,
                }}
              >
                Dr. Hussein Ibrahim
              </p>
              <p
                className="mt-1 text-[13px] font-bold"
                style={{ color: NAVY }}
              >
                PT, DPT — President
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  5. Team                                                          */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="text-center">
            <Eyebrow center bothSides>
              Quality Staff
            </Eyebrow>
            <h2
              className="text-3xl md:text-[42px] font-extrabold"
              style={{ color: NAVY }}
            >
              Team of Professionals
            </h2>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM.map((member) => (
              <article
                key={member.name}
                className="h-full rounded-xl overflow-hidden bg-white shadow-[0_12px_34px_rgba(16,49,120,0.09)]"
              >
                <div className="relative h-[280px]">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                    className="object-cover"
                  />
                </div>

                <div className="p-7">
                  <h3
                    className="text-lg font-extrabold"
                    style={{ color: NAVY }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="mt-1 text-[13px] font-bold"
                    style={{ color: BLUE }}
                  >
                    {member.role}
                  </p>
                  <p
                    className="mt-4 text-[14px] leading-[1.85]"
                    style={{ color: MUTED }}
                  >
                    {member.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  6. Equal opportunity statement                                   */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-[#f8f9fb] py-14">
        <p
          className="mx-auto max-w-[900px] px-6 text-center text-[13px] leading-[1.9] italic"
          style={{ color: MUTED }}
        >
          Virginia HealthCare Services provides equal employment opportunity and
          client services. In compliance with Title VI of the Civil Rights Act of
          1964, Section 504 of the Rehabilitation Act of 1973, and the Age
          Discrimination Act of 1975, the company protects employees and clients
          from unlawful discrimination against race, color, sexual orientation,
          age, disability, gender, religion, national origin, handicap, ancestry,
          or ethnic background.
        </p>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  7. Call band                                                     */}
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
      {/*  8. Footer                                                        */}
      {/* ---------------------------------------------------------------- */}
      <SiteFooter />
    </div>
  );
}

