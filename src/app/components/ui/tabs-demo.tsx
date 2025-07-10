"use client";

import { Tabs } from "./tabs";

export default function TabsDemo() {
  const tabs = [
    {
      title: "Brand Strategy",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-0 md:p-0 text-white bg-black/60 backdrop-blur-md" style={{background: 'linear-gradient(120deg, rgba(30,41,59,0.3), rgba(0,0,0,0.6))'}}>
          <div className="flex flex-col md:flex-row h-full w-full">
            {/* Left: Details */}
            <div className="flex-1 flex flex-col justify-center p-10 gap-6">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Brand Strategy</h2>
              <p className="text-lg md:text-2xl font-normal mb-2">We help you define, position, and grow your brand with a comprehensive strategy tailored to your business goals.</p>
              <ul className="list-disc pl-5 space-y-2 text-base md:text-lg">
                <li>Market Research & Analysis</li>
                <li>Brand Positioning</li>
                <li>Visual Identity & Messaging</li>
                <li>Competitive Differentiation</li>
                <li>Long-term Brand Growth</li>
              </ul>
            </div>
            {/* Right: Image */}
            <div className="flex-1 flex items-center justify-center p-6">
              <img
                src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80"
                alt="Brand Strategy"
                className="object-cover rounded-2xl w-full h-64 md:h-96 max-w-md shadow-lg"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Digital Marketing",
      value: "digital-marketing",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-0 md:p-0 text-white bg-black/60 backdrop-blur-md" style={{background: 'linear-gradient(120deg, rgba(30,41,59,0.3), rgba(0,0,0,0.6))'}}>
          <div className="flex flex-col md:flex-row h-full w-full">
            {/* Left: Details */}
            <div className="flex-1 flex flex-col justify-center p-10 gap-6">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Digital Marketing</h2>
              <p className="text-lg md:text-2xl font-normal mb-2">Expand your reach and grow your business with data-driven digital marketing strategies tailored to your audience.</p>
              <ul className="list-disc pl-5 space-y-2 text-base md:text-lg">
                <li>SEO & SEM Campaigns</li>
                <li>Social Media Management</li>
                <li>Email Marketing</li>
                <li>Analytics & Reporting</li>
                <li>Lead Generation</li>
              </ul>
            </div>
            {/* Right: Image */}
            <div className="flex-1 flex items-center justify-center p-6">
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80"
                alt="Digital Marketing"
                className="object-cover rounded-2xl w-full h-64 md:h-96 max-w-md shadow-lg"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Content Creation",
      value: "content-creation",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-0 md:p-0 text-white bg-black/60 backdrop-blur-md" style={{background: 'linear-gradient(120deg, rgba(30,41,59,0.3), rgba(0,0,0,0.6))'}}>
          <div className="flex flex-col md:flex-row h-full w-full">
            {/* Left: Details */}
            <div className="flex-1 flex flex-col justify-center p-10 gap-6">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Content Creation</h2>
              <p className="text-lg md:text-2xl font-normal mb-2">Engage your audience with high-quality, creative content designed to tell your brand story and drive results.</p>
              <ul className="list-disc pl-5 space-y-2 text-base md:text-lg">
                <li>Copywriting & Blogging</li>
                <li>Photography & Videography</li>
                <li>Graphic Design</li>
                <li>Content Strategy</li>
                <li>Social Media Content</li>
              </ul>
            </div>
            {/* Right: Image */}
            <div className="flex-1 flex items-center justify-center p-6">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
                alt="Content Creation"
                className="object-cover rounded-2xl w-full h-64 md:h-96 max-w-md shadow-lg"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Web Development",
      value: "web-development",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-0 md:p-0 text-white bg-black/60 backdrop-blur-md" style={{background: 'linear-gradient(120deg, rgba(30,41,59,0.3), rgba(0,0,0,0.6))'}}>
          <div className="flex flex-col md:flex-row h-full w-full">
            {/* Left: Details */}
            <div className="flex-1 flex flex-col justify-center p-10 gap-6">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Web Development</h2>
              <p className="text-lg md:text-2xl font-normal mb-2">Build a powerful online presence with custom websites and web applications that are fast, secure, and scalable.</p>
              <ul className="list-disc pl-5 space-y-2 text-base md:text-lg">
                <li>Custom Website Design</li>
                <li>eCommerce Solutions</li>
                <li>Responsive & Mobile-First</li>
                <li>Performance Optimization</li>
                <li>Maintenance & Support</li>
              </ul>
            </div>
            {/* Right: Image */}
            <div className="flex-1 flex items-center justify-center p-6">
              <img
                src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80"
                alt="Web Development"
                className="object-cover rounded-2xl w-full h-64 md:h-96 max-w-md shadow-lg"
              />
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-center justify-center my-40">
      <Tabs tabs={tabs} containerClassName="justify-center" />
    </div>
  );
}

const DummyContent = () => {
  return (
    <img
      src="/linear.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
}; 