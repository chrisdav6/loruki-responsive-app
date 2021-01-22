import React from 'react';
import cliImage from '../../images/cli.png';
import './commandLine.scss';

const CommandLine = () => {
  return (
    <div className='commandLine'>
      <div className='container grid'>
        <img src={cliImage} alt='CLI' />

        <div className='card'>
          <h3>Easy to use, cross platform CLI.</h3>
        </div>
        <div className='card'>
          <h3>Deploy in seconds!</h3>
        </div>
      </div>
    </div>
  );
};

export default CommandLine;
