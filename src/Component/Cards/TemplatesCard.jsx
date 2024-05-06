import React from 'react';
import Image from '../../assets/Priority.svg'
import { CiSaveDown2 } from "react-icons/ci";
import CourseContent from './CourseContent';
import InstructorPage from './InstructorPage';
import FastGrowComponent from './FastGrowComponent';

const TemplatesCard = ({resourceData}) => {
    const cards = [1, 2];
    
    return (
        <div>
            <div>
            <h2 className='mb-4 text-2xl font-bold'>Templates and Course Files</h2>



            {resourceData && cards.map((item, index) => (
                <div key={index} className='mb-2.5'>
                    <div className="card w-full max-w-lg bg-base-100 shadow-lg p-0">
                        <div className="card-body flex-row justify-between items-center p-4">
                            <div className='flex justify-items-center items-center'>
                                <img src={Image} className='mr-3' alt="Template file Picture"></img>
                                <p style={{width:'390px'}} className='font-medium text-base text-base'>{resourceData[0][`template${item}c`]}</p>
                            </div>
                            <CiSaveDown2 />
                        </div>
                    </div>
                </div>
            ))}

            </div>
            <CourseContent resourceData={resourceData}></CourseContent>
            <InstructorPage resourceData={resourceData}></InstructorPage>
            <FastGrowComponent></FastGrowComponent>
        </div>
    );
};

export default TemplatesCard;