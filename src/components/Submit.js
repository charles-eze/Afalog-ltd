import React from 'react';
import { Link } from 'react-router-dom';
import { BiArrowBack} from 'react-icons/bi';

const Submit = () => {
    return (
        <div className='bg-gray-900 grid place-items-center h-screen'
            style={{height: '100vh', width: '100vw', }}>
            <div className='bg-white px-5 py-6 rounded-lg'>
                <h1 className='text-xl font-bold mb-3 '>Thank You!</h1>
                <p className='text-base mb-5'>Your form submission has been received.</p>
                <Link className='flex items-center text-base font-semibold' to='/'><BiArrowBack/>
                <p className='ml-1.5'>Back to our site</p></Link>
            </div>
            
        </div>
    )
}

export default Submit
