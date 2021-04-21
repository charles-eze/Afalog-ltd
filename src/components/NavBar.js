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
            <div className='Navbar__menu'>
                <ul>
                    <li>Home</li>
                    <li>Products ⬇️
                        <ul className='NavBar__dropdown'>
                            <li>Clinical Chemistry</li>
                            <li>Clinical Hematology</li>
                            <li>Clinical Microbiology</li>
                            <li>Air Protection</li>
                            <li>Clinical Histopathology</li>
                            <li>Hospital Products</li>
                            <li className='long_child'>Molecular Laboratory Products</li>
                            <li>Consumables</li>
                            <li>Imaging</li>
                        </ul>
                    </li>
                    <li>Our Services</li>
                    <li>About Us</li>
                    <li>Career</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
