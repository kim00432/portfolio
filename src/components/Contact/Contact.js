import React from 'react'
import './contact.css'
import Photo from '../../img/photo.jpeg'

export default function Contact() {
    return (
        <div className="contact">
            <div className="section_header">
                <label className="section_title">CONTACT</label>
            </div>
            <div className="contact_container">
                <div className="contact_inside_container">
                    <h1 className="contact_hi">Say Hi.</h1>
                    <img src={Photo} alt="contact_photo" className="contact_photo" />
                </div>
                <div className="contact_inside_container2">
                    <div className="contact_email">isyoonakim@gmail.com</div>
                    <hr className='contact_line'></hr>
                    <div className="contact_text">Feel free to reach out if you want to work together, have a question, or just want to connect.</div>
                </div>
            </div>
        </div>
    )
}
