
import React, { useState } from 'react';
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
  numberOfReviews?: string;
  text: string;
  image: string;
  rating: number;
  date: string;
  localGuide?: boolean;
  photos?: number;
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Real Google reviews from the provided screenshots
  const reviews: GoogleReview[] = [
    {
      name: 'Rafael Reinheimer',
      numberOfReviews: '5 avaliações',
      text: 'Gostaria de expressar meu sincero agradecimento pelo incrível trabalho que vocês realizaram com os móveis planejados. ❤️ Desde o atendimento inicial até a instalação final, cada etapa foi executada com um profissionalismo e capricho...',
      image: '/lovable-uploads/6c812c0a-4abd-44bb-9cc4-2d9ac182b976.png',
      rating: 5,
      date: 'uma semana atrás'
    },
    {
      name: 'Airton Luiz Wilhelm',
      numberOfReviews: '3 avaliações',
      text: 'Excelente experiência com a Projetart! Móveis de qualidade, com um acabamento impecável e design sob medida que realmente transformam os ambientes. Recomendo para quem busca móveis personalizados que unem estilo e funcionalidade!',
      image: '/lovable-uploads/6c812c0a-4abd-44bb-9cc4-2d9ac182b976.png',
      rating: 5,
      date: 'uma semana atrás'
    },
    {
      name: 'NO AR Notícias',
      numberOfReviews: '2 avaliações',
      text: 'Ficamos muito satisfeitos com a qualidade dos móveis da Projetart. Percebemos profissionalismo, pois durante o desenvolvimento do projeto foram dadas sugestões de como o móvel poderia ficar melhor no ambiente.',
      image: '/lovable-uploads/f8d8fc42-ad08-4bfa-8be8-c2508ff5a350.png',
      rating: 5,
      date: 'uma semana atrás'
    },
    {
      name: 'Amanda Hineraski',
      numberOfReviews: '2 avaliações',
      text: 'Indico de olhos fechados! Equipe atenciosa, dedicada e detalhista, profissionais incríveis! Marcenaria completa, equipamentos de alta qualidade e tecnologia para garantir os melhores acabamentos.',
      image: '/lovable-uploads/f8d8fc42-ad08-4bfa-8be8-c2508ff5a350.png',
      rating: 5,
      date: 'uma semana atrás'
    },
    {
      name: 'Marcia Veridiane Sacchet',
      numberOfReviews: '2 avaliações',
      text: 'A Projetart é uma empresa com as quais nos identificamos muito, pela competência, seriedade, por desenvolver nossos projetos além do que imaginávamos e também pela ótima equipe de trabalho. Recomendamos sempre.',
      image: '/lovable-uploads/1db5f7ab-ade3-400e-97ee-8c6658f793fb.png',
      rating: 5,
      date: 'uma semana atrás'
    },
    {
      name: 'Geyson Souza',
      numberOfReviews: '22 avaliações',
      text: 'Encontrar profissionais que cumprem prazos e trabalham com respeito ao cliente é sempre um desafio. Fica minha total indicação à equipe da Projetart, profissionais sérios e comprometidos! Que venham os próximos pedidos!!!!!!',
      image: '/lovable-uploads/1db5f7ab-ade3-400e-97ee-8c6658f793fb.png',
      rating: 5,
      date: 'uma semana atrás',
      localGuide: true,
      photos: 14
    },
    {
      name: 'Thais Seyffert',
      numberOfReviews: '3 avaliações',
      text: 'Empresa incrível, desde o primeiro contato, produção, montagem, até o pós venda, esquipe dedicada para entregar tudo com excelência.',
      image: '/lovable-uploads/84d12cfd-8b0b-498f-afdb-fe803ad6c44d.png',
      rating: 5,
      date: 'uma semana atrás'
    },
    {
      name: 'Michele Meinhart de souza',
      numberOfReviews: '1 avaliação',
      text: 'Pessoal incrível, super profissional além de entregar um excelente trabalho, com móveis de qualidade. Super indico 👍',
      image: '/lovable-uploads/84d12cfd-8b0b-498f-afdb-fe803ad6c44d.png',
      rating: 5,
      date: 'uma semana atrás'
    },
    {
      name: 'Irineu Pitrovski',
      numberOfReviews: '1 avaliação',
      text: 'Recomendo, o trabalho é perfeito e de qualidade entrega dentro do prazo, produto excelente conforme solicitado.',
      image: '/lovable-uploads/ab1a483a-0e16-4b8e-8463-b7a31b5db4e8.png',
      rating: 5,
      date: '6 dias atrás'
    },
    {
      name: 'Valtemir Alegranzi',
      numberOfReviews: '1 avaliação',
      text: 'Já fiz vários projetos com a Projetart, e super indico, pois é uma empresa séria, de confiança e seus trabalhos são de primeira linha',
      image: '/lovable-uploads/ab1a483a-0e16-4b8e-8463-b7a31b5db4e8.png',
      rating: 5,
      date: 'uma semana atrás'
    },
    {
      name: 'Paulo Metzner',
      text: 'Os móveis fabricados são de ótima qualidade. O atendimento é feito por profissionais qualificados e capacitados.',
      image: '/lovable-uploads/29b27d3f-b799-4f25-88f8-709e5215097b.png',
      rating: 5,
      date: 'uma semana atrás',
      localGuide: true,
      photos: 427,
      numberOfReviews: '128 avaliações'
    },
    {
      name: 'Nilcéa Secconi',
      numberOfReviews: '1 avaliação',
      text: 'Atendimento atencioso! Na PROJETART, o sonho se torna realidade, com agilidade, segurança e confiança. Obrigada Robson e equipe!',
      image: '/lovable-uploads/29b27d3f-b799-4f25-88f8-709e5215097b.png',
      rating: 5,
      date: 'uma semana atrás'
    },
    {
      name: 'Evania Marostega Marostega',
      numberOfReviews: '1 avaliação',
      text: 'Atendimento muito bom, produtos de qualidade, somos clientes a mais de 5 anos Pontualidade na entrega.',
      image: '/lovable-uploads/7565e45c-a634-4415-8e89-2abea97ee826.png',
      rating: 5,
      date: 'uma semana atrás'
    },
    {
      name: 'Josias Correa',
      numberOfReviews: '1 avaliação',
      text: 'Muito boa, profissionalismo e muito dedicação a cada peça produzida, ambiente de qualidade e tecnologia envolvida.',
      image: '/lovable-uploads/7565e45c-a634-4415-8e89-2abea97ee826.png',
      rating: 5,
      date: 'uma semana atrás'
    },
    {
      name: 'Mentor Edson Santos',
      numberOfReviews: '1 avaliação',
      text: 'Recomendo demais, um excelente lugar, de fácil acesso e com um ótimo atendimento. Produtos de extrema qualidade.',
      image: '/lovable-uploads/34156fd6-e5d0-451a-b4fb-243cdbd74680.png',
      rating: 5,
      date: 'uma semana atrás'
    },
    {
      name: 'Silvana Dutra',
      numberOfReviews: '1 avaliação',
      text: 'Atendimento muito bom! Pessoal organizado, rápido na entrega e com qualidade. Recomendo',
      image: '/lovable-uploads/34156fd6-e5d0-451a-b4fb-243cdbd74680.png',
      rating: 5,
      date: 'uma semana atrás'
    },
    {
      name: 'Julio Klein',
      numberOfReviews: '2 avaliações',
      text: 'Experiência incrível, tudo maravilhoso, excelente atendimento, organizado e agilidade com produção e entrega.',
      image: '/lovable-uploads/34156fd6-e5d0-451a-b4fb-243cdbd74680.png',
      rating: 5,
      date: 'uma semana atrás'
    },
  ];

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
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto mt-2">
            <span className="font-semibold text-wood-dark">5,0</span> <span className="text-yellow-400">★★★★★</span> <span className="text-neutral-600">59 avaliações</span>
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

        <div className="max-w-4xl mx-auto">
          <Carousel className="mx-auto">
            <CarouselContent>
              {reviews.map((review, idx) => (
                <CarouselItem key={idx} className="md:basis-1/1">
                  <Card className="border-0 shadow-xl bg-white overflow-hidden h-full">
                    <CardContent className="p-8 md:p-10">
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-4">
                          <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-neutral-200 rounded-full text-2xl font-bold text-neutral-600">
                            {review.name.charAt(0)}
                          </div>
                          <div className="ml-4 text-left">
                            <div className="flex items-center">
                              <h4 className="text-lg font-semibold text-neutral-800">
                                {review.name}
                              </h4>
                              {review.localGuide && (
                                <span className="ml-2 bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded">
                                  Local Guide
                                </span>
                              )}
                            </div>
                            {review.numberOfReviews && (
                              <p className="text-neutral-500 text-sm">
                                {review.numberOfReviews}
                                {review.photos && ` • ${review.photos} fotos`}
                              </p>
                            )}
                            <p className="text-neutral-500 text-sm">
                              {review.date} <span className="ml-1 text-xs bg-gray-100 px-2 py-0.5 rounded">NOVA</span>
                            </p>
                            <div className="flex mt-1">
                              {[...Array(review.rating)].map((_, i) => (
                                <span key={i} className="text-yellow-400">★</span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <blockquote className="text-xl md:text-xl text-neutral-700 mb-6 leading-relaxed text-left">
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
