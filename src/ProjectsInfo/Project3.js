import React from 'react';
import { Link } from 'react-router-dom';

const Project3 = (props) => {
    return (
        <>
        <div className="card lg:card-side bg-base-100 shadow-xl mx-10 my-12">
            <figure><img  data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" src="https://i.ibb.co/wKdLjpm/marketing.jpg" alt="Album" /></figure>
            <div className="card-body lg:mt-28">
                <h2 className="card-title mx-auto">Key Of Marketing Glue</h2>
                <ul className='font-bold mx-auto'>
                    <li> Online learning platform UI is designed with React Bootstrap.</li>
                    <li>User can visit the course detail route and they can download the details, by using download pdf button. </li>
                    <li> Users can visit all the routes except the Premium Access Route.</li>
                    <li> Get Premium Access is a private route as I implemented React-router-dom in this UI.</li>
                    <li> User can login and access the premium access route, where the user will see their name and profile picture with Congratulations.</li>
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

export default Project3;