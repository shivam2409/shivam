import React from 'react';

const Education = () => {
  return (
    <div id='education' className='education'>
      <h1 className='py-5'>education</h1>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 col-md-6 col-sm-6'>
            <div className='box'>
              <h3>Post-Graduate Certificate(AEC)</h3>
              <p>
                <h4>Information Technology Programmer Analyst</h4>
                Collège LaSalle, Monteal <br />
                Jan 2019 - Jul 2020
              </p>
            </div>
          </div>
          {/********-- */}
          <div className='col-lg-6 col-md-6 col-sm-6'>
            <div className='box'>
              <h3>Bachelor Of Engineer</h3>
              <p>
                <h4>
                  Information technology
                  <br />
                </h4>
                Gujarat Technological University, India <br />
                Jun 2014 - Jun 2018
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
