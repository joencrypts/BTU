"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export type FAQ = {
  question: string;
  answer: string;
};

function useOutsideClick(ref: React.RefObject<HTMLDivElement>, callback: (event: MouseEvent | TouchEvent) => void) {
  React.useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || !(event.target instanceof Node) || ref.current.contains(event.target)) {
        return;
      }
      callback(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
}

export default function ExpandableCardFAQ({ faqs }: { faqs: FAQ[] }) {
  const [active, setActive] = useState<FAQ | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref as React.RefObject<HTMLDivElement>, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-md bg-white dark:bg-neutral-900 rounded-2xl shadow-xl p-8 flex flex-col items-center"
            >
              <button
                className="absolute top-4 right-4 bg-white rounded-full h-7 w-7 flex items-center justify-center shadow"
                onClick={() => setActive(null)}
                aria-label="Close"
              >
                <span className="text-xl">×</span>
              </button>
              <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-4 text-center">
                {active.question}
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300 text-center">
                {active.answer}
              </p>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full flex flex-col gap-6">
        {faqs.map((faq, index) => (
          <li key={index} className="flex items-center justify-between py-2">
            <span className="text-white text-lg font-medium">{faq.question}</span>
            <button
              className="bg-white text-black font-normal rounded-full px-5 py-1 text-base shadow-sm hover:bg-gray-200 transition"
              onClick={() => setActive(faq)}
            >
              To Know
            </button>
          </li>
        ))}
      </ul>
    </>
  );
} 