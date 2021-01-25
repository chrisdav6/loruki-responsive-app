import React from 'react';
import FeaturesHead from '../../components/featuresHead/FeaturesHead';
import FeaturesSubHead from '../../components/featuresSubHead/FeaturesSubHead';
import FeaturesMain from '../../components/featuresMain/FeaturesMain';
import './features.scss';

const Features = () => {
  return (
    <div className='features'>
      <FeaturesHead />
      <FeaturesSubHead />
      <FeaturesMain />
    </div>
  );
};

export default Features;
