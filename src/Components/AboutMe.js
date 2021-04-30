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
            As a software development student, I have learned and worked with
            different kind of technologies. Currently, looking for a fulltime
            opportunity as a software developer, with ability to work in Canada
            on full time basis for any employer.
            <br />
            <b>Programming Languages : </b>React, Java, C# .Net, JavaScript,
            HTML/CSS, NodeJs, PHP <br />
            <b>Database : </b>MS SQL Server, MySQL, MongoDB, Firebase <br />
            <b>Tools </b>: Visual Studio, Git, Postman, Visual Studio Code,
            Microsoft Office, Bootstrap, Figma, AdobeXD, WordPress, Trello.
            <br />
            <b>Software Development Methodologies:</b> Agile Software
            Development, Object Oriented Programming, Scrum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
