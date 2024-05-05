import React from 'react';
import Image1 from '../../assets/Headshot1.png'
import Image from '../../assets/Priority.svg'

const InstructorPage = () => {
    const instructorinfo = {name: "Chris Orlob",title:'CEO of pclub.io',summary: 'Chris is a serial sales tech entrepreneur. He grew Gong from $200k to $200M ARR and a $7.2B valuation in five years. He is an entrepreneur turned SaaS executive turned entrepreneur again. He is currently on a mission to build an ecosystem of companies that collectively make the biggest contribution to global sales success of any company on the planet by changing how sales organizations Hire, Ramp, Develop, and Retain their salespeople.'}
    return (
        <div>
            <h2 className='mb-4 mt-14 text-2xl font-bold'>Instructor</h2>
            <div>
                <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className='flex justify-between'>
                        <div className='h-24 w-24'>
                        <img style={{width:'100%',borderRadius:'50%'}} src={Image1} alt="" />
                        </div>
                        <div className='flex flex-wrap justify-end gap-2'>
                            <p className='cursor-pointer text-center flex items-center justify-center appearance-none py-2 bg-white border border-[#E0E6EF] text-black text-sm leading-6 font-semibold rounded-md hover:bg-gray-100 ease-linear transition-all duration-150 h-10 px-6'>Linkedin</p>
                            <p className='cursor-pointer text-center flex items-center justify-center appearance-none py-2 px-5 bg-white border border-[#E0E6EF] text-black text-sm leading-6 font-semibold rounded-md h-10 hover:bg-gray-100 ease-linear transition-all duration-150'>Twitter</p>
                        </div>
                    </div>
                    <p className="mt-6 text-xl font-semibold leading-6">{instructorinfo.name}</p>
                    <div className='mt-2.5'>
                        <div className='flex items-center gap-3'>
                            <div className='h-8 w-8'>
                            <img src={Image} className='mr-3'></img>
                            </div>
                            <span className='text-base font-medium'>{instructorinfo.title}</span>
                        </div>
                        <p className='mt-3 text-justify'>
                            <span className='text-base font-normal text-black'>{instructorinfo.summary} </span>
                        </p>
                        
                    </div>
                </div>
                </div>
            </div>
            <div className='mt-5 grid grid-cols-[104px_104px] gap-y-2'></div>
            <button className='cursor-pointer text-center flex items-center justify-center appearance-none py-2 border text-sm leading-6 font-semibold rounded-md ease-linear transition-all duration-150 h-12 w-full border-blue bg-blue-800 px-6 text-white hover:border-blue hover:bg-blue hover:opacity-85'>Get an access</button>
        </div>
    );
};

export default InstructorPage;