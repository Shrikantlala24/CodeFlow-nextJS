import React from "react";

export const Hero = () => {
  return (
    <section className="relative flex w-full flex-col max-md:max-w-full">
      <div className="self-stretch z-0 w-full rounded-[0px_0px_0px_0px] max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/200cb9c433534172b9d9ed52ab4b1cd9/f7294993c87d25079a00e28170356b0adb35ffc3?placeholderIfAbsent=true"
          alt="Hero Background"
          className="aspect-[1.03] object-contain w-full rounded-[0px_0px_0px_0px] max-md:max-w-full"
        />
      </div>

      <div className="absolute z-0 flex w-[930px] max-w-full flex-col items-center font-medium text-center leading-[31px] -translate-x-2/4 translate-y-[0%] left-2/4 top-[145px]">
        <h1 className="text-[82px] leading-[84px] tracking-[-4.15px] bg-clip-text z-0 max-md:max-w-full max-md:text-[40px] max-md:leading-[45px]">
          Boost your
          <br />
          Tech-intelligence.
        </h1>

        <p className="text-white text-xl font-normal tracking-[-0px] z-0 mt-4 max-md:max-w-full">
          CodeFlow transforms complex programming concepts into clear, intuitive
          knowledge through personalized learning experiences designed for your
          unique way of thinking.
        </p>

        <div className="border z-0 flex min-h-[57px] w-[137px] max-w-full mt-4 rounded-xl border-[rgba(255,255,255,0.1)] border-solid">
          <button className="bg-white text-[15px] text-black tracking-[-0.15px] px-[15px] py-[5px] rounded-lg hover:bg-gray-100 transition-colors">
            Start for free
          </button>
        </div>
      </div>

      <div className="absolute z-0 flex min-h-[308px] w-[1200px] h-[308px] right-0 bottom-0 max-md:max-w-full" />

      <div className="bg-black border absolute z-0 flex items-center gap-[7px] tracking-[-0px] -translate-x-2/4 translate-y-[0%] px-3.5 py-2 rounded-[50px] border-[rgba(255,255,255,0.15)] border-solid left-2/4 top-[90px]">
        <span className="bg-[rgba(152,85,255,1)] self-stretch min-h-[18px] text-[10px] text-black font-bold whitespace-nowrap leading-[26px] w-[34px] my-auto px-[5px] py-px rounded-[40px]">
          NEW
        </span>
        <span className="text-[#9855FF] text-base font-normal leading-loose self-stretch my-auto">
          Latest integration just arrived
        </span>
      </div>
    </section>
  );
};
