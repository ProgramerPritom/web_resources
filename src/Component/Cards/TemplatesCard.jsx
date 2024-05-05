import React from 'react';
import Image from '../../assets/Priority.svg'
import { CiSaveDown2 } from "react-icons/ci";
import CourseContent from './CourseContent';
import InstructorPage from './InstructorPage';
import FastGrowComponent from './FastGrowComponent';

const TemplatesCard = () => {
    return (
        <div>
            <div>
            <h2 className='mb-4 text-2xl font-bold'>Templates and Course Files</h2>

            <div className='mb-2.5'>
                <div className="card w-full max-w-lg bg-base-100 shadow-lg p-0">
                    <div className="card-body flex-row justify-between items-center p-4">
                        <div className='flex justify-items-center items-center'>
                        <img src={Image} className='mr-3'></img>
                        <p className='font-medium text-base text-base'>Video</p>
                        </div>
                        <CiSaveDown2 />
                    </div>
                </div>
            </div>


            <div className="card w-full max-w-lg bg-base-100 shadow-lg p-0">
                <div className="card-body flex-row justify-between items-center p-4">
                    <div className='flex justify-items-center items-center'>
                    <img src={Image} className='mr-3'></img>
                    <p style={{width:'390px'}} className='font-medium text-base text-base'>7 SaaS Sales Techniques I Used to Help Grow Gong from $200k to $200M in ARR slide deck</p>
                    </div>
                    <CiSaveDown2 />
                </div>
            </div>
            </div>
            <CourseContent></CourseContent>
            <InstructorPage></InstructorPage>
            <FastGrowComponent></FastGrowComponent>
        </div>
    );
};

export default TemplatesCard;