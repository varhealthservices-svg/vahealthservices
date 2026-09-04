/**
 * Shared design tokens and site-wide constants.
 * Change a value here and every page picks it up.
 */

export const NAVY = "#0a3380";
export const ORANGE = "#ff9e21";
export const BLUE = "#2ea6f7";
export const TEAL = "#4ec8d8";
export const MUTED = "#93919d";

export const TEAL_GRADIENT = `linear-gradient(105deg, ${TEAL} 0%, ${BLUE} 100%)`;

export const PHONE_DISPLAY = "(703) 333-5288";
export const PHONE_HREF = "tel:+17033335288";

export const ADDRESS_LINE_1 = "7010 Little River Turnpike, Suite 400";
export const ADDRESS_LINE_2 = "Annandale, VA 22003";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const OPEN_HOURS: [string, string][] = [
  ["Monday", "9:00 - 17:00"],
  ["Tuesday", "9:00 - 17:00"],
  ["Wednesday", "9:00 - 17:00"],
  ["Thursday", "9:00 - 17:00"],
  ["Friday", "9:00 - 17:00"],
  ["On-call nursing", "24 / 7"],
];
