// src/views/HolaPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HolaPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); 
  };
  return (
    <div>
      <h1>Hola!</h1>
      <button onClick={handleBack}>Tornar</button>
    </div>
  );
};

export default HolaPage;
