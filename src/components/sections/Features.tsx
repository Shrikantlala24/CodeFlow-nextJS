import React from "react";

export const Features = () => {
  return (
    <section className="flex flex-col items-center text-base tracking-[-0px] px-[50px] py-20 max-md:max-w-full max-md:px-5">
      <h2 className="text-white text-center text-[32px] font-medium leading-[38px] tracking-[-0.01px] w-[553px] max-md:max-w-full">
        Harness the power of AI, making you addicted towards learning
      </h2>

      <div className="flex gap-2.5 flex-wrap mt-[31px] max-md:max-w-full">
        <div className="min-w-60 w-[346px] rounded-[0px_0px_0px_0px]">
          <div className="bg-[rgba(0,0,0,0.06)] border flex flex-col p-[35px] rounded-[10px] border-[rgba(255,255,255,0.15)] border-solid max-md:px-5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/200cb9c433534172b9d9ed52ab4b1cd9/6fc00bb848d9d30482def8230aa08191283ed46b?placeholderIfAbsent=true"
              alt="Code assistance"
              className="aspect-[1.29] object-contain w-full self-stretch"
            />
            <h3 className="text-white font-medium leading-loose mt-12 max-md:mt-10">
              Code - assistance
            </h3>
            <p className="text-white font-normal leading-[26px] w-[259px] mt-[13px]">
              Helps you set and achieve SEO goals with guided assistance.
            </p>
          </div>
        </div>

        <div className="min-w-60 w-[744px] rounded-[0px_0px_0px_0px] max-md:max-w-full">
          <div className="rounded-[10px] max-md:max-w-full">
            <div className="flex flex-col relative min-h-[400px] w-full pl-10 pr-[74px] pt-[274px] pb-10 rounded-[0px_0px_0px_0px] max-md:max-w-full max-md:pt-[100px] max-md:px-5">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/200cb9c433534172b9d9ed52ab4b1cd9/f451ee684682a58f143d296fe3c2997a7b9b3b56?placeholderIfAbsent=true"
                alt="Dashboard"
                className="absolute h-full w-full object-cover inset-0"
              />
              <h3 className="relative text-white font-medium leading-[31px]">
                User-friendly dashboard
              </h3>
              <p className="relative text-white font-normal leading-[26px] w-[259px]">
                Perform complex SEO audits and optimizations with a single
                click.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-2.5 flex-wrap mt-[31px] max-md:max-w-full">
        <div className="min-w-60 w-[744px] rounded-[0px_0px_0px_0px] max-md:max-w-full">
          <div className="rounded-[10px] max-md:max-w-full">
            <div className="flex flex-col relative min-h-[400px] w-full pl-10 pr-[74px] pt-[283px] pb-10 rounded-[0px_0px_0px_0px] max-md:max-w-full max-md:pt-[100px] max-md:px-5">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/200cb9c433534172b9d9ed52ab4b1cd9/d31ad83229f8ef407931efae2f6447fd41c72c56?placeholderIfAbsent=true"
                alt="Visual Reports"
                className="absolute h-full w-full object-cover inset-0"
              />
              <h3 className="relative text-white font-medium leading-loose">
                Visual reports
              </h3>
              <p className="relative text-white font-normal leading-[26px] mt-2.5">
                Visual insights into your site's performance.
              </p>
            </div>
          </div>
        </div>

        <div className="min-w-60 w-[346px] rounded-[0px_0px_0px_0px]">
          <div className="bg-[rgba(0,0,0,0.06)] border flex flex-col pt-2.5 pb-10 px-[35px] rounded-[10px] border-[rgba(255,255,255,0.15)] border-solid max-md:px-5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/200cb9c433534172b9d9ed52ab4b1cd9/4eea4393f8fd80bedf5627691f5740131120efbf?placeholderIfAbsent=true"
              alt="Smart Generator"
              className="aspect-[1] object-contain w-full ml-2.5"
            />
            <h3 className="text-white font-medium leading-[31px] mt-[30px]">
              Smart Keyword Generator
            </h3>
            <p className="text-white font-normal leading-[26px]">
              Automatic suggestions and the best keywords to target.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
