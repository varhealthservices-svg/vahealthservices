import Image from "next/image";
import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import {
  BLUE,
  MUTED,
  NAVY,
  ORANGE,
  TEAL_GRADIENT,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "../components/theme";

export const metadata: Metadata = {
  title: "Contact Us | Virginia HealthCare Services",
  description:
    "Contact Virginia HealthCare Services in Annandale, VA. Call (703) 333-5288 or use our secure form to request home health services in Northern Virginia.",
};

/* -------------------------------------------------------------------------- */
/*  Theme tokens                                                              */
/* -------------------------------------------------------------------------- */






/* -------------------------------------------------------------------------- */
/*  Shared bits                                                               */
/* -------------------------------------------------------------------------- */

function Eyebrow({
  children,
  center = false,
  bothSides = false,
}: {
  children: React.ReactNode;
  center?: boolean;
  bothSides?: boolean;
}) {
  const dash = (
    <span
      aria-hidden
      className="inline-block h-[2px] w-3 align-middle"
      style={{ background: ORANGE }}
    />
  );

  return (
    <div
      className={`flex items-center gap-2 mb-4 ${center ? "justify-center" : ""}`}
      style={{ color: ORANGE }}
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
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function ContactPage() {
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
            Contact Us
          </h1>
          <nav
            className="mt-3 flex items-center gap-2 text-sm font-bold"
            style={{ color: MUTED }}
          >
            <a href="/" className="hover:opacity-70" style={{ color: BLUE }}>
              Home
            </a>
            <span>&rsaquo;</span>
            <span>Contact</span>
          </nav>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  2. Details + form                                                */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1200px] px-6 grid lg:grid-cols-[420px_1fr] gap-14">
          {/* Left: contact details */}
          <div>
            <Eyebrow>Quick Support</Eyebrow>

            <h2
              className="text-3xl md:text-[40px] font-extrabold leading-[1.2]"
              style={{ color: NAVY }}
            >
              We&apos;d Love to Hear From You
            </h2>

            <p
              className="mt-6 text-[15px] leading-[1.9]"
              style={{ color: MUTED }}
            >
              If you or a loved one needs services, reach out to us. Physicians
              and case managers are welcome to use the same secure form.
            </p>

            <ul className="mt-10 space-y-7">
              <DetailRow icon="phone" label="Call Us">
                <a
                  href={PHONE_HREF}
                  className="hover:underline"
                  style={{ color: NAVY }}
                >
                  {PHONE_DISPLAY}
                </a>
              </DetailRow>

              <DetailRow icon="pin" label="Our Location">
                7010 Little River Turnpike, Suite 400
                <br />
                Annandale, VA 22003
              </DetailRow>

              <DetailRow icon="clock" label="Office Hours">
                Monday – Friday: 9:00 – 17:00
                <br />
                On-call nursing available 24/7
              </DetailRow>

              <DetailRow icon="area" label="Service Area">
                Northern Virginia and the
                <br />
                DC Metro Area
              </DetailRow>
            </ul>
          </div>

          {/* Right: secure form */}
          <div className="rounded-2xl bg-white p-8 md:p-10 shadow-[0_18px_50px_rgba(16,49,120,0.10)]">
            <Eyebrow>Write Us</Eyebrow>

            <h2
              className="text-3xl md:text-[36px] font-extrabold"
              style={{ color: NAVY }}
            >
              Get in Touch
            </h2>

            <p className="mt-3 text-[14px]" style={{ color: MUTED }}>
              This form is hosted on a HIPAA-compliant platform, so it is safe to
              include health information.
            </p>

            <div className="mt-7 -mx-2">
              <iframe
                id="JotFormIFrame-201517648344052"
                title="Contact Form"
                allowFullScreen
                allow="geolocation; microphone; camera"
                src="https://hipaa.jotform.com/201517648344052"
                scrolling="no"
                style={{ minWidth: "100%", height: 700, border: "none" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  3. Call band                                                     */}
      {/* ---------------------------------------------------------------- */}
      <section
        className="relative overflow-hidden py-16 text-center"
        style={{ background: TEAL_GRADIENT }}
      >
        <div className="relative mx-auto max-w-[1200px] px-6">
          <p className="text-lg md:text-2xl font-bold text-white">
            Prefer to speak with someone? Call us directly.
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
      {/*  4. Footer                                                        */}
      {/* ---------------------------------------------------------------- */}
      <SiteFooter />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Rows                                                                      */
/* -------------------------------------------------------------------------- */

const ICON_PATHS: Record<string, React.JSX.Element> = {
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
  area: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.7 2.5 15 0 18M12 3c-2.5 2.7-2.5 15 0 18" />
    </>
  ),
};

function DetailRow({
  icon,
  label,
  children,
}: {
  icon: keyof typeof ICON_PATHS;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-5">
      <span
        className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
        style={{ background: "rgba(46,166,247,0.10)" }}
      >
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5"
          fill="none"
          stroke={BLUE}
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {ICON_PATHS[icon]}
        </svg>
      </span>

      <span>
        <span
          className="block text-[11px] font-extrabold tracking-[0.14em] uppercase"
          style={{ color: BLUE }}
        >
          {label}
        </span>
        <span
          className="mt-1.5 block text-[15px] leading-[1.7]"
          style={{ color: MUTED }}
        >
          {children}
        </span>
      </span>
    </li>
  );
}

