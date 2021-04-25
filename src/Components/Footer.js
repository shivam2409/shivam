import React from 'react';
import { Link } from 'react-scroll';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from 'react-share';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 col-md-6 col-sm-6'>
            <div className='d-flex'>
              <p>Toronto,Canada</p>
            </div>
            <div className='d-flex'>
              <a href='tel:289-946-2409'>+1(289)946-2409</a>
            </div>
            <div className='d-flex'>
              <p>patelshivam2409@gmail.com</p>
            </div>
          </div>
          <div className='col-lg-3 col-md-2 col-sm-6'>
            <div className='row'>
              <div className='col'>
                <Link
                  smooth={true}
                  to='home'
                  offset={-110}
                  className='footer-nav'
                >
                  Home
                </Link>
                <br />
                <Link
                  smooth={true}
                  to='about'
                  offset={-110}
                  className='footer-nav'
                >
                  About Me
                </Link>
                <br />
                <Link
                  smooth={true}
                  to='education'
                  offset={-110}
                  className='footer-nav'
                >
                  Education
                </Link>
                <br />
              </div>
              <div className='col'>
                <Link
                  smooth={true}
                  to='experience'
                  offset={-110}
                  className='footer-nav'
                >
                  Experience
                </Link>
                <br />
                <Link
                  smooth={true}
                  to='portfolio'
                  offset={-110}
                  className='footer-nav'
                >
                  Projects
                </Link>
                <br />
                <Link
                  smooth={true}
                  to='contacts'
                  offset={-110}
                  className='footer-nav'
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
          <div className='col-lg-5 col-md-5 col-sm-6 align-items-center'>
            <div className='d-flex justify-content-center'>
              <FacebookShareButton
                url={'https://www.linkedin.com/in/shivampatel2409/'}
                quote={'Software Developer'}
                hashtag='#javascript'
              >
                <FacebookIcon className='mx-3' size={36} />
              </FacebookShareButton>
              <LinkedinShareButton
                url={'https://www.linkedin.com/in/shivampatel2409/'}
                quote={'Software Developer'}
                hashtag='#jobsInCanada'
              >
                <LinkedinIcon className='mx-3' size={36} />
              </LinkedinShareButton>
            </div>
            <p className='pt-3 text-center'>
              Please share my profile in your network.
              <br />
              Eligible to work full-time in Canada.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
