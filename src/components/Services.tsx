
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Home, Bath } from 'lucide-react';

const Services = () => {
  // Residential services array
  const residentialServices = [
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
      id: "banheiros",
      title: "Banheiros",
      description: "Banheiros e lavabos com móveis sob medida, combinando beleza e resistência para ambientes úmidos com estilo.",
      features: ["Materiais resistentes à umidade", "Cubas e bancadas", "Nichos organizadores", "Gavetas inteligentes"],
      image: "/lovable-uploads/7565e45c-a634-4415-8e89-2abea97ee826.png"
    },
    {
      id: "salas",
      title: "Salas",
      description: "Salas de estar e jantar com móveis planejados que combinam estética e funcionalidade para receber com elegância.",
      features: ["Painéis de TV", "Mesas extensíveis", "Buffets planejados", "Racks com iluminação"],
      image: "/lovable-uploads/0d69fce9-412f-49d5-9b66-8ab509aa5eac.png"
    },
  ];

  // Commercial services array
  const commercialServices = [
    {
      id: "escritorios",
      title: "Escritórios",
      description: "Espaços corporativos planejados que combinam funcionalidade e estética para criar ambientes de trabalho produtivos.",
      features: ["Mobiliário ergonômico", "Soluções para reuniões", "Organização de cabos", "Recepção personalizada"],
      image: "/lovable-uploads/c980be59-c7a7-4914-a2cf-41a3543b6be2.png"
    },
    {
      id: "lojas",
      title: "Lojas",
      description: "Projetos de lojas e espaços comerciais que valorizam produtos e otimizam a experiência do cliente.",
      features: ["Expositores planejados", "Balcões de atendimento", "Vitrines atrativas", "Organização do espaço"],
      image: "/lovable-uploads/54e60df7-32b4-4795-8074-6be725d18640.png"
    },
    {
      id: "clinicas",
      title: "Clínicas",
      description: "Móveis planejados para ambientes de saúde, combinando funcionalidade, higiene e conforto para profissionais e pacientes.",
      features: ["Materiais antimicrobianos", "Armazenamento adequado", "Recepção confortável", "Consultórios eficientes"],
      image: "/lovable-uploads/0d69fce9-412f-49d5-9b66-8ab509aa5eac.png"
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
            Móveis planejados de alta qualidade para todos os ambientes
          </p>
        </div>

        <Tabs defaultValue="residencial" className="w-full max-w-5xl mx-auto">
          <TabsList className="flex justify-center mb-8">
            <TabsTrigger 
              value="residencial" 
              className="flex items-center gap-2 px-6 py-3 data-[state=active]:bg-wood-medium data-[state=active]:text-white rounded-l-md"
            >
              <Home size={20} />
              <span>Residencial</span>
            </TabsTrigger>
            <TabsTrigger 
              value="comercial" 
              className="flex items-center gap-2 px-6 py-3 data-[state=active]:bg-wood-medium data-[state=active]:text-white rounded-r-md"
            >
              <Bath size={20} />
              <span>Comercial</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="residencial" className="animate-scale-in">
            <Tabs defaultValue="cozinhas" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-neutral-100 p-1 rounded-lg mb-6">
                {residentialServices.map((service) => (
                  <TabsTrigger 
                    key={service.id}
                    value={service.id}
                    className="data-[state=active]:bg-wood-medium data-[state=active]:text-white py-2 rounded-md transition-all duration-200"
                  >
                    {service.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {residentialServices.map((service) => (
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
          </TabsContent>
          
          <TabsContent value="comercial" className="animate-scale-in">
            <Tabs defaultValue="escritorios" className="w-full">
              <TabsList className="grid grid-cols-1 md:grid-cols-3 gap-2 bg-neutral-100 p-1 rounded-lg mb-6">
                {commercialServices.map((service) => (
                  <TabsTrigger 
                    key={service.id}
                    value={service.id}
                    className="data-[state=active]:bg-wood-medium data-[state=active]:text-white py-2 rounded-md transition-all duration-200"
                  >
                    {service.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {commercialServices.map((service) => (
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
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Services;
