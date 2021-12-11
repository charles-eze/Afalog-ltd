import "../css/NavBarr.css";
import { Link } from "react-router-dom";
import image from "../images/afalog_image.png";
import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';

const NavBar = () => {

    return (
        <>    
        <div className='NavBar'>
            <div className='NavBar__logo'>
            <Link to='/'>
                <img 
                    className='w-28'
                    src={image}
                    alt='afalog logo' />
            </Link>
            </div>
            <div className='NavBar__links'>
                <Navigation />
                <MobileNavigation />
            </div>
        </div>
        </>
    );
};

export default NavBar;
