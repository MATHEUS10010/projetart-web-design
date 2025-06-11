
import React from 'react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Processo', href: '#processo' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Sobre', href: '#sobre' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    const phone = '5555999633435';
    const message = 'Olá! Gostaria de solicitar um orçamento para móveis planejados.';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com/projetartmoveissobmedida', '_blank');
  };

  return (
    <footer id="contato" className="bg-neutral-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo e Descrição */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 text-wood-light">Projetart - Móveis sob medida</h3>
            <p className="text-neutral-300 mb-6 leading-relaxed">
              Móveis planejados sob medida com mais de 10 anos de experiência. 
              Transformamos espaços com qualidade e design exclusivo.
            </p>
            <div className="flex space-x-4">
              <Button
                onClick={handleInstagramClick}
                variant="outline"
                size="sm"
                className="border-wood-medium text-wood-light hover:bg-wood-light hover:text-neutral-800"
              >
                📷 Instagram
              </Button>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-wood-light">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-neutral-300 hover:text-wood-light transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-wood-light">Nossos Serviços</h4>
            <ul className="space-y-2 text-neutral-300">
              <li>Cozinhas Planejadas</li>
              <li>Closets Sob Medida</li>
              <li>Home Offices</li>
              <li>Dormitórios Completos</li>
              <li>Salas de TV</li>
              <li>Banheiros Planejados</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-wood-light">Contato</h4>
            <div className="space-y-3 text-neutral-300">
              <div>
                <p className="font-medium text-wood-light">📍 Endereço:</p>
                <p className="text-sm">
                  BR 472 Esquina Wunsch<br />
                  Três de Maio - RS<br />
                  CEP: 98910-000
                </p>
              </div>
              
              <div>
                <p className="font-medium text-wood-light">📞 Telefone:</p>
                <p className="text-sm">(55) 99963-3435</p>
              </div>
              
              <div>
                <p className="font-medium text-wood-light">📱 WhatsApp:</p>
                <button
                  onClick={handleWhatsAppClick}
                  className="text-sm hover:text-wood-light transition-colors duration-200"
                >
                  (55) 99963-3435
                </button>
              </div>
              
              <div>
                <p className="font-medium text-wood-light">✉️ E-mail:</p>
                <a 
                  href="mailto:projetart@projetart.com"
                  className="text-sm hover:text-wood-light transition-colors duration-200"
                >
                  projetart@projetart.com
                </a>
              </div>
            </div>
            
            {/* WhatsApp button removed as requested */}
          </div>
        </div>

        {/* Horário de Funcionamento */}
        <div className="mt-8 pt-8 border-t border-neutral-700">
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 text-wood-light">Horário de Atendimento</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-neutral-300 max-w-lg mx-auto">
              <div>
                <p className="font-medium">Segunda à Sexta:</p>
                <p className="text-sm">07:30 às 12:00, 13:30 às 18:00</p>
              </div>
              <div>
                <p className="font-medium">Sábado:</p>
                <p className="text-sm">07:30 às 12:00</p>
              </div>
              <div>
                <p className="font-medium">Domingo:</p>
                <p className="text-sm">Fechado</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-neutral-700 text-center text-neutral-400">
          <p className="text-sm">
            © {currentYear} Projetart - Móveis sob medida. Todos os direitos reservados.
          </p>
          <p className="text-xs mt-2">
            Desenvolvido com ❤️ para transformar espaços em sonhos realizados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
