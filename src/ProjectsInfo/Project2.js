import React from 'react';
import { Link } from 'react-router-dom';

const Project2 = (props) => {
    return (
        <>
            <div className="card lg:card-side bg-base-100 shadow-xl mx-10 my-12">
                <figure><img  data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" src="https://i.ibb.co/ZfZnb9w/draw.jpg" alt="Album" /></figure>
                <div className="card-body lg:mt-28">
                    <h2 className="card-title mx-auto">Draw To Paint Club </h2>
                    <ul className='font-bold'>
                        <li>its a simple UI designed with vanilla CSS.</li>
                        <li>This UI has exceptional parts, one of them is its calculation of spending time.</li>
                        <li> User can add spending time from the Art Cards and it will be add up in the Sidebar's Drawing Details section.</li>
                        <li> Also, if a user select a Completed Activity Button, a Congratulations toast will show up.</li>
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

export default Project2;