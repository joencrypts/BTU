import React from "react";

export default function OverlaySection({ visible }: { visible: boolean }) {
  return (
    <div
      className={`
        fixed left-0 bottom-0 w-full h-1/2 bg-white z-50 transition-transform duration-700
        ${visible ? "translate-y-0" : "translate-y-full"}
        flex items-center justify-center
      `}
      style={{ borderTopLeftRadius: "2rem", borderTopRightRadius: "2rem" }}
    >
      <div className="max-w-4xl w-full flex flex-col items-start justify-center p-12">
        <h1 className="text-6xl font-bold text-black mb-8">Ideas and Execution</h1>
        <p className="text-2xl text-black mb-8">A modern creative agency based in the heart of Dubai.</p>
        {/* Social icons or images can be added here if needed */}
      </div>
    </div>
  );
} 