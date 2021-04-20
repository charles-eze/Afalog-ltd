import React from 'react';
import "../css/NavBar.css";
import image from "../images/afalog_image.png"

const NavBar = () => {
    return (
        <div className='NavBar'>
            <div className='NavBar__logo'>
                <img 
                    className='logo'
                    src={image}
                    alt='afalog logo' />

            </div>
            <div className='NavBar__elements'>
                <h4 className='NavBar__element'>Home</h4>
                <h4 className='NavBar__element'>Products</h4>
                <h4 className='NavBar__element'>Our Services</h4>
                <h4 className='NavBar__element'>About Us</h4>
                <h4 className='NavBar__element'>Career</h4>
                <h4 className='NavBar__element'>Contact Us</h4>
            </div>
        </div>
    );
};

export default NavBar;
