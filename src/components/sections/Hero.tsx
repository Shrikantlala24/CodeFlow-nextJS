
import React from "react";

export const Hero = () => {
  return (
    <section className="relative flex w-full flex-col items-center pt-32 pb-24 px-4">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black/50"></div>
        <div className="absolute inset-0 bg-[url('/lovable-uploads/4e22d660-1d8d-480e-a8c2-366da979c859.png#x=0&y=0&width=425&height=118')] bg-cover bg-center opacity-50"></div>
      </div>

      <div className="bg-black/50 border flex items-center gap-2 px-3.5 py-2 rounded-full border-[rgba(255,255,255,0.15)] border-solid mb-6 relative z-10">
        <span className="bg-[rgba(152,85,255,1)] text-[10px] text-black font-bold whitespace-nowrap leading-tight px-2 py-0.5 rounded-full">
          NEW
        </span>
        <span className="text-[#9855FF] text-sm font-normal">
          Latest integration just arrived
        </span>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-medium leading-tight tracking-tighter">
          Boost your
          <br />
          Tech-intelligence.
        </h1>

        <p className="text-white/80 text-lg font-normal mt-6 max-w-lg">
          CodeFlow transforms complex programming concepts into clear, intuitive
          knowledge through personalized learning experiences designed for your
          unique way of thinking.
        </p>

        <button className="bg-white text-black font-medium px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors mt-8">
          Start for free
        </button>
      </div>

      <div className="relative z-10 w-full max-w-5xl mt-16">
        <img
          src="/lovable-uploads/4e22d660-1d8d-480e-a8c2-366da979c859.png#x=0&y=118&width=425&height=124"
          alt="Dashboard Preview"
          className="w-full rounded-lg border border-purple-500/20 shadow-lg shadow-purple-500/20"
        />
      </div>
    </section>
  );
};
