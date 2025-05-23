
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import QuoteForm from '@/components/QuoteForm';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import About from '@/components/About';
import Footer from '@/components/Footer';
import FinalQuote from '@/components/FinalQuote';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <div className="space-y-0">
        <QuoteForm />
        <Portfolio />
        <Services />
        <div className="-mt-32">
          <Process />
        </div>
        <Testimonials />
        <About />
        <div className="-mt-24">
          <FinalQuote />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
