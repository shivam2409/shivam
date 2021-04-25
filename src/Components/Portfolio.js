import React from 'react';
import restromation from '../restromation.png';
import portfolio from '../portfolio.png';
import netflix from '../netflix.png';
//Font awesome import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
//React popupbox
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';

const Portfolio = () => {
  const openPopupboxRestromation = () => {
    const content = (
      <>
        <img
          className='portfolio-image-popupbox'
          src={restromation}
          alt='Restromation project ... '
        />
        <p className='portfolio-para'>
          Developed and designed android mobile application to reduce the human
          interaction and to automate and expedite the working process of a
          restaurant. Developed Rest-API using ASP.Net web API and entity
          framework and deployed API on AWS. Successfully created the
          authentication and role based authorization system to make API more
          secure. Designed and implemented database and stored procedures using
          Microsoft SQL Server.
        </p>
        <b>Github:</b>
        <a
          className='hyper-link'
          onClick={() =>
            window.open('https://github.com/himanshushah96/Restromation')
          }
        >
          https://github.com/himanshushah96/Restromation
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigRestromation = {
    titleBar: {
      enable: true,
      text: 'Restaurant automation project.',
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  //Portfolio project
  const openPopupboxPortfolio = () => {
    const content = (
      <>
        <img
          className='portfolio-image-popupbox'
          src={portfolio}
          alt='Portfolio project ... '
        />
        <p>
          The current project developed using React. Find out more at my github
          repository.
        </p>
        <b>Github:</b>
        <a
          className='hyper-link'
          onClick={() =>
            window.open('https://github.com/himanshushah96/portfolio')
          }
        >
          https://github.com/himanshushah96/portfolio
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigPortfolio = {
    titleBar: {
      enable: true,
      text: 'Portfolio project.',
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  //Netflix clone

  const openPopupboxNetflix = () => {
    const content = (
      <>
        <img
          className='portfolio-image-popupbox'
          src={netflix}
          alt='Netflix clone project ... '
        />
        <p className='portfolio-para'>
          Tried to build netflix web app screen using reactJs Created using the
          api from tmdb. Deployed on Firebase
        </p>
        <b>Github:</b>
        <a
          className='hyper-link'
          onClick={() =>
            window.open('https://github.com/himanshushah96/Netflix-clone')
          }
        >
          https://github.com/himanshushah96/Netflix-clone
        </a>
        <br />
        <b>Deployed at:</b>
        <a
          className='hyper-link'
          onClick={() => window.open('https://netflix-clone-3f5a0.web.app/')}
        >
          https://netflix-clone-3f5a0.web.app/
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigNetflix = {
    titleBar: {
      enable: true,
      text: 'Netflix clone project.',
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  return (
    <div id='portfolio' className='portfolio-wrapper'>
      <div className='container'>
        <h1 className='text-uppercase text-center py-5'>Projects</h1>
        <div className='image-box-wrapper row justify-content-center'>
          <div
            className='portfolio-image-box'
            onClick={openPopupboxRestromation}
          >
            <img
              className='portfolio-image'
              src={restromation}
              alt='Restaurant Automation...'
            />
            <div className='overflow'></div>
            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
          </div>

          {/*--*/}

          <div className='portfolio-image-box' onClick={openPopupboxPortfolio}>
            <img
              className='portfolio-image'
              src={portfolio}
              alt='Portfolio...'
            />
            <div className='overflow'></div>
            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
          </div>

          <div className='portfolio-image-box' onClick={openPopupboxNetflix}>
            <img
              className='portfolio-image'
              src={netflix}
              alt='Netflix Clone...'
            />
            <div className='overflow'></div>
            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
          </div>
        </div>
        <p className='para-headline'>
          Oh and don't forget to click on the images...
        </p>
      </div>

      <PopupboxContainer {...popupboxConfigRestromation} />
      <PopupboxContainer {...popupboxConfigPortfolio} />
      <PopupboxContainer {...popupboxConfigNetflix} />
    </div>
  );
};

export default Portfolio;
