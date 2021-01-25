import React from 'react';
import './subHead.scss';

const FeaturesSubHead = ({ img, title, text }) => {
  return (
    <div className='subHead'>
      <div className='container grid'>
        <img src={img} alt='Server 2' />
        <div>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSubHead;
