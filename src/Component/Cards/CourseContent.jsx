import React, { useState } from 'react';

const CourseContent = () => {
    const [isOpen, setIsOpen] = useState(true);
    const courseContent = [
        {
            title : 'Growth',
            Subtitle : "48% B2B tech Sales People hit Their Numbers",
            isOpen: true
        },
        {
            title : '4 Questions',
            Subtitle : "Product 4: Find the compelling event and drive timeline against it",
            isOpen: false
        }
    ]
    
    return (
        <div className='mb-4 mt-14'>
            <h2 className='mb-4 text-2xl font-bold'>Course Content</h2>

            {courseContent.length > 0 && courseContent.map((data, index) => (
                <div key={index} className='mb-2'>
                    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-white" >
                        <input type="checkbox"/>
                        <div className="collapse-title text-lg font-medium">
                            {data.title}
                        </div>
                        <div className="collapse-content">
                            <p>{data.Subtitle}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CourseContent;