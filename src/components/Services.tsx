
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Services = () => {
  const services = [
    {
      id: "cozinhas",
      title: "Cozinhas",
      description: "Cozinhas planejadas com design funcional, aproveitamento de espaço e materiais de alta qualidade para o coração da sua casa.",
      features: ["Design ergonômico", "Materiais resistentes à umidade", "Organização inteligente", "Iluminação planejada"],
      image: "/lovable-uploads/2592bcdb-392b-482d-bc60-571621b7bb11.png"
    },
    {
      id: "dormitorios",
      title: "Dormitórios",
      description: "Quartos e closets planejados com conforto, espaço de armazenamento otimizado e acabamentos sofisticados para seu descanso.",
      features: ["Cabeceiras personalizadas", "Guarda-roupas sob medida", "Iluminação aconchegante", "Nichos decorativos"],
      image: "/lovable-uploads/54e60df7-32b4-4795-8074-6be725d18640.png"
    },
    {
      id: "home-office",
      title: "Home Office",
      description: "Espaços de trabalho ergonômicos, funcionais e inspiradores para aumentar sua produtividade no ambiente doméstico.",
      features: ["Ergonomia", "Organização de cabos", "Iluminação adequada", "Aproveitamento de espaço"],
      image: "/lovable-uploads/c980be59-c7a7-4914-a2cf-41a3543b6be2.png"
    },
    {
      id: "salas",
      title: "Salas",
      description: "Salas de estar e jantar com móveis planejados que combinam estética e funcionalidade para receber com elegância.",
      features: ["Painéis de TV", "Mesas extensíveis", "Buffets planejados", "Racks com iluminação"],
      image: "/lovable-uploads/0d69fce9-412f-49d5-9b66-8ab509aa5eac.png"
    },
    {
      id: "banheiros",
      title: "Banheiros",
      description: "Banheiros e lavabos com móveis sob medida, combinando beleza e resistência para ambientes úmidos com estilo.",
      features: ["Materiais resistentes à umidade", "Cubas e bancadas", "Nichos organizadores", "Gavetas inteligentes"],
      image: "/lovable-uploads/7565e45c-a634-4415-8e89-2abea97ee826.png"
    }
  ];

  return (
    <section id="servicos" className="py-10 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-800 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Móveis planejados de alta qualidade para todos os ambientes da sua casa ou escritório
          </p>
        </div>

        <Tabs defaultValue="cozinhas" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2 bg-neutral-100 p-1 rounded-lg mb-6">
            {services.map((service) => (
              <TabsTrigger 
                key={service.id}
                value={service.id}
                className="data-[state=active]:bg-wood-medium data-[state=active]:text-white py-2 rounded-md transition-all duration-200"
              >
                {service.title}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {services.map((service) => (
            <TabsContent 
              key={service.id} 
              value={service.id}
              className="animate-scale-in"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-0 shadow-md overflow-hidden">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="object-cover w-full h-full transform hover:scale-105 transition-all duration-500"
                    />
                  </div>
                </Card>
                
                <Card className="border-0 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-wood-dark text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-700 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="text-wood-dark">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Services;
