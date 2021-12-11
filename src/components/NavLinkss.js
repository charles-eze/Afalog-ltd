import { Link } from "react-router-dom";
import {motion} from 'framer-motion';

const NavLinkss = (props) => {

    const animateFrom = {opacity: 0, y: -40}
    const animateTo = {opacity: 1, y: 0}
    

    return (
        <div className='nav-btn'>
            <div className="nav-links">
                <ul>
                    <motion.li 
                        className="nav-link"
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.05}}
                        onClick={() => props.isMobile && props.closeMobileMenu()}>
                        <Link className='Link' to='/'>Home</Link>
                    </motion.li>
                    <motion.li 
                        className="nav-link"
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.10}}>
                       <Link className='Link'>Products<i className='fas fa-caret-down'></i></Link>
                        <div className="dropdown">
                            <ul>
                                <li className="dropdown-link">
                                    <Link className='Link'>Clinical Chemistry<i className='fas fa-caret-down'></i></Link>
                                     <div className='dropdown second'>
                                        <ul>
                                            <li className='dropdown-link'
                                                onClick={() => props.isMobile && props.closeMobileMenu()}>
                                                <Link className='Link' to='/quotation'>Chemistry Analyzer</Link>
                                            </li>
                                            <li className='dropdown-link'
                                                onClick={() => props.isMobile && props.closeMobileMenu()}>
                                                <Link className='Link' to='/quotation'>Eliza Reader</Link>
                                            </li>
                                            <li className='dropdown-link'
                                                onClick={() => props.isMobile && props.closeMobileMenu()}>
                                                <Link className='Link' to='/quotation'>Electrolyte Analyzer</Link>
                                            </li>
                                            <li className='dropdown-link'
                                                onClick={() => props.isMobile && props.closeMobileMenu()}>
                                                <Link className='Link' to='/quotation'>Dry Chemistry</Link>
                                            </li>
                                            <div className='arrow'></div>
                                        </ul>
                                    </div>
                                </li>
                                <li className="dropdown-link">
                                    <Link className='Link'>Clinical Hematology<i className='fas fa-caret-down'></i></Link>
                                     <div className='dropdown second'>
                                        <ul>
                                            <li className='dropdown-link'
                                                onClick={() => props.isMobile && props.closeMobileMenu()}>
                                                <Link className='Link' to='/quotation'>5 part diff</Link>
                                            </li>
                                            <li className='dropdown-link'
                                                onClick={() => props.isMobile && props.closeMobileMenu()}>
                                                <Link className='Link' to='/quotation'>3 part diff</Link>
                                            </li>
                                            <div className='arrow'></div>
                                        </ul>
                                    </div>
                                </li>
                                <li className="dropdown-link"
                                    onClick={() => props.isMobile && props.closeMobileMenu()}>
                                    <Link className='Link' to='/quotation'>
                                        Clinical Microbiology</Link>
                                </li>
                                <li className="dropdown-link">
                                    <Link className='Link'>Air Protection<i className='fas fa-caret-down'></i></Link>
                                     <div className='dropdown second'>
                                        <ul>
                                            <li className='dropdown-link'
                                                onClick={() => props.isMobile && props.closeMobileMenu()}>
                                                <Link className='Link' to='/quotation'>Biosafety Cabinet</Link>
                                            </li>
                                            <li className='dropdown-link'
                                                onClick={() => props.isMobile && props.closeMobileMenu()}>
                                                <Link className='Link' to='/quotation'>PCR Cabinet</Link>
                                            </li>
                                            <li className='dropdown-link'
                                                onClick={() => props.isMobile && props.closeMobileMenu()}>
                                                <Link className='Link' to='/quotation'>Fume Hood</Link>
                                            </li>
                                            <li className='dropdown-link'
                                                onClick={() => props.isMobile && props.closeMobileMenu()}>
                                                <Link className='Link' to='/quotation'>Laminar Flow Cabinet</Link>
                                            </li>
                                            <div className='arrow'></div>
                                        </ul>
                                    </div>
                                </li>
                                <li className="dropdown-link"
                                    onClick={() => props.isMobile && props.closeMobileMenu()}>
                                    <Link className='Link' to='/quotation'>Clinical Histopathology</Link>
                                </li>
                                <li className="dropdown-link">
                                    <Link className='Link'>Hospital Products<i className='fas fa-caret-down'></i></Link>
                                     <div className='dropdown second'>
                                        <ul>
                                            <li className='dropdown-link'
                                                onClick={() => props.isMobile && props.closeMobileMenu()}>
                                                <Link className='Link' to='/quotation'>Patient Monitor</Link>
                                            </li>
                                            <li className='dropdown-link'
                                                onClick={() => props.isMobile && props.closeMobileMenu()}>
                                                <Link className='Link' to='/quotation'>Hospital Bed</Link>
                                            </li>
                                            <li className='dropdown-link'
                                                onClick={() => props.isMobile && props.closeMobileMenu()}>
                                                <Link className='Link' to='/quotation'>Theatre Equipment</Link>
                                            </li>
                                            <div className='arrow'></div>
                                        </ul>
                                    </div>
                                </li>
                                <li className="dropdown-link">
                                     <Link className='Link'>Molecular Lab Products<i className='fas fa-caret-down'></i></Link>
                                     <div className='dropdown second'>
                                        <ul>
                                            <li className='dropdown-link'
                                                onClick={() => props.isMobile && props.closeMobileMenu()}>
                                                <Link className='Link' to='/quotation'>PCR Machine</Link>
                                            </li>
                                            <li className='dropdown-link'
                                                onClick={() => props.isMobile && props.closeMobileMenu()}>
                                                <Link className='Link' to='/quotation'>Nucleic Acid Extraction Machine</Link>
                                            </li>
                                            <div className='arrow'></div>
                                        </ul>
                                    </div>
                                </li>
                                <li className="dropdown-link">
                                    <Link className='Link'>Consumables<i className='fas fa-caret-down'></i></Link>
                                    <div className='dropdown second'>
                                        <ul>
                                            <li className='dropdown-link'
                                                onClick={() => props.isMobile && props.closeMobileMenu()}>
                                                <Link className='Link' to='/quotation'>Reagents</Link>
                                            </li>
                                            <li className='dropdown-link'
                                                onClick={() => props.isMobile && props.closeMobileMenu()}>
                                                <Link className='Link' to='/quotation'>Surgical Face Mask</Link>
                                            </li>
                                            <div className='arrow'></div>
                                        </ul>
                                    </div>
                                </li>
                                <li className="dropdown-link">
                                    <Link className='Link'>Imaging<i className='fas fa-caret-down'></i></Link>
                                     <div className='dropdown second'>
                                        <ul>
                                            <li className='dropdown-link'
                                                onClick={() => props.isMobile && props.closeMobileMenu()}>
                                                <Link className='Link' to='/quotation'>Ultrasound</Link>
                                            </li>
                                            <li className='dropdown-link'
                                                onClick={() => props.isMobile && props.closeMobileMenu()}>
                                                <Link className='Link' to='/quotation'>ECG</Link>
                                            </li>
                                            <div className='arrow'></div>
                                        </ul>
                                    </div>
                                </li>
                                <li className="dropdown-link"></li>
                                <div className="arrow"></div>
                            </ul>
                        </div>
                    </motion.li>
                    <motion.li 
                        className="nav-link"
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.20}}
                        onClick={() => props.isMobile && props.closeMobileMenu()}>
                            <Link className='Link' to='/services'>Our Services</Link>
                    </motion.li>
                    <motion.li
                        className="nav-link"
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.30}}
                        onClick={() => props.isMobile && props.closeMobileMenu()}>
                        <Link className='Link' to='/about'>About Us</Link>
                    </motion.li>
                    <motion.li
                        className="nav-link" 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.40}}
                        onClick={() => props.isMobile && props.closeMobileMenu()}>
                        <Link className='Link' to='/careers'>Career</Link>
                    </motion.li>
                    <motion.li
                        className="nav-link" 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.50}}
                        onClick={() => props.isMobile && props.closeMobileMenu()}>
                        <Link className='Link' to='/contact'>Contact Us</Link>
                    </motion.li>
                </ul>
            </div>
        </div>

    )
};

export default NavLinkss;