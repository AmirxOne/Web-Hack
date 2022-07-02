import React from 'react';
// image
import terminal from '../assets/terminal.png'

const SuperPowers = () => {
    return (
        <div className='w-full mt-10'>
            <div className='w-full px-5 md:px-0 max-w-[1240px] mx-auto bg-black flex flex-col md:flex-row items-center justify-center text-white py-10'>
                <div className='md:w-1/2 md:pl-10 flex flex-col items-center justify-center md:items-start'>
                    <h1 className='font-extrabold text-xl md:text-2xl lg:text-3xl'>Lorem ipsum dolor sit amet.</h1>
                    <p className='mt-5 text-base lg:text-lg font-light text-center md:text-left'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore libero <span className='text-[#00d8ff]'>veniam</span> porro <span className='text-[#00d8ff]'>voluptatem</span> odit qui quis culpa expedita odio beatae.
                    </p>
                </div>
                <div className='md:w-1/2 flex items-center justify-center md:justify-end md:pl-5 md:pr-20 mt-10 md:mt-0'>
                    <img className='w-80 shadow-2xl shadow-cyan-500/50 rounded-lg' src={terminal} alt="Terminal"/>
                </div>
            </div>
        </div>
    );
};

export default SuperPowers;