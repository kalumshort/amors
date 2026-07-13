"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Icon } from "./Icon";
import { gallery } from "@/data/gallery";

const AUTOPLAY_MS = 5000;
const SWIPE_THRESHOLD = 40; // px of horizontal travel to count as a swipe

export function Gallery() {
  const images = gallery;
  const count = images.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const regionRef = useRef<HTMLDivElement>(null);
  const pointerStart = useRef<number | null>(null);

  const goTo = useCallback(
    (i: number) => setIndex(((i % count) + count) % count),
    [count],
  );
  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  // Auto-advance — paused on hover/focus, when the tab is hidden, or when the
  // visitor prefers reduced motion.
  useEffect(() => {
    if (paused || count < 2) return;
    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) return;

    let timer: ReturnType<typeof setInterval> | null = null;
    const start = () => {
      if (!timer) timer = setInterval(() => setIndex((i) => (i + 1) % count), AUTOPLAY_MS);
    };
    const stop = () => {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    };
    const onVisibility = () => (document.hidden ? stop() : start());

    start();
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [paused, count]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    }
  };

  const onPointerDown = (e: React.PointerEvent) => {
    pointerStart.current = e.clientX;
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (pointerStart.current === null) return;
    const delta = e.clientX - pointerStart.current;
    pointerStart.current = null;
    if (delta > SWIPE_THRESHOLD) prev();
    else if (delta < -SWIPE_THRESHOLD) next();
  };

  return (
    <div
      ref={regionRef}
      className="mx-auto max-w-4xl"
      role="region"
      aria-roledescription="carousel"
      aria-label="Photos of our work"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onKeyDown={onKeyDown}
    >
      {/* Stage */}
      <div
        className="relative aspect-[3/2] max-h-[560px] w-full touch-pan-y overflow-hidden rounded-3xl bg-ink shadow-[var(--shadow-card)]"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
      >
        {images.map((img, i) => {
          const active = i === index;
          return (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                active ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden={!active}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}`}
            >
              {/* Blurred fill so the whole photo can sit letterboxed on top */}
              <Image
                src={img.src}
                alt=""
                fill
                aria-hidden
                sizes="(min-width: 1024px) 900px, 100vw"
                className="scale-110 object-cover blur-2xl brightness-75"
              />
              {/* The actual photo, fully visible (no crop) */}
              <Image
                src={img.src}
                alt={img.alt}
                fill
                placeholder="blur"
                loading={active ? "eager" : "lazy"}
                fetchPriority={active ? "high" : "auto"}
                sizes="(min-width: 1024px) 900px, 100vw"
                className="relative object-contain"
              />
            </div>
          );
        })}

        {/* Arrows */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous photo"
          className="absolute left-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-ink/50 text-white backdrop-blur transition-colors hover:bg-brand"
        >
          <Icon name="chevron" className="h-6 w-6 rotate-90" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next photo"
          className="absolute right-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-ink/50 text-white backdrop-blur transition-colors hover:bg-brand"
        >
          <Icon name="chevron" className="h-6 w-6 -rotate-90" />
        </button>

        {/* Counter */}
        <div className="absolute right-3 top-3 z-10 rounded-full bg-ink/50 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          {index + 1} / {count}
        </div>
      </div>

      {/* Dots */}
      <div className="mt-5 flex flex-wrap justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to photo ${i + 1}`}
            aria-current={i === index ? "true" : undefined}
            className={`h-2.5 rounded-full transition-all ${
              i === index
                ? "w-6 bg-brand"
                : "w-2.5 bg-ink/20 hover:bg-ink/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
