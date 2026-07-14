type SectionColor = "paper" | "mist" | "ink" | "ink-800";
type DividerVariant = "wave" | "waves" | "curve" | "arch" | "slant" | "drip";

/* Fill values mirror the @theme tokens in globals.css */
const fills: Record<SectionColor, string> = {
  paper: "#ffffff",
  mist: "#f6f6f7",
  ink: "#0a0a0a",
  "ink-800": "#141414",
};

type Shape = {
  vb: number;
  h: string;
  paths: { d: string; opacity?: number }[];
};

/* Each shape draws the *bottom* section's colour rising into the top one.
   All share a 1440-wide viewBox so variants are interchangeable. */
const shapes: Record<DividerVariant, Shape> = {
  // gentle single S-curve — calm
  wave: {
    vb: 80,
    h: "h-10 sm:h-16",
    paths: [{ d: "M0,32 C480,96 960,0 1440,48 L1440,80 L0,80 Z" }],
  },
  // two overlapping waves — depth, for the dramatic light↔dark seams
  waves: {
    vb: 110,
    h: "h-14 sm:h-20",
    paths: [
      { d: "M0,30 C500,92 940,2 1440,50 L1440,110 L0,110 Z", opacity: 0.4 },
      { d: "M0,52 C400,112 1040,10 1440,72 L1440,110 L0,110 Z" },
    ],
  },
  // tall symmetric arc bowing up
  curve: {
    vb: 90,
    h: "h-10 sm:h-16",
    paths: [{ d: "M0,80 Q720,-12 1440,80 L1440,90 L0,90 Z" }],
  },
  // flatter, wider dome — unique
  arch: {
    vb: 70,
    h: "h-8 sm:h-12",
    paths: [{ d: "M0,60 Q720,18 1440,60 L1440,70 L0,70 Z" }],
  },
  // angled straight edge — dynamic
  slant: {
    vb: 70,
    h: "h-8 sm:h-12",
    paths: [{ d: "M0,70 L1440,0 L1440,70 Z" }],
  },
  // asymmetric organic wave — unique
  drip: {
    vb: 100,
    h: "h-12 sm:h-16",
    paths: [
      {
        d: "M0,40 C240,82 380,8 600,40 C820,72 1000,18 1440,58 L1440,100 L0,100 Z",
      },
    ],
  },
};

type Props = {
  /** Colour of the section above the divider */
  top: SectionColor;
  /** Colour of the section below the divider */
  bottom: SectionColor;
  variant?: DividerVariant;
  /** Mirror horizontally for variety */
  flip?: boolean;
  className?: string;
};

export function SectionDivider({
  top,
  bottom,
  variant = "wave",
  flip = false,
  className = "",
}: Props) {
  const shape = shapes[variant];
  return (
    <div
      aria-hidden="true"
      className={className}
      style={{ background: fills[top], lineHeight: 0 }}
    >
      <svg
        className={`block w-full ${shape.h}`}
        viewBox={`0 0 1440 ${shape.vb}`}
        preserveAspectRatio="none"
        style={{
          fill: fills[bottom],
          transform: flip ? "scaleX(-1)" : undefined,
        }}
      >
        {shape.paths.map((p, i) => (
          <path key={i} d={p.d} opacity={p.opacity} />
        ))}
      </svg>
    </div>
  );
}
