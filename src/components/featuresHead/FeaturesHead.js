import React from 'react';
import serverImg from '../../images/server.png';
import './featuresHead.scss';

const FeaturesHead = () => {
  return (
    <div className='featuresHead'>
      <div className='container grid'>
        <div>
          <h1>Features</h1>
          <p>
            Check out the features of Loruki that seperate us from the
            competition
          </p>
        </div>
        <img src={serverImg} alt='Server' />
      </div>
    </div>
  );
};

export default FeaturesHead;