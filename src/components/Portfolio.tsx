
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { X } from 'lucide-react';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Cozinha Moderna Integrada',
      location: 'Três de Maio, RS',
      area: '15m²',
      type: 'Cozinha Planejada',
      image: '/lovable-uploads/c980be59-c7a7-4914-a2cf-41a3543b6be2.png',
      description: 'Cozinha moderna com ilha central, acabamentos em tons neutros e detalhes em madeira. Projeto com iluminação LED embutida e bancada com espaço para refeições.'
    },
    {
      id: 2,
      title: 'Quarto Planejado com Closet',
      location: 'Três de Maio, RS',
      area: '18m²',
      type: 'Quarto e Closet',
      image: '/lovable-uploads/2592bcdb-392b-482d-bc60-571621b7bb11.png',
      description: 'Quarto completo com armários planejados, cabeceira integrada com iluminação e closet com portas espelhadas para ampliar o ambiente.'
    },
    {
      id: 3,
      title: 'Consultório Odontológico',
      location: 'Três de Maio, RS',
      area: '12m²',
      type: 'Consultório',
      image: '/lovable-uploads/0d69fce9-412f-49d5-9b66-8ab509aa5eac.png',
      description: 'Móveis planejados para consultório odontológico com acabamento em madeira clara, iluminação embutida e design funcional para equipamentos específicos.'
    },
    {
      id: 4,
      title: 'Sala de Estar Sofisticada',
      location: 'Três de Maio, RS',
      area: '25m²',
      type: 'Sala de Estar',
      image: '/lovable-uploads/0d6c0403-1e66-40e8-b715-4a91fdae41c4.png',
      description: 'Sala de estar com painel para TV em mármore, rack planejado com detalhes em dourado e móvel aparador com acabamento premium.'
    },
    {
      id: 5,
      title: 'Cozinha Gourmet com Bancada',
      location: 'Três de Maio, RS',
      area: '20m²',
      type: 'Cozinha Gourmet',
      image: '/lovable-uploads/78ca0f63-57e4-461e-97da-7feb85601214.png',
      description: 'Cozinha gourmet integrada com sala, bancada em quartzo, painel ripado e revestimento em mármore. Acabamentos premium e iluminação planejada.'
    },
    {
      id: 6,
      title: 'Quarto de Casal Completo',
      location: 'Três de Maio, RS',
      area: '16m²',
      type: 'Dormitório',
      image: '/lovable-uploads/2592bcdb-392b-482d-bc60-571621b7bb11.png',
      description: 'Quarto planejado com cabeceira estofada, criados-mudos integrados e armários com acabamento premium em tons neutros.'
    }
  ];

  return (
    <section id="portfolio" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-800 mb-4">
            Nosso Portfólio
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos com carinho e dedicação para nossos clientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl border-0 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">Ver Detalhes</span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-wood-dark font-medium mb-2">{project.type}</p>
                <div className="flex justify-between text-sm text-neutral-600">
                  <span>{project.location}</span>
                  <span>{project.area}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modal */}
        <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">
                    {projects.find(p => p.id === selectedProject)?.title}
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-6">
                  <img
                    src={projects.find(p => p.id === selectedProject)?.image}
                    alt={projects.find(p => p.id === selectedProject)?.title}
                    className="w-full h-96 object-cover rounded-lg"
                  />
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="font-semibold text-neutral-700">Local:</span>
                      <p className="text-neutral-600">{projects.find(p => p.id === selectedProject)?.location}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-neutral-700">Área:</span>
                      <p className="text-neutral-600">{projects.find(p => p.id === selectedProject)?.area}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-neutral-700">Tipo:</span>
                      <p className="text-neutral-600">{projects.find(p => p.id === selectedProject)?.type}</p>
                    </div>
                  </div>
                  <p className="text-neutral-700 leading-relaxed">
                    {projects.find(p => p.id === selectedProject)?.description}
                  </p>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Portfolio;
