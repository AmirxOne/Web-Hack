import React from 'react';
// omponent
import CardAbout from './CardAbout';

const data = [
    {
        id:1,
        title:"Lorem ipsum dolor sit.",
        dis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci a officia nostrum laboriosam fuga, molestiae commodi suscipit praesentium qui hic ipsum dolor sit amet, consectetur adipisicing elit Adipisci a officia nostrum laboriosam fuga, molestiae commodi suscipit.",
        Image:"logo",

    },
    {
        id:2,
        title:"Lorem ipsum dolor sit.",
        dis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci a officia nostrum laboriosam fuga, molestiae commodi suscipit praesentium qui hic ipsum dolor sit amet, consectetur adipisicing elit Adipisci a officia nostrum laboriosam fuga, molestiae commodi suscipit.",
        Image:"logo",

    },
    {
        id:3,
        title:"Lorem ipsum dolor sit.",
        dis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci a officia nostrum laboriosam fuga, molestiae commodi suscipit praesentium qui hic ipsum dolor sit amet, consectetur adipisicing elit Adipisci a officia nostrum laboriosam fuga, molestiae commodi suscipit.",
        Image:"logo",

    },
    {
        id:4,
        title:"Lorem ipsum dolor sit.",
        dis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci a officia nostrum laboriosam fuga, molestiae commodi suscipit praesentium qui hic ipsum dolor sit amet, consectetur adipisicing elit Adipisci a officia nostrum laboriosam fuga, molestiae commodi suscipit.",
        Image:"logo",

    },
]

const About = () => {
    return (
        <div className='w-full h-[100vh]'>
            <div className='max-w-[1240px] bg-black w-full h-full mx-auto flex flex-col'>
                <div className='text-white flex flex-col justify-center items-center px-5'>
                    <h1 className='font-extrabold text-lg sm:text-2xl md:text-4xl text-center'>A Growing Protocol Ecosystem</h1>
                    <p className='mt-5 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et atque sequi consequatur iusto. Quam vitae cum nihil nemo aut numquam.</p>
                </div>
                <div className='grid grid-cols-12 grid-rows-1 gap-5 mt-20 px-5'>
                    {
                        data.map(item => <CardAbout key={item.id} data={item}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default About;