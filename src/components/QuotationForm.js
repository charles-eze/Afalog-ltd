import React from 'react';
import "../css/QuotationForm.css";
// import image from "../images/afalog_image.png"

const QuotationForm = () => {
    return (
        <div className='container'>
            <div className='containers'></div>
            <div className='QuotationForm'>
                {/* <div className='form__logo'>
                    <img 
                    src={image}
                    alt='afalog logoo' />
                </div>   */}
                <div className='form__content'>
                    <h1>Get a Quote</h1>
                    <form>
                        <h5>Name<span>*</span></h5>
                        <input 
                            type='text'
                            required
                            // value={name} 
                            />
                        <h5>Company Name<span>*</span></h5>
                        <input 
                            type='text'
                            required
                            // value={companyName} 
                            />
                        <h5>Email<span>*</span></h5>
                        <input 
                            type='email'
                            required
                            // value={email} 
                            />
                        <h5>Phone Number<span>*</span></h5>
                        <input 
                            type='text'
                            required
                            // value={phoneNumber} 
                            />
                        <h5>Message<span>*</span></h5>
                        <textarea
                            type='textarea'
                            placeholder='Please tell us what you need, we will send you a quotation..'
                            required
                            // maxlength="50000"
                            // value={message} 
                            >
                        </textarea> 
                        <button className='form-btn'>
                            <input type="submit" />
                        </button>
                        
                            
                    </form>
                </div>

                
            </div>
        </div>
    )
}

export default QuotationForm
