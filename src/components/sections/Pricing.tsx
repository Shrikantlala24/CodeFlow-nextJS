import React, { useState } from "react";

export const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const PricingCard = ({ title, price, features, isPro = false }) => (
    <div className="self-stretch min-w-60 w-[307px] my-auto">
      <div
        className={`${
          isPro
            ? "relative shadow-[0px_10px_74px_10px_rgba(78,0,191,0.41)]"
            : "bg-[rgba(0,0,0,0.06)]"
        } border w-full p-5 rounded-[10px] border-[rgba(255,255,255,0.15)] border-solid`}
      >
        {isPro && (
          <img
            src="https://cdn.builder.io/api/v1/image/assets/200cb9c433534172b9d9ed52ab4b1cd9/3975b02460da5e14ea6aa3cbe3525143d111de11?placeholderIfAbsent=true"
            className="absolute h-full w-full object-cover inset-0"
          />
        )}
        <div className="relative">
          <div className="max-w-full w-[147px] whitespace-nowrap">
            <h3 className="text-white text-2xl font-medium leading-none tracking-[-0.01px]">
              {title}
            </h3>
            <div className="text-white text-base font-normal leading-loose tracking-[-0px] mt-1.5">
              ${price}/mo
            </div>
          </div>

          <div className="min-h-[140px] w-full max-w-[163px] text-sm text-white font-normal tracking-[-0px] leading-loose mt-10">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-[5px] py-2.5">
                <img
                  src={isPro ? "https://cdn.builder.io/api/v1/image/assets/200cb9c433534172b9d9ed52ab4b1cd9/01a161e25e988786032f270418c1c595de6da449?placeholderIfAbsent=true" : "https://cdn.builder.io/api/v1/image/assets/200cb9c433534172b9d9ed52ab4b1cd9/8479a9bc4b2e19656a08eb5f13d4f77d0cb78cbd?placeholderIfAbsent=true"}
                  alt="Check"
                  className="aspect-[1] object-contain w-[15px] self-stretch shrink-0 my-auto"
                />
                <div className="self-stretch w-[143px] my-auto">{feature}</div>
              </div>
            ))}
          </div>

          <button
            className={`self-stretch ${
              isPro ? "bg-[rgba(140,69,255,0.4)]" : "bg-[rgba(61,61,61,0.4)]"
            } border gap-2.5 overflow-hidden text-sm text-white font-normal tracking-[-0px] leading-[26px] mt-[179px] px-[15px] py-1.5 rounded-[10px] border-[rgba(255,255,255,0.15)] border-solid hover:bg-opacity-60 transition-colors max-md:mt-10 w-full`}
          >
            Join waitlist
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative flex flex-col px-[129px] py-3.5 max-md:max-w-full max-md:px-5">
      <div className="self-center z-0 flex flex-col items-center max-md:max-w-full">
        <div className="flex w-[433px] max-w-full flex-col items-center text-white text-center">
          <h2 className="text-[56px] font-medium leading-none tracking-[-0.84px] max-md:text-[40px]">
            Pricing
          </h2>
          <p className="text-xl font-normal leading-[31px] tracking-[-0px] mt-10 max-md:max-w-full">
            Choose the right plan to meet your SEO needs and start optimizing
            today.
          </p>
        </div>

        <div className="flex items-center gap-2.5 justify-center flex-wrap mt-[111px] max-md:max-w-full max-md:mt-10">
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

        <div className="absolute z-0 flex items-center gap-1.5 -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="self-stretch w-[33px] my-auto"
          >
            <div className="bg-[rgba(140,69,255,1)] flex flex-col justify-center px-[3px] py-0.5 rounded-[30px]">
              <div
                className={`bg-[rgba(249,245,255,1)] flex w-4 shrink-0 h-4 rounded-[30px] transition-transform ${
                  isYearly ? "translate-x-full" : ""
                }`}
              />
            </div>
          </button>
          <span className="text-white text-base font-medium leading-[31px] tracking-[-0px] self-stretch my-auto">
            Billed Yearly
          </span>
        </div>
      </div>
    </section>
  );
};
