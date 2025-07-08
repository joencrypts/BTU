"use client";
import React from "react";
import { ContainerScroll } from "./container-scroll-animation";

export default function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              What is <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Brand Top Up
              </span>
            </h1>
          </>
        }
      >
        <div
          className="bg-yellow-50 border border-yellow-200 shadow-lg rounded-2xl p-8 w-full h-full text-left font-mono text-gray-800 text-base sm:text-lg leading-relaxed relative overflow-auto ios-scrollbar"
          style={{
            backgroundImage: 'repeating-linear-gradient(to bottom, #fefcbf, #fefcbf 36px, #f6e05e 37px, #fefcbf 38px)',
            backgroundSize: '100% 38px',
          }}
        >
          <p className="mb-4">
            At Brand Top Up (BTU), we believe that marketing is more than just promotion — it&apos;s about building meaningful connections, creating memorable experiences, and telling stories that resonate. Founded with the vision of empowering brands to stand out in a saturated digital landscape, BTU has grown into a creative powerhouse that blends strategy, innovation, and design.
          </p>
          <p className="mb-4">
            We specialize in data-driven marketing, creative branding, UI/UX design, social media storytelling, and performance campaigns that deliver measurable results. Whether you&apos;re a startup looking to make your mark or an established company aiming to refresh your brand, we craft custom strategies that reflect your voice and align with your goals.
          </p>
          <p className="mb-4">
            What sets us apart is our commitment to combining art and analytics. Our team of strategists, designers, and digital experts collaborates closely to understand your brand inside-out — then we elevate it with bold design, compelling content, and precision-targeted campaigns.
          </p>
          <p>
            At BTU, we don&apos;t just follow trends — we create them. We&apos;re passionate about helping brands evolve, engage, and grow in ways that are authentic and sustainable. From concept to execution, every move we make is designed to top up your brand value and push it to the next level.
          </p>
        </div>
      </ContainerScroll>
    </div>
  );
} 