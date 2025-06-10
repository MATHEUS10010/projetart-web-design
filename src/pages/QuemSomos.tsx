import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const QuemSomos = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home page
    navigate('/', { replace: true });
    
    // Scroll to the about section after a short delay
    setTimeout(() => {
      const element = document.querySelector('#quem-somos');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }, [navigate]);

  return null;
};

export default QuemSomos;