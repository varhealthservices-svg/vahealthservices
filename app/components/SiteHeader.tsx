import { BLUE, NAVY, NAV_LINKS, PHONE_DISPLAY, PHONE_HREF } from "./theme";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-[0_2px_12px_rgba(16,49,120,0.06)]">
      <div className="mx-auto max-w-[1200px] px-6 h-[84px] flex items-center justify-between gap-6">
        <a href="/" className="flex items-center shrink-0">
          {/* Plain <img>: next/image blocks SVG unless dangerouslyAllowSVG is set. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo.svg"
            alt="Virginia HealthCare Services"
            width={791}
            height={153}
            className="h-9 md:h-11 w-auto"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
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
          className="rounded-full px-5 py-2.5 text-sm font-extrabold text-white shrink-0"
          style={{ background: BLUE }}
        >
          {PHONE_DISPLAY}
        </a>
      </div>
    </header>
  );
}
