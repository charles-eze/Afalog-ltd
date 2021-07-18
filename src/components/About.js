import React from 'react';
import Fade from 'react-reveal/Fade';

const Careers = () => {
    return (
        <div className='relative bg-gray-100'
            style={{height: '75vh', fontFamily: 'Poppins sans-serif'}}>
            
                <div className='relative bg-gray-50 flex justify-evenly top-28 mr-36 ml-36 mb-9 pb-12 border border-gray-300'>
                    <div className='pl-32 pr-16 '>
                        <Fade left>
                            <span className='flex pt-7 pb-3.5 '>
                                <h1 className='text-2xl'
                                    style={{color: 'orangered'}}>Company Profile</h1>
                            </span>
                        </Fade>
                        <Fade right>
                            <hr className='border-blue-400'></hr>
                        </Fade>
                        <Fade left>
                            <p className='pt-5 text-lg text-gray-700'>AFALOG Medical Diagnostics Center Limited is a professional leading supplier of laboratory and medical products in Nigeria since 2016.</p>
                        </Fade>
                        <Fade right>
                            <p className='pt-2.5 text-lg text-gray-700'>We have a very good health care technology interactive/engagement protocol which is strategically positioned to take a leadership role in developing new innovations and standards in health care marketplace in Nigeria.</p>
                        </Fade>
                        <Fade left>
                            <p className='pt-2.5 text-lg text-gray-700'>Our niche includes: Laboratory and Diagnostic Equipment, Blood and urine chemistry systems, Immunology test systems, Molecular Diagnostics, Patient Monitoring & Life Supporting Product which covers, Theatre Equipment, ICU Equipment, Endoscopy, (Imagine) Ultrasound, Digital X-ray, MRI, Air protection.</p>
                        </Fade>
                        <Fade right>
                            <p className='pt-2.5 text-lg text-gray-700'>Our team includes experienced after-sales service Biomedical Engineers, Medical Laboratory Scientists and manufacturer-trained Product Specialists. We also offer great warranty terms and post-installation services and maintenance for optimal usage of our products.</p>
                        </Fade>
                    </div>
                </div>
        </div>
    )
}

export default Careers
