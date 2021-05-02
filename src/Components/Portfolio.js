import React from 'react';
import codegram from '../codegram.png';
import flexmart from '../flexmart.png';
import workout from '../workout.png';
//Font awesome import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
//React popupbox
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';

const Portfolio = () => {
  const openPopupboxCodegram = () => {
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

  const popupboxConfigCodegram = {
    titleBar: {
      enable: true,
      text: 'Codegram Social-Media',
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  //Flexmart project
  const openPopupboxFlexmart = () => {
    const content = (
      <>
        <img
          className='portfolio-image-popupbox'
          src={flexmart}
          alt='FlexMart E-commerce'
        />
        <p>
          This is my current project that i am working to build e-commerce
          website with number of functionality icluding cart, user, admin,
          payment with Paypal also authentication using JSON web-token and more.
        </p>
        <b>Github:</b>
        <a
          className='hyper-link'
          onClick={() => window.open('https://github.com/shivam2409/flexmart')}
        >
          'https://github.com/shivam2409/flexmart'
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigFlexmart = {
    titleBar: {
      enable: true,
      text: 'Flexmart E-commerce',
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  //WorkOut tracker

  const openPopupboxWorkout = () => {
    const content = (
      <>
        <img
          className='portfolio-image-popupbox'
          src={workout}
          alt='Workout Tracker'
        />
        <p className='portfolio-para'>
          Workout tracker is website to track workout activity, user can create
          different profile and track their workout activity and timings.
        </p>
        <b>Github:</b>
        <a
          className='hyper-link'
          onClick={() =>
            window.open('https://github.com/shivam2409/workout-traker')
          }
        >
          https://github.com/shivam2409/workout-traker
        </a>
        <br />
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigWorkout = {
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
          <div className='portfolio-image-box' onClick={openPopupboxCodegram}>
            <img
              className='portfolio-image'
              src={codegram}
              alt='Codegram social media'
            />
            <div className='overflow'></div>
            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
          </div>

          {/*--*/}

          <div className='portfolio-image-box' onClick={openPopupboxFlexmart}>
            <img className='portfolio-image' src={flexmart} alt='Flexmart' />
            <div className='overflow'></div>
            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
          </div>

          <div className='portfolio-image-box' onClick={openPopupboxWorkout}>
            <img className='portfolio-image' src={workout} alt='Imagenest' />
            <div className='overflow'></div>
            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
          </div>
        </div>
        <p className='para-headline'>
          Oh and don't forget to click on the images...
        </p>
      </div>

      <PopupboxContainer {...popupboxConfigCodegram} />
      <PopupboxContainer {...popupboxConfigFlexmart} />
      <PopupboxContainer {...popupboxConfigWorkout} />
    </div>
  );
};

export default Portfolio;
