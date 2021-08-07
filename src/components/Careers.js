import React from 'react';
import image from "../images/CareerImages.jpg"
import "../css/Footer.css";
import { FaUserTie } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';

const Careers = () => {
    return (
        <div className='relative  fontt bg-gray-50'>
            <div className='bg-gray-50 h-40 w-full -bottom-40 flex absolute '></div>
            <div className='relative block md:flex md:justify-evenly top-24 md:top-28 mr-3.5 ml-3.5 pb-2 md:mr-24 md:ml-24 mb-4 md:mb-11 md:pb-12 border border-gray-200 bg-white'
                style={{boxShadow: "0 0.55rem 1rem rgba(0, 0, 0, 0.45)"}}>
                <Fade left> 
                <img 
                    src={image}
                    className=' pl-4 md:pl-16 h-36 md:h-48'
                    alt='career' />
                </Fade>
                <Fade right>
                <div className='pl-3.5 pr-2.5 md:pl-20 md:pr-16'>
                    <span className='flex pt-7 pb-7 items-center'>
                        <FaUserTie 
                            className='text-blue-600 text-xl md:text-2xl mr-5 '/>
                        <h1 className='text-lg md:text-xl font-semibold'
                            style={{color: 'orangered'}}>Why join us?</h1>
                    </span>
                    <hr className='border-blue-400 -mt-4 md:mt-0'></hr>
                    <p className='pt-4 md:pt-2.5 text-sm md:text-base text-gray-700'>Whether you're a fresh graduate or an experienced professional, Afalog Medical Limited is the right place for your career growth. Here, you can cultivate your expertise, use your knowledge to the fullest, or re-invent yourself with mentors guiding you through your career journey.</p>

                    <p className='pt-3.5 text-sm md:text-base pb-5 md:pb-0 text-gray-700'>We are the largest medical equipment procurement organisation in Nigeria with immense opportunities for anyone interested in building their career with us. Join us as we enter a new era in the medical equipment procurement industry, where we enrich lives with our robust supplies. Contact us for more details.</p>
                </div>
                </Fade>
            </div>
        </div>
    )
}

export default Careers
