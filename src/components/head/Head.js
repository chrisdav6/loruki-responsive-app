import React from 'react';
import './head.scss';

const FeaturesHead = ({ title, text, img }) => {
  return (
    <div className='head'>
      <div className='container grid'>
        <div>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
        <img src={img} alt='Server' />
      </div>
    </div>
  );
};

export default FeaturesHead;
