
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
      location: 'São Paulo, SP',
      area: '15m²',
      type: 'Cozinha Planejada',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Cozinha moderna com ilha central, bancada em quartzo e acabamentos em laca branca com detalhes em madeira.'
    },
    {
      id: 2,
      title: 'Closet Sob Medida',
      location: 'Santos, SP',
      area: '12m²',
      type: 'Closet',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Closet espaçoso com divisórias inteligentes, iluminação LED e espelho de corpo inteiro.'
    },
    {
      id: 3,
      title: 'Home Office Executivo',
      location: 'Guarulhos, SP',
      area: '10m²',
      type: 'Home Office',
      image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Escritório completo com mesa em L, estantes integradas e armários para organização.'
    },
    {
      id: 4,
      title: 'Quarto de Casal Completo',
      location: 'Osasco, SP',
      area: '18m²',
      type: 'Dormitório',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Quarto planejado com cabeceira integrada, criados-mudos suspensos e closet anexo.'
    },
    {
      id: 5,
      title: 'Sala de TV Aconchegante',
      location: 'Barueri, SP',
      area: '20m²',
      type: 'Sala de TV',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Painel para TV com nichos decorativos, bancada inferior e iluminação ambiente.'
    },
    {
      id: 6,
      title: 'Banheiro de Luxo',
      location: 'São Caetano, SP',
      area: '8m²',
      type: 'Banheiro',
      image: 'https://images.unsplash.com/photo-1507652955-f3dcef5a3be5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Banheiro sofisticado com móveis suspensos, espelheira com LED e acabamentos premium.'
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
