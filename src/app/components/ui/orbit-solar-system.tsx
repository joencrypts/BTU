import React, { useEffect, useState, useRef } from "react";

const orbits = [150, 220]; // Two different radii for two orbits
const services = ["Digital Marketing", "Web Development", "Brand Strategy", "Content Creation"];
const dotsPerOrbit = 2; // Two dots per orbit, 180 degrees apart
const orbitDuration = 24; // Seconds for a full revolution (slower)

const OrbitSolarSystem: React.FC = () => {
  // Client-only star generation
  const [stars, setStars] = useState<{ left: number; top: number; size: number }[]>([]);
  // Shared angle for all orbits
  const [angle, setAngle] = useState(0);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    const newStars = Array.from({ length: 60 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2 + 1,
    }));
    setStars(newStars);
  }, []);

  useEffect(() => {
    let frame: number;
    function animate(now: number) {
      if (startRef.current === null) startRef.current = now;
      // Animate full circle in orbitDuration seconds
      const t = ((now - startRef.current) / 1000) / orbitDuration;
      setAngle((t * 360) % 360);
      frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  // Assign two services to each orbit
  const orbitServices = [
    services.slice(0, 2), // First two services for first orbit
    services.slice(2, 4), // Last two services for second orbit
  ];

  return (
    <div className="relative flex items-center justify-center w-[700px] h-[700px] bg-black overflow-hidden">
      {/* Starry background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-30"
            style={{
              width: star.size,
              height: star.size,
              left: `${star.left}%`,
              top: `${star.top}%`,
              filter: 'blur(0.5px)'
            }}
          />
        ))}
      </div>
      {/* Center Brand Logo with glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
        <div className="rounded-full bg-gradient-to-br from-blue-700/40 to-purple-700/40 p-8 shadow-2xl">
          <img
            src="/BRAND TOP UP - ICON LOGO WHITE.svg"
            alt="Logo"
            className="w-24 h-24 object-contain drop-shadow-2xl"
          />
        </div>
      </div>
      {/* Two Orbit Lines */}
      {orbits.map((radius, orbitIdx) => (
        <div
          key={orbitIdx}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ width: radius * 2, height: radius * 2, zIndex: 10 }}
        >
          <div
            className="absolute w-full h-full rounded-full border border-gray-700 opacity-40"
            style={{ borderWidth: 2 }}
          />
        </div>
      ))}
      {/* Animated Glowing Dots, two per orbit, 180 degrees apart, each with a unique service label, inner orbit offset by 90deg */}
      {orbits.map((radius, orbitIdx) => (
        Array.from({ length: dotsPerOrbit }).map((_, dotIdx) => {
          // Dots are 180deg apart; inner orbit offset by 90deg
          const orbitOffset = orbitIdx === 0 ? 90 : 0;
          const dotAngle = angle + orbitOffset + (dotIdx * 180);
          const rad = (dotAngle * Math.PI) / 180;
          const x = Math.sin(rad) * radius;
          const y = -Math.cos(rad) * radius;
          // Place label to the outside of the dot, always away from the center
          const labelOffset = 40;
          const labelX = Math.sin(rad) * (radius + labelOffset);
          const labelY = -Math.cos(rad) * (radius + labelOffset);
          // Each dot gets a unique service label for its orbit
          const label = orbitServices[orbitIdx][dotIdx];
          return (
            <div
              key={`orbit-${orbitIdx}-dot-${dotIdx}`}
              className="absolute left-1/2 top-1/2"
              style={{ width: 0, height: 0, zIndex: 30 }}
            >
              <span
                style={{
                  position: 'absolute',
                  left: x,
                  top: y,
                  width: 18,
                  height: 18,
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, #60a5fa 60%, #2563eb 100%)',
                  boxShadow: '0 0 24px 12px #60a5fa88',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 10,
                  display: 'inline-block',
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  left: labelX,
                  top: labelY,
                  transform: 'translate(-50%, -50%)',
                  color: 'white',
                  fontWeight: 600,
                  fontSize: 22,
                  background: 'rgba(30,41,59,0.7)',
                  borderRadius: 8,
                  padding: '4px 16px',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 2px 12px 0 #0008',
                }}
              >
                {label}
              </span>
            </div>
          );
        })
      ))}
    </div>
  );
};

export default OrbitSolarSystem; 