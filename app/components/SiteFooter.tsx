import {
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  BLUE,
  MUTED,
  NAVY,
  OPEN_HOURS,
  ORANGE,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "./theme";

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
};

function ContactRow({
  icon,
  children,
}: {
  icon: keyof typeof ICON_PATHS;
  children: React.ReactNode;
}) {
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
          {ICON_PATHS[icon]}
        </svg>
      </span>
      <span className="leading-[1.7]">{children}</span>
    </li>
  );
}

export default function SiteFooter() {
  return (
    <footer className="bg-white pt-20">
      <div className="mx-auto max-w-[1200px] px-6 grid md:grid-cols-2 gap-14">
        <div>
          <h3 className="text-lg font-extrabold" style={{ color: NAVY }}>
            Our Contacts
          </h3>

          <ul className="mt-6 space-y-5 text-[14px]" style={{ color: MUTED }}>
            <ContactRow icon="pin">
              {ADDRESS_LINE_1}
              <br />
              {ADDRESS_LINE_2}
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
            Copyright © {new Date().getFullYear()} Virginia HealthCare Services.
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
