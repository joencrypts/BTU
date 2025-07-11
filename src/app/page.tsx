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
import HeroParallaxDemo from "./components/hero-parallax-demo";
import { Spotlight } from "./components/ui/spotlight-new";
import ExpandableCardFAQ from "./components/ui/expandable-card-faq";
import HeroScrollDemo from "./components/ui/container-scroll-animation-demo";
import { BackgroundGradientAnimation } from "./components/ui/background-gradient-animation";
import OrbitSolarSystem from "./components/ui/orbit-solar-system";
import LayoutGridDemo from "./components/ui/layout-grid-demo";
import TextRevealCardPreview from "./components/ui/text-reveal-card-demo";
import AnimatedTestimonialsDemo from "./components/ui/animated-testimonials-demo";
import VortexDemo from "./components/ui/vortex-demo";
import { DemoOne } from "./components/ui/hero-odyssey";
import SimpleLogoMarquee from "./components/ui/simple-logo-marquee";
import TabsDemo from "./components/ui/tabs-demo";
import { StaggerTestimonials } from "./components/ui/stagger-testimonials";
import { TextGenerateEffect } from "./components/ui/text-generate-effect";
import { ThreeDPhotoCarouselDemo } from "./components/ui/3d-carousel";
import ContactForm from "./components/ContactForm";


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
    <div className="relative min-h-screen w-full bg-black overflow-x-hidden flex flex-col">
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

      {/* New Hero Odyssey Section */}
      <DemoOne />

      {/* About Us Section with Title Glow Effect */}
      <section className="bg-black text-white px-6 py-28 text-center">
        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight space-y-2">
          <span
            className="block title-glow"
            style={{
              background: 'linear-gradient(to right, #ffffff, #e5e5e5)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              transition: 'all 0.3s ease',
              display: 'block',
            }}
          >
            A modern creative agency
          </span>
          <span
            className="block title-glow"
            style={{
              background: 'linear-gradient(to right, #ffffff, #e5e5e5)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              transition: 'all 0.3s ease',
              display: 'block',
            }}
          >
            based in the heart of Dubai.
          </span>
        </h1>

        {/* Description */}
        <p className="mt-12 max-w-4xl mx-auto text-lg md:text-xl text-white/90 leading-relaxed font-medium text-justify">
          We solve unique business challenges through dopamine-driven narratives, sensory-rich touchpoints,
          and emotionally intelligent design that resonates with audiences at a neurological level. Our team blends
          creative storytelling, strategic branding, UI/UX design & marketing science to craft unforgettable
          brand experiences to lead the future.
        </p>
        <style>{`
          .title-glow:hover {
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.6),
                         0 0 20px rgba(255, 255, 255, 0.4);
          }
        `}</style>
      </section>
 

      {/* Orbit Solar System Section */}
      <section className="relative z-10 flex flex-col items-center justify-center p-4 sm:p-8 bg-black mt-0">
        <h2 className="text-xl sm:text-3xl font-semibold text-white mb-4 text-center">Our Services</h2>
        <div className="scale-75 sm:scale-90 -mt-8 mb-2">
          <OrbitSolarSystem />
        </div>
        <div className="max-w-5xl w-full mx-auto mt-4">
          <TabsDemo />
        </div>
      </section>

      {/* 3D Photo Carousel Section */}
      <section className="relative z-10 flex flex-col items-center justify-center py-8 bg-black">
        <ThreeDPhotoCarouselDemo />
      </section>

      {/* Text Generate Effect Section */}
      <section className="relative z-10 flex flex-col items-center justify-center py-4 bg-black">
        <TextGenerateEffect words="What our clients say about us" className="text-4xl md:text-5xl text-center" />
        <TextGenerateEffect words="Partner with the best Digital Marketing Agency in Dubai" className="text-2xl md:text-3xl text-center mt-2" />
      </section>

      {/* Stagger Testimonials Section */}
      <section className="relative z-10 flex flex-col items-center justify-center py-8 bg-black">
        <StaggerTestimonials />
      </section>
          

      {/* Company Logos Marquee Section */}
      <section className="relative z-10 flex flex-col items-center justify-center py-8 bg-black">
        <SimpleLogoMarquee
          logos={[
            { src: "/sample%20logos/logos/ENZA%20SVG%20LOGO.svg", alt: "ENZA SVG LOGO", style: { height: 96, width: 'auto', objectFit: 'contain', display: 'block' } },
            { src: "/sample%20logos/logos/elite%20mens%20hostel%20logo.svg", alt: "elite mens hostel logo", style: { height: 96, width: 'auto', objectFit: 'contain', display: 'block' } },
            { src: "/sample%20logos/logos/AL%20ZAFFO%20SVG%20LOGO.svg", alt: "AL ZAFFO SVG LOGO", style: { height: 96, width: 'auto', objectFit: 'contain', display: 'block' } },
            { src: "/sample%20logos/logos/president%20education%20logo%20svg.svg", alt: "president education logo svg", style: { height: 96, width: 'auto', objectFit: 'contain', display: 'block' } },
            { src: "/sample%20logos/logos/TM%20SVG%20LOGO..svg", alt: "TM SVG LOGO.", style: { height: 96, width: 'auto', objectFit: 'contain', display: 'block' } },
            { src: "/sample%20logos/logos/QM%20SVG%20LOGO.svg", alt: "QM SVG LOGO", style: { height: 96, width: 'auto', objectFit: 'contain', display: 'block' } },
            { src: "/sample%20logos/logos/SGT%20SVG%20LOGO.svg", alt: "SGT SVG LOGO", style: { height: 96, width: 'auto', objectFit: 'contain', display: 'block' } },
            { src: "/sample%20logos/logos/TSG%20SVG%20LOGO.svg", alt: "TSG SVG LOGO", style: { height: 96, width: 'auto', objectFit: 'contain', display: 'block' } },
            { src: "/sample%20logos/logos/SPACE%20LOGO.svg", alt: "SPACE LOGO", style: { height: 96, width: 'auto', objectFit: 'contain', display: 'block' } },
            { src: "/sample%20logos/logos/CASH%20BOX%20SVG%20LOGO.svg", alt: "CASH BOX SVG LOGO", style: { height: 96, width: 'auto', objectFit: 'contain', display: 'block' } },
          ]}
          speedSeconds={40}
        />
      </section>

      {/* Success Story Section */}
      <section className="relative z-10 flex flex-col items-center justify-center p-8 sm:p-16 w-full">
        <h2 className="text-4xl sm:text-6xl font-extrabold text-white mb-12 text-center">Success Story</h2>
        <AnimatedTestimonialsDemo />
      </section>

      {/* FAQ Section */}
      <section className="bg-black text-white px-6 pt-20 pb-6">
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
      <section className="bg-black text-white px-1 pt-1 pb-1 flex items-center justify-center min-h-screen">
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">
          {/* Left Text */}
          <div className="text-left">
            <h2 className="text-8xl md:text-8xl font-extrabold leading-tight">
              Let<span className="inline-block -ml-1">'</span>s<br />
              Work<br />
              Together
            </h2>
          </div>

          {/* Right Form - Improved Alignment */}
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white px-0 py-0">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 text-white items-start">
          {/* Column 1: Logo only */}
          <div className="flex justify-center md:justify-start items-start w-full md:w-1/3">
           <img src="/BTU FINAL FULL LOGO WHITE.svg" alt="Logo" className="w-56 h-56 object-contain" />
          </div>

          {/* Column 2: Socials */}
          <div className="flex flex-col items-center md:items-start w-full md:w-1/3 mt-16">
            <div className="flex items-center mb-4 mt-2 md:mt-0">
              <span className="text-xl font-bold">Socials</span>
            </div>
            <div className="flex space-x-6 mb-2 mt-2 md:mt-4">
              <a href="#" aria-label="Facebook" className="hover:opacity-80"><svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8 text-blue-500"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg></a>
              <a href="#" aria-label="Instagram" className="hover:opacity-80"><svg fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-pink-500" stroke="currentColor"><rect width="20" height="20" x="2" y="2" rx="5" strokeWidth="2"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/></svg></a>
              <a href="#" aria-label="LinkedIn" className="hover:opacity-80"><svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8 text-sky-500"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg></a>
              <a href="#" aria-label="WhatsApp" className="hover:opacity-80"><svg fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-green-500" stroke="currentColor"><path d="M20.52 3.48A12.07 12.07 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.12.55 4.13 1.6 5.92L0 24l6.24-1.63A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.66-.5-5.22-1.44l-.37-.22-3.7.97.99-3.6-.24-.38A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.43-2.25-1.37-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-.99 2.43.01 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.62.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/></svg></a>
            </div>
          </div>

          {/* Column 3: UAE Deira, Dubai, number and email */}
          <div className="flex flex-col items-center md:items-end w-full md:w-1/3 mt-16">
            <div className="flex items-center mb-2 mt-2 md:mt-0">
              <span className="text-xl font-bold">UAE</span>
            </div>
            <div className="text-gray-300 mb-1">Deira, Dubai</div>
            <div className="text-gray-300 mb-1">+971 50 69 19 053</div>
            <div className="text-gray-300 mb-1">contact@brandtopup.com</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
