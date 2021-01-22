import React from 'react';
import { Link } from 'react-router-dom';
import CloudImage from '../../images/cloud.png';
import './cloud.scss';

const Cloud = () => {
  return (
    <div className='cloud'>
      <div className='container grid'>
        <div className='text'>
          <h2>Extreme Cloud Hosting</h2>
          <p>
            Cloud hosting like you have never seen. Fast, efficient and scalable
          </p>
          <Link className='btn btn-dark' to='/features'>
            Read More
          </Link>
        </div>
        <img src={CloudImage} alt='Cloud' />
      </div>
    </div>
  );
};

export default Cloud;
