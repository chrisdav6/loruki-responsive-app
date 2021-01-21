import React from 'react';
import Showcase from '../../components/showcase/Showcase';
import Stats from '../../components/stats/Stats';
import './home.scss';

const Home = () => {
  return (
    <div className='home'>
      <Showcase />
      <Stats />
    </div>
  );
};

export default Home;
