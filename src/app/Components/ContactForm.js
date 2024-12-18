"use client";

import React from "react";

export default function ContactForm() {
    const handleSubmit = (event) => {
        event.preventDefault();

        
        const formData = new FormData(event.target);
        const formObject = Object.fromEntries(formData.entries());
        console.log("Form Submitted:", formObject);

        

        
        event.target.reset();
    };

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                ></textarea>
            </div>
            <button type="submit" className="submit-button">
                Send Message
            </button>
        </form>
    );
}
