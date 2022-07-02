import React from 'react';

const CardAbout = ({data}) => {
    const {title,dis,Image} = data
    return (
        <div className='grid col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3 row-span-1 border border-white rounded-3xl px-5 py-10 text-white'>
            <div><span className='bg-[#00d8ff] w-14 h-14 flex rounded-full items-center justify-center text-black font-extrabold'>{Image}</span></div>
            <div className='mt-5 font-bold'>{title}</div>
            <div className='mt-5 font-light'>{dis}</div>
        </div>
    );
};

export default CardAbout;