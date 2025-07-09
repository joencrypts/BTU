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
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black/60 backdrop-blur-md" style={{background: 'linear-gradient(120deg, rgba(30,41,59,0.3), rgba(0,0,0,0.6))'}}>
          <p>Digital Marketing Tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Content Creation",
      value: "content-creation",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black/60 backdrop-blur-md" style={{background: 'linear-gradient(120deg, rgba(30,41,59,0.3), rgba(0,0,0,0.6))'}}>
          <p>Content Creation Tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Web Development",
      value: "web-development",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black/60 backdrop-blur-md" style={{background: 'linear-gradient(120deg, rgba(30,41,59,0.3), rgba(0,0,0,0.6))'}}>
          <p>Web Development Tab</p>
          <DummyContent />
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