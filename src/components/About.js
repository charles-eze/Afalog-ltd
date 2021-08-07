import React from 'react';
import Fade from 'react-reveal/Fade';
import "../css/Footer.css";


const Careers = () => {
    return (
        <div className='relative bg-gray-100 fontt'>
            <div className='bg-gray-100 h-40 w-full -bottom-40 flex absolute '></div>
                <div className='relative bg-gray-50 flex justify-evenly top-24 md:top-28  mr-3.5 ml-3.5 pb-2 md:mr-28 md:ml-28 mb-4 md:mb-9 md:pb-12  border border-gray-300'
                    style={{boxShadow: "0 0.55rem 1rem rgba(0, 0, 0, 0.45)"}}>
                    <div className='pl-3.5 pr-2.5 md:pl-32 md:pr-16 '>
                        <Fade left>
                            <span className='flex pt-7 pb-3.5 '>
                                <h1 className='text-lg md:text-xl font-semibold'
                                    style={{color: 'orangered'}}>Company Profile</h1>
                            </span>
                        </Fade>
                        <Fade right>
                            <hr className='border-blue-400'></hr>
                        </Fade>
                        <Fade left>
                            <p className='pt-5 text-sm md:text-base text-gray-700'>AFALOG Medical Diagnostics Center Limited is a professional leading supplier of laboratory and medical products in Nigeria since 2016.</p>
                        </Fade>
                        <Fade right>
                            <p className='pt-2.5 text-sm md:text-base text-gray-700'>We have a very good health care technology interactive/engagement protocol which is strategically positioned to take a leadership role in developing new innovations and standards in health care marketplace in Nigeria.</p>
                        </Fade>
                        <Fade left>
                            <p className='pt-2.5 text-sm md:text-base text-gray-700'>Our niche includes: Laboratory and Diagnostic Equipment, Blood and urine chemistry systems, Immunology test systems, Molecular Diagnostics, Patient Monitoring & Life Supporting Product which covers, Theatre Equipment, ICU Equipment, Endoscopy, (Imagine) Ultrasound, Digital X-ray, MRI, Air protection.</p>
                        </Fade>
                        <Fade right>
                            <p className='pt-2.5 pb-5 text-sm md:pb-0 md:text-base text-gray-700'>Our team includes experienced after-sales service Biomedical Engineers, Medical Laboratory Scientists and manufacturer-trained Product Specialists. We also offer great warranty terms and post-installation services and maintenance for optimal usage of our products.</p>
                        </Fade>
                    </div>
                </div>
        </div>
    )
}

export default Careers
