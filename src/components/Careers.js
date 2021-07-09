import React from 'react';
import image from "../images/CareerImages.jpg"
import { FaUserTie } from 'react-icons/fa';

const Careers = () => {
    return (
        <div className='relative  '
            style={{height: '70vh', fontFamily: 'Poppins sans-serif'}}>
            <div className='relative flex justify-evenly top-28 mr-36 ml-36 pb-12 border border-gray-200'>
                <img 
                    src={image}
                    className='pl-20 h-56 '
                    alt='career' />
                <div className='pl-32 pr-16'>
                    <span className='flex pt-7 pb-7 '>
                        <FaUserTie 
                            className='text-blue-600 text-3xl mr-5 '/>
                        <h1 className='text-xl'
                            style={{color: 'orangered'}}>Why join us?</h1>
                    </span>
                    <hr className='border-blue-400'></hr>
                    <p className='pt-2.5 text-base text-gray-700'>Whether you're a fresh graduate or an experienced professional, Afalog Medical Limited is the right place for your career growth. Here, you can cultivate your expertise, use your knowledge to the fullest, or re-invent yourself with mentors guiding you through your career journey.</p>

                    <p className='pt-3.5 text-base text-gray-700'>We are the largest medical equipment procurement organisation in Nigeria with immense opportunities for anyone interested in building their career with us. Join us as we enter a new era in the medical equipment procurement industry, where we enrich lives with our robust supplies. Contact us for more details.</p>
                </div>
            </div>
        </div>
    )
}

export default Careers
