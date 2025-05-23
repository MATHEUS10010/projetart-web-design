
import React from 'react';
import { Button } from '@/components/ui/button';

const FinalQuote = () => {
  const scrollToQuoteForm = () => {
    const element = document.querySelector('#orcamento');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="solicite-orcamento" className="py-12 bg-wood-dark text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Transforme Seu Espaço com a Projetart
          </h2>
          <p className="text-xl mb-6 text-neutral-100 max-w-2xl mx-auto">
            Móveis planejados com qualidade, design exclusivo e atendimento personalizado para realizar o projeto dos seus sonhos.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <div className="bg-white/10 p-5 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-2">Móveis Sob Medida</h3>
              <p className="mb-1">Projetos personalizados que aproveitam cada centímetro do seu espaço</p>
            </div>
            <div className="bg-white/10 p-5 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-2">Materiais Premium</h3>
              <p className="mb-1">Utilizamos materiais de alta qualidade para garantir durabilidade e beleza</p>
            </div>
            <div className="bg-white/10 p-5 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-2">Instalação Profissional</h3>
              <p className="mb-1">Equipe especializada para uma montagem perfeita e acabamentos impecáveis</p>
            </div>
          </div>
          
          <Button
            onClick={scrollToQuoteForm}
            size="lg" 
            className="mt-8 bg-white text-wood-dark hover:bg-wood-light px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Solicite Seu Orçamento Agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalQuote;
