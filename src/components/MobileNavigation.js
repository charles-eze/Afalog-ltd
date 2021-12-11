import NavLinkss from "./NavLinkss"
import {AiOutlineMenu} from 'react-icons/ai'
import {CgClose} from 'react-icons/cg'
import {useState} from 'react'

const MobileNavigation = () => {

    const [open, setOpen] = useState(false);

    const openIcon = <AiOutlineMenu className='Hamburger ' 
                        size='35px' color='rgb(26, 81, 243)' 
                        onClick={() => setOpen(!open)} />

    const closeIcon = <CgClose className='Hamburger ' 
                        size='35px' color='rgb(26, 81, 243)' 
                        onClick={() => setOpen(!open)} />

    const closeMobileMenu = () => setOpen(false);

    return( 
        <nav className="MobileNavigation">
           {open ? closeIcon : openIcon} 
           {open && <NavLinkss isMobile={true} closeMobileMenu={closeMobileMenu} />}
        </nav>
        
     );
}

export default MobileNavigation;