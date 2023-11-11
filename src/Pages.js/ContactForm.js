import React from 'react';
import { FaGreaterThan } from "react-icons/fa";

const ContactForm = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const status = document.getElementById("alert");
        const form = event.target;
        const data = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: data,
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                status.innerHTML = "Your message has been sent.";
                document.querySelector(".alert_style").style.display = "block";

                // hide alert after 3 seconds
                setTimeout(function () {
                    document.querySelector(".alert_style").style.display = "none";
                }, 3000);

                form.reset();
            } else {
                throw new Error('Network response was not ok.');
            }
        } catch (error) {
            status.innerHTML = "Oops! There was a problem delivering your message, please contact via other means.";
            document.querySelector(".alert_style").style.display = "block";

            // hide alert after 3 seconds
            setTimeout(function () {
                document.querySelector(".alert_style").style.display = "none";
            }, 3000);
        }

    };
    return (

        <div className="main contact section" id="contact">
            <h1 className="section_title">Contact Me</h1>
            <span className="section_subtitle">
                Want to connect? My inbox is always open!
            </span>

            <div className="contact_container container grid">
                <div>
                    <a href="mailto:mdabdalhasan7984@gmail.com" target="_blank">
                        <div className="contact_info">
                            <i className="uil uil-envelope-alt contact_icon"></i>
                            <div>
                                <h3 className="contact_title">Email</h3>
                                <span className="contact_subtitle">mdabdalhasan7984@gmail.com</span>
                            </div>
                        </div>
                    </a>

                    <a href="https://calendar.google.com/calendar/u/0/r/eventedit?vcon=meet&dates=now&hl=en&pli=1" target="_blank">
                        <div className="contact_info">
                            <i className="uil uil-calendar-alt contact_icon"></i>
                            <div>
                                <h3 className="contact_title">Online Meet</h3>
                                <span className="contact_subtitle">Schedule an Online Meet</span>
                            </div>
                        </div>
                    </a>

                    <a href="https://twitter.com/MdAbdalHasan1" target="_blank">
                        <div className="contact_info">
                            <i className="uil uil-twitter-alt contact_icon"></i>
                            <div>
                                <h3 className="contact_title">Twitter</h3>
                                <span className="contact_subtitle"> @MdAbdalHasan1</span>
                            </div>
                        </div>
                    </a>

                    <a href="https://goo.gl/maps/AbkrLpc6JepJcrSL8" target="_blank">
                        <div className="contact_info">
                            <i className="uil uil-location-point contact_icon"></i>
                            <div>
                                <h3 className="contact_title">Location</h3>
                                <span className="contact_subtitle">Kolkata, India</span>
                            </div>
                        </div>
                    </a>
                </div>


                <form action="https://formspree.io/f/xyyozeaq" className="contact_form grid" id="contact-form" method="POST" onSubmit={handleSubmit}>
                    <div id="alert" className="alert_style"></div>
                    <div className="contact_inputs grid">
                        <div className="contact_content">
                            <label className="contact_label">Name</label>
                            <input type="text" name="name" className="contact_input" id="name" required />
                        </div>
                        <div className="contact_content">
                            <label htmlFor="email" className="contact_label">Email</label>
                            <input type="email" name="email" className="contact_input" id="email" required />
                        </div>
                    </div>
                    <div className="contact_content">
                        <label htmlFor="subject" className="contact_label">Subject</label>
                        <input type="text" name="subject" className="contact_input" id="subject" required />
                    </div>
                    <div className="contact_content">
                        <label htmlFor="message" className="contact_label">Message</label>
                        <textarea name="message" id="message" cols="0" rows="7" className="contact_input message" style={{ resize: 'vertical' }} required></textarea>
                    </div>

                    <div>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded button-flex">
                            Send Message
                            <FaGreaterThan />
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default ContactForm;