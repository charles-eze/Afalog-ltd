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
                        <Link className='Link' to='/'>Home</Link>
                    </li>
                    <li className='NavBar__link'>
                        <Link className='Link' to='/quotation'>Products<i className='fas fa-caret-down'></i></Link>
                        <div className='dropdown'>
                            <ul>
                                <li className='dropdown-link'>
                                    <Link className='Link'>Clinical Chemistry<i className='fas fa-caret-down'></i></Link>
                                    <div className='dropdown second'>
                                        <ul>
                                            <li className='dropdown-link'>
                                                <Link className='Link' to='/quotation'>Chemistry Analyzer</Link>
                                            </li>
                                            <li className='dropdown-link'>
                                                <Link className='Link' to='/quotation'>Eliza Reader</Link>
                                            </li>
                                            <li className='dropdown-link'>
                                                <Link className='Link' to='/quotation'>Electrolyte Analyzer</Link>
                                            </li>
                                            <li className='dropdown-link'>
                                                <Link className='Link' to='/quotation'>Dry Chemistry</Link>
                                            </li>
                                            <div className='arrow'></div>
                                        </ul>
                                    </div>
                                </li>
                                <li className='dropdown-link'>
                                    <Link className='Link'>Clinical Hematology<i className='fas fa-caret-down'></i></Link>
                                    <div className='dropdown second'>
                                        <ul>
                                            <li className='dropdown-link'>
                                                <Link className='Link' to='/quotation'>5 part diff</Link>
                                            </li>
                                            <li className='dropdown-link'>
                                                <Link className='Link' to='/quotation'>3 part diff</Link>
                                            </li>
                                            <div className='arrow'></div>
                                        </ul>
                                    </div>
                                </li>
                                <li className='dropdown-link'>
                                    <Link className='Link' to='/quotation'>Clinical Microbiology</Link>
                                </li>
                                <li className='dropdown-link'>
                                    <Link className='Link'>Air Protection<i className='fas fa-caret-down'></i></Link>
                                    <div className='dropdown second'>
                                        <ul>
                                            <li className='dropdown-link'>
                                                <Link className='Link' to='/quotation'>Biosafety Cabinet</Link>
                                            </li>
                                            <li className='dropdown-link'>
                                                <Link className='Link' to='/quotation'>PCR Cabinet</Link>
                                            </li>
                                            <li className='dropdown-link'>
                                                <Link className='Link' to='/quotation'>Fume Hood</Link>
                                            </li>
                                            <li className='dropdown-link'>
                                                <Link className='Link' to='/quotation'>Laminar Flow Cabinet</Link>
                                            </li>
                                            <div className='arrow'></div>
                                        </ul>
                                    </div>
                                </li>
                                <li className='dropdown-link'>
                                    <Link className='Link' to='/quotation'>Clinical Histopathology</Link>
                                </li>
                                <li className='dropdown-link'>
                                    <Link className='Link'>Hospital Products<i className='fas fa-caret-down'></i></Link>
                                    <div className='dropdown second'>
                                        <ul>
                                            <li className='dropdown-link'>
                                                <Link className='Link' to='/quotation'>Patient Monitor</Link>
                                            </li>
                                            <li className='dropdown-link'>
                                                <Link className='Link' to='/quotation'>Hospital Bed</Link>
                                            </li>
                                            <li className='dropdown-link'>
                                                <Link className='Link' to='/quotation'>Theatre Equipment</Link>
                                            </li>
                                            <div className='arrow'></div>
                                        </ul>
                                    </div>
                                </li>
                                <li className='dropdown-link'>
                                    <Link className='Link'>Molecular Lab Products<i className='fas fa-caret-down'></i></Link>
                                    <div className='dropdown second'>
                                        <ul>
                                            <li className='dropdown-link'>
                                                <Link className='Link' to='/quotation'>PCR Machine</Link>
                                            </li>
                                            <li className='dropdown-link'>
                                                <Link className='Link' to='/quotation'>Nucleic Acid Extraction Machine</Link>
                                            </li>
                                            <div className='arrow'></div>
                                        </ul>
                                    </div>
                                </li>
                                <li className='dropdown-link'>
                                    <Link className='Link'>Consumables<i className='fas fa-caret-down'></i></Link>
                                    <div className='dropdown second'>
                                        <ul>
                                            <li className='dropdown-link'>
                                                <Link className='Link' to='/quotation'>Reagents</Link>
                                            </li>
                                            <li className='dropdown-link'>
                                                <Link className='Link' to='/quotation'>Surgical Face Mask</Link>
                                            </li>
                                            <div className='arrow'></div>
                                        </ul>
                                    </div>
                                </li>
                                <li className='dropdown-link'>
                                    <Link className='Link'>Imaging<i className='fas fa-caret-down'></i></Link>
                                    <div className='dropdown second'>
                                        <ul>
                                            <li className='dropdown-link'>
                                                <Link className='Link' to='/quotation'>Ultrasound</Link>
                                            </li>
                                            <li className='dropdown-link'>
                                                <Link className='Link' to='/quotation'>ECG</Link>
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
                         <Link className='Link' to='/quotation'>Our Services</Link>
                    </li>
                    <li className='NavBar__link'>
                        <Link className='Link' to='/quotation'>About Us</Link>
                    </li>
                    <li className='NavBar__link'>
                        <Link className='Link' to='/quotation'>Career</Link>
                    </li>
                    <li className='NavBar__link'>
                        <Link className='Link' to='/quotation'>Contact Us</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
