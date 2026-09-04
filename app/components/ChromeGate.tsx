"use client";

import { usePathname } from "next/navigation";

/**
 * Hides the global site Header/Footer on themed pages
 * (they render SiteHeader / SiteFooter themselves).
 *
 * "/" is matched exactly, so pages below it keep the old chrome.
 */
const STANDALONE_ROUTES = ["/", "/services", "/about", "/contact"];

export default function ChromeGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isStandalone = STANDALONE_ROUTES.some(
    (route) =>
      pathname === route ||
      (route !== "/" && pathname?.startsWith(`${route}/`))
  );

  if (isStandalone) return null;
  return <>{children}</>;
}
