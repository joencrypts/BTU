import React, { useRef, useEffect, useState } from "react";

interface SimpleLogoMarqueeProps {
  logos: { src: string; alt: string }[];
  speedSeconds?: number; // duration for one full loop
}

const SimpleLogoMarquee: React.FC<SimpleLogoMarqueeProps> = ({ logos, speedSeconds = 40 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const [repeatCount, setRepeatCount] = useState(2);

  useEffect(() => {
    if (containerRef.current && rowRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const rowWidth = rowRef.current.scrollWidth / repeatCount;
      if (rowWidth > 0) {
        const needed = Math.ceil(containerWidth / rowWidth) + 1;
        setRepeatCount(needed);
      }
    }
  }, [logos, speedSeconds]);

  // Repeat the logos enough times to fill the container
  const repeatedLogos = Array.from({ length: repeatCount }, () => logos).flat();

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden max-w-3xl mx-auto bg-black py-4"
      style={{
        WebkitMaskImage:
          'linear-gradient(to right, transparent 0%, black 40%, black 60%, transparent 100%)',
        maskImage:
          'linear-gradient(to right, transparent 0%, black 40%, black 60%, transparent 100%)',
      }}
    >
      <div
        ref={rowRef}
        className="flex gap-12 animate-simple-marquee"
        style={{
          animationDuration: `${speedSeconds}s`,
        }}
      >
        {repeatedLogos.map((logo, idx) => (
          <img
            key={idx}
            src={logo.src}
            alt={logo.alt}
            className="h-16 w-auto object-contain"
            style={{ minWidth: 64 }}
          />
        ))}
      </div>
      <style jsx global>{`
        @keyframes simple-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-simple-marquee {
          width: max-content;
          animation: simple-marquee linear infinite;
        }
      `}</style>
    </div>
  );
};

export default SimpleLogoMarquee; 