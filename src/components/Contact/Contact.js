import React from 'react'
import './contact.css'
import Photo from '../../img/photo.png'

export default function Contact() {
    return (
        <div className="contact">
            <div className="section_header">
                <label className="section_title">Contact</label>
            </div>
            <div className='contact_text'>
                <div>
                    <h1 className="hi">Say Hi.</h1>
                    <div>isyoonakim@gmail.com</div>
                    <div>I love to make things.</div>
                </div>
                <img src={Photo} alt="photo" className='photo' />
            </div>
        </div>
    )
}
