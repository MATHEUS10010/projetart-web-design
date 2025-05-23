
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
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <QuoteForm />
      <Portfolio />
      <Services />
      <Process />
      <Testimonials />
      <About />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
