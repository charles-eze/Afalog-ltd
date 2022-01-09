import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import "../css/Footer.css";
import Footer from './Footer';
import emailjs from 'emailjs-com';
import { useHistory } from 'react-router-dom';


const QuotationForm = () => {

    const [result, showResult] = useState(false);
    const history = useHistory();  

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_fqgzajo', 'template_1eqq31w', e.target, 'user_A0Dhz0dx8bqkY5naLzj9c')
            .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
    showResult(true);

}
    return (
        <div className='bg-gray-100 bg-cover relative Heightt Heighttt Mobile_Form_Heigt'>
            <div className='relative bg-gray-50 pl-5 md:px-11 pt-5 md:pt-7 top-24 md:top-28 m-auto w-11/12 md:w-2/4 md:pb-10 md:mb-7 border border-gray-300 rounded-lg'
                style={{fontFamily: 'Poppins sans-serif', boxShadow: "0 0.55rem 1rem rgba(0, 0, 0, 0.45)"}}>
                {/* <div className='form__logo'>
                    <img 
                    src={image}
                    alt='afalog logoo' />
                </div>   */}
                <div className='form__content'>
                    <Fade top>
                        <h1 className='text-center text-gray-600 font-bold text-2xl md:text-3xl mb-2.5 '>Get a Quote</h1>
                    </Fade>
                    <form className='cursor-pointer'
                          onSubmit={sendEmail}>
                        <Fade left>
                            <h5 className='text-gray-600 font-medium text-lg'>Name<span className='text-red-500 text-lg'>*</span></h5>
                            <input 
                                className='mb-5 pl-2.5 text-gray-500 text-base md:text-lg pr-3.5 h-8 w-4/5 border-gray-300 border border-solid focus:outline-none cursor-pointer focus:ring-1 focus:ring-blue-600 rounded-md'
                                type='text'
                                name='name'
                                required
                                // value={name} 
                                />
                        </Fade>
                        <Fade right>
                            <h5 className='text-gray-600 font-medium text-lg'>Company Name<span className='text-red-500 text-lg'>*</span></h5>
                            <input 
                                className='mb-5 pl-2.5 text-gray-700 text-base md:text-lg pr-3.5 h-8 w-4/5 border-gray-300 border border-solid focus:outline-none cursor-pointer focus:ring-1 focus:ring-blue-600 rounded-md'
                                type='text'
                                name='company_name'
                                required
                                // value={companyName} 
                                />
                        </Fade>
                        <Fade left>
                            <h5 className='text-gray-600 font-medium text-lg'>Email<span className='text-red-500 text-lg'>*</span></h5>
                            <input 
                                className='mb-5 pl-2.5 text-gray-500 text-base md:text-lg pr-3.5 h-8 w-4/5 border-gray-300 border border-solid focus:outline-none cursor-pointer focus:ring-1 focus:ring-blue-600 rounded-md'
                                type='email'
                                name='user_email'
                                required
                                // value={email} 
                                />
                        </Fade>
                        <Fade right>
                            <h5 className='text-gray-600 font-medium text-lg'>Phone Number<span className='text-red-500 text-lg'>*</span></h5>
                            <input 
                                className='mb-5 pl-2.5 text-gray-700 text-base md:text-lg pr-3.5 h-8 w-4/5 border-gray-300 border border-solid focus:outline-none cursor-pointer focus:ring-1 focus:ring-blue-600 rounded-md'
                                type='text'
                                name='user_phone_number'
                                required
                                // value={phoneNumber} 
                                />
                        </Fade>
                        <Fade left>
                            <h5 className='text-gray-600 font-medium text-lg'>Message<span className='text-red-500 text-lg'>*</span></h5>
                            <textarea
                                className='mb-5 pl-2.5 text-gray-700 text-base md:text-lg pr-3.5 h-28 w-4/5 border-gray-300 border border-solid focus:outline-none cursor-pointer focus:ring-1 focus:ring-blue-600 rounded-md'
                                type='textarea'
                                name='message'
                                placeholder='Please tell us what you need, we will send you a quotation..'
                                required
                                maxlength="50000"
                                // value={message} 
                                >
                            </textarea>
                        </Fade>
                        <Fade right>
                            <div>
                                <input className='text-lg md:text-xl text-white border border-solid w-3/12 select-none font-medium h-10 mt-1.5 mb-3.5 md:mb-0 border-transparent bg-blue-700 hover:bg-blue-500 focus:outline-none cursor-pointer focus:bg-yellow-600 rounded-md'
                                    type='submit'
                                    value='Submit'
                                />
                                
                            </div>
                        </Fade>
                        <div>
                            {result ?  history.push('/submitted') : null}
                        </div>

                    </form>
                </div> 
            </div>
             <div className='Heightwe2 Mobile_Foot'>
                <Footer />
            </div>
        </div>
    )
}

export default QuotationForm
