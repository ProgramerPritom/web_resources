import React, { useEffect } from 'react';

const Header = ({resourceData}) => {
    useEffect(() => {
        const handleScroll = () => {
            const card = document.querySelector('.sticky-card');
            const windowHeight = window.innerHeight;
            const scrollPos = window.scrollY;
            // const newTop = scrollPos > windowHeight ? scrollPos - windowHeight : 0;
            const newTop = Math.max(scrollPos - 100, 0);
            card.style.top = `${newTop}px`;
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className='w-full bg-blue-800 px-4 pb-14 pt-8 lg:px-8' style={{height:'450px'}}>
            <div className='mt-20 grid grid-cols-1 gap-16 px-0 md:px-16 lg:grid-cols-2 lg:gap-24 lg:px-24 xl:px-36'>
                <div>
                    <div className='w-fit'></div>
                    <h1 className='text-5xl font-bold leading-[48px] text-white'>{resourceData[0].title}</h1>
                    <p className='text-lg font-normal text-white mt-4'>{resourceData[0].sub_title}</p>
                    <div className='mt-12'>
                        <p className='mt-4 text-base font-normal leading-4 text-white'></p>
                    </div>
                    <div className='mt-12 flex flex-col gap-2 text-base font-normal text-white'>
                        <p className='text-xl'>
                        Created by: <span className='font-medium'>{resourceData[0].created_by}</span>
                        </p>
                        <p className='text-xl'>
                        Last updated: <span className='font-medium'>{resourceData[0].created_date}</span>
                        </p>
                    </div>
                </div>
                <div className='relative'>
                    <div className='sticky-card w-full rounded-xl lg:absolute lg:left-1/2 lg:max-w-[453px] lg:-translate-x-1/2' style={{ transition: 'top 1s ease 0s',top:'0px', boxShadow: 'rgba(83, 94, 128, 0.01) 0px 2.989px 4.815px 0px, rgba(83, 94, 128, 0.01) 0px 7.182px 11.571px 0px, rgba(83, 94, 128, 0.01) 0px 13.523px 21.788px 0px, rgba(83, 94, 128, 0.02) 0px 24.123px 38.865px 0px, rgba(83, 94, 128, 0.02) 0px 45.12px 72.693px 0px, rgba(83, 94, 128, 0.03) 0px 108px 174px 0px'}}>
                            <div className='flex flex-col justify-center bg-white p-[14px] shadow-md rounded'>
                                <div className='relative flex w-full flex-col justify-center rounded-xl bg-yellow-500 px-6 pb-[30px] pt-6'>
                                    <p className='text-lg font-semibold'>Sign up for Founderpath to get for free</p>
                                    <p className='mt-3 text-base font-normal'>Access over 1,084 courses, templates, and tactics for SaaS founders and leaders.</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-4 px-[34px] py-8 bg-white shadow-md rounded'>
                            <div className='grid grid-cols-2 gap-3'>
                                <label className='flex flex-col gap-2 text-sm font-semibold leading-6 text-gray-400'>First name
                                    <input id='first_name' style={{boxShadow:'0px 2px 2px 0px rgba(230, 230, 236, 0.15) inset'}} className='w-full rounded-md border border-gray-200 px-4 py-3 text-sm font-medium leading-6 text-gray-700 placeholder:text-gray-300' placeholder='e.g. Thomas'></input>
                                    </label>
                                    <label className='flex flex-col gap-2 text-sm font-semibold leading-6 text-gray-400'>Last name
                                    <input id='last_name' style={{boxShadow:'0px 2px 2px 0px rgba(230, 230, 236, 0.15) inset'}} className='w-full rounded-md border border-gray-200 px-4 py-3 text-sm font-medium leading-6 text-gray-700 placeholder:text-gray-300' placeholder='e.g. Doe'></input>
                                    </label>
                            </div>
                                <label className='flex flex-col gap-2 text-sm font-semibold leading-6 text-gray-400'>
                                Email address
                                <input id='email' style={{boxShadow:'0px 2px 2px 0px rgba(230, 230, 236, 0.15) inset'}} className='w-full rounded-md border border-gray-200 px-4 py-3 text-sm font-medium leading-6 text-gray-700 placeholder:text-gray-300' placeholder='e.g. hello@company.com'></input>
                                </label>
                                <button className='cursor-pointer text-center flex items-center justify-center appearance-none py-2 border text-sm leading-6 font-semibold rounded-md ease-linear transition-all duration-150 h-12 w-full border-blue bg-blue-800 px-6 text-white hover:border-blue hover:bg-blue hover:opacity-85'>Instantly Get For Free</button>
                            </div>
                            <div className='my-10 h-px w-full bg-gray-200'></div>
                    </div>
                </div>
                    
                
            </div>
        </div>
    );
};

export default Header;