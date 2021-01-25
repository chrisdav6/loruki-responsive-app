import React from 'react';
import {
  FaServer,
  FaNetworkWired,
  FaLaptopCode,
  FaDatabase,
  FaPowerOff,
  FaUpload
} from 'react-icons/fa';

import './featuresMain.scss';

const FeaturesMain = () => {
  return (
    <div className='featuresMain'>
      <div className='container grid'>
        <div className='card'>
          <FaServer className='featureIcon' />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet porro
            labore ullam odit consequatur quibusdam cumque praesentium ea,
            exercitationem voluptates, alias beatae laboriosam fugit omnis optio
            et quisquam, delectus ipsa.
          </p>
        </div>
        <div className='card'>
          <FaNetworkWired className='featureIcon' />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            recusandae perferendis culpa, reiciendis a itaque debitis qui vel
            dignissimos ipsum!
          </p>
        </div>
        <div className='card'>
          <FaLaptopCode className='featureIcon' />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
            magnam.
          </p>
        </div>
        <div className='card'>
          <FaDatabase className='featureIcon' />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, a!
          </p>
        </div>
        <div className='card'>
          <FaPowerOff className='featureIcon' />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
            magnam.
          </p>
        </div>
        <div className='card'>
          <FaUpload className='featureIcon' />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
            magnam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesMain;
