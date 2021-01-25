import React from 'react';
import Head from '../../components/head/Head';
import SubHead from '../../components/subHead/SubHead';
import FeaturesMain from '../../components/featuresMain/FeaturesMain';
import './features.scss';

const Features = () => {
  return (
    <div className='features'>
      <Head />
      <SubHead />
      <FeaturesMain />
    </div>
  );
};

export default Features;
