import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Virginia HealthCare Services | Home Health Care in Northern Virginia",
  description:
    "Reliable, competent, and timely skilled home health services in Northern Virginia. Skilled nursing, therapy, aide services, and specialty programs.",
  icons: { icon: "/images/favicon.png" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${lato.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans text-gray-800">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
