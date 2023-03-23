/** @format */

import React from 'react';
import author from '../me.jpg';

const AboutMe = () => {
  return (
    <div id='about' className='container py-5'>
      <div className='row'>
        <div className='col-lg-6  col-xm-12'>
          <div className='photo-wrap mb-5'>
            <img className='profile-img' />
            {/* src={author} alt='author...'  */}
          </div>
        </div>
        <div className='col-lg-6  col-xm-12'>
          <h1 className='about-heading'>About me</h1>
          <p className='pabout'>
            Front End developer with 2+ years of industry experience building
            websites and web applications. Specialize in JavaScript and have
            professional experience working with React, NodeJs, Redux and
            Redux-thunk. Also have experience working with scalable Frond-End
            and Back-end development using PHP, SQL, Express. A quick thinker,
            Multi-tasker, team player and self-learner. Worked for various
            clients over the years on multiple projects to help them achieve
            their business goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
