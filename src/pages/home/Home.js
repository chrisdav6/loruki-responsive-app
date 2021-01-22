import React from 'react';
import Showcase from '../../components/showcase/Showcase';
import Stats from '../../components/stats/Stats';
import CommandLine from '../../components/commandLine/CommandLine';
import Cloud from '../../components/cloud/Cloud';
import './home.scss';

const Home = () => {
  return (
    <div className='home'>
      <Showcase />
      <Stats />
      <CommandLine />
      <Cloud />
    </div>
  );
};

export default Home;
