import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';

const Services = () => {
  const residentialServices = [
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
    },
    {
      icon: '🏡',
      title: 'Apartamento/Casa Completa',
      description: 'Projeto completo para todos os ambientes da sua residência, garantindo harmonia e integração entre todos os espaços.'
    }
  ];

  const commercialServices = [
    {
      icon: '🏢',
      title: 'Escritórios Corporativos',
      description: 'Projetos de mobiliário corporativo que aliam estética, funcionalidade e ergonomia para potencializar a produtividade da sua empresa.'
    },
    {
      icon: '🩺',
      title: 'Consultórios e Clínicas',
      description: 'Ambientes planejados específicos para a área de saúde, com móveis que atendem às normas sanitárias e proporcionam conforto aos pacientes.'
    },
    {
      icon: '🛒',
      title: 'Lojas e Showrooms',
      description: 'Projetos comerciais que valorizam seus produtos, otimizam o espaço de venda e criam uma experiência diferenciada para seus clientes.'
    },
    {
      icon: '☕',
      title: 'Cafeterias e Restaurantes',
      description: 'Mobiliário planejado para estabelecimentos gastronômicos, unindo praticidade operacional e ambiente aconchegante para seus clientes.'
    },
    {
      icon: '🏬',
      title: 'Comercial Completo',
      description: 'Projeto completo para qualquer ambiente comercial, desde a recepção até as áreas administrativas, garantindo identidade visual e funcionalidade.'
    }
  ];

  return (
    <section id="servicos" className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-800 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Oferecemos soluções completas em móveis planejados para todos os ambientes, tanto para residências quanto para empresas e estabelecimentos comerciais
          </p>
        </div>

        <Tabs defaultValue="residencial" className="w-full mb-12">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-neutral-100">
              <TabsTrigger value="residencial" className="px-8 py-3">Residencial</TabsTrigger>
              <TabsTrigger value="comercial" className="px-8 py-3">Comercial</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="residencial">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {residentialServices.map((service, index) => (
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
          </TabsContent>
          
          <TabsContent value="comercial">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {commercialServices.map((service, index) => (
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
            
            <div className="mt-12 p-8 bg-white rounded-xl shadow-lg text-center">
              <h3 className="text-2xl font-bold text-neutral-800 mb-4">Projetos Comerciais Personalizados</h3>
              <p className="text-lg text-neutral-700 mb-6 max-w-3xl mx-auto">
                Desenvolvemos projetos exclusivos para empresas de todos os portes, adaptados às necessidades específicas de cada negócio. 
                Nossa equipe tem experiência em diversos segmentos comerciais, garantindo praticidade, estética e durabilidade.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <div className="bg-neutral-100 px-4 py-2 rounded-full text-neutral-700">Consultórios</div>
                <div className="bg-neutral-100 px-4 py-2 rounded-full text-neutral-700">Escritórios</div>
                <div className="bg-neutral-100 px-4 py-2 rounded-full text-neutral-700">Lojas</div>
                <div className="bg-neutral-100 px-4 py-2 rounded-full text-neutral-700">Clínicas</div>
                <div className="bg-neutral-100 px-4 py-2 rounded-full text-neutral-700">Restaurantes</div>
                <div className="bg-neutral-100 px-4 py-2 rounded-full text-neutral-700">Hotéis</div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <div className="bg-wood-gradient p-8 rounded-2xl text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Projeto Personalizado para Você
            </h3>
            <p className="text-lg mb-6">
              Cada projeto é único e desenvolvido exclusivamente para atender suas necessidades e preferências. 
              Nossa equipe especializada transforma suas ideias em realidade, seja para sua residência ou empresa.
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
