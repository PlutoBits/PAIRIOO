import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

function DownChevron() {
  return (
    <svg
      viewBox="0 0 44 22"
      width="34"
      height="17"
      fill="none"
      aria-hidden="true"
      className="hero-down"
    >
      <polyline
        points="3,3 22,11 41,3"
        stroke="currentColor"
        strokeWidth={1.1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points="3,11 22,19 41,11"
        stroke="currentColor"
        strokeWidth={1.1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

<button
  className="hero-down"
  aria-label="Scroll to projects"
  onClick={() =>
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })
  }
>
  <DownChevron />
</button>;

export interface SketchPage {
  src: string;
  caption?: string;
  alt?: string;
}

interface SketchbookProps {
  pages: SketchPage[];
  /** Spread ratio of the open book. Default "4 / 3". */
  aspectRatio?: string;
  /** "cover" fills the spread (may crop), "contain" shows the whole artwork. */
  fit?: "cover" | "contain";
  /** Page-turn duration in ms. */
  flipDuration?: number;
  className?: string;
  onPageChange?: (index: number) => void;
}

interface FlipState {
  dir: "next" | "prev";
  from: number;
  to: number;
}

const PAPER = "transparent";

/**
 * Renders ONE half (left or right) of a full-spread image.
 * The <img> is sized to the full book width (200% of the half),
 * so both halves line up into one seamless spread.
 */
function Slice({
  page,
  half,
  fit,
}: {
  page: SketchPage;
  half: "left" | "right";
  fit: "cover" | "contain";
}) {
  const imgStyle: CSSProperties = {
    position: "absolute",
    top: 0,
    width: "200%",
    height: "100%",
    maxWidth: "none",
    objectFit: fit,
    userSelect: "none",
    ...(half === "left" ? { left: 0 } : { right: 0 }),
  };
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        background: PAPER,
      }}
    >
      <img src={page.src} alt="" draggable={false} style={imgStyle} />
    </div>
  );
}

/**
 * Thin SVG chevron (matches matthewyu.dev's arrows) —
 * crisper than a font glyph, uses the button's text color.
 */
function Chevron({ dir }: { dir: "left" | "right" }) {
  const points = dir === "left" ? "11,3 3,22 11,41" : "3,3 11,22 3,41";
  return (
    <svg
      viewBox="0 0 14 44"
      width="14"
      height="44"
      fill="none"
      aria-hidden="true"
    >
      <polyline
        points={points}
        stroke="currentColor"
        strokeWidth={1.1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const arrowStyle: CSSProperties = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  border: "none",
  background: "transparent",
  color: "#333",
  lineHeight: 1,
  padding: "1rem",
  cursor: "pointer",
  zIndex: 5,
  userSelect: "none",
};

export default function Sketchbook({
  pages,
  aspectRatio = "4 / 3",
  fit = "cover",
  flipDuration = 650,
  className,
  onPageChange,
}: SketchbookProps) {
  const [current, setCurrent] = useState(0);
  const [flip, setFlip] = useState<FlipState | null>(null);
  const [turned, setTurned] = useState(false);
  const [captionText, setCaptionText] = useState(pages[0]?.caption ?? "");
  const [captionOpacity, setCaptionOpacity] = useState(1);
  const touchX = useRef<number | null>(null);
  const cbRef = useRef(onPageChange);
  cbRef.current = onPageChange;

  const startFlip = (dir: "next" | "prev") => {
    if (flip || pages.length < 2) return;
    const n = pages.length;
    const to = dir === "next" ? (current + 1) % n : (current - 1 + n) % n;
    setFlip({ dir, from: current, to });
  };

  // Two-phase flip: mount the leaf flat, then rotate it on the next frame.
  useEffect(() => {
    if (!flip) return;
    setCaptionOpacity(0);
    const raf = requestAnimationFrame(() =>
      requestAnimationFrame(() => setTurned(true)),
    );
    const t = setTimeout(() => {
      setCurrent(flip.to);
      setCaptionText(pages[flip.to].caption ?? "");
      setCaptionOpacity(1);
      setFlip(null);
      setTurned(false);
      cbRef.current?.(flip.to);
    }, flipDuration + 40);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t);
      setCaptionOpacity(1);
    };
  }, [flip, flipDuration, pages]);

  // Preload neighbouring spreads so flips never wait on the network.
  useEffect(() => {
    [current - 1, current + 1].forEach((i) => {
      if (pages[i]) {
        const im = new Image();
        im.src = pages[i].src;
      }
    });
  }, [current, pages]);

  // Arrow-key navigation.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") startFlip("next");
      if (e.key === "ArrowLeft") startFlip("prev");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  if (pages.length === 0) return null;
  const page = pages[current];

  // Which slices sit underneath, and which the turning leaf carries.
  const underLeft = flip
    ? pages[flip.dir === "next" ? flip.from : flip.to]
    : page;
  const underRight = flip
    ? pages[flip.dir === "next" ? flip.to : flip.from]
    : page;

  const leafFace: CSSProperties = {
    position: "absolute",
    inset: 0,
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
    overflow: "hidden",
  };

  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 20,
      }}
    >
      {/* Stage */}
      <h1 className="bg-name" aria-hidden="true">
        PAIRIO
      </h1>
      <div
        style={{
          position: "relative",
          width: "min(680px, 94vw)",
          perspective: 2400,
        }}
        onTouchStart={(e) => {
          touchX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (dx < -40) startFlip("next");
          if (dx > 40) startFlip("prev");
          touchX.current = null;
        }}
      >
        {/* Book */}
        <div
          style={{
            position: "relative",
            width: "calc(100% - 4rem)",
            margin: "0 auto",
            aspectRatio,
            borderRadius: 8,
          }}
        >
          {/* Static / under layer (clipped to the book shape) */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: 8,
              overflow: "hidden",
              background: PAPER,
            }}
          >
            {flip ? (
              <>
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    width: "50%",
                    opacity: flip.dir === "next" ? (turned ? 0 : 1) : 1,
                    transition: `opacity ${flipDuration / 2}ms ease ${flipDuration / 2}ms`,
                  }}
                >
                  <Slice page={underLeft} half="left" fit={fit} />
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    right: 0,
                    width: "50%",
                    opacity: flip.dir === "prev" ? (turned ? 0 : 1) : 1,
                    transition: `opacity ${flipDuration / 2}ms ease ${flipDuration / 2}ms`,
                  }}
                >
                  <Slice page={underRight} half="right" fit={fit} />
                </div>
              </>
            ) : (
              <img
                src={page.src}
                alt={page.alt ?? page.caption ?? `Page ${current + 1}`}
                draggable={false}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: fit,
                  userSelect: "none",
                }}
              />
            )}
          </div>

          {/* Turning leaf */}
          {flip && (
            <div
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                width: "50%",
                left: flip.dir === "next" ? "50%" : 0,
                transformOrigin:
                  flip.dir === "next" ? "left center" : "right center",
                transform: `rotateY(${
                  turned ? (flip.dir === "next" ? -180 : 180) : 0
                }deg)`,
                transition: `transform ${flipDuration}ms cubic-bezier(0.3, 0.6, 0.3, 1)`,
                transformStyle: "preserve-3d",
                willChange: "transform",
                zIndex: 3,
              }}
            >
              {/* Front face: the half you're turning away from */}
              <div
                style={{
                  ...leafFace,
                  borderRadius:
                    flip.dir === "next" ? "0 8px 8px 0" : "8px 0 0 8px",
                }}
              >
                <Slice
                  page={pages[flip.from]}
                  half={flip.dir === "next" ? "right" : "left"}
                  fit={fit}
                />
              </div>
              {/* Back face: the half that lands on the other side */}
              <div
                style={{
                  ...leafFace,
                  transform: "rotateY(180deg)",
                  borderRadius:
                    flip.dir === "next" ? "8px 0 0 8px" : "0 8px 8px 0",
                }}
              >
                <Slice
                  page={pages[flip.to]}
                  half={flip.dir === "next" ? "left" : "right"}
                  fit={fit}
                />
              </div>
            </div>
          )}
        </div>

        {/* Arrows */}
        <button
          type="button"
          aria-label="Previous page"
          onClick={() => startFlip("prev")}
          disabled={!!flip}
          style={{
            ...arrowStyle,
            left: 0,
            opacity: flip ? 0.35 : 1,
            cursor: flip ? "default" : "pointer",
            transition: "all 120ms",
          }}
        >
          <Chevron dir="left" />
        </button>
        <button
          type="button"
          aria-label="Next page"
          onClick={() => startFlip("next")}
          disabled={!!flip}
          style={{
            ...arrowStyle,
            right: 0,
            opacity: flip ? 0.35 : 1,
            cursor: flip ? "default" : "pointer",
            transition: "all 120ms",
          }}
        >
          <Chevron dir="right" />
        </button>
      </div>

      {/* Caption + counter */}
      <div
        className="Mes"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            textAlign: "center",
            minHeight: 25,
            opacity: captionOpacity,
            filter: `blur(${captionOpacity === 1 ? 0 : 6}px)`,
            transition: "opacity 200ms ease-in-out, filter 200ms ease-in-out",
          }}
        >
          <div
            className="SketchBookCap"
            style={{
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: "0.45em",
              textIndent: "0.45em",
              textTransform: "uppercase",
              color: "#3a4152",
            }}
          >
            {captionText}
          </div>
        </div>
        <button
          type="button"
          className="hero-down"
          aria-label="Scroll to projects"
          onClick={() => {
            document
              .querySelector(".WorksCardSelection")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <DownChevron />
        </button>
      </div>
    </div>
  );
}
