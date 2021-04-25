import React from 'react';

const Experience = () => {
  return (
    <div id='experience' className='experience'>
      <div className='d-flex justify-content-center my-5'>
        <h1>experience</h1>
      </div>
      <div className='container experience-wrapper'>
        <div className='timeline-block timeline-block-right'>
          <div className='marker'></div>
          <div className='timeline-content'>
            <h3>Advisor 1, Apple Inc</h3>
            <p>
              <b>Nov 2020 - Present</b>
              <br />
              After getting approved for my Post Graduate Work Permit(PGWP) in
              Canada, I have been continuously looking for a full-time
              opportunity in the software development industry. While searching
              for job, I have kept myself continuously updated with developing
              small projects and learning new day tools and technologies.
              Learning and completing various course such as AWS Cloud
              Practitioner, React, Angular. I also developed various assessments
              and projects using HTML/CSS, Angular, React, Java, JavaScript.
              <br />
            </p>
          </div>
        </div>
        <div className='timeline-block timeline-block-left'>
          <div className='marker'></div>
          <div className='timeline-content'>
            <h3>Jan 2020 - Jul 2020</h3>
            <p>
              <b>Student, AEC Graduate Certificate </b>
              <br />
              Learned various technologies and implemented it as academic
              projects. Developed several team projects using different
              technologies such as Java, C# .Net, Node.Js, SQL, Flutter(Dart)
              and Android. Implemented the working of scrum models and also
              carried our project in terms of sprints and backlogs to get the
              overview of agile development environment. <br />
            </p>
          </div>
        </div>
        <div className='timeline-block timeline-block-right'>
          <div className='marker'></div>
          <div className='timeline-content'>
            <h3>Jun 2018 - Dec 2018</h3>
            <p>
              <b>Self-employed Software Developer , India </b>
              <br />
              Collaborated with cross-functional team to define, design and
              deliver an e-commerce android application. Developed Rest-API for
              e-commerce project using ASP.Net web API and entity framework and
              deployed API on AWS. Integrated the developed Rest-API in android
              application using retrofit. Overcame with the use of git as a
              version control system and followed agile development
              methodologies.
              <br />
              Tools: Android Studio, Visual Studio, Git, SQL Server, Postman{' '}
              <br />
              Technologies : Java/Android, C# .Net, Retrofit, Rest-API, SQL, AWS
            </p>
          </div>
        </div>
        {/* -*/}

        <div className='timeline-block timeline-block-left'>
          <div className='marker'></div>
          <div className='timeline-content'>
            <h3>Aug 2017 - Mar 2018</h3>
            <p>
              <b>Software Developer Intern @ Webmyne Systems, India</b> <br />
              Implemented the use of object oriented programming and performed
              multiple tasks to accomplish fluency in all the concepts.
              Developed and learned implementation of android application which
              helps tracking and managing the insurance sales of a company.
              Learned and implemented the use of database. Performed and
              completed various tasks such as android design, database design
              and android development.
              <br />
              Tools and technologies used: Java/Android, SQL, Android Studio,
              Netbeans IDE, MySQL Workbench
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
