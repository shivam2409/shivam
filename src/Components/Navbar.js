import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-scroll';
//REACT FONTAWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-dark fixed-top'>
      <div className='container'>
        <img src={logo} alt='' />
        {/* <p className='logo'> SHIVAM PATEL</p> */}
        <a className='navbar-brand' href='#'></a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <FontAwesomeIcon icon={faBars} style={{ color: '#fff' }} />
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            {/* <li className='nav-item active'>
              <Link smooth={true} to='home' className='nav-link' href='#'>
                Home <span className='sr-only'>(current)</span>
              </Link>
            </li> */}
            <li className='nav-item'>
              <Link
                smooth={true}
                to='about'
                offset={-110}
                className='nav-link'
                href='#'
              >
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                smooth={true}
                to='education'
                offset={-110}
                className='nav-link'
                href='#'
              >
                Education
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                smooth={true}
                to='experience'
                offset={-110}
                className='nav-link'
                href='#'
              >
                Experience
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                smooth={true}
                to='portfolio'
                offset={-110}
                className='nav-link'
                href='#'
              >
                Project
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                smooth={true}
                to='contacts'
                offset={-110}
                className='nav-link'
                href='#'
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
