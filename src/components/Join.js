import React,{useState} from 'react';
//image
import bgJoin from '../assets/subscribe.jpg'

const Join = () => {

    const [check, setCheck] = useState(false);

    const [value, setValue] = useState("");

    const chengeHandler = (event) => {
        setValue(event.target.value);
        setCheck(event.target.checked);
    }

    return (
        <div className='w-full mt-20'>
            <div className='max-w-[1240px] mx-auto text-white p-5 flex flex-col items-center relative'>
                <div className='w-full object-cover flex items-center justify-center '>
                    <img className='w-3/3 md:w-2/3 object-fill' src={bgJoin} alt="bgJoin"/>
                </div>

                <div className='flex flex-col items-center absolute top-1/3 left-0 right-0 mx-auto'>
                    <h1 className='text-lg sm:text-2xl md:text-3xl font-extrabold'>Join our Web Hack Community</h1>
                    <div className='flex items-center justify-center gap-x-3 mt-10'>
                        <input value={value} onChange={chengeHandler} className='px-5 w-44 h-9 rounded-3xl text-black outline-none' placeholder='Enter Your Email' type="text"/>
                        <button className="py-2 px-3 w-20 rounded-3xl bg-gradient-to-r from-[#00d8ff] to-[#6a00ff]">Sign UP</button>
                    </div>
                    <label className='mt-5 flex items-center'>
                        <input value={check} onChange={chengeHandler} type="checkbox"/>
                        <span className='text-xs ml-2'>Yes, I agree to recevie email</span>
                    </label>
                </div>
                

            </div>
        </div>
    );
};

export default Join;