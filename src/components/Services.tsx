
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: '🏠',
      title: 'Cozinhas Planejadas',
      description: 'Projetos sob medida que otimizam o espaço e unem funcionalidade com design moderno. Materiais de alta qualidade e acabamento impecável.'
    },
    {
      icon: '👗',
      title: 'Closets Sob Medida',
      description: 'Organize suas roupas com estilo. Divisórias inteligentes, iluminação LED e acabamentos que transformam seu closet em um espaço único.'
    },
    {
      icon: '💼',
      title: 'Home Offices',
      description: 'Ambiente produtivo e confortável para trabalhar em casa. Ergonomia e organização pensadas para maximizar seu rendimento.'
    },
    {
      icon: '🛏️',
      title: 'Dormitórios Completos',
      description: 'Quartos planejados com cabeceiras integradas, criados-mudos e guarda-roupas que aproveitam cada centímetro do ambiente.'
    },
    {
      icon: '📺',
      title: 'Salas de TV',
      description: 'Painéis para TV com nichos decorativos e soluções de armazenamento que combinam entretenimento e organização.'
    },
    {
      icon: '🚿',
      title: 'Banheiros Planejados',
      description: 'Móveis sob medida para banheiros, com foco na resistência à umidade e aproveitamento inteligente do espaço disponível.'
    }
  ];

  return (
    <section id="servicos" className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-800 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Oferecemos soluções completas em móveis planejados para todos os ambientes da sua casa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-neutral-800">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-neutral-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-wood-gradient p-8 rounded-2xl text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Projeto Personalizado para Você
            </h3>
            <p className="text-lg mb-6">
              Cada projeto é único e desenvolvido exclusivamente para atender suas necessidades e preferências. 
              Nossa equipe especializada transforma suas ideias em realidade.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold">10+</div>
                <div>Anos de Experiência</div>
              </div>
              <div>
                <div className="text-3xl font-bold">500+</div>
                <div>Projetos Realizados</div>
              </div>
              <div>
                <div className="text-3xl font-bold">100%</div>
                <div>Satisfação dos Clientes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
