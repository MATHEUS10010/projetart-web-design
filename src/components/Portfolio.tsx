
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Cozinha Moderna Planejada',
      location: 'Três de Maio, RS',
      area: '15-20m²',
      type: 'Cozinha Planejada',
      image: '/lovable-uploads/c980be59-c7a7-4914-a2cf-41a3543b6be2.png',
      description:
        'Cozinhas modernas com ilha central, acabamentos em tons neutros e detalhes em madeira. Projetos com iluminação LED embutida, bancadas em quartzo e mármore, e espaços otimizados para refeições.',
      gallery: [
        '/lovable-uploads/c980be59-c7a7-4914-a2cf-41a3543b6be2.png',
        '/lovable-uploads/78ca0f63-57e4-461e-97da-7feb85601214.png',
        '/lovable-uploads/c2ac4762-a37c-47b3-a646-0b47535f0531.png',
        '/lovable-uploads/ff70eae8-0047-4bb1-a825-ee6fa202f0b0.png',
        '/lovable-uploads/dcfeb31d-e30a-4202-80a6-47cfdf25abcd.png',
        '/lovable-uploads/0ad6ac14-bc15-42cf-b931-1bb3ec3a06b2.png'
      ]
    },
    {
      id: 2,
      title: 'Quarto Planejado com Closet',
      location: 'Três de Maio, RS',
      area: '18m²',
      type: 'Quarto e Closet',
      image: '/lovable-uploads/2592bcdb-392b-482d-bc60-571621b7bb11.png',
      description:
        'Quarto completo com armários planejados, cabeceira integrada com iluminação e closet com portas espelhadas para ampliar o ambiente.',
      gallery: [
        '/lovable-uploads/2592bcdb-392b-482d-bc60-571621b7bb11.png',
        '/lovable-uploads/2e0872e9-ae05-47a3-8663-e83214aa42ad.png',
        '/lovable-uploads/34276f0a-2a8d-4a1d-a3b8-b8214ca5cbfb.png'
      ]
    },
    {
      id: 3,
      title: 'Consultório Odontológico',
      location: 'Três de Maio, RS',
      area: '12m²',
      type: 'Consultório',
      image: '/lovable-uploads/0d69fce9-412f-49d5-9b66-8ab509aa5eac.png',
      description:
        'Móveis planejados para consultório odontológico com acabamento em madeira clara, iluminação embutida e design funcional para equipamentos específicos.',
      gallery: [
        '/lovable-uploads/0d69fce9-412f-49d5-9b66-8ab509aa5eac.png',
        '/lovable-uploads/7a55a76e-e77a-4481-8c53-f84775a7bd01.png',
        '/lovable-uploads/6322ae4c-7394-408d-bb5d-dc3feacae582.png',
        '/lovable-uploads/474af4ab-043c-4a1c-9adc-bf0a93476110.png',
        '/lovable-uploads/be90dad1-3ed8-449d-aae6-bc991d5fe70a.png'
      ]
    },
    {
      id: 4,
      title: 'Sala de Estar Sofisticada',
      location: 'Três de Maio, RS',
      area: '25m²',
      type: 'Sala de Estar',
      image: '/lovable-uploads/0d6c0403-1e66-40e8-b715-4a91fdae41c4.png',
      description:
        'Sala de estar com painel para TV em mármore, rack planejado com detalhes em dourado e móvel aparador com acabamento premium.',
      gallery: [
        '/lovable-uploads/0d6c0403-1e66-40e8-b715-4a91fdae41c4.png',
        '/lovable-uploads/2d1343a4-27f9-41cf-a9a2-ba553c3215e6.png',
        '/lovable-uploads/657d616b-4d19-43e6-a2e8-382f3026dc3e.png',
        '/lovable-uploads/0e764488-6be3-4a99-929c-defa93d9cdf7.png',
        '/lovable-uploads/4d012927-98b9-4694-b143-45b842eb7854.png',
        '/lovable-uploads/bdf9b84b-0704-49dd-974b-775d3f24526e.png'
      ]
    },
    {
      id: 5,
      title: 'Escritório Planejado',
      location: 'Três de Maio, RS',
      area: '14m²',
      type: 'Escritório',
      image: '/lovable-uploads/91740045-ea3b-479c-9e73-2ab0bcae5fd5.png',
      description:
        'Escritório completo com armários planejados, bancada para dois postos de trabalho, iluminação embutida e acabamento em tons claros com detalhe em madeira natural.',
      gallery: [
        '/lovable-uploads/91740045-ea3b-479c-9e73-2ab0bcae5fd5.png',
        '/lovable-uploads/0d6e8bde-3197-4edb-b3e4-82ef27cc1789.png',
        '/lovable-uploads/899d4344-d1ff-4488-b9e0-48318901566d.png'
      ]
    },
    {
      id: 6,
      title: 'Loja de Chocolate Premium',
      location: 'Gramado, RS',
      area: '35m²',
      type: 'Loja Comercial',
      image: '/lovable-uploads/9359b08d-d64d-4e2f-b307-adb0b3bd8e1b.png',
      description:
        'Projeto comercial para loja de chocolates com móveis planejados em tons amarelos e vermelhos, iluminação especial e layout otimizado para exposição de produtos.',
      gallery: [
        '/lovable-uploads/9359b08d-d64d-4e2f-b307-adb0b3bd8e1b.png',
        '/lovable-uploads/dcf1194f-366f-4738-87ac-76347018a7eb.png',
        '/lovable-uploads/7f728380-2faf-4ee0-b9a3-0c06d3f9d0ab.png',
        '/lovable-uploads/8b094333-0480-4fed-b244-3fd322371084.png',
        '/lovable-uploads/11585ce6-64c0-45ea-a3b4-602489997b00.png',
        '/lovable-uploads/23865bd7-bfab-4e6d-be12-e61e9d542eeb.png',
        '/lovable-uploads/2ec24ec9-e0ee-4f0a-8060-4f291b572306.png',
        '/lovable-uploads/ad8d93d6-9eff-4637-934c-4bdde9975ecd.png'
      ]
    }
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setSelectedImage(null);
  };

  const handleImageClick = (imageUrl, project) => {
    setSelectedImage({
      url: imageUrl,
      project: project
    });
  };

  const closeModals = () => {
    setSelectedProject(null);
    setSelectedImage(null);
  };

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
              onClick={() => handleProjectClick(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">Ver Galeria</span>
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

        {/* Modal da Galeria */}
        {selectedProject && !selectedImage && (
          <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="relative bg-white w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-lg shadow-lg">
              <button
                onClick={closeModals}
                className="absolute top-4 right-4 bg-white text-black rounded-full p-3 shadow-md hover:bg-neutral-200 transition z-10"
                aria-label="Fechar"
              >
                ✕
              </button>

              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
                <p className="text-neutral-600 mb-6">Clique na imagem para ver os detalhes</p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {selectedProject.gallery.map((imageUrl, index) => (
                    <div
                      key={index}
                      className="relative cursor-pointer group overflow-hidden rounded-lg"
                      onClick={() => handleImageClick(imageUrl, selectedProject)}
                    >
                      <img
                        src={imageUrl}
                        alt={`${selectedProject.title} - Foto ${index + 1}`}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-semibold">Ampliar</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal do Zoom da Imagem */}
        {selectedImage && (
          <div className="fixed inset-0 z-[10000] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="relative bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-lg shadow-lg">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white text-black rounded-full p-3 shadow-md hover:bg-neutral-200 transition z-10"
                aria-label="Fechar"
              >
                ✕
              </button>

              <div className="px-6 pt-6">
                <h2 className="text-2xl font-bold">{selectedImage.project.title}</h2>
              </div>

              <div className="w-full bg-black flex items-center justify-center">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.project.title}
                  className="w-auto max-h-[60vh] object-contain mx-auto"
                />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-6 pt-4 pb-2 text-sm">
                <div>
                  <span className="font-semibold text-neutral-700">Local:</span>
                  <p className="text-neutral-600">{selectedImage.project.location}</p>
                </div>
                <div>
                  <span className="font-semibold text-neutral-700">Área:</span>
                  <p className="text-neutral-600">{selectedImage.project.area}</p>
                </div>
                <div>
                  <span className="font-semibold text-neutral-700">Tipo:</span>
                  <p className="text-neutral-600">{selectedImage.project.type}</p>
                </div>
              </div>

              <p className="text-neutral-700 leading-relaxed px-6 pb-6">
                {selectedImage.project.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
