import React from 'react';
import skill1 from '../assets/Film Services.png'
import skill2 from '../assets/DrawToPaint.png'
import skill3 from '../assets/Marketing.png'
import skill4 from '../assets/Panda.png'
import { Link } from 'react-router-dom';

const Projects = (props) => {
  return (
    <>
      <div id='projects' className='mt-10 mx-32'>
        <h1 className='text-4xl font-bold text-left'> Projects </h1> <br />
        <hr />
      </div>
      <div className="hero my-10">
        <div className="hero-content flex-col lg:flex-row">
          <img data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" src={skill1} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-3xl font-bold">Film Service Review </h1>
            <p className="py-6"></p>
            <a href="https://film-service-review.web.app/">
              <button className="btn btn-primary">Live Site </button>
            </a>
            <Link to='/project1'>
              <button className="btn btn-primary mx-4">View Details </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="hero my-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img  data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"
     data-aos-duration="2000" src={skill2} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-3xl font-bold">Draw To Paint Club </h1>
            <p className="py-6"></p>
            <Link to='/project2'>
              <button className="btn btn-primary mx-4">View Details </button>
            </Link>
            <a href="https://flourishing-douhua-c0c863.netlify.app/">
              <button className="btn btn-primary">Live Site </button>
            </a>

          </div>
        </div>
      </div>
      <div className="hero my-10">
        <div className="hero-content flex-col lg:flex-row">
          <img data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" src={skill3} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-3xl font-bold">Key Of Marketing Glue </h1>
            <p className="py-6"></p>
            <Link to='/project3'>
              <button className="btn btn-primary mx-4">View Details </button>
            </Link>
            <a href="https://marketing-courses-4f09f.web.app/">
              <button className="btn btn-primary">Live Site </button>
            </a>
          </div>
        </div>
      </div>

      <div className="hero my-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"
     data-aos-duration="2000" src={skill4} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-3xl font-bold">Panda E-commerce </h1>
            <p className="py-6"></p>
            <Link to='/project4'>
              <button className="btn btn-primary mx-4">View Details </button>
            </Link>
            <a href="https://fnowshin.github.io/Panda-E-comerce/">
              <button className="btn btn-primary">Live Site </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;