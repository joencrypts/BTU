"use client";

import React from "react";
import { InfiniteMovingCards } from "@/app/components/ui/infinite-moving-cards";

const logos = [
  {
    quote: (
      <>
        <img src="/sample%20logos/prsch.png" alt="Prsch" height={64} style={{ height: 64, width: 'auto', objectFit: 'contain', display: 'block' }} />
      </>
    ),
    name: "Prsch",
    title: "",
  },
  {
    quote: (
      <>
        <img src="/sample%20logos/ncd.png" alt="NCD" height={64} style={{ height: 64, width: 'auto', objectFit: 'contain', display: 'block' }} />
      </>
    ),
    name: "NCD",
    title: "",
  },
  {
    quote: (
      <>
        <img src="/sample%20logos/kfc.png" alt="KFC" height={64} style={{ height: 64, width: 'auto', objectFit: 'contain', display: 'block' }} />
      </>
    ),
    name: "KFC",
    title: "",
  },
  {
    quote: (
      <>
        <img src="/sample%20logos/fb.png" alt="Facebook" height={64} style={{ height: 64, width: 'auto', objectFit: 'contain', display: 'block' }} />
      </>
    ),
    name: "Facebook",
    title: "",
  },
  {
    quote: (
      <>
        <img src="/sample%20logos/google.png" alt="Google" height={64} style={{ height: 64, width: 'auto', objectFit: 'contain', display: 'block' }} />
      </>
    ),
    name: "Google",
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