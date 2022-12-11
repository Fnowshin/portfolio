import React from 'react';

import Banner from './Banner';
import Contact from './Contact';
import Projects from './Projects';

const Home = (props) => {
    return (
        <div className='lg:m-12 md:m-10'>
         
          <Banner></Banner>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;