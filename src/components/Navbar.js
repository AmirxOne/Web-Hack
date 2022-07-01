import React,{useState} from "react";

const data = [
    {
        id:1,
        title:"Platform",
    },
    {
        id:2,
        title:"Devlopers",
    },
    {
        id:3,
        title:"Community",
    },
    {
        id:4,
        title:"About",
    }
    
]

const Navbar = () => {

const [menu, setMenu] = useState(false);

const clickHandler = () => {
    setMenu(!menu);
}

  return (
    <div className="h-[90px] w-full bg-black z-50">
      <div className="max-w-[1240px] mx-auto px-4 h-full flex items-center justify-between ">
        <div className="text-[#00d8ff] font-extrabold text-2xl">WEB HACK</div>
        <div className="text-white">
            <div className="md:flex hidden">
                <ul className="flex items-center mr-4">
                    {data.map(item => <li className="p-3 " key={item.id}>{item.title}</li>)}
                </ul>
                <button className="py-3 px-5 rounded-3xl bg-gradient-to-r from-[#00d8ff] to-[#6a00ff]">use Web Hack</button>
            </div>
            <div onClick={clickHandler} className="md:hidden">
            {
                menu ? 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-all duration-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg> :
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-all duration-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            }
            </div>
            </div>
        </div>
        <div className={menu ? "a" : "a -left-[1000px]"}>
                <ul className="flex w-44 flex-col items-center">
                    {data.map(item => <li className="p-3 w-full flex items-center justify-center rounded-3xl mt-3" key={item.id}>{item.title}</li>)}
                </ul>
                <button className="py-3 px-5 w-44 rounded-3xl bg-gradient-to-r from-[#00d8ff] to-[#6a00ff] mt-5">use Web Hack</button>
        </div>
    </div>
  );
};

export default Navbar;
