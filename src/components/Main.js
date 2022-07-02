import React from 'react';
// video
import mainBg from '../assets/video.mp4'

const Main = () => {
    return (
        <div className='h-[100vh] w-full relative -z-10'>
            <video className='object-cover md:object-center w-full h-full' src={mainBg} autoPlay loop muted />
            <div className='w-full h-full absolute  top-0 left-0 flex flex-col justify-center items-center text-white px-5'>
                <h1 className='font-extrabold text-3xl sm:text-4xl'>Desentralized</h1>
                <h1 className='font-extrabold text-3xl sm:text-4xl'><span className='text-[#00d8ff]'>Trading</span> Protocol</h1>
                <p className='mt-5 flex items-center justify-center text-center'>Guarantifed liquidity trading for millions of users and top Ethereum applications</p>
                <div>
                    <button className="mr-2 py-2 px-5 w-36 rounded-3xl bg-gradient-to-r from-[#00d8ff] to-[#6a00ff] mt-5">use Web Hack</button>
                    <button className="ml-2 py-2 px-2 w-24 rounded-3xl border border-[#00d8ff] text-[#00d8ff] mt-5">FAQ</button>
                </div>
            </div>
            <div className='relative -top-40 flex items-center justify-center text-white'>
                    <p className='text-center font-extrabold text-xl'>Total volume Secured: $42,158.657,123.42</p>
            </div>
        </div>
    );
};

export default Main;