"use client";
import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./components/ui/resizable-navbar";
import { GlareCard } from "./components/ui/glare-card";
import HeroParallaxDemo from "./components/hero-parallax-demo";
import { Spotlight } from "./components/ui/spotlight-new";
import ExpandableCardFAQ from "./components/ui/expandable-card-faq";
import HeroScrollDemo from "./components/ui/container-scroll-animation-demo";
import { BackgroundGradientAnimation } from "./components/ui/background-gradient-animation";
import { PointerHighlight } from "./components/ui/pointer-highlight";
import GlowingEffectDemo from "./components/ui/glowing-effect-demo";
import LayoutGridDemo from "./components/ui/layout-grid-demo";
import InfiniteMovingCardsDemo from "./components/ui/infinite-moving-cards-demo";
import TextRevealCardPreview from "./components/ui/text-reveal-card-demo";
import AnimatedTestimonialsDemo from "./components/ui/animated-testimonials-demo";
import AppleCardsCarouselDemo from "./components/ui/apple-cards-carousel-demo";
import VortexDemo from "./components/ui/vortex-demo";


export default function Home() {
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "Service", link: "#service" },
    { name: "Portfolio", link: "#portfolio" },
    { name: "About Us", link: "#about" },
  ];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setShowOverlay(window.scrollY > 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-black overflow-x-hidden">
      {/* Floating Navbar */}
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-neutral-600 dark:text-neutral-300"
              >
                <span>{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Let&apos;s Talk
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Plain Black Hero Section */}
      <section className="w-full h-screen relative flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/bg vid.mp4"
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        {/* Gradient overlay for blur/transition effect at the bottom */}
        <div className="absolute bottom-0 left-0 w-full h-40 z-20 pointer-events-none" style={{background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)"}} />
        {/* Add hero content here if needed */}
      </section>
 

      {/* About + Stats Section (side by side on desktop) */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center p-8 sm:p-16 bg-black/20 overflow-hidden pb-0 gap-8">
        <Spotlight />
        <div className="w-full flex flex-col items-center justify-center">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-8 text-center">Bold Moves. Bold <PointerHighlight><span>Numbers.</span></PointerHighlight></h2>
          <div className="flex flex-col md:flex-row gap-8 w-full justify-center items-center">
            <GlareCard className="flex flex-col items-center justify-center">
              <span className="text-6xl font-extrabold text-white">100+</span>
              <span className="text-white font-bold text-lg mt-2 text-center">Viral<br />Campaigns</span>
            </GlareCard>
            <GlareCard className="flex flex-col items-center justify-center">
              <span className="text-6xl font-extrabold text-white">50+</span>
              <span className="text-white font-bold text-lg mt-2 text-center">Clients</span>
            </GlareCard>
            <GlareCard className="flex flex-col items-center justify-center">
              <span className="text-6xl font-extrabold text-white">100+</span>
              <span className="text-white font-bold text-lg mt-2 text-center">Projects</span>
            </GlareCard>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 flex flex-col items-center justify-center p-8 sm:p-16 bg-black">
        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-8 text-center">Our Services</h2>
        <GlowingEffectDemo />
      </section>

      {/* Portfolio Section */}
      <section className="relative z-10 flex flex-col items-center justify-center p-8 sm:p-16 bg-black">
        <h2 className="text-4xl sm:text-6xl font-extrabold text-white mb-4 text-center">Our Featured Portfolio</h2>
        <LayoutGridDemo />
      </section>

      {/* Clients Section */}
      <section className="relative z-10 flex flex-col items-center justify-center p-8 sm:p-16 bg-black">
        <h2 className="text-4xl sm:text-6xl font-extrabold text-white mb-12 text-center">Our Clients</h2>
        <InfiniteMovingCardsDemo />
      </section>

      {/* Why People Choose Us Section */}
      <AppleCardsCarouselDemo />

      {/* Success Story Section */}
      <section className="relative z-10 flex flex-col items-center justify-center p-8 sm:p-16 w-full">
        <h2 className="text-4xl sm:text-6xl font-extrabold text-white mb-12 text-center">Success Story</h2>
        <AnimatedTestimonialsDemo />
      </section>

      {/* FAQ Section */}
      <section className="relative bg-black text-white py-16 px-4 overflow-hidden min-h-screen">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-4">We've Got the Answers You're Looking For</h1>
          <h3 className="text-lg text-gray-400 mb-10">Quick answers to your AI automation questions.</h3>
        </div>
        <div className="max-w-2xl mx-auto space-y-6">
          {[
            {
              q: "How can AI automation help my business?",
              a: "AI automation boosts productivity by streamlining repetitive tasks and increasing efficiency.",
            },
            {
              q: "Is AI automation difficult to integrate?",
              a: "Modern tools are easy to integrate with user-friendly interfaces and APIs.",
            },
            {
              q: "What industries benefit from AI automation?",
              a: "Healthcare, finance, retail, logistics, and many more.",
            },
            {
              q: "Do I need technical knowledge?",
              a: "Not necessarily. Many platforms are built for non-technical users too.",
            },
            {
              q: "What support is offered?",
              a: "We provide 24/7 live chat, email support, and onboarding sessions.",
            },
          ].map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className={`relative rounded-xl overflow-hidden transition-all duration-300 bg-[#1c1c1c] faq-glow ${isOpen ? 'shadow-[0_0_40px_rgba(236,72,153,0.4),0_0_60px_rgba(168,85,247,0.4)]' : ''}`}
                onMouseMove={e => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  e.currentTarget.style.setProperty('--glow-x', `${x}px`);
                  e.currentTarget.style.setProperty('--glow-y', `${y}px`);
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.setProperty('--glow-x', `-9999px`);
                  e.currentTarget.style.setProperty('--glow-y', `-9999px`);
                }}
              >
                {/* Radial Glow (simulating ::after) */}
                <div
                  className="pointer-events-none absolute z-0"
                  style={{
                    left: 'var(--glow-x, -9999px)',
                    top: 'var(--glow-y, -9999px)',
                    width: 520,
                    height: 520,
                    transform: 'translate(-50%, -50%)',
                    background: 'radial-gradient(circle, rgba(236,72,153,0.25), transparent 60%)',
                    borderRadius: '9999px',
                    opacity: 1,
                    transition: 'opacity 0.2s ease',
                  }}
                />
                <button
                  type="button"
                  className={`faq-button w-full flex justify-between items-center px-6 py-4 text-left relative z-10 group cursor-pointer`}
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                >
                  <span className="text-white font-medium">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`faq-answer px-6 pb-4 text-gray-300 transition-all duration-300 ${isOpen ? '' : 'hidden'}`}>{faq.a}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="bg-black text-white min-h-screen flex items-center justify-center px-6 py-16">
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">
          {/* Left Text */}
          <div className="text-left">
            <h2 className="text-8xl md:text-8xl font-extrabold leading-tight">
              Let<span className="inline-block -ml-1">'</span>s<br />
              Work<br />
              Together
            </h2>
          </div>

          {/* Right Form */}
          <form className="space-y-4 w-full max-w-lg">
            {/* Full Name */}
            <input type="text" placeholder="Full Name"
              className="w-full px-5 py-3 bg-transparent border border-white rounded-xl text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-pink-500 transition" />

            {/* Phone + Email */}
            <div className="flex flex-col md:flex-row gap-4">
              <input type="tel" placeholder="Phone Number"
                className="flex-1 px-5 py-3 bg-transparent border border-white rounded-xl text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-pink-500 transition" />
              <input type="email" placeholder="Email"
                className="flex-1 px-5 py-3 bg-transparent border border-white rounded-xl text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-pink-500 transition" />
            </div>

            {/* Message */}
            <textarea rows={4} placeholder="Message"
              className="w-full px-5 py-3 bg-transparent border border-white rounded-xl text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-pink-500 transition resize-none"></textarea>

            {/* Submit Button */}
            <button type="submit"
              className="bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300">
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 p-8 sm:p-16 bg-black">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-8 text-center">Footer</h2>
          <div className="flex flex-col sm:flex-row w-full justify-center items-start gap-12">
            <div className="flex-shrink-0 flex justify-center items-center w-full sm:w-auto mb-8 sm:mb-0">
              <img src="/BRAND TOP UP - ICON LOGO FINAL.svg" alt="Logo" className="w-28 h-28 object-contain" />
            </div>
            <div className="flex flex-1 flex-col sm:flex-row justify-between w-full gap-16">
              <div>
                <div className="text-2xl font-semibold text-white mb-2">Social Media</div>
                <div className="text-xl text-white font-medium">@instagram</div>
                <div className="text-xl text-white font-medium">@facebook</div>
                <div className="text-xl text-white font-medium">@Youtube</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-white mb-2">Email</div>
                <div className="text-xl text-white font-medium">Contact</div>
                <div className="text-xl text-white font-medium">Address</div>
              </div>
          </div>
        </div>
      </div>
      </footer>
    </div>
  );
}
