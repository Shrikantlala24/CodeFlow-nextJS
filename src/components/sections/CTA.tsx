import React, { useState } from "react";

export const CTA = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Email submitted:", email);
  };

  return (
    <section className="relative flex w-full flex-col max-md:max-w-full">
      <div className="self-stretch z-0 flex min-h-[558px] w-full max-md:max-w-full" />

      <div className="absolute z-0 flex w-[1100px] max-w-full flex-col h-[473px] rounded-[0px_0px_0px_0px] right-[50px] top-4">
        <div className="flex flex-col relative min-h-[473px] w-full px-[7px] rounded-[15px] max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/200cb9c433534172b9d9ed52ab4b1cd9/2d8fa351fc29a05d777fe606d6f23f5ce0bc1497?placeholderIfAbsent=true"
            alt="CTA Background"
            className="absolute h-full w-full object-cover inset-0"
          />

          <div className="relative flex flex-col items-center justify-center px-20 py-[212px] max-md:max-w-full max-md:px-5 max-md:py-[100px]">
            <form
              onSubmit={handleSubmit}
              className="flex mb-[-35px] w-[401px] max-w-full flex-col items-stretch justify-center max-md:mb-2.5"
            >
              <div className="border relative flex w-full max-w-[401px] items-start gap-2.5 px-4 py-[19px] rounded-lg border-[rgba(255,255,255,0.15)] border-solid">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="bg-transparent text-white text-base font-normal leading-loose tracking-[-0px] z-0 w-full outline-none"
                />
                <button
                  type="submit"
                  className="bg-white absolute z-0 gap-2 text-[15px] text-black font-medium text-center tracking-[-0.15px] leading-[31px] px-[15px] py-[5px] rounded-lg right-1 bottom-1 hover:bg-gray-100 transition-colors"
                >
                  Join waitlist
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="border absolute z-0 flex min-h-[473px] w-[1100px] max-w-full -translate-x-2/4 translate-y-[0%] h-[473px] rounded-[10px] border-[rgba(255,255,255,0.15)] border-solid left-2/4 top-4" />

      <h2 className="text-white text-center text-[56px] font-medium leading-[65px] tracking-[-0.84px] absolute z-0 -translate-x-2/4 translate-y-[0%] w-[422px] h-[132px] left-2/4 top-[116px] max-md:max-w-full max-md:text-[40px] max-md:leading-[52px]">
        AI-driven SEO for everyone.
      </h2>

      <div className="absolute z-0 flex items-center gap-2 text-base text-white font-normal tracking-[-0px] leading-loose justify-center -translate-x-2/4 translate-y-[0%] left-2/4 bottom-[190px]">
        <span>No credit card required</span>
        <span>·</span>
        <span>7-days free trial</span>
      </div>
    </section>
  );
};
