import React from 'react';
import { GrBusinessService } from 'react-icons/gr';
import "../css/Footer.css";
import Slide from 'react-reveal/Slide';
import Footer from './Footer';

const Services = () => {
    return (
        <div className='relative fontt bg-gray-100 Heightwe Mobile_Heigt '>
            <Slide top>
            <div className='relative HeightServ1 flex flex-col text-center top-36 mr-3.5 ml-3.5 md:mr-36 md:ml-36 pb-12 border border-gray-200 bg-gray-50'
                style={{boxShadow: "0 0.55rem 1rem rgba(0, 0, 0, 0.45)"}}>
               
                <span className='flex pt-7 pb-7 justify-center items-center '>
                    <GrBusinessService
                        className='text-blue-600 text-xl mr-5 '/>
                    <h1 className='text-xl md:text-2xl'
                        style={{color: 'orangered'}}>Our services</h1>
                </span>
                <hr className='border-blue-400 w-2/3 mx-auto -mt-3 '></hr>
                <p className='pt-5 text-left pl-3.5 md:pl-16 md:pr-12 pr-3 text-base md:text-base text-gray-700'>We offer, Clinical laboratory planning/consultation, installations, Equipment user training, equipment repairs and maintenance. </p>

                <p className='pt-2.5 text-left pl-3.5 pr-3 md:pl-16 md:pr-12 text-base md:text-base text-gray-700'>For all technical services, please contact us via <a className='text-blue-500 hover:underline' href="mailto:info@afalog.com, afalogmedicaldiagnostics@gmail.com"> info@afalog.com</a> and our technical team will attend to you.</p>   
            </div>
            </Slide>
            <div className="HeightServ2 Mobile_Foot">
                <Footer />
            </div>
        </div>
    )
}

export default Services;
