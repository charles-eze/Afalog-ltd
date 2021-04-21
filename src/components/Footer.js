import React from 'react';
import "../css/Footer.css";
import image from "../images/afalog_image.png"
import { SocialIcon } from "react-social-icons";

const Footer = () => {
    return (
         <footer className='Footer'>
            <section className='Footer__section'>
                <article className='Footer__article'>
                    <h4 className='md:text-sm lg:text-base font-bold'>Get to Know Us</h4>
                    <p><a href='https://github.com/charles-eze/amazon-clone-with-react'>Careers</a></p>
                    <p><a href='https://github.com/charles-eze/amazon-clone-with-react'>About Afalog</a></p>
                   
                </article>
                <article className='Footer__article '>
                    <h4 className='md:text-sm lg:text-base font-bold'>Make Money with Us</h4>
                    <p><a href='https://github.com/charles-eze/amazon-clone-with-react' 
                        className='md:py-1 py-0.5'>Become our Distributor</a></p>
                    <p><a href='https://github.com/charles-eze/amazon-clone-with-react' 
                        className='md:py-1 py-0.5'>Become an Affiliate</a></p>
                </article>
                <article className=' Footer__article'>
                    <h4 className='md:text-xs lg:text-base font-bold'>Let Us Help You</h4>
                    <p><a href='https://github.com/charles-eze/amazon-clone-with-react' 
                        className='md:py-1 py-0.5'>Get a Quote</a></p>
                    <p><a href='https://github.com/charles-eze/amazon-clone-with-react' 
                        className='md:py-1 py-0.5'>Contact Us</a></p>
                </article>
                <article className=' Footer__article'>
                    <h4>Socials</h4>
                    <div className='Footer__socials'>
                        <SocialIcon 
                            url='https://www.facebook.com/afalogmed' 
                            className='social_icons' 
                            target='_blank'
                            rel='noreferrer'
                            fgColor='#fff' 
                            style={{ height:33, width:33}} />

                        <SocialIcon 
                            url='https://instagram.com/afalogmed' 
                            className='social_icons' 
                            target='_blank'
                            rel='noreferrer' 
                            fgColor='#fff'
                            style={{ height:33, width:33}} />
                    </div>
                </article>
                
            </section>
            {/* <div className=' Footer_divider'></div> */}
            <hr />
            <div className='Footer__elements'>
                <img 
                    className='Footer__logo'
                    src={image}
                    alt='Afalog footer logo'/>
                <p className='Footer__copyright'>
                    <span className='Footer__date'>©️ 2017 - {new Date().getFullYear()}</span>
                    Afalog Medical Ltd | All Rights Reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer;
