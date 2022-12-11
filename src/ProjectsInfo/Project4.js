import React from 'react';
import { Link } from 'react-router-dom';

const Project4 = (props) => {
    return (

        <>
            <div className="card lg:card-side bg-base-100 shadow-xl mx-10 my-12">
                <figure><img  data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" src="https://i.ibb.co/QDN7kv9/panda.jpg" alt="Album" /></figure>
                <div className="card-body lg:mt-28">
                    <h2 className="card-title mx-auto">Panda E-Commerce </h2>
                    <ul className='font-bold'>
                        <li> This UI is cloned of Panda Mart.</li>
                        <li> Its a very simple UI designed with CSS Framework Bootstrap</li>
                        <li>User can select the options of the navbar and they will be directed to the section of homepage.</li>
                        <li> This UI is very basic work with the Bootstrap, as it has only carousel and cards to show the products and details.</li>
                    </ul>
                </div>
            </div>
            <div className='my-10'>
                <Link to='/'>
                    <button className="btn btn-primary mx-4">Go Back </button>
                </Link>
            </div>

        </>
    );
};

export default Project4;