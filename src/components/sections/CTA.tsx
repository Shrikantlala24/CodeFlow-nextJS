
import React, { useState } from "react";

export const CTA = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Email submitted:", email);
  };

  return (
    <section className="py-24 px-4 max-w-6xl mx-auto">
      <div className="bg-[rgba(30,30,40,0.5)] border border-[rgba(255,255,255,0.1)] rounded-xl p-12 text-center">
        <h2 className="text-4xl font-medium mb-6">
          AI-driven SEO for everyone.
        </h2>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-6">
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="w-full bg-[rgba(20,20,30,0.5)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white placeholder-white/50 pr-28"
              required
            />
            <button
              type="submit"
              className="absolute right-1 top-1 bottom-1 bg-white text-black font-medium px-4 rounded-md hover:bg-gray-100 transition-colors"
            >
              Join waitlist
            </button>
          </div>
        </form>

        <div className="flex items-center justify-center gap-4 text-sm text-white/70">
          <span>No credit card required</span>
          <span>·</span>
          <span>7-days free trial</span>
        </div>
      </div>
    </section>
  );
};
