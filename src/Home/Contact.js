import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'

const Contact = (props) => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_lurfm3h', 'template_3hci6en', form.current, '-MWpPk4jefsuIuS9d')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();

    };

    return (

        <div id='contact' className="hero bg-base-200 mb-10">
            <div className="hero" style={{ backgroundImage: `url("https://www.springboard.com/blog/wp-content/uploads/2019/07/sb-blog-programming.png")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div data-aos="flip-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-white">Get In Touch!</h1>
                    </div>
                    <div data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-easing="ease-in-sine" className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form ref={form} onSubmit={sendEmail}>
                                <label className='label'>Name</label>
                                <input type="text" name="first_name" placeholder="Your Name" className="input input-bordered input-primary w-full " />
                                <label className='label'>Email</label>

                                <input type="email" name="email" placeholder="Email" className="input input-bordered input-primary w-full " />
                                <label className='label'>Message</label>
                                <textarea name="message" className="textarea textarea-primary  w-full " placeholder="Message"></textarea>
                                <button>

                                </button>
                                <button className="btn btn-wide btn-primary">
                                    <input type="submit" value="Send" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>




    );
};

export default Contact;