
import React, { Suspense, lazy } from 'react';
import { useInView } from 'react-intersection-observer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import QuoteForm from '@/components/QuoteForm';

// Lazy load heavy components that are below the fold
const Portfolio = lazy(() => import('@/components/Portfolio'));
const Services = lazy(() => import('@/components/Services'));
const Process = lazy(() => import('@/components/Process'));
const Testimonials = lazy(() => import('@/components/Testimonials'));
const About = lazy(() => import('@/components/About'));
const Footer = lazy(() => import('@/components/Footer'));
const FinalQuote = lazy(() => import('@/components/FinalQuote'));

// Component loading fallback
const LoadingFallback = () => (
  <div className="h-32 flex items-center justify-center">
    <div className="animate-pulse h-8 w-32 bg-muted rounded"></div>
  </div>
);

// Lazy component wrapper with intersection observer
const LazySection = ({ children, threshold = 0.1 }: { children: React.ReactNode; threshold?: number }) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
    rootMargin: '200px 0px', // Start loading 200px before component comes into view
  });

  return (
    <div ref={ref}>
      {inView ? (
        <Suspense fallback={<LoadingFallback />}>
          {children}
        </Suspense>
      ) : (
        <LoadingFallback />
      )}
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <div className="space-y-0">
        <QuoteForm />
        
        <LazySection>
          <Portfolio />
        </LazySection>
        
        <LazySection>
          <Services />
        </LazySection>
        
        <LazySection>
          <Process />
        </LazySection>
        
        <LazySection>
          <Testimonials />
        </LazySection>
        
        <LazySection>
          <About />
        </LazySection>
        
        <LazySection>
          <div className="-mt-24">
            <FinalQuote />
          </div>
        </LazySection>
      </div>
      
      <LazySection>
        <Footer />
      </LazySection>
    </div>
  );
};

export default Index;
