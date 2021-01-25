import React from 'react';
import server2Img from '../../images/server2.png';
import './featuresSubHead.scss';

const FeaturesSubHead = () => {
  return (
    <div className='featuresSubHead'>
      <div className='container grid'>
        <img src={server2Img} alt='Server 2' />
        <div>
          <h1>The Loruki Platform</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            sunt corrupti optio totam iure repellendus, veritatis deserunt
            expedita dolore dolor vero, cumque temporibus beatae sequi,
            praesentium unde quam natus quisquam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSubHead;
