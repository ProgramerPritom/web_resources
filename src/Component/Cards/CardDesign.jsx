import React from 'react';
import TemplatesCard from './TemplatesCard';


const CardDesign = () => {
    return (
        <div className='grid grid-cols-1 gap-16 px-8 py-14 md:px-24 lg:grid-cols-2 xl:px-40'>
            <TemplatesCard></TemplatesCard>
        </div>
    );
};

export default CardDesign;