"use client";

import { useRef, useState } from "react";
import { Icon } from "./Icon";
import { business } from "@/data/business";

// Custom UK number-plate lookup. Takes a registration and opens the
// BookMyGarage booking page (new tab) with ?ref=<host>&vrm=<REG>.
export function BookingLookup({ className = "" }: { className?: string }) {
  const [reg, setReg] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  function openBooking(vrm?: string) {
    const params = new URLSearchParams({ ref: window.location.host });
    if (vrm) params.set("vrm", vrm);
    window.open(
      `${business.bookingUrl}?${params.toString()}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const vrm = reg.replace(/\s+/g, "").toUpperCase();
    if (!vrm) {
      inputRef.current?.focus();
      return;
    }
    openBooking(vrm);
  }

  return (
    <div
      className={`rounded-2xl bg-white p-6 text-center shadow-[var(--shadow-card)] sm:p-8 ${className}`}
    >
      <h3 className="text-lg font-bold text-ink">
        Get an instant price online
      </h3>
      <p className="mt-1.5 text-sm text-ink/60">
        Enter your registration to see prices and book in minutes.
      </p>

      <form
        onSubmit={onSubmit}
        className="mt-5 flex flex-col items-stretch gap-3 sm:flex-row"
      >
        {/* UK number plate */}
        <label htmlFor="vrm" className="sr-only">
          Vehicle registration
        </label>
        <div className="flex flex-1 items-stretch overflow-hidden rounded-lg border-2 border-ink/20 focus-within:border-brand">
          <span className="flex flex-col items-center justify-center bg-[#063298] px-2.5 text-white">
            <span className="text-[9px] leading-none text-[#ffcc00]">★</span>
            <span className="text-xs font-bold leading-tight">UK</span>
          </span>
          <input
            ref={inputRef}
            id="vrm"
            name="vrm"
            value={reg}
            onChange={(e) =>
              setReg(e.target.value.toUpperCase().replace(/[^A-Z0-9 ]/g, ""))
            }
            placeholder="YOUR REG"
            maxLength={8}
            autoComplete="off"
            autoCapitalize="characters"
            spellCheck={false}
            className="w-full bg-[#ffd400] px-3 py-3 text-center text-xl font-extrabold uppercase tracking-widest text-ink placeholder:text-ink/40 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-base font-semibold text-white shadow-[0_8px_24px_rgba(242,107,29,0.35)] transition-all hover:bg-brand-dark"
        >
          Get a price
          <Icon name="arrow" className="h-5 w-5" />
        </button>
      </form>

      <button
        type="button"
        onClick={() => openBooking()}
        className="mt-4 text-sm font-medium text-ink/55 underline decoration-ink/20 underline-offset-2 hover:text-brand-dark"
      >
        I don&rsquo;t know my registration
      </button>
    </div>
  );
}
