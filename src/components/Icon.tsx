import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { name: string };

// Single source for all inline SVG icons. Stroke-based so they inherit
// currentColor and scale cleanly. Service icons match keys in services.ts.
const paths: Record<string, React.ReactNode> = {
  tyre: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 3v3.5M12 17.5V21M3 12h3.5M17.5 12H21M5.6 5.6l2.5 2.5M15.9 15.9l2.5 2.5M18.4 5.6l-2.5 2.5M8.1 15.9l-2.5 2.5" />
    </>
  ),
  spanner: (
    <path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L4 16.8 7.2 20l5.3-5.3a4 4 0 0 0 5.2-5.4l-2.4 2.4-2.3-.6-.6-2.3 2.3-2.5Z" />
  ),
  diagnostics: (
    <>
      <path d="M3 12h3l2 5 4-13 2 8h5" />
    </>
  ),
  brake: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3.5v2.6M12 17.9v2.6M20.5 12h-2.6M6.1 12H3.5" />
    </>
  ),
  battery: (
    <>
      <rect x="3" y="8" width="16" height="10" rx="2" />
      <path d="M19 11h2v4h-2M7 5.5h3M14 5.5h3M8.5 4v3M15.5 4v3M8 13h3M9.5 11.5v3" />
    </>
  ),
  season: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v3M12 19v3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1 7 17M17 7l2.1-2.1" />
    </>
  ),
  phone: (
    <path d="M6.6 3.5 4 4c-.6.1-1 .7-.9 1.3C4 12.6 9.4 18 16.7 18.9c.6.1 1.2-.3 1.3-.9l.5-2.6c.1-.6-.2-1.2-.8-1.4l-2.7-1a1.2 1.2 0 0 0-1.3.3l-.9 1c-2.2-1.1-4-2.9-5.1-5.1l1-.9c.4-.4.5-.9.3-1.3l-1-2.7c-.2-.6-.8-.9-1.4-.8Z" />
  ),
  whatsapp: (
    <path d="M4 20l1.4-4A8 8 0 1 1 8 18.6L4 20Zm5.2-6.1c.5 1 1.3 1.8 2.3 2.3.4.2.8.1 1-.2l.5-.7 1.9.9c-.2.6-.9 1.1-1.6 1.1a6 6 0 0 1-5.4-5.4c0-.7.5-1.4 1.1-1.6l.9 1.9-.7.5c-.3.2-.4.6-.2 1Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  check: <path d="m4 12 5 5L20 6" />,
  star: (
    <path d="m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19.6l1-5.8L3.5 9.7l5.9-.9L12 3Z" />
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  pin: (
    <>
      <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4.4 3 8.4 7 9.5 4-1.1 7-5.1 7-9.5V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  chevron: <path d="m6 9 6 6 6-6" />,
  money: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M14.5 9.2c-.4-1-1.4-1.5-2.6-1.5-1.4 0-2.4.8-2.4 1.9 0 2.6 5.2 1.3 5.2 4 0 1.2-1.1 2-2.7 2-1.3 0-2.4-.6-2.8-1.6M12 6.2v1.5M12 16.3v1.5" />
    </>
  ),
  home: <path d="M4 11l8-6 8 6M6 10v9h12v-9M10 19v-5h4v5" />,
};

export function Icon({ name, ...props }: IconProps) {
  const isFilled = name === "phone" || name === "whatsapp" || name === "star";
  return (
    <svg
      viewBox="0 0 24 24"
      fill={isFilled ? "currentColor" : "none"}
      stroke={isFilled ? "none" : "currentColor"}
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {paths[name] ?? null}
    </svg>
  );
}
