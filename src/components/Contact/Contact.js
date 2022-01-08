import React from 'react'
import './contact.css'
import Photo from '../../img/photo.png'

export default function Contact() {
    return (
        <section id="contact">
        <div className="contact">
            <div className="section_header">
                <label className="section_title">Contact</label>
            </div>
            <div className="contact_container">
                <div className="contact_inside_container">
                    <h1 className="contact_hi">Say Hi.</h1>
                    <img src={Photo} alt="contact_photo" className="contact_photo" />
                </div>
                <div className="contact_inside_container2">
                    <div className="contact_email">isyoonakim@gmail.com</div>
                    <hr className='contact_line'></hr>
                    <div className="contact_text">I love to make things.</div>
                </div>
            </div>
        </div>
        </section>
    )
}
