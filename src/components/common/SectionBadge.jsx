import React from "react";

export default function SectionBadge({ text, light = false }) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 transition-all duration-300 ${
        light
          ? "bg-amber-400/15 text-amber-300 border border-amber-400/30"
          : "bg-amber-500/10 text-amber-600 border border-amber-500/20"
      }`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#FFB000] animate-ping" />
      {text}
    </span>
  );
}
