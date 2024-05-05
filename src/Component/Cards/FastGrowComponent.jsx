import React from 'react';
import Brands from '../../assets/brands.webp'

const FastGrowComponent = () => {
    return (
        <div className='mt-6 rounded-lg border border-[#E2E6EF] bg-white px-5 py-4'>
            <p className='w-full text-base font-semibold md:w-2/3'>Fast growing SaaS companies offer this course to their employees</p>
            <p className='mt-2 text-base font-normal'>Excel file and training we used to launch our profit sharing plan at our $3m ARR SaaS company.</p>
            <div className='mb-4 mt-8 px-2'>
                <img src={Brands}></img>
            </div>
        </div>
    );
};

export default FastGrowComponent;