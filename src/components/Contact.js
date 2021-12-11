import React from 'react';
import { FcContacts } from 'react-icons/fc';
import { MdContactPhone} from 'react-icons/md';
import Fade from 'react-reveal/Fade';
import "../css/Footer.css";
import Footer from './Footer';

const Contact = () => {
    return (
        <div className='relative bg-gray-100 fontt Heightwe Mobile_Heigt'>
            <div className='relative Heightwe1 block md:flex md:justify-evenly top-24 md:top-28 mr-3.5 ml-3.5 pb-2 md:mr-24 md:ml-24 mb-4 md:mb-11 md:pb-7 bg-gray-50 border border-gray-200'
                style={{boxShadow: "0 0.55rem 1rem rgba(0, 0, 0, 0.45)"}}>
                <Fade left>
                <div className='pl-4 pr-4 md:pl-28 md:pr-12'>
                    <span className='flex pt-7 pb-7 items-center'>
                        <MdContactPhone
                            className='text-blue-600 text-xl mr-1.5 md:mr-5 '/>
                        <h1 className='text-base md:text-lg'
                            style={{color: 'orangered'}}>Afalog Medicals Limited - Headquarters</h1>
                    </span>
                    <hr className='border-blue-400 -mt-3'></hr>
                    <p className='pt-4 text-sm md:text-base'>No 2 Adelabu Close</p>
                    <p className='text-sm md:text-base'>Off Ola Ayinde Street</p>
                    <p className='text-sm md:text-base'>Ikeja</p>
                    <p className='text-sm md:text-base'>Lagos,</p>
                    <p className='text-sm md:text-base'>Nigeria</p>
                    <p className='pt-1 text-sm md:text-base font-bold'>Tel: +234 (0) 7035441395</p>
                    <p className='pt-0.5 text-sm md:text-base font-semibold'>Email: info@afalog.com</p>
                    <p className='pt-0.5 text-sm md:text-base font-semibold'>Email2: afalogmedicaldiagnostics@gmail.com</p>
                </div>
                </Fade>
                <Fade left>
                <div className='pl-4 pr-4 md:pl-28 md:pr-16 pb-3.5 md:pb-0'>
                    <span className='flex pt-7 pb-7 items-center'>
                        <FcContacts
                            className='text-blue-600 text-xl mr-1.5 md:mr-5 '/>
                        <h1 className='text-base md:text-lg text-blue-700'>Afalog Medicals Limited - Rep Office</h1>
                    </span>
                    <hr className='border-blue-400 -mt-3'></hr>
                    <p className='pt-4 text-sm md:text-base'>No 22 Apara-Link Rd</p>
                    <p className='text-sm md:text-base'>Off Cresent street, Rumuigbo</p>
                    <p className='text-sm md:text-base'>Port Harcourt</p>
                    <p className='text-sm md:text-base'>Rivers,</p>
                    <p className='text-sm md:text-base'>Nigeria</p>
                    <p className='pt-1 text-sm md:text-base font-bold'>Tel: +234 (0) 7068666696</p>
                    <p className='pt-0.5 text-sm md:text-base font-semibold'>Email: info@afalog.com</p>
                    <p className='pt-0.5 text-sm md:text-base font-semibold'>Email2: afalogmedicaldiagnostics@gmail.com</p>
                </div>
                </Fade>
            </div>
            <div className="Heightwe2 Mobile_Foot">
                <Footer />
            </div>
        </div>
    )
}

export default Contact;
