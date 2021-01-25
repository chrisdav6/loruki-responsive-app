import React from 'react';
import FeaturesHead from '../../components/featuresHead/FeaturesHead';
import FeaturesSubHead from '../../components/featuresSubHead/FeaturesSubHead';
import './features.scss';

const Features = () => {
  return (
    <div className='features'>
      <FeaturesHead />
      <FeaturesSubHead />
    </div>
  );
};

export default Features;
