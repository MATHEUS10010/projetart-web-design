
import React from 'react';

const WhatsAppButton = () => {
  const handleClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-17129459117/7SWHCPzhqdkaEK2b--c_',
      });
    }
  };

  return (
    <a
      href="https://wa.me/5555999633435" // substitua pelo seu número com DDI e DDD
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      style={{
        display: 'inline-block',
        padding: '12px 20px',
        backgroundColor: '#25D366',
        color: '#fff',
        borderRadius: '8px',
        textDecoration: 'none',
        fontWeight: 'bold',
      }}
    >
      Fale pelo WhatsApp
    </a>
  );
};

export default WhatsAppButton;

