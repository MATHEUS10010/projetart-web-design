import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Avaliacoes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home page
    navigate('/', { replace: true });
    
    // Scroll to the testimonials section after a short delay
    setTimeout(() => {
      const element = document.querySelector('#depoimentos');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }, [navigate]);

  return null;
};

export default Avaliacoes;