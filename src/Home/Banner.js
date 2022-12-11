import React from 'react';
import 'aos/dist/aos.css';
import propic from '../assets/propic.png'

const Banner = (props) => {
    return (
        <div className="hero" style={{ backgroundImage: `url("https://www.springboard.com/blog/wp-content/uploads/2019/07/sb-blog-programming.png")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row-reverse p-0">
                        <img data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom"
                            data-aos-duration="2000" src={propic} className="max-w-sm rounded-lg shadow-2xl" />
                        <div data-aos="fade-down-right" >
                            <h1 className="text-4xl font-bold">Welcome To Naoshin's World!</h1>
                            <p className="py-6">My name is Naoshin Jannatul Ferdous, I'm a Front End Web Developer. I describe myself as a passionate developer who loves coding, open source, and the web platform.
                                In my free time you can find me traveling or spending time with my colors,doing paintings.</p>
                            <a href="#contact">
                                <button className="btn btn-primary">Contact Me</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;