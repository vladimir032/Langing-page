import React from 'react';
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from 'react-icons/ai';


const Testimonials = () => {
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Testimonial</p>
            <h1 className='primary-heading'>What they are saying</h1>
            <p className='primary-text'>
                Textos foros examplos
            </p>
        </div>

        <div className='testimonial-section-bottom'>
            <img src={ProfilePic} alt='' />
            <p>
                Imba prosto
            </p>
            <div className='testimonials-stars-container'>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
            </div>

            <h2>Vova Grigoryan</h2>
        </div>
      
    </div>
  )
}

export default Testimonials
