import React from 'react';

const HSCards = ({ id, name, image, onClick }) => {
  return <img src={image} alt={`${id} - ${name}`} name={name} onClick={onClick} width={'70%'} />;
};

export default HSCards;
