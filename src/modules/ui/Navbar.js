import React from 'react';
import logo from '../../images/logo.png';

const Navbar = () => {
  return (
    <nav className='navbar navbar-dark bg-primary text-center d-flex justify-content-center'>
      {/* eslint-disable-next-line */}
      <a className='navbar-brand m-1 p-1' href='#'>
        <img src={logo} alt='logo' />
        <h4>
          <span className='font-weight-bold text-info'>FFXIV</span> Character DB
        </h4>
      </a>
    </nav>
  );
};

export default Navbar;
