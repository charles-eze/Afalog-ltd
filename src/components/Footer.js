import React from 'react';
import image from "../images/afalog_image.png"
import { SocialIcon } from "react-social-icons";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
         <footer className='relative pt-6 md:pt-10 top-28 font-sans text-white bg-gray-900'>
            <section className='grid grid-cols-4 pl-4 pr-1 md:pl-5 md:pr-5 xl:pl-44 xl:pr-32 gap-1 lg:gap-12 mb-5 md:mb-7'>
                <article className='md:text-sm flex flex-col'
                            style={{fontSize: 7}}>
                    <h4 className='mb-3 md:text-base font-bold'
                        style={{fontSize: 8, fontWeight: 700}}>Get to Know Us</h4>
                    <p className='mb-1.5 hover:underline hover:text-blue-600'><Link to='/careers'>Careers</Link></p>
                    <p className='mb-1.5 hover:underline hover:text-blue-600'><Link to='/about'>About Afalog</Link></p>
                   
                </article>
                <article className='md:text-sm flex flex-col -ml-2.5 md:ml-0 '
                       style={{fontSize: 7}} >
                    <h4 className='mb-3 md:text-base font-bold'
                        style={{fontSize: 8, fontWeight: 700}}>Make Money with Us</h4>
                    <p className='mb-1.5 hover:underline hover:text-blue-600'><Link to='/careers'>Become our Distributor</Link></p>
                    <p className='mb-1.5 hover:underline hover:text-blue-600'><Link to='/careers'>Become an Affiliate</Link></p>
                </article>
                <article className='md:text-sm flex flex-col ml-1.5'
                        style={{fontSize: 7}}>
                    <h4 className='mb-3 md:text-base font-bold'
                        style={{fontSize: 8, fontWeight: 700}}>Let Us Help You</h4>
                    <p className='mb-1.5 hover:underline hover:text-blue-600'><Link to='/quotation'>Get a Quote</Link></p>
                    <p className='mb-1.5 hover:underline hover:text-blue-600'><Link to='/contact'>Contact Us</Link></p>
                </article>
                <article className=' flex flex-col ml-1.5'>
                    <h4 className='mb-3 md:text-base font-bold'
                        style={{fontSize: 8, fontWeight: 700}}>Socials</h4>
                    <div className='flex'>
                        <SocialIcon 
                            url='https://www.facebook.com/afalogmed' 
                            className='mr-1.5 md:mr-3 md:h-7 md:w-7 transition duration-700 ease-in-out transform hover:-translate-x hover:scale-125' 
                            target='_blank'
                            rel='noreferrer'
                            fgColor='#fff' 
                            style={{ height:21, width:21}} />

                        <SocialIcon 
                            url='https://instagram.com/afalogmed' 
                            className='mr-3 md:h-7 md:w-7 transition duration-700 ease-in-out transform hover:-translate-x hover:scale-125' 
                            target='_blank'
                            rel='noreferrer' 
                            fgColor='#fff'
                            style={{ height:21, width:21}} />
                    </div>
                </article>
                
            </section>
            {/* <div className=' Footer_divider'></div> */}
            <hr />
            <div className='mt-6 justify-center items-center relative flex pb-8 '>
                <img 
                    className='mr-8 md:w-24 w-10 -ml-5 items-center'
                    src={image}
                    alt='Afalog footer logo'/>
                <p className='md:text-sm'
                     style={{fontSize: 7}}>
                    <span className='mr-2'>©️ 2017 - {new Date().getFullYear()}</span>
                    Afalog Medical Ltd | All Rights Reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer;
