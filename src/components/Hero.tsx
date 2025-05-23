
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';

const Hero = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de solicitar um orçamento para móveis planejados.");
    const whatsappUrl = `whatsapp://send?phone=5511999999999&text=${message}`;
    
    // Try to open WhatsApp app first
    window.location.href = whatsappUrl;
    
    // Fallback to web version after a short delay if app doesn't open
    setTimeout(() => {
      window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
    }, 1000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/lovable-uploads/c980be59-c7a7-4914-a2cf-41a3543b6be2.png")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20 md:pt-0">
        <h1 className="text-2xl md:text-5xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Móveis Planejados Sob Medida{' '}
          <span className="block text-white">
            que Transformam Seu Espaço
          </span>
        </h1>
        
        <p className="text-lg md:text-2xl text-neutral-200 mb-8 max-w-2xl mx-auto leading-relaxed">
          Criamos ambientes únicos com design personalizado, 
          qualidade excepcional e acabamento impecável
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-wood-dark hover:bg-wood-medium text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
            onClick={handleWhatsAppClick}
          >
            <Phone className="mr-2 h-5 w-5" />
            Solicitar Orçamento
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-neutral-900 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver Projetos
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
          <div className="text-center">
            <div className="text-3xl font-bold text-wood-light mb-2">10+</div>
            <div className="text-neutral-300">Anos de Experiência</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-wood-light mb-2">500+</div>
            <div className="text-neutral-300">Projetos Entregues</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-wood-light mb-2">100%</div>
            <div className="text-neutral-300">Satisfação Garantida</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
