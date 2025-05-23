
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Maria Silva',
      location: 'São Paulo, SP',
      text: 'A Projetart transformou nossa cozinha em um espaço incrível! O atendimento foi excepcional desde o primeiro contato até a entrega. Superou todas as nossas expectativas.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b169?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      rating: 5
    },
    {
      name: 'João Santos',
      location: 'Santos, SP',
      text: 'Profissionais competentes e pontuais. O projeto do meu home office ficou perfeito, exatamente como eu imaginava. Recomendo para todos!',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      rating: 5
    },
    {
      name: 'Ana Oliveira',
      location: 'Guarulhos, SP',
      text: 'O closet que a Projetart fez para mim é um sonho! Aproveitaram cada cantinho e o resultado ficou lindo e funcional. Trabalho impecável!',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      rating: 5
    },
    {
      name: 'Carlos Mendes',
      location: 'Osasco, SP',
      text: 'Qualidade excepcional e preço justo. A equipe da Projetart é muito profissional e cumpriu todos os prazos combinados. Estou muito satisfeito!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      rating: 5
    },
    {
      name: 'Fernanda Costa',
      location: 'Barueri, SP',
      text: 'A Projetart entendeu exatamente o que eu queria para minha sala. O painel de TV ficou lindo e a organização está perfeita. Recomendo demais!',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="depoimentos" className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-800 mb-4">
            O que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            A satisfação dos nossos clientes é o melhor indicador da qualidade do nosso trabalho
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-xl bg-white overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-20 h-20 rounded-full mx-auto mb-6 object-cover border-4 border-wood-light"
                />
                
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">★</span>
                  ))}
                </div>

                <blockquote className="text-xl md:text-2xl text-neutral-700 italic mb-6 leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                <div className="text-center">
                  <h4 className="text-lg font-semibold text-neutral-800">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-wood-dark font-medium">
                    {testimonials[currentIndex].location}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button
              onClick={prevTestimonial}
              variant="outline"
              size="sm"
              className="border-wood-medium text-wood-dark hover:bg-wood-light"
            >
              ← Anterior
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-wood-dark' : 'bg-neutral-300'
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={nextTestimonial}
              variant="outline"
              size="sm"
              className="border-wood-medium text-wood-dark hover:bg-wood-light"
            >
              Próximo →
            </Button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-neutral-800 mb-4">
              Seja o Próximo Cliente Satisfeito
            </h3>
            <p className="text-neutral-600 mb-6">
              Junte-se a centenas de clientes que já transformaram seus espaços com a Projetart
            </p>
            <Button
              onClick={() => {
                const element = document.querySelector('#orcamento');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-wood-dark hover:bg-wood-medium text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Quero Meu Projeto
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
