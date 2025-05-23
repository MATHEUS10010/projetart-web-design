
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="sobre" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-800 mb-6">
                Sobre a Projetart
              </h2>
              
              <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
                <p>
                  Há mais de <strong className="text-wood-dark">10 anos</strong> no mercado, a Projetart se dedica 
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

              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-wood-dark mb-2">10+</div>
                  <div className="text-sm text-neutral-600">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-wood-dark mb-2">500+</div>
                  <div className="text-sm text-neutral-600">Projetos Entregues</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-wood-dark mb-2">100%</div>
                  <div className="text-sm text-neutral-600">Satisfação</div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <Card className="border-0 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Robson Jardel Schwarzer - Fundador da Projetart"
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-6 bg-wood-gradient text-white">
                    <h3 className="text-xl font-semibold mb-2">Robson Jardel Schwarzer</h3>
                    <p className="text-sm opacity-90">Fundador e Diretor Criativo</p>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-neutral-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-neutral-800 mb-4">
                  Nossos Diferenciais
                </h3>
                <ul className="space-y-3">
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

          <div className="mt-16 bg-wood-gradient p-8 rounded-2xl text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              Transformamos Espaços, Criamos Memórias
            </h3>
            <p className="text-lg mb-6 max-w-3xl mx-auto">
              Cada projeto é uma oportunidade de criar algo único e especial. Nossa missão é transformar 
              seu espaço em um ambiente que reflita sua personalidade e atenda perfeitamente às suas necessidades.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Missão</h4>
                <p className="text-sm opacity-90">
                  Criar móveis planejados que transformem espaços e melhorem a qualidade de vida dos nossos clientes.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Visão</h4>
                <p className="text-sm opacity-90">
                  Ser referência em móveis planejados, reconhecida pela excelência em design e qualidade.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Valores</h4>
                <p className="text-sm opacity-90">
                  Qualidade, inovação, transparência e compromisso com a satisfação do cliente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
