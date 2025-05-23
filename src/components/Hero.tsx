
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToOrcamento = () => {
    const element = document.querySelector('#orcamento');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          Móveis Planejados
          <span className="block text-wood-light">Sob Medida</span>
          <span className="block text-2xl md:text-3xl lg:text-4xl font-normal mt-4">
            que Transformam Seu Espaço
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-neutral-100 max-w-2xl mx-auto animate-fade-in">
          Criamos ambientes únicos com design personalizado, qualidade excepcional e acabamento impecável
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button 
            onClick={scrollToOrcamento}
            size="lg"
            className="bg-wood-dark hover:bg-wood-medium text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Peça Sua Proposta
          </Button>
          
          <Button 
            onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
            variant="outline"
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-neutral-800 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
          >
            Fale Conosco
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
