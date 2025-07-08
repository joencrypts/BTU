"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export const AnimatedLogo = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex items-center h-12 w-[220px]">
      <motion.div
        initial={{ opacity: 1, x: 0 }}
        animate={{ opacity: showText ? 0 : 1, x: showText ? 50 : 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="absolute left-0"
      >
        <Image src="/BRAND TOP UP - ICON LOGO FINAL.svg" alt="Logo" width={40} height={40} className="object-contain" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: showText ? 1 : 0, x: showText ? 0 : -50 }}
        transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
        className="pl-12 text-xl font-bold text-black dark:text-white whitespace-nowrap"
      >
        {showText ? (
          <span style={{ fontSize: 24, fontWeight: 800, lineHeight: '40px', height: 40, display: 'inline-flex', alignItems: 'center', letterSpacing: '0.05em' }} className="text-white font-extrabold">
            BTU
          </span>
        ) : null}
      </motion.div>
    </div>
  );
};
