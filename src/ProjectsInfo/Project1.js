import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../shared/Footer';


const Project1 = (props) => {
    return (
        <>
        <div className="card lg:card-side bg-base-100 shadow-xl mx-10 my-12">
            <figure><img  data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" src="https://i.ibb.co/mq46tq0/film.jpg" alt="Album" /></figure>
            <div className="card-body lg:mt-28">
                <h2 className="card-title mx-auto">Film Service Review </h2> <hr /> <br />
                <ol className='font-bold'>
                    <li> This UI has navbar, service-cards and carousel, and all the navbar options are public Route except the review part.</li>
                    <li> Login and Signin authentication is implemented with firebase authentication.</li>
                    <li> If a user login and signin, they can review any services with upto 4.5+ rating.</li>
                    <li> Logged in user can see their reviews and they can delete or edit the reviws. As CRUD operation is implemented in the server with MongoDB database.</li>
                </ol>
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

export default Project1;