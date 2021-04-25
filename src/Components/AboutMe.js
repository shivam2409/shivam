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
            <b>Programming Languages : </b>Java, C# .Net, JavaScript, Angular,
            HTML/CSS, Node.Js <br />
            <b>Database : </b>Microsoft SQL Server, MySQL <br />
            <b>FrameWorks and Libraries :</b> REST API, MVC, React.
            <br />
            <b>Tools </b>: Android Studio, Visual Studio, Netbeans IDE, IntelliJ
            IDEA, Git, Postman, Visual Studio Code, Microsoft Office <br />
            <b>Software Development Methodologies:</b> Agile Software
            Development, Object Oriented Programming
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
