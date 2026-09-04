import Link from "next/link";

export const metadata = {
  title: "Medify Landing Preview | Design Reference",
};

export default function MedifyPreviewPage() {
  return (
    <div className="bg-white">
      {/* Top info bar */}
      <div className="hidden md:flex items-center justify-between bg-slate-50 border-b border-slate-100 px-6 lg:px-16 py-2 text-xs text-slate-500">
        <span>The Best Medics, Doctors &amp; Physicians for A Healing Touch</span>
        <div className="flex items-center gap-4">
          <span>Follow us</span>
          <Link href="#" className="hover:text-slate-700">Twitter</Link>
          <Link href="#" className="hover:text-slate-700">Facebook</Link>
          <Link href="#" className="hover:text-slate-700">LinkedIn</Link>
        </div>
      </div>

      {/* Header row: logo + contact info + CTA */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 lg:px-16 py-5 gap-4 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-md bg-[#0c71c3] flex items-center justify-center text-white font-bold">+</div>
          <div>
            <p className="text-xl font-extrabold text-slate-800 leading-none">Medify</p>
            <p className="text-[11px] text-slate-400 leading-none mt-0.5">Clinic of Future</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs text-slate-500">
          <div>
            <p className="font-semibold text-slate-700">27 Division St, NY</p>
            <p>10002, USA</p>
          </div>
          <div>
            <p className="font-semibold text-slate-700">Call Us 24/7</p>
            <p>+8 (123) 456 789 12</p>
          </div>
          <div>
            <p className="font-semibold text-slate-700">Mon - Fri: 8.00 - 20.00</p>
            <p>St - Sun: 9.00 - 16.00</p>
          </div>
        </div>

        <button className="bg-[#f5a623] hover:bg-[#e2951a] transition-colors text-white text-sm font-semibold px-5 py-2.5 rounded-md whitespace-nowrap">
          Request a Callback
        </button>
      </div>

      {/* Nav */}
      <nav className="bg-[#0c2f6b] px-6 lg:px-16">
        <ul className="flex items-center gap-8 text-sm text-white/90 py-3">
          <li className="text-white font-semibold border-b-2 border-[#4fd1c5] pb-3 -mb-3">Home</li>
          <li className="hover:text-white cursor-pointer">Pages</li>
          <li className="hover:text-white cursor-pointer">Doctors</li>
          <li className="hover:text-white cursor-pointer">Blog</li>
          <li className="hover:text-white cursor-pointer">Shop</li>
          <li className="hover:text-white cursor-pointer">Contacts</li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#eaf3fb] to-[#dcecf9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16 lg:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-[#0c2f6b] leading-tight">
              Take Care of Your Health Now
            </h1>
            <p className="mt-5 text-slate-500 max-w-md">
              Since the first days of operation of Medify, our team has been
              focused on building a high-quality medical service.
            </p>
            <div className="mt-8 flex items-center gap-6">
              <button className="bg-[#0c71c3] hover:bg-[#0a5fa3] transition-colors text-white font-semibold px-6 py-3 rounded-md">
                Find a Doctor
              </button>
              <Link href="#" className="text-[#0c71c3] font-semibold flex items-center gap-1">
                Book an Appointment <span aria-hidden>›</span>
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-xl bg-slate-200 flex items-center justify-center text-slate-400 text-sm">
            {/* Replace with your own clinic/doctor photo */}
            Doctor portrait image goes here
          </div>
        </div>

        {/* Consultation form card, overlapping hero bottom */}
        <div className="max-w-5xl mx-auto px-6 lg:px-0 -mb-16 relative z-10">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-2xl font-extrabold text-[#0c2f6b] leading-snug">
                Quick Online Consultancy Only
                <span className="block text-[#4fb8b0]">on Few Minutes</span>
              </p>
            </div>
            <form className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Your Name *"
                className="col-span-1 border border-slate-200 rounded-md px-4 py-3 text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#0c71c3]/30"
              />
              <input
                type="email"
                placeholder="Your Email *"
                className="col-span-1 border border-slate-200 rounded-md px-4 py-3 text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#0c71c3]/30"
              />
              <select className="col-span-1 border border-slate-200 rounded-md px-4 py-3 text-sm bg-slate-50 text-slate-400">
                <option>Choose a Doctor</option>
              </select>
              <select className="col-span-1 border border-slate-200 rounded-md px-4 py-3 text-sm bg-slate-50 text-slate-400">
                <option>Choose a Problem</option>
              </select>
              <button
                type="submit"
                className="col-span-2 bg-[#4fb8b0] hover:bg-[#419b94] transition-colors text-white font-semibold py-3 rounded-md mt-1"
              >
                Get Online Consultancy
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Spacer to account for overlapping card */}
      <div className="h-24" />
    </div>
  );
}
