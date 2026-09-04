import type { Metadata } from "next";
import { Lato, Nunito, Sacramento } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChromeGate from "./components/ChromeGate";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-nunito",
});

const sacramento = Sacramento({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-signature",
});

export const metadata: Metadata = {
  title: "Virginia HealthCare Services | Home Health Care in Northern Virginia",
  description:
    "Reliable, competent, and timely skilled home health services in Northern Virginia. Skilled nursing, therapy, aide services, and specialty programs.",
  icons: { icon: "/images/favicon.png" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${lato.variable} ${nunito.variable} ${sacramento.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-gray-800">
        <ChromeGate>
          <Header />
        </ChromeGate>
        <main className="flex-1">{children}</main>
        <ChromeGate>
          <Footer />
        </ChromeGate>
      </body>
    </html>
  );
}
