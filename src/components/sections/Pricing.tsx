
import React, { useState } from "react";

export const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const PricingCard = ({ title, price, features, isPro = false }) => (
    <div className={`bg-[rgba(30,30,40,0.5)] border rounded-xl p-6 flex flex-col ${isPro ? "border-purple-500" : "border-[rgba(255,255,255,0.1)]"}`}>
      <h3 className="text-xl font-medium mb-1">
        {title}
      </h3>
      <div className="text-lg mb-6">
        ${price}/mo
      </div>

      <ul className="space-y-4 flex-1 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <svg
              className={`w-5 h-5 ${isPro ? "text-purple-500" : "text-white/50"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <span className="text-sm text-white/80">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={`py-2 rounded-lg border ${
          isPro ? "bg-purple-600 border-purple-500" : "bg-[rgba(30,30,40,0.8)] border-[rgba(255,255,255,0.1)]"
        } hover:bg-opacity-80 transition-colors`}
      >
        Join waitlist
      </button>
    </div>
  );

  return (
    <section className="py-24 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-medium mb-4">
          Pricing
        </h2>
        <p className="text-white/80 text-lg max-w-lg mx-auto">
          Choose the right plan to meet your learning needs and start optimizing
          today.
        </p>
      </div>

      <div className="flex justify-center items-center space-x-2 mb-12">
        <span className={`text-sm ${!isYearly ? "text-white" : "text-white/50"}`}>Monthly</span>
        <button
          onClick={() => setIsYearly(!isYearly)}
          className="relative inline-flex h-6 w-11 items-center rounded-full bg-purple-600"
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
              isYearly ? "translate-x-6" : "translate-x-1"
            }`}
          />
        </button>
        <span className={`text-sm ${isYearly ? "text-white" : "text-white/50"}`}>Yearly</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <PricingCard
          title="Basic"
          price="29"
          features={[
            "Keyword optimization",
            "Automated meta tags",
            "SEO monitoring",
            "Monthly reports",
          ]}
        />

        <PricingCard
          title="Pro"
          price="79"
          features={[
            "Keyword optimization",
            "Automated meta tags",
            "SEO monitoring",
            "Monthly reports",
            "Content suggestions",
            "Link optimization",
          ]}
          isPro={true}
        />

        <PricingCard
          title="Business"
          price="149"
          features={[
            "Keyword optimization",
            "Automated meta tags",
            "SEO monitoring",
            "Monthly reports",
            "Content suggestions",
            "Link optimization",
            "Multi-user access",
            "API integration",
          ]}
        />
      </div>
    </section>
  );
};
