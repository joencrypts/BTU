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
import OverlaySection from "./components/ui/OverlaySection";

export default function Home() {
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "Service", link: "#service" },
    { name: "Portfolio", link: "#portfolio" },
    { name: "About Us", link: "#about" },
  ];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

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
      <OverlaySection visible={showOverlay} />

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
      <section className="relative z-10 flex flex-col items-center justify-center p-8 sm:p-16 w-full bg-black">
        <h2 className="text-4xl sm:text-6xl font-extrabold text-white mb-12 text-center">FAQ</h2>
        <ExpandableCardFAQ
          faqs={[
            { question: "Can you work with specific budget?", answer: "Yes, we tailor our services to fit a wide range of budgets. Contact us to discuss your needs!" },
            { question: "Do you work with businesses of all sizes?", answer: "Absolutely! We work with startups, small businesses, and large enterprises alike." },
            { question: "Do you provide influence marketing?", answer: "Yes, we offer influencer marketing as part of our digital marketing services." },
            { question: "What I want to do to collaborate with you!", answer: "Just reach out via our contact form or email, and we'll get back to you to discuss collaboration opportunities." },
            { question: "Do you work with businesses of all sizes?", answer: "Yes, our solutions are scalable for any business size." },
            { question: "Do you provide influence marketing?", answer: "We have a network of influencers to help promote your brand." },
            { question: "What I want to do to collaborate with you!", answer: "Let's connect and explore how we can work together!" },
          ]}
        />
      </section>

      {/* Get in Touch Section */}
      <section className="relative z-10 flex flex-col items-center justify-center p-8 sm:p-16 bg-black">
        <TextRevealCardPreview />
        <a href="mailto:hello@brandtopup.com" className="mt-8 inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-400 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition-transform">
          Get in Touch
        </a>
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
