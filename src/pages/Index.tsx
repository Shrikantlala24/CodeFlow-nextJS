
import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Companies } from '@/components/sections/Companies';
import { Features } from '@/components/sections/Features';
import { Testimonials } from '@/components/sections/Testimonials';
import { Pricing } from '@/components/sections/Pricing';
import { CTA } from '@/components/sections/CTA';

const Index = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Companies />
      <Features />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
