import React from 'react';
import { FcContacts } from 'react-icons/fc';
import { MdContactPhone} from 'react-icons/md';

const Contact = () => {
    return (
        <div className='relative  '
            style={{height: '70vh', fontFamily: 'Poppins sans-serif'}}>
            <div className='relative flex justify-evenly top-28 mr-36 ml-36 pb-12 border border-gray-200'>
                <div className='pl-32 pr-16'>
                    <span className='flex pt-7 pb-7 '>
                        <MdContactPhone
                            className='text-blue-600 text-3xl mr-5 '/>
                        <h1 className='text-xl'
                            style={{color: 'orangered'}}>Afalog Medicals Limited - Headquarters</h1>
                    </span>
                    <hr className='border-blue-400'></hr>
                    <p className='pt-4 text-lg'>No 2 Adelabu Close</p>
                    <p className='pt-0.5 text-lg'>Off Ola Ayinde Street</p>
                    <p className='pt-0.5 text-lg'>Ikeja</p>
                    <p className='pt-0.5 text-lg'>Lagos,</p>
                    <p className='pt-0.5 text-lg'>Nigeria</p>
                    <p className='pt-0.5 text-lg font-bold'>Tel: +234 (0) 7035441395</p>
                    <p className='pt-0.5 text-lg font-semibold'>Email: info@afalog.com</p>
                    <p className='pt-0.5 text-lg font-semibold'>Email2: afalogmedicaldiagnostics@gmail.com</p>

                </div>
                <div className='pl-32 pr-16'>
                    <span className='flex pt-7 pb-7 '>
                        <FcContacts
                            className='text-blue-600 text-3xl mr-5 '/>
                        <h1 className='text-xl text-blue-700'>Afalog Medicals Limited - Rep Office</h1>
                    </span>
                    <hr className='border-blue-400'></hr>
                    <p className='pt-4 text-lg'>No 22 Apara-Link Rd</p>
                    <p className='pt-0.5 text-lg'>Off Cresent street, Rumuigbo</p>
                    <p className='pt-0.5 text-lg'>Port Harcourt</p>
                    <p className='pt-0.5 text-lg'>Rivers,</p>
                    <p className='pt-0.5 text-lg'>Nigeria</p>
                    <p className='pt-0.5 text-lg font-bold'>Tel: +234 (0) 7068666696</p>
                    <p className='pt-0.5 text-lg font-semibold'>Email: info@afalog.com</p>
                    <p className='pt-0.5 text-lg font-semibold'>Email2: afalogmedicaldiagnostics@gmail.com</p>


                </div>
            </div>
        </div>
    )
}

export default Contact;
