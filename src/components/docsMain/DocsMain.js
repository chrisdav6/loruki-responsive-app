import React from 'react';
import { FaInfo } from 'react-icons/fa';
import './docsMain.scss';

const DocsMain = () => {
  return (
    <div className='docsMain'>
      <div className='container grid'>
        <div className='card'>
          <h3>Essentials</h3>
          <nav>
            <ul>
              <li>
                <a href='#'>Introduction</a>
              </li>
              <li>
                <a href='#'>About Loruki</a>
              </li>
              <li>
                <a href='#'>Installation</a>
              </li>
            </ul>
          </nav>

          <h3>Deployment</h3>
          <nav>
            <ul>
              <li>
                <a href='#'>Setting Up A Container</a>
              </li>
              <li>
                <a href='#'>Using the CLI</a>
              </li>
              <li>
                <a href='#'>Managing Resources</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className='card bgWhite'>
          <h2>Introduction</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            repudiandae, quae ut ipsam sint mollitia exercitationem quia rem
            perspiciatis libero quos commodi corporis assumenda cupiditate?
            Voluptates rem perspiciatis illum vel amet maiores laborum commodi
            praesentium veniam itaque? Voluptatum, temporibus veritatis!
          </p>
          <div className='alert'>
            <FaInfo className='docsIcon' /> Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Saepe, quia?
          </div>

          <h3>Lorem, ipsum dolor.</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
            porro tempore, cum laudantium modi facilis eos aperiam quam enim
            optio.
          </p>
          <a href='#' className='btn'>
            Install CLI
          </a>

          <h3>Requirements</h3>
          <ul>
            <li>Windows 10, MAC OSX, Linux</li>
            <li>Node.js v12 or higher</li>
          </ul>

          <h3>Install</h3>
          <p>Mac (Homebrew)</p>
          <pre>
            <code>$ brew install loruki-cli</code>
          </pre>
          <p>NPM</p>
          <pre>
            <code>$ npm install loruki-cli</code>
          </pre>
          <p>Yarn</p>
          <pre>
            <code>$ yarn add loruki-cli</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default DocsMain;
