import React from "react";

export const Companies = () => {
  return (
    <section className="flex min-h-[390px] w-full flex-col items-center justify-center max-md:max-w-full">
      <h2 className="text-white text-center text-base font-normal leading-loose tracking-[-0px]">
        Trusted by the world's most innovative teams
      </h2>

      <div className="mt-10 max-md:max-w-full">
        <div className="flex gap-2.5 flex-wrap max-md:max-w-full">
          {[10, 11, 12, 13].map((num) => (
            <div
              key={num}
              className="border flex flex-col items-stretch justify-center w-[235px] px-10 py-8 rounded-[10px] border-[rgba(255,255,255,0.15)] border-solid max-md:px-5"
            >
              <img
                src={`URL_${num}`}
                alt="Company Logo"
                className="aspect-[4.57] object-contain w-[155px] max-w-full"
              />
            </div>
          ))}
        </div>

        <div className="flex gap-2.5 flex-wrap mt-2.5 max-md:max-w-full">
          {[20, 21, 22, 23].map((num) => (
            <div
              key={num}
              className="border flex flex-col items-stretch justify-center w-[235px] px-10 py-8 rounded-[10px] border-[rgba(255,255,255,0.15)] border-solid max-md:px-5"
            >
              <img
                src={`URL_${num}`}
                alt="Company Logo"
                className="aspect-[4.57] object-contain w-[155px] max-w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
