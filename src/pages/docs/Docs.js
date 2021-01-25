import React from 'react';
import Head from '../../components/head/Head';
import docsImg from '../../images/docs.png';
import DocsMain from '../../components/docsMain/DocsMain';
import './docs.scss';

const Docs = () => {
  return (
    <div className='docs'>
      <Head
        title='Docs'
        text='Learn how to work the Loruki platform'
        img={docsImg}
      />
      <DocsMain />
    </div>
  );
};

export default Docs;
