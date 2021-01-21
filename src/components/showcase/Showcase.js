import React from 'react';
import { Link } from 'react-router-dom';
import './showcase.scss';

const Showcase = () => {
  return (
    <div className='showcase'>
      <div className='container grid'>
        <div className='showcase-text'>
          <h1>Easier Deployment</h1>
          <p>
            Deploy web app of all kinds, form large scale enterprise APIs to
            static website for individulas. Fill out the form to try a demo of
            our platform
          </p>
          <Link className='btn btn-outline' to='/features'>
            Read More
          </Link>
        </div>

        <div className='showcase-form card'>
          <h2>Request A Demo</h2>

          <form>
            <div className='form-control'>
              <input type='text' name='name' placeholder='Name' required />
            </div>
            <div className='form-control'>
              <input
                type='text'
                name='company'
                placeholder='Company'
                required
              />
            </div>
            <div className='form-control'>
              <input type='email' name='email' placeholder='Email' required />
            </div>
            <input type='submit' className='btn btn-primary' value='Send' />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
