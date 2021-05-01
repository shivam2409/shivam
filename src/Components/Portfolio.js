import React from 'react';
import codegram from '../codegram.png';
import imagenest from '../imagenest.png';
import flexmart from '../flexmart.png';
//Font awesome import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
//React popupbox
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';

const Portfolio = () => {
  const openPopupboxcodegram = () => {
    const content = (
      <>
        <img
          className='portfolio-image-popupbox'
          src={codegram}
          alt='Codegram Social-Media '
        />
        <p className='portfolio-para'>
          This is Project i was working on to master MERN stack development this
          site is basically Social web application for Coders.User can create
          profile ,add post,edit profile,like and comments, i have used Json
          web-tokens for authentication, Bootstrap, express and mongoose.
        </p>
        <b>Github:</b>
        <a
          className='hyper-link'
          onClick={() => window.open('https://github.com/shivam2409/codegram')}
        >
          hhttps://github.com/shivam2409/codegram
        </a>
        <br />
        <b>Deployed at:</b>
        <a
          className='hyper-link'
          onClick={() => window.open('https://codegram24.herokuapp.com/')}
        >
          https://codegram24.herokuapp.com/
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigcodegram = {
    titleBar: {
      enable: true,
      text: 'Codegram',
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  //Portfolio project
  const openPopupboxImagenest = () => {
    const content = (
      <>
        <img
          className='portfolio-image-popupbox'
          src={imagenest}
          alt='Imagenest project ... '
        />
        <p>
          The current project developed using React. Find out more at my github
          repository.
        </p>
        <b>Github:</b>
        <a
          className='hyper-link'
          onClick={() => window.open('https://github.com/shivam2409/imagenest')}
        >
          https://github.com/shivam2409/imagenest
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigImagenest = {
    titleBar: {
      enable: true,
      text: 'Imagenest project.',
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  //flexmart

  const openPopupboxflexmart = () => {
    const content = (
      <>
        <img
          className='portfolio-image-popupbox'
          src={flexmart}
          alt='flexmart clone project ... '
        />
        <p className='portfolio-para'>
          Tried to build flexmart web app screen using reactJs Created using the
          api from tmdb. Deployed on Firebase
        </p>
        <b>Github:</b>
        <a
          className='hyper-link'
          onClick={() => window.open('https://github.com/shivam2409/flexmart')}
        >
          https://github.com/shivam2409/flexmart
        </a>
        <br />
        <b>Deployed at:</b>
        <a
          className='hyper-link'
          onClick={() => window.open('https://github.com/shivam2409/flexmart')}
        >
          https://github.com/shivam2409/flexmart
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigflexmart = {
    titleBar: {
      enable: true,
      text: '',
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  return (
    <div id='portfolio' className='portfolio-wrapper'>
      <div className='container'>
        <h1 className='text-uppercase text-center py-5'>Projects</h1>
        <div className='image-box-wrapper row justify-content-center'>
          <div className='portfolio-image-box' onClick={openPopupboxcodegram}>
            <img className='portfolio-image' src={codegram} alt='Codegram' />
            <div className='overflow'></div>
            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
          </div>

          {/*--*/}

          <div className='portfolio-image-box' onClick={openPopupboxImagenest}>
            <img
              className='portfolio-image'
              src={imagenest}
              alt='Portfolio...'
            />
            <div className='overflow'></div>
            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
          </div>

          <div className='portfolio-image-box' onClick={openPopupboxflexmart}>
            <img className='portfolio-image' src={flexmart} alt='Flexmart' />
            <div className='overflow'></div>
            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
          </div>
        </div>
        <p className='para-headline'>
          Oh and don't forget to click on the images...
        </p>
      </div>

      <PopupboxContainer {...popupboxConfigcodegram} />
      <PopupboxContainer {...popupboxConfigImagenest} />
      <PopupboxContainer {...popupboxConfigflexmart} />
    </div>
  );
};

export default Portfolio;
