import React from 'react';
import { GrBusinessService } from 'react-icons/gr';
import Flip from 'react-reveal/Flip';

const Services = () => {
    return (
        <div className='relative  '
            style={{height: '70vh', fontFamily: 'Poppins sans-serif'}}>
            <Flip left>
            <div className='relative flex flex-col text-center top-28 mr-44 ml-44 pb-12 border border-gray-200'>
               
                <span className='flex pt-7 pb-7 justify-center  '>
                    <GrBusinessService
                        className='text-blue-600 text-3xl mr-5 '/>
                    <h1 className='text-2xl'
                        style={{color: 'orangered'}}>Our services</h1>
                </span>
                <hr className='border-blue-400 w-2/3 mx-auto '></hr>
                <p className='pt-5 text-lg text-gray-700'>We offer, Clinical laboratory planning/consultation, installations, Equipment user training, equipment repairs and maintenance. </p>

                <p className='pt-2.5 text-lg text-gray-700'>For all technical services, please contact us via <a className='text-blue-500 hover:underline' href="mailto:info@afalog.com, afalogmedicaldiagnostics@gmail.com"> info@afalog.com</a> and our technical team will attend to you.</p>   
            </div>
            </Flip>
        </div>
    )
}

export default Services;
