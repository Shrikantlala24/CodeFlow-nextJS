
import React from "react";

export const Features = () => {
  return (
    <section className="flex flex-col items-center py-24 px-4 max-w-6xl mx-auto">
      <h2 className="text-white text-center text-3xl font-medium tracking-tight max-w-xl">
        Harness the power of AI, making you addicted towards learning
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full">
        <div className="col-span-1 bg-[rgba(30,30,40,0.5)] border border-[rgba(255,255,255,0.1)] rounded-xl p-6 flex flex-col">
          <img
            src="/lovable-uploads/4e22d660-1d8d-480e-a8c2-366da979c859.png#x=19&y=346&width=100&height=100" 
            alt="Code assistance"
            className="w-24 h-24 mb-6"
          />
          <h3 className="text-white font-medium text-lg mb-3">
            Code assistance
          </h3>
          <p className="text-white/70 font-normal text-sm">
            Helps you set and achieve coding goals with guided assistance.
          </p>
        </div>
        
        <div className="col-span-1 bg-[rgba(30,30,40,0.5)] border border-[rgba(255,255,255,0.1)] rounded-xl p-6 flex flex-col">
          <img
            src="/lovable-uploads/4e22d660-1d8d-480e-a8c2-366da979c859.png#x=139&y=346&width=100&height=100"
            alt="User-friendly dashboard"
            className="w-24 h-24 mb-6"
          />
          <h3 className="text-white font-medium text-lg mb-3">
            User-friendly dashboard
          </h3>
          <p className="text-white/70 font-normal text-sm">
            Track your learning progress with intuitive visual tools.
          </p>
        </div>
        
        <div className="col-span-1 bg-[rgba(30,30,40,0.5)] border border-[rgba(255,255,255,0.1)] rounded-xl p-6 flex flex-col">
          <img
            src="/lovable-uploads/4e22d660-1d8d-480e-a8c2-366da979c859.png#x=259&y=346&width=100&height=100"
            alt="Visual reports"
            className="w-24 h-24 mb-6"
          />
          <h3 className="text-white font-medium text-lg mb-3">
            Visual reports
          </h3>
          <p className="text-white/70 font-normal text-sm">
            Clear insights into your learning and coding performance.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 w-full">
        <div className="col-span-1 bg-[rgba(30,30,40,0.5)] border border-[rgba(255,255,255,0.1)] rounded-xl p-6 flex flex-col">
          <div className="flex items-start">
            <img
              src="/lovable-uploads/4e22d660-1d8d-480e-a8c2-366da979c859.png#x=19&y=460&width=100&height=100"
              alt="Performance metrics"
              className="w-24 h-24 mb-6"
            />
            <div className="ml-4">
              <h3 className="text-white font-medium text-lg mb-3">
                Performance metrics
              </h3>
              <p className="text-white/70 font-normal text-sm">
                Track your performance and progress over time.
              </p>
            </div>
          </div>
        </div>
        
        <div className="col-span-1 bg-[rgba(30,30,40,0.5)] border border-[rgba(255,255,255,0.1)] rounded-xl p-6 flex flex-col">
          <div className="flex items-start">
            <img
              src="/lovable-uploads/4e22d660-1d8d-480e-a8c2-366da979c859.png#x=339&y=460&width=100&height=100"
              alt="Smart Keyword Generator"
              className="w-24 h-24 mb-6"
            />
            <div className="ml-4">
              <h3 className="text-white font-medium text-lg mb-3">
                Smart Keyword Generator
              </h3>
              <p className="text-white/70 font-normal text-sm">
                Automatic suggestions for the best learning paths.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
