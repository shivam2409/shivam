import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-scroll';
const Header = () => {
  return (
    <div id='home' className='header-wraper'>
      <div className='main-info'>
        <div className='nametag'></div>
        <h2 className='nametagtext'>SHIVAM PATEL</h2>
        <h1 className='nametagtext'>Full Stack Developer</h1>
        <Typed
          className='typed-text'
          strings={[
            'React',
            'HTML/CSS',
            'JavaScript',
            'nodeJS',
            'REST-API',
            'mongoDB',
            'ExpressJS',
            'AWS',
            'Java',
            'C# .Net',
            'SQL',
            'GitHub',
            'Figma',
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <Link
          smooth={true}
          to='contacts'
          offset={-110}
          className='btn-main-offer'
        >
          contact me
        </Link>
      </div>
    </div>
  );
};
export default Header;
