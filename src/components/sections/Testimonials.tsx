
import React from "react";

export const Testimonials = () => {
  return (
    <section className="py-24 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-medium mb-4">
          Our clients
        </h2>
        <p className="text-white/80 text-lg max-w-lg mx-auto">
          Hear firsthand how our solutions have boosted online success for users
          like you.
        </p>
      </div>

      <div className="bg-[rgba(30,30,40,0.5)] border border-[rgba(255,255,255,0.1)] rounded-xl p-8 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/3">
          <img
            src="/lovable-uploads/4e22d660-1d8d-480e-a8c2-366da979c859.png#x=397&y=687&width=150&height=150"
            alt="Client"
            className="rounded-2xl w-40 h-40 object-cover"
          />
        </div>

        <div className="md:w-2/3">
          <blockquote className="text-2xl font-medium leading-relaxed mb-6">
            "This product has completely transformed how I manage my projects
            and deadlines"
          </blockquote>

          <div className="flex flex-col">
            <cite className="text-lg font-medium not-italic">
              Talia Taylor
            </cite>
            <div className="text-white/70 text-sm">
              Digital Marketing Director @ Quantum
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
