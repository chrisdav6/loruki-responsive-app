import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import './footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container grid'>
        <div className='title'>
          <h1>Loruki</h1>
          <p>Copyright &copy; 2021</p>
        </div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/features'>Features</Link>
            </li>
            <li>
              <Link to='/docs'>Docs</Link>
            </li>
          </ul>
        </nav>
        <div className='social'>
          <Link to='#'>
            <FaTwitter className='icon' />
          </Link>
          <Link to='#'>
            <FaFacebook className='icon' />
          </Link>
          <Link to='#'>
            <FaInstagram className='icon' />
          </Link>
          <Link to='#'>
            <FaGithub className='icon' />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
