import React, { useEffect } from 'react';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaGreaterThan } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Typed from 'typed.js';

const Home = () => {
    useEffect(() => {
        // Initialize Typed.js after the component mounts
        var typeData = new Typed(".type", {
            strings: [
                "ReactJs Developer",
                "Frontend Developer",
                "Web Developer",
                "Coder",
            ],
            loop: true,
            typeSpeed: 100,
            backSpeed: 80,
            backDelay: 1000,
        });

        // Clean up Typed instance on component unmount
        return () => {
            typeData.destroy();
        };
    }, []);
    return <div>
        <section className="main home section" id="home">
            <div className="home_container container grid">
                <div className="home_content grid">
                    <div className="home_social">
                        <a href="https://www.linkedin.com/in/md-abdal-hasan/" className="home_social-icon" target="_blank">
                            <BsLinkedin />
                        </a>

                        <a href="https://github.com/MdAbdalHasan" className="home_social-icon" target="_blank">
                            <BsGithub />
                        </a>

                        <a href="https://twitter.com/MdAbdalHasan1" className="home_social-icon" target="_blank">
                            <AiFillTwitterCircle />
                        </a>
                    </div>



                    <div className="home_data">
                        <h1 className="home_title">Hi, I'm Abdal</h1>
                        <h3 className="home_subtitle">I am <span className="type"></span></h3>

                        <p className="home_description">
                            Building Software to solve real life problems
                        </p>
                        <Link to="/ContactForm" >
                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded button-flex">
                                Send Message
                                <FaGreaterThan />
                            </button>
                        </Link>
                    </div>
                </div>


            </div>
        </section>
    </div>;
};

export default Home;