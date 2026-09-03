import Image from "next/image";

export default function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <section className="relative h-[220px]">
        <Image src="/images/careers-hero.jpg" alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center">
          <h1 className="max-w-4xl mx-auto px-6 w-full text-white font-black text-4xl">{title}</h1>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-6 py-16 prose prose-sm text-gray-700 leading-relaxed">
        {children}
      </section>
    </>
  );
}
