"use client";

import { usePathname } from "next/navigation";

/**
 * Hides the global site Header/Footer on standalone theme pages
 * (they ship their own header and footer).
 */
const STANDALONE_ROUTES = [
  "/family-doctor",
  "/services",
  "/contact",
  "/about",
];

export default function ChromeGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isStandalone = STANDALONE_ROUTES.some(
    (route) => pathname === route || pathname?.startsWith(`${route}/`)
  );

  if (isStandalone) return null;
  return <>{children}</>;
}
