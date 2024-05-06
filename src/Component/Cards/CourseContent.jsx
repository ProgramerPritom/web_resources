import React, { useState } from 'react';

const CourseContent = ({resourceData}) => {
    const [isOpen, setIsOpen] = useState(true);
    const cards = [1, 2];
    return (
        <div className='mb-4 mt-14'>
            <h2 className='mb-4 text-2xl font-bold'>Course Content</h2>

            {resourceData && cards.map((data, index) => (
                <div key={index} className='mb-2'>
                    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-white" >
                        <input type="checkbox"/>
                        <div className="collapse-title text-lg font-medium">
                            {resourceData[0][`course_content_title${data}`]}
                        </div>
                        <div className="collapse-content">
                            <p>{resourceData[0][`course_content_sub_title${data}`]}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CourseContent;