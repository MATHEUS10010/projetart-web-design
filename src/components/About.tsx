import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="quem-somos" className="py-2 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-800 mb-3">
                Sobre a Projetart
              </h2>
              
              <div className="space-y-3 text-lg text-neutral-600 leading-relaxed">
                <p>
                  Há mais de <strong className="text-wood-dark">12 anos</strong> no mercado, a Projetart se dedica 
                  a criar móveis planejados sob medida que transformam espaços e realizam sonhos. Nossa paixão 
                  é desenvolver projetos únicos que combinam funcionalidade, beleza e qualidade excepcional.
                </p>
                
                <p>
                  Acreditamos que cada cliente é único, assim como suas necessidades e preferências. 
                  Por isso, oferecemos um <strong className="text-wood-dark">atendimento personalizado</strong> desde 
                  a primeira conversa até a entrega final do projeto, sempre priorizando a excelência em cada detalhe.
                </p>
                
                <p>
                  Nosso compromisso com o <strong className="text-wood-dark">alto padrão de acabamento</strong> e 
                  a utilização de materiais premium garantem que seus móveis durem por muitos anos, 
                  mantendo a beleza e funcionalidade do primeiro dia.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-wood-dark mb-1">12+</div>
                  <div className="text-sm text-neutral-600">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-wood-dark mb-1">500+</div>
                  <div className="text-sm text-neutral-600">Projetos Entregues</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-wood-dark mb-1">100%</div>
                  <div className="text-sm text-neutral-600">Satisfação</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Card className="border-0 shadow-lg overflow-hidden bg-white">
                <CardContent className="p-0">
                  <img
                    src="/lovable-uploads/Logo projetart - 12 anos.png"
                    alt="Logo Projetart - 12 Anos"
                    className="w-full h-[260px] object-contain rounded-lg bg-white"
                  />
                </CardContent>
              </Card>

              <div className="bg-neutral-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-neutral-800 mb-3">
                  Nossos Diferenciais
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-wood-dark text-xl mr-3">✓</span>
                    <span className="text-neutral-600">Projetos 3D para visualização completa</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-wood-dark text-xl mr-3">✓</span>
                    <span className="text-neutral-600">Materiais de primeira qualidade</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-wood-dark text-xl mr-3">✓</span>
                    <span className="text-neutral-600">Equipe especializada e experiente</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-wood-dark text-xl mr-3">✓</span>
                    <span className="text-neutral-600">Garantia de 1 ano em todos os projetos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-wood-dark text-xl mr-3">✓</span>
                    <span className="text-neutral-600">Pós-venda dedicado</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
