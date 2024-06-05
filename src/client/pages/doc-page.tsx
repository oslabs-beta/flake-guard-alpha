import React from 'react';
import NavBarHeading from '../pages/nav-bar';

const DocPage: React.FC = () => {
  return (
    <>
      <header>
        <NavBarHeading />
      </header>
      <div>
        {' '}
        Downloading Instructions
        <p> npm https://www.npmjs.com/package/flake-guard</p>
        <code> CLI npm i flake-guard</code>
        <p> GitHub github.com/oslabs-beta/flake-guard</p>
      </div>
    </>
  );
};

export default DocPage;
