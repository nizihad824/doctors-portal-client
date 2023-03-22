import React from 'react';
import appointment from '../../../assets/images/appointment.png';

const ContactUs = () => {
    return (

        <div className='hero  mt-16  h-96; ' style={{ backgroundImage: `url(${appointment})` }}>
            <div className='mt-16'>
                <h4 className='text-lg text-primary font-bold'>Contact Us</h4>
                <h1 className="text-3xl font-bold text-white">Stay connected with us</h1>
                <div className='mt-6 mb-16 py-3 grid grid-cols-1'>
                    <input type="text" placeholder="Your email address" className="input input-bordered  mt-3" />
                    <input type="text" placeholder="Subject" className="input input-bordered mt-3" />
                    <textarea type="text" className="textarea input input-bordered mt-3" placeholder="message"></textarea>
                </div>
            </div>
            <div>


            </div>
        </div>


    );
};

export default ContactUs;