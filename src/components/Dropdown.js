import { Link } from "react-router-dom";
import {motion} from 'framer-motion';

const Dropdown = (props) => {

    const animateFrom = {opacity: 0, y: -40}
    const animateTo = {opacity: 1, y: 0}
    

    return (

        <ul>
            <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.05}}
                onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link className='Link'>Clinical Chemistry<i className='fas fa-caret-down'></i></Link>
            </motion.li>
            <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.10}}>
                <Link className='Link'>Clinical Hematology<i className='fas fa-caret-down'></i></Link>
                
            </motion.li>
            <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.20}}
                onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <Link className='Link' to='/quotation'>Clinical Microbiology</Link>
            </motion.li>
            <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.30}}
                onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link className='Link'>Air Protection<i className='fas fa-caret-down'></i></Link>
            </motion.li>
            <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.40}}
                onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link className='Link' to='/quotation'>Clinical Histopathology</Link>
            </motion.li>
            <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.50}}
                onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link className='Link'>Hospital Products<i className='fas fa-caret-down'></i></Link>
            </motion.li>
            <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.60}}
                onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link className='Link'>Molecular Lab Products<i className='fas fa-caret-down'></i></Link>
            </motion.li>
            <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.70}}
                onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link className='Link'>Consumables<i className='fas fa-caret-down'></i></Link>
            </motion.li>
            <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.80}}
                onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link className='Link'>Imaging<i className='fas fa-caret-down'></i></Link>
            </motion.li>
        </ul>

    )
};

export default Dropdown;