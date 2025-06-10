import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Portfolio = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home page
    navigate('/', { replace: true });
    
    // Scroll to the portfolio section after a short delay
    setTimeout(() => {
      const element = document.querySelector('#portfolio');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }, [navigate]);

  return null;
};

export default Portfolio;