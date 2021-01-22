import React from 'react';
import nodeImg from '../../images/logos/node.png';
import clojureImg from '../../images/logos/clojure.png';
import csharpImg from '../../images/logos/csharp.png';
import goImg from '../../images/logos/go.png';
import phpImg from '../../images/logos/php.png';
import pythonImg from '../../images/logos/python.png';
import rubyImg from '../../images/logos/ruby.png';
import scalaImg from '../../images/logos/scala.png';
import './languages.scss';

const Languages = () => {
  return (
    <div className='languages'>
      <h2>Supported Languages</h2>
      <div className='container flex'>
        <div className='card'>
          <h4>Node.js</h4>
          <img src={nodeImg} alt='Node JS' />
        </div>
        <div className='card'>
          <h4>Clojure</h4>
          <img src={clojureImg} alt='Clojure' />
        </div>
        <div className='card'>
          <h4>C #</h4>
          <img src={csharpImg} alt='C Sharp' />
        </div>
        <div className='card'>
          <h4>Go</h4>
          <img src={goImg} alt='Go' />
        </div>
        <div className='card'>
          <h4>PHP</h4>
          <img src={phpImg} alt='PHP' />
        </div>
        <div className='card'>
          <h4>Python</h4>
          <img src={pythonImg} alt='Python' />
        </div>
        <div className='card'>
          <h4>Ruby</h4>
          <img src={rubyImg} alt='Ruby' />
        </div>
        <div className='card'>
          <h4>Scala</h4>
          <img src={scalaImg} alt='Scala' />
        </div>
      </div>
    </div>
  );
};

export default Languages;
