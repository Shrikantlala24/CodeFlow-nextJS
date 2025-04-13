import React from "react";

export const Testimonials = () => {
  return (
    <section className="relative flex w-[1170px] max-w-full flex-col items-center px-[90px] py-[78px] max-md:px-5">
      <h2 className="text-white text-center text-[56px] font-medium leading-none tracking-[-0.84px] z-0 max-md:text-[40px]">
        Our clients
      </h2>

      <p className="text-white text-center text-xl font-normal leading-[31px] tracking-[-0px] z-0 w-[433px] mt-7 max-md:max-w-full">
        Hear firsthand how our solutions have boosted online success for users
        like you.
      </p>

      <div className="z-0 w-full mt-7 py-[92px]">
        <div className="mt-[-86px] w-[218px] max-w-full ml-[202px] pt-[86px] max-md:ml-2.5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/200cb9c433534172b9d9ed52ab4b1cd9/b56bc99ee17b7361b793ae5f590d44ae5e125672?placeholderIfAbsent=true"
            alt="Client"
            className="aspect-[1] object-contain w-full mt-[86px] rounded-[20px] max-md:mt-10"
          />
        </div>

        <div className="absolute z-0 w-[339px] max-w-full tracking-[-0px] right-[277px] bottom-[201px]">
          <blockquote className="text-white text-[23px] font-medium leading-[34px]">
            "This product has completely transformed how I manage my projects
            and deadlines"
          </blockquote>

          <div className="flex w-[289px] max-w-full flex-col font-normal mt-5 pr-[42px] py-px rounded-[0px_0px_0px_0px] max-md:pr-5">
            <cite className="text-white text-base leading-loose not-italic">
              Talia Taylor
            </cite>
            <div className="text-white text-sm leading-[26px] mt-[5px]">
              Digital Marketing Director @ Quantum
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
