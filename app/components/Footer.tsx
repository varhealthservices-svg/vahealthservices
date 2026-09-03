import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0a2540] text-gray-300 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <Image src="/images/logo-white.png" alt="Virginia HealthCare Services" width={200} height={40} className="h-10 w-auto mb-4" />
          <p className="text-sm text-gray-400 leading-relaxed">
            Reliable, competent, and timely skilled home health services across Northern Virginia.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/terms-of-service" className="hover:text-white">Terms of Service</Link></li>
            <li><Link href="/disclaimer" className="hover:text-white">Disclaimer</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Northern Virginia / DC Metro Area</li>
            <li><a href="tel:+17033335288" className="hover:text-white">(703) 333-5288</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Virginia HealthCare Services. All rights reserved.
      </div>
    </footer>
  );
}
