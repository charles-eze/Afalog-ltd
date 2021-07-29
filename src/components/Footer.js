import React from 'react';
import image from "../images/afalog_image.png"
import { SocialIcon } from "react-social-icons";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
         <footer className='relative pt-6 md:pt-10 top-28 font-sans text-white bg-gray-900'>
            <section className='mb-4 md:mb-6 flex justify-evenly'>
                <article className='flex flex-col'>
                    <h4 className='mb-3 text-sm md:text-lg font-bold'>Get to Know Us</h4>
                    <p className='mb-1.5 hover:underline hover:text-blue-600'><Link to='/careers'>Careers</Link></p>
                    <p className='mb-1.5 hover:underline hover:text-blue-600'><Link to='/about'>About Afalog</Link></p>
                   
                </article>
                <article className='flex flex-col '>
                    <h4 className='mb-3 text-sm md:text-lg font-bold'>Make Money with Us</h4>
                    <p className='mb-1.5 hover:underline hover:text-blue-600'><Link to='/careers'>Become our Distributor</Link></p>
                    <p className='mb-1.5 hover:underline hover:text-blue-600'><Link to='/careers'>Become an Affiliate</Link></p>
                </article>
                <article className=' flex flex-col'>
                    <h4 className='mb-3 text-sm md:text-lg font-bold'>Let Us Help You</h4>
                    <p className='mb-1.5 hover:underline hover:text-blue-600'><Link to='/quotation'>Get a Quote</Link></p>
                    <p className='mb-1.5 hover:underline hover:text-blue-600'><Link to='/contact'>Contact Us</Link></p>
                </article>
                <article className=' flex flex-col'>
                    <h4 className='mb-3 text-sm md:text-lg font-bold'>Socials</h4>
                    <div className='flex'>
                        <SocialIcon 
                            url='https://www.facebook.com/afalogmed' 
                            className='mr-3 transition duration-700 ease-in-out transform hover:-translate-x hover:scale-125' 
                            target='_blank'
                            rel='noreferrer'
                            fgColor='#fff' 
                            style={{ height:33, width:33}} />

                        <SocialIcon 
                            url='https://instagram.com/afalogmed' 
                            className='mr-3 transition duration-700 ease-in-out transform hover:-translate-x hover:scale-125' 
                            target='_blank'
                            rel='noreferrer' 
                            fgColor='#fff'
                            style={{ height:33, width:33}} />
                    </div>
                </article>
                
            </section>
            {/* <div className=' Footer_divider'></div> */}
            <hr />
            <div className='mt-6 justify-center items-center relative flex pb-8 '>
                <img 
                    className='mr-8 w-32'
                    src={image}
                    alt='Afalog footer logo'/>
                <p className='Footer__copyright'>
                    <span className='mr-2 text-sm'>©️ 2017 - {new Date().getFullYear()}</span>
                    Afalog Medical Ltd | All Rights Reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer;
