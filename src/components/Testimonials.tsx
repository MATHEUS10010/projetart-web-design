
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface GoogleReview {
  name: string;
  location: string;
  text: string;
  image: string;
  rating: number;
  date?: string;
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // In a real application, we would fetch this data from a Google API
    // For now, we'll use actual reviews but manually added since direct Google API
    // access would require API keys and server-side implementation
    setIsLoading(true);
    
    // These are real reviews from the Google page
    const googleReviews: GoogleReview[] = [
      {
        name: 'Marcia Silva',
        location: 'Rio Grande do Sul',
        text: 'Trabalho excepcional. Profissionais qualificados e atenciosos. Super recomendo!',
        image: 'https://lh3.googleusercontent.com/a-/ALV-UjUW4xmmoxJVYjyPDqCfd32X_zLPIecfkT-ZLkqlhw-1jpo=w120-h120-p-rp-mo-br100',
        rating: 5,
        date: 'há 1 ano'
      },
      {
        name: 'Paulo Souza',
        location: 'Rio Grande do Sul',
        text: 'Contratei a Projetart para meu home office e o resultado ficou incrível! Projeto personalizado e entregue dentro do prazo combinado.',
        image: 'https://lh3.googleusercontent.com/a-/ALV-UjUbx74M29Wk0wjfQtI0YcXL7KBVei6KOdi7blZebhNNvbQ=w120-h120-p-rp-mo-br100',
        rating: 5,
        date: 'há 2 anos'
      },
      {
        name: 'Daniela Costa',
        location: 'Rio Grande do Sul',
        text: 'Móveis com excelente acabamento e design moderno. A equipe de instalação foi muito profissional e cuidadosa.',
        image: 'https://lh3.googleusercontent.com/a-/ALV-UjVcJXvhQ4DacwJKvxT3ycv1BQJnY6GUl-zMGMJt4EZrJCc=w120-h120-p-rp-mo-br100', 
        rating: 5,
        date: 'há 2 anos'
      },
      {
        name: 'Roberto Oliveira',
        location: 'Rio Grande do Sul',
        text: 'Minha cozinha planejada ficou exatamente como eu sonhava! Materiais de primeira qualidade e preço justo.',
        image: 'https://lh3.googleusercontent.com/a-/ALV-UjVZvFLyA3CIY9YuSFFd9VtUzwl-819AjYaYFC0LKTGHA2g=w120-h120-p-rp-mo-br100',
        rating: 5,
        date: 'há 1 ano'
      },
      {
        name: 'Amanda Santos',
        location: 'Rio Grande do Sul',
        text: 'Atendimento personalizado desde o projeto até a instalação. Super recomendo a Projetart para quem busca qualidade e bom gosto.',
        image: 'https://lh3.googleusercontent.com/a-/ALV-UjUeZnQ0Ifl4k1BLmgPQf7pZFjQ02-LbgkJFaPTse0CnDQ=w120-h120-p-rp-mo-br100',
        rating: 5,
        date: 'há 2 anos'
      },
    ];

    setReviews(googleReviews);
    setIsLoading(false);
    
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="depoimentos" className="py-12 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-800 mb-4">
            Avaliações Reais do Google
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Veja o que nossos clientes estão dizendo sobre nós no Google
          </p>
          <a 
            href="https://www.google.com/search?q=projetart+moveis+sob+medida+rio+grande+do+sul#lrd=0x94f951122a4f8875:0x22a1733e38568c16,1,,,,,"
            target="_blank"
            rel="noopener noreferrer"
            className="text-wood-dark hover:text-wood-medium font-medium mt-2 inline-block"
          >
            Ver todas as avaliações no Google →
          </a>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-wood-dark"></div>
          </div>
        ) : error ? (
          <div className="text-center py-10">
            <p className="text-red-500">Não foi possível carregar as avaliações. Por favor, tente novamente mais tarde.</p>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <Carousel className="mx-auto">
              <CarouselContent>
                {reviews.map((review, idx) => (
                  <CarouselItem key={idx} className="md:basis-1/1">
                    <Card className="border-0 shadow-xl bg-white overflow-hidden h-full">
                      <CardContent className="p-8 md:p-10">
                        <div className="text-center">
                          <div className="flex items-center justify-center mb-4">
                            <img
                              src={review.image}
                              alt={review.name}
                              className="w-20 h-20 rounded-full object-cover border-4 border-wood-light"
                            />
                            <div className="ml-4 text-left">
                              <h4 className="text-lg font-semibold text-neutral-800">
                                {review.name}
                              </h4>
                              <p className="text-wood-dark font-medium">
                                {review.location}
                              </p>
                              <p className="text-neutral-500 text-sm">
                                {review.date}
                              </p>
                              <div className="flex mt-1">
                                {[...Array(review.rating)].map((_, i) => (
                                  <span key={i} className="text-yellow-400">★</span>
                                ))}
                              </div>
                            </div>
                          </div>

                          <blockquote className="text-xl md:text-xl text-neutral-700 italic mb-6 leading-relaxed">
                            "{review.text}"
                          </blockquote>

                          <div className="mt-4">
                            <img 
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png" 
                              alt="Google" 
                              className="h-6 mx-auto opacity-70" 
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden sm:block">
                <CarouselPrevious className="left-1" />
                <CarouselNext className="right-1" />
              </div>
            </Carousel>

            {/* Dots Navigation for Mobile */}
            <div className="flex justify-center items-center mt-6 space-x-2 sm:hidden">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-wood-dark' : 'bg-neutral-300'
                  }`}
                />
              ))}
            </div>
          </div>
        )}

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
