import React from 'react';
// video
import mainBg from '../assets/video.mp4'

const Main = () => {
    return (
        <div className='h-[100vh] w-full relative'>
            <video className=' w-full h-full' src={mainBg} autoPlay loop muted />
            <div className='w-full h-full absolute top-0 left-0 flex justify-center items-center'>
                <h1>Desentralized</h1>
                <h1><span>Trading</span>Protocol</h1>
            </div>
        </div>
    );
};

export default Main;