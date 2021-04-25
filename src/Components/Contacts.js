import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';

const Contacts = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const { register, handleSubmit, errors } = useForm();
  const serviceID = 'service_xpcuxyi';
  const templateID = 'Portfolio_temp';
  const userId = 'user_lsoFrwHTEH2Vsljib90uO';

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      userId
    );
    r.target.reset();
  };

  const sendEmail = (serviceID, templateID, variables, userId) => {
    emailjs
      .send(serviceID, templateID, variables, userId)
      .then(() => {
        setSuccessMessage(
          'Message sent successfully, thank you for reaching out!!'
        );
      })
      .catch((err) => console.error(`Something went wrong ${err}`));
  };

  return (
    <div id='contacts' className='contacts'>
      <div className='text-center'>
        <h1>contact me</h1>
        <p>
          Thank you for visiting my portfolio, please fill out the form and I
          will get back as soon as possible.
        </p>
        <span className='success-message'>{successMessage}</span>
      </div>
      <div className='container'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='row'>
            <div className='col-md-6 col-xs-12'>
              {/* Name input */}
              <div className='text-center'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Name'
                  name='name'
                  ref={register({
                    required: 'Please enter your name',
                    maxLength: {
                      value: 20,
                      message: 'Please enter a name within 20 characters',
                    },
                  })}
                />
                <div className='line'></div>
              </div>
              <span className='error-message'>
                {errors.name && errors.name.message}
              </span>
              {/* Phone input */}
              <div className='text-center'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Phone Number'
                  name='phone'
                  ref={register({
                    required: 'Please add your phone  number ',
                  })}
                />
                <div className='line'></div>
              </div>
              <span className='error-message'>
                {errors.phone && errors.phone.message}
              </span>
              {/* Email input */}
              <div className='text-center'>
                <input
                  type='email'
                  className='form-control'
                  placeholder='Email'
                  name='email'
                  ref={register({
                    required: 'Please provide an email',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'invalid email',
                    },
                  })}
                />
                <div className='line'></div>
              </div>
              <span className='error-message'>
                {errors.email && errors.email.message}
              </span>
              {/* Subject input */}
              <div className='text-center'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Subject'
                  name='subject'
                  ref={register({
                    required: 'OOPS!! You forgot to add the subject.',
                  })}
                />
                <div className='line'></div>
              </div>
              <span className='error-message'>
                {errors.subject && errors.subject.message}
              </span>
            </div>
            <div className='col-md-6 col-xs-12'>
              {/* Description input */}
              <div className='text-center'>
                <textarea
                  className='form-control'
                  placeholder='Please describe your message shortly'
                  name='description'
                  ref={register({
                    required: 'Please describe briefly...',
                  })}
                ></textarea>
                <div className='line'></div>
              </div>
              <span className='error-message'>
                {errors.description && errors.description.message}
              </span>
              <button className='btn-main-offer contact-btn' type='submit'>
                contact me
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
