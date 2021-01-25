import React from 'react';
import Head from '../../components/head/Head';
import SubHead from '../../components/subHead/SubHead';
import FeaturesMain from '../../components/featuresMain/FeaturesMain';
import serverImg from '../../images/server.png';
import server2Img from '../../images/server2.png';
import './features.scss';

const Features = () => {
  return (
    <div className='features'>
      <Head
        title='Features'
        text='Check out the features of Loruki that seperate us from the
            competition'
        img={serverImg}
      />
      <SubHead
        title='The Loruki Platform'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            sunt corrupti optio totam iure repellendus, veritatis deserunt
            expedita dolore dolor vero, cumque temporibus beatae sequi,
            praesentium unde quam natus quisquam.'
        img={server2Img}
      />
      <FeaturesMain />
    </div>
  );
};

export default Features;
