import React from 'react';
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_bg">
                <div className="footer_container container grid">
                    <div>
                        <h1 className="footer_title">Md Abdal Hasan</h1>
                        <span className="footer_subtitle">ReactJs Developer</span>
                    </div>

                    <ul className="footer_links  text-white">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/services">Services</Link>
                        </li>
                        <li>
                            <Link to="/ContactForm" >Contact Us</Link>
                        </li>
                    </ul>

                    <div className="footer_socials">
                        <a href="https://www.linkedin.com/in/md-abdal-hasan/" target="_blank" className="footer_social">
                            <BsLinkedin />

                        </a>
                        <a href="https://twitter.com/MdAbdalHasan1" target="_blank" className="footer_social">
                            <FaTwitterSquare />
                        </a>
                        <a href="https://www.instagram.com/abdal_ashrafi/" target="_blank" className="footer_social">
                            <BsInstagram />
                        </a>
                    </div>
                </div>

                <p className="footer_copy">&#169; Md Abdal Hasan. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer