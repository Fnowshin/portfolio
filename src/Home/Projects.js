import React from 'react';
import skill1 from '../assets/Film Services.png'
import skill2 from '../assets/DrawToPaint.png'
import skill3 from '../assets/Marketing.png'
import skill4 from '../assets/Panda.png'

const Projects = (props) => {
    return (
        <>
        <div className='mt-10 mx-32'>
            <h1 className='text-4xl font-bold text-left'> Projects </h1> <br />
            <hr />
        </div>
        <div className="hero my-10">
        <div className="hero-content flex-col lg:flex-row">
          <img src={skill1} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-3xl font-bold">Film Service Review </h1>
            <p className="py-6"></p>
            <a href="https://film-service-review.web.app/">
            <button className="btn btn-primary">Live Site </button>
            </a>
            <a href="" >
            <button className="btn btn-primary mx-4">View Details </button> 
            </a>
          </div>
        </div>
      </div>

      <div className="hero my-10">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={skill2} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-3xl font-bold">Draw To Paint Club </h1>
      <p className="py-6"></p>
      <a href="" >
            <button className="btn btn-primary mx-4">View Details </button> 
        </a>
      <a href="https://flourishing-douhua-c0c863.netlify.app/">
      <button className="btn btn-primary">Live Site </button>
      </a>
        
    </div>
  </div>
</div>
        <div className="hero my-10">
        <div className="hero-content flex-col lg:flex-row">
          <img src={skill3} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-3xl font-bold">Key Of Marketing Glue </h1>
            <p className="py-6"></p>
            <a href="" >
            <button className="btn btn-primary mx-4">View Details </button> 
        </a>
      <a href="https://flourishing-douhua-c0c863.netlify.app/">
      <button className="btn btn-primary">Live Site </button>
      </a>
          </div>
        </div>
      </div>

      <div className="hero my-10">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={skill4} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-3xl font-bold">Panda </h1>
      <p className="py-6"></p>
      <a href="" >
            <button className="btn btn-primary mx-4">View Details </button> 
        </a>
      <a href="https://flourishing-douhua-c0c863.netlify.app/">
      <button className="btn btn-primary">Live Site </button>
      </a>
    </div>
  </div>
</div>
        </>
    );
};

export default Projects;