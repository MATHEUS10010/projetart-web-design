import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Process = () => {
  const steps = [
    {
      number: '01',
      icon: '💬',
      title: 'Briefing',
      description: 'Conversa inicial para entender suas necessidades, estilo, orçamento e prazos. Visitamos o local para medições precisas.'
    },
    {
      number: '02',
      icon: '🎨',
      title: 'Projeto 3D',
      description: 'Desenvolvimento do projeto em 3D com todas as especificações técnicas. Você visualiza o resultado final antes da produção.'
    },
    {
      number: '03',
      icon: '🔨',
      title: 'Fabricação',
      description: 'Produção dos móveis em nossa marcenaria com materiais selecionados e controle de qualidade rigoroso.'
    },
    {
      number: '04',
      icon: '🏠',
      title: 'Instalação',
      description: 'Montagem e instalação profissional no local. Nossa equipe garante que tudo fique perfeito e funcionando.'
    },
    {
      number: '05',
      icon: '🤝',
      title: 'Pós-venda',
      description: 'Acompanhamento pós-entrega com garantia e suporte. Sua satisfação é nossa prioridade máxima.'
    }
  ];

  return (
    <section id="processo" className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-800 mb-4">
            Nosso Processo de Trabalho
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Um processo transparente e organizado para garantir que seu projeto seja executado com excelência
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white animate-fade-in"
                     style={{ animationDelay: `${index * 0.2}s` }}>
                  <CardContent className="p-5 text-center">
                    <div className="relative mb-4">
                      <div className="w-14 h-14 bg-wood-gradient rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-xl">{step.icon}</span>
                      </div>
                      <div className="absolute -top-2 -right-2 w-7 h-7 bg-neutral-800 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {step.number}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-neutral-800 mb-2">
                      {step.title}
                    </h3>
                    
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>

                {/* Connection Line - Hidden on mobile, shown on large screens */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-wood-medium transform -translate-y-1/2 z-10">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-wood-medium border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-4 bg-neutral-50 p-6 rounded-2xl">
            <div className="text-center">
              <h3 className="text-xl font-bold text-neutral-800 mb-3">
                Qualidade e Transparência em Cada Etapa
              </h3>
              <p className="text-base text-neutral-600 mb-4 max-w-3xl mx-auto">
                Mantemos você informado sobre o progresso do seu projeto em todas as fases. 
                Nossa comunicação é clara e nossos prazos são respeitados.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-wood-dark text-xl font-bold">24h</div>
                  <div className="text-neutral-600">Resposta inicial</div>
                </div>
                <div className="text-center">
                  <div className="text-wood-dark text-xl font-bold">7 dias</div>
                  <div className="text-neutral-600">Projeto 3D pronto</div>
                </div>
                <div className="text-center">
                  <div className="text-wood-dark text-xl font-bold">30 dias</div>
                  <div className="text-neutral-600">Prazo médio produção</div>
                </div>
                <div className="text-center">
                  <div className="text-wood-dark text-xl font-bold">1 ano</div>
                  <div className="text-neutral-600">Garantia completa</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
