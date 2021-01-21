import React from 'react';
import { FaServer, FaUpload, FaProjectDiagram } from 'react-icons/fa';
import './stats.scss';

const Stats = () => {
  return (
    <div className='stats'>
      <div className='container'>
        <h3 className='stats-heading'>
          Welcome to the best platform for building applications of all types
          with modern architecture and scaling
        </h3>

        <div className='grid'>
          <div className='stat'>
            <FaServer className='icon' />
            <h3>10,000</h3>
            <p>Deployments</p>
          </div>
          <div className='stat'>
            <FaUpload className='icon' />
            <h3>987 TB</h3>
            <p>Published</p>
          </div>
          <div className='stat'>
            <FaProjectDiagram className='icon' />
            <h3>2,343,265</h3>
            <p>Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
