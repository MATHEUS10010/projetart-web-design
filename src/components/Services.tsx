
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Home, Bath, ChefHat, Bed, Sofa, Briefcase, Store, Stethoscope } from 'lucide-react';

const Services = () => {
  // Residential services array
  const residentialServices = [
    {
      id: "cozinhas",
      title: "Cozinhas",
      description: "Cozinhas planejadas com design funcional, aproveitamento de espaço e materiais de alta qualidade para o coração da sua casa.",
      features: ["Design ergonômico", "Materiais resistentes à umidade", "Organização inteligente", "Iluminação planejada"],
      icon: <ChefHat className="w-10 h-10 text-wood-medium" />
    },
    {
      id: "dormitorios",
      title: "Dormitórios",
      description: "Quartos e closets planejados com conforto, espaço de armazenamento otimizado e acabamentos sofisticados para seu descanso.",
      features: ["Cabeceiras personalizadas", "Guarda-roupas sob medida", "Iluminação aconchegante", "Nichos decorativos"],
      icon: <Bed className="w-10 h-10 text-wood-medium" />
    },
    {
      id: "banheiros",
      title: "Banheiros",
      description: "Banheiros e lavabos com móveis sob medida, combinando beleza e resistência para ambientes úmidos com estilo.",
      features: ["Materiais resistentes à umidade", "Cubas e bancadas", "Nichos organizadores", "Gavetas inteligentes"],
      icon: <Bath className="w-10 h-10 text-wood-medium" />
    },
    {
      id: "salas",
      title: "Salas",
      description: "Salas de estar e jantar com móveis planejados que combinam estética e funcionalidade para receber com elegância.",
      features: ["Painéis de TV", "Mesas extensíveis", "Buffets planejados", "Racks com iluminação"],
      icon: <Sofa className="w-10 h-10 text-wood-medium" />
    },
  ];

  // Commercial services array
  const commercialServices = [
    {
      id: "escritorios",
      title: "Escritórios",
      description: "Espaços corporativos planejados que combinam funcionalidade e estética para criar ambientes de trabalho produtivos.",
      features: ["Mobiliário ergonômico", "Soluções para reuniões", "Organização de cabos", "Recepção personalizada"],
      icon: <Briefcase className="w-10 h-10 text-wood-medium" />
    },
    {
      id: "lojas",
      title: "Lojas",
      description: "Projetos de lojas e espaços comerciais que valorizam produtos e otimizam a experiência do cliente.",
      features: ["Expositores planejados", "Balcões de atendimento", "Vitrines atrativas", "Organização do espaço"],
      icon: <Store className="w-10 h-10 text-wood-medium" />
    },
    {
      id: "clinicas",
      title: "Clínicas",
      description: "Móveis planejados para ambientes de saúde, combinando funcionalidade, higiene e conforto para profissionais e pacientes.",
      features: ["Materiais antimicrobianos", "Armazenamento adequado", "Recepção confortável", "Consultórios eficientes"],
      icon: <Stethoscope className="w-10 h-10 text-wood-medium" />
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

        <Tabs defaultValue="residencial" className="w-full">
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
          
          <TabsContent value="residencial" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {residentialServices.map((service) => (
                <Card key={service.id} className="border shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-col items-center pb-2">
                    {service.icon}
                    <CardTitle className="mt-4 text-center text-wood-dark">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-neutral-600 text-center mb-4">{service.description}</p>
                    <ul className="space-y-1 text-sm">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="text-wood-dark text-xs">✓</span>
                          <span className="text-neutral-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="comercial" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {commercialServices.map((service) => (
                <Card key={service.id} className="border shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-col items-center pb-2">
                    {service.icon}
                    <CardTitle className="mt-4 text-center text-wood-dark">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-neutral-600 text-center mb-4">{service.description}</p>
                    <ul className="space-y-1 text-sm">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="text-wood-dark text-xs">✓</span>
                          <span className="text-neutral-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Services;
