"use client";

import React from "react";
import { InfiniteMovingCards } from "@/app/components/ui/infinite-moving-cards";

const logos = [
  {
    quote: (
      <>
        <img src="/sample%20logos/logos/ENZA%20SVG%20LOGO.svg" alt="ENZA SVG LOGO" height={64} style={{ height: 64, width: 'auto', objectFit: 'contain', display: 'block' }} />
      </>
    ),
    name: "ENZA SVG LOGO",
    title: "",
  },
  {
    quote: (
      <>
        <img src="/sample%20logos/logos/elite%20mens%20hostel%20logo.svg" alt="elite mens hostel logo" height={64} style={{ height: 64, width: 'auto', objectFit: 'contain', display: 'block' }} />
      </>
    ),
    name: "elite mens hostel logo",
    title: "",
  },
  {
    quote: (
      <>
        <img src="/sample%20logos/logos/AL%20ZAFFO%20SVG%20LOGO.svg" alt="AL ZAFFO SVG LOGO" height={64} style={{ height: 64, width: 'auto', objectFit: 'contain', display: 'block' }} />
      </>
    ),
    name: "AL ZAFFO SVG LOGO",
    title: "",
  },
  {
    quote: (
      <>
        <img src="/sample%20logos/logos/president%20education%20logo%20svg.svg" alt="president education logo svg" height={64} style={{ height: 64, width: 'auto', objectFit: 'contain', display: 'block' }} />
      </>
    ),
    name: "president education logo svg",
    title: "",
  },
  {
    quote: (
      <>
        <img src="/sample%20logos/logos/TM%20SVG%20LOGO..svg" alt="TM SVG LOGO." height={64} style={{ height: 64, width: 'auto', objectFit: 'contain', display: 'block' }} />
      </>
    ),
    name: "TM SVG LOGO.",
    title: "",
  },
  {
    quote: (
      <>
        <img src="/sample%20logos/logos/QM%20SVG%20LOGO.svg" alt="QM SVG LOGO" height={64} style={{ height: 64, width: 'auto', objectFit: 'contain', display: 'block' }} />
      </>
    ),
    name: "QM SVG LOGO",
    title: "",
  },
  {
    quote: (
      <>
        <img src="/sample%20logos/logos/SGT%20SVG%20LOGO.svg" alt="SGT SVG LOGO" height={64} style={{ height: 64, width: 'auto', objectFit: 'contain', display: 'block' }} />
      </>
    ),
    name: "SGT SVG LOGO",
    title: "",
  },
  {
    quote: (
      <>
        <img src="/sample%20logos/logos/TSG%20SVG%20LOGO.svg" alt="TSG SVG LOGO" height={64} style={{ height: 64, width: 'auto', objectFit: 'contain', display: 'block' }} />
      </>
    ),
    name: "TSG SVG LOGO",
    title: "",
  },
  {
    quote: (
      <>
        <img src="/sample%20logos/logos/SPACE%20LOGO.svg" alt="SPACE LOGO" height={64} style={{ height: 64, width: 'auto', objectFit: 'contain', display: 'block' }} />
      </>
    ),
    name: "SPACE LOGO",
    title: "",
  },
  {
    quote: (
      <>
        <img src="/sample%20logos/logos/CASH%20BOX%20SVG%20LOGO.svg" alt="CASH BOX SVG LOGO" height={64} style={{ height: 64, width: 'auto', objectFit: 'contain', display: 'block' }} />
      </>
    ),
    name: "CASH BOX SVG LOGO",
    title: "",
  },
];

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="h-32 rounded-md flex flex-col antialiased bg-black items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={logos}
        direction="right"
        speed="slow"
        pauseOnHover={false}
      />
    </div>
  );
} 