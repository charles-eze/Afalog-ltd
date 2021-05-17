import React from 'react';
import "../css/NavBar.css";
import { Link } from "react-router-dom";
import image from "../images/afalog_image.png";

const NavBar = () => {
    return (
        <div className='NavBar'>
            <div className='NavBar__logo'>
            <Link to='/'>
                <img 
                    className='logo'
                    src={image}
                    alt='afalog logo' />
            </Link>
            </div>
            <div className='NavBar__links'>
                <ul>
                    <li className='NavBar__link'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='NavBar__link'>
                        <a href='#'>Products<i className='fas fa-caret-down'></i></a>
                        <div className='dropdown'>
                            <ul>
                                <li className='dropdown-link'>
                                    <a href='#'>Clinical Chemistry<i className='fas fa-caret-down'></i></a>
                                    <div className='dropdown second'>
                                        <ul>
                                            <li className='dropdown-link'>
                                                <a href='#'>Chemistry Analyzer</a>
                                            </li>
                                            <li className='dropdown-link'>
                                                <a href='#'>Eliza Reader</a>
                                            </li>
                                            <li className='dropdown-link'>
                                                <a href='#'>Electrolyte Analyzer</a>
                                            </li>
                                            <li className='dropdown-link'>
                                                <a href='#'>Dry Chemistry</a>
                                            </li>
                                            <div className='arrow'></div>
                                        </ul>
                                    </div>
                                </li>
                                <li className='dropdown-link'>
                                    <a href='#'>Clinical Hematology<i className='fas fa-caret-down'></i></a>
                                    <div className='dropdown second'>
                                        <ul>
                                            <li className='dropdown-link'>
                                                <a href='#'>5 part diff</a>
                                            </li>
                                            <li className='dropdown-link'>
                                                <a href='#'>3 part diff</a>
                                            </li>
                                            <div className='arrow'></div>
                                        </ul>
                                    </div>
                                </li>
                                <li className='dropdown-link'>
                                    <a href='#'>Clinical Microbiology</a>
                                </li>
                                <li className='dropdown-link'>
                                    <a href='#'>Air Protection<i className='fas fa-caret-down'></i></a>
                                    <div className='dropdown second'>
                                        <ul>
                                            <li className='dropdown-link'>
                                                <a href='#'>Biosafety Cabinet</a>
                                            </li>
                                            <li className='dropdown-link'>
                                                <a href='#'>PCR Cabinet</a>
                                            </li>
                                            <li className='dropdown-link'>
                                                <a href='#'>Fume Hood</a>
                                            </li>
                                            <li className='dropdown-link'>
                                                <a href='#'>Laminar Flow Cabinet</a>
                                            </li>
                                            <div className='arrow'></div>
                                        </ul>
                                    </div>
                                </li>
                                <li className='dropdown-link'>
                                    <a href='#'>Clinical Histopathology</a>
                                </li>
                                <li className='dropdown-link'>
                                    <a href='#'>Hospital Products<i className='fas fa-caret-down'></i></a>
                                    <div className='dropdown second'>
                                        <ul>
                                            <li className='dropdown-link'>
                                                <a href='#'>Patient Monitor</a>
                                            </li>
                                            <li className='dropdown-link'>
                                                <a href='#'>Hospital Bed</a>
                                            </li>
                                            <li className='dropdown-link'>
                                                <a href='#'>Theatre Equipment</a>
                                            </li>
                                            <div className='arrow'></div>
                                        </ul>
                                    </div>
                                </li>
                                <li className='dropdown-link'>
                                    <a href='#'>Molecular Lab Products<i className='fas fa-caret-down'></i></a>
                                    <div className='dropdown second'>
                                        <ul>
                                            <li className='dropdown-link'>
                                                <a href='#'>PCR Machine</a>
                                            </li>
                                            <li className='dropdown-link'>
                                                <a href='#'>Nucleic Acid Extraction Machine</a>
                                            </li>
                                            <div className='arrow'></div>
                                        </ul>
                                    </div>
                                </li>
                                <li className='dropdown-link'>
                                    <a href='#'>Consumables<i className='fas fa-caret-down'></i></a>
                                    <div className='dropdown second'>
                                        <ul>
                                            <li className='dropdown-link'>
                                                <a href='#'>Reagents</a>
                                            </li>
                                            <li className='dropdown-link'>
                                                <a href='#'>Surgical Face Mask</a>
                                            </li>
                                            <div className='arrow'></div>
                                        </ul>
                                    </div>
                                </li>
                                <li className='dropdown-link'>
                                    <a href='#'>Imaging<i className='fas fa-caret-down'></i></a>
                                    <div className='dropdown second'>
                                        <ul>
                                            <li className='dropdown-link'>
                                                <a href='#'>Ultrasound</a>
                                            </li>
                                            <li className='dropdown-link'>
                                                <a href='#'>ECG</a>
                                            </li>
                                            <div className='arrow'></div>
                                        </ul>
                                    </div>
                                </li>
                                <div className='arrow'></div>
                            </ul>
                        </div>
                    </li>
                    <li className='NavBar__link'>
                        <a href='#'>Our Services</a>
                    </li>
                    <li className='NavBar__link'>
                        <a href='#'>About US</a>
                    </li>
                    <li className='NavBar__link'>
                        <a href='#'>Career</a>
                    </li>
                    <li className='NavBar__link'>
                        <a href='#'>Contact Us</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
