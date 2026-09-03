import Link from "next/link";
import Image from "next/image";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/logo.png" alt="Virginia HealthCare Services" width={230} height={44} className="h-11 w-auto" priority />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-gray-700">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-[var(--brand-blue)] transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href="tel:+17033335288"
          className="hidden md:inline-block bg-[var(--brand-blue)] hover:bg-[var(--brand-blue-light)] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
        >
          (703) 333-5288
        </a>
      </div>
      {/* Mobile nav */}
      <div className="md:hidden border-t border-gray-100 overflow-x-auto">
        <div className="flex gap-5 px-6 py-2 text-sm font-medium text-gray-600 whitespace-nowrap">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-[var(--brand-blue)]">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
