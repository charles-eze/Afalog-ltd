import React from 'react';
import { FcContacts } from 'react-icons/fc';
import { MdContactPhone} from 'react-icons/md';
import Fade from 'react-reveal/Fade';

const Contact = () => {
    return (
        <div className='relative bg-gray-100'
            style={{fontFamily: 'Poppins sans-serif'}}>
            <div className='bg-gray-100 h-40 w-full -bottom-40 flex absolute '></div>
            <div className='relative  block md:flex md:justify-evenly top-24 md:top-28 mr-3.5 ml-3.5 pb-2 md:mr-36 md:ml-36 mb-4 md:mb-11 md:pb-12 bg-gray-50 border border-gray-200'
                style={{boxShadow: "0 0.55rem 1rem rgba(0, 0, 0, 0.45)"}}>
                <Fade left>
                <div className='pl-4 pr-4 md:pl-32 md:pr-16'>
                    <span className='flex pt-7 pb-7 '>
                        <MdContactPhone
                            className='text-blue-600 text-xl md:text-3xl mr-1.5 md:mr-5 '/>
                        <h1 className='text-base md:text-xl'
                            style={{color: 'orangered'}}>Afalog Medicals Limited - Headquarters</h1>
                    </span>
                    <hr className='border-blue-400 -mt-3 md:mt-0'></hr>
                    <p className='pt-4 text-sm md:text-lg'>No 2 Adelabu Close</p>
                    <p className='pt-0.5 text-sm md:text-lg'>Off Ola Ayinde Street</p>
                    <p className='pt-0.5 text-sm md:text-lg'>Ikeja</p>
                    <p className='pt-0.5 text-sm md:text-lg'>Lagos,</p>
                    <p className='pt-0.5 text-sm md:text-lg'>Nigeria</p>
                    <p className='pt-0.5 text-sm md:text-lg font-bold'>Tel: +234 (0) 7035441395</p>
                    <p className='pt-0.5 text-sm md:text-lg font-semibold'>Email: info@afalog.com</p>
                    <p className='pt-0.5 text-sm md:text-lg font-semibold'>Email2: afalogmedicaldiagnostics@gmail.com</p>
                </div>
                </Fade>
                <Fade right>
                <div className='pl-4 pr-4 md:pl-32 md:pr-16 pb-3.5 md:pb-0'>
                    <span className='flex pt-7 pb-7 '>
                        <FcContacts
                            className='text-blue-600 text-2xl md:text-3xl mr-1.5 md:mr-5 '/>
                        <h1 className='text-base md:text-xl text-blue-700'>Afalog Medicals Limited - Rep Office</h1>
                    </span>
                    <hr className='border-blue-400 -mt-3 md:mt-0'></hr>
                    <p className='pt-4 text-sm md:text-lg'>No 22 Apara-Link Rd</p>
                    <p className='pt-0.5 text-sm md:text-lg'>Off Cresent street, Rumuigbo</p>
                    <p className='pt-0.5 text-sm md:text-lg'>Port Harcourt</p>
                    <p className='pt-0.5 text-sm md:text-lg'>Rivers,</p>
                    <p className='pt-0.5 text-sm md:text-lg'>Nigeria</p>
                    <p className='pt-0.5 text-sm md:text-lg font-bold'>Tel: +234 (0) 7068666696</p>
                    <p className='pt-0.5 text-sm md:text-lg font-semibold'>Email: info@afalog.com</p>
                    <p className='pt-0.5 text-sm md:text-lg font-semibold'>Email2: afalogmedicaldiagnostics@gmail.com</p>
                </div>
                </Fade>
            </div>
        </div>
    )
}

export default Contact;
