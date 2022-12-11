import React from 'react';
import { Link } from 'react-router-dom';
import propic from '../assets/Formal Photograph.jpg'

const AboutMe = (props) => {
    return (
        <div className="hero min-h-screen mb-24" style={{ backgroundImage: `url("https://www.springboard.com/blog/wp-content/uploads/2019/07/sb-blog-programming.png")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row-reverse p-0 lg:-mb-4">
                        <img data-aos="flip-left"
                            data-aos-easing="ease-in-back"
                            data-aos-duration="2000" src={propic} className="max-w-sm rounded-lg hidden lg:block" />
                        <div data-aos="fade-down-right" >
                            <h1 className="text-4xl font-bold">Welcome To Naoshin's World!</h1>
                            <ul  className="py-6 mx-auto">
                                <li className="py-6">● Currently, I am working on a project with React.js and Tailwind CSS framework for an advertising agency.</li>
                                <li  className="pb-4">
                                    ● Previously, I have done multiple projects starting with basics of HTML & CSS to React.js with React Bootstrap and Tailwind CSS, Daisyui </li>
                                    <li  className="pb-4">
                                    ● I have expertise in CSS framework Bootstrap and comfortable with tailwind CSS </li>
                                    <li  className="pb-4">
                                    ● Now I am open to internship opportunities in web development as a front-end web developer or full-stack web developer </li>
                                    <li  className="pb-4">
                                    ● I completed my undergrad majoring in marketing. However, over the months I have grown a deep interest in the field of coding and web development. Hence, I attended a rigorous coding bootcamp to upscale and formalize my self taught skill-set
                                    </li>
                                    <li>
                                    ● I also have experience working in Advertising agency and Production house as a Customer Relationship Manager (CRM) & Project Intern</li>
                            </ul>
                            <Link to='/'>
                            <button className="btn btn-primary">Back </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;