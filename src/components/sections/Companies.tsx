
import React from "react";

export const Companies = () => {
  const companies = [
    { name: "Aero Corp", logo: "/lovable-uploads/4e22d660-1d8d-480e-a8c2-366da979c859.png#x=41&y=282&width=82&height=20" },
    { name: "Verve Valley", logo: "/lovable-uploads/4e22d660-1d8d-480e-a8c2-366da979c859.png#x=147&y=282&width=82&height=20" },
    { name: "Blockchain", logo: "/lovable-uploads/4e22d660-1d8d-480e-a8c2-366da979c859.png#x=253&y=282&width=82&height=20" },
    { name: "Pulse", logo: "/lovable-uploads/4e22d660-1d8d-480e-a8c2-366da979c859.png#x=359&y=282&width=82&height=20" },
    { name: "Outside", logo: "/lovable-uploads/4e22d660-1d8d-480e-a8c2-366da979c859.png#x=41&y=312&width=82&height=20" },
    { name: "Spire", logo: "/lovable-uploads/4e22d660-1d8d-480e-a8c2-366da979c859.png#x=147&y=312&width=82&height=20" },
    { name: "Celestial", logo: "/lovable-uploads/4e22d660-1d8d-480e-a8c2-366da979c859.png#x=253&y=312&width=82&height=20" },
    { name: "Atmos", logo: "/lovable-uploads/4e22d660-1d8d-480e-a8c2-366da979c859.png#x=359&y=312&width=82&height=20" },
  ];

  return (
    <section className="flex flex-col items-center justify-center px-4 py-16 max-w-6xl mx-auto">
      <h2 className="text-white text-center text-base font-normal leading-loose tracking-[-0px]">
        Trusted by the world's most innovative teams
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8 w-full">
        {companies.map((company, index) => (
          <div
            key={index}
            className="border flex items-center justify-center px-6 py-4 h-16 rounded-lg border-[rgba(255,255,255,0.15)] border-solid"
          >
            <img
              src={company.logo}
              alt={`${company.name} Logo`}
              className="max-h-8 w-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
