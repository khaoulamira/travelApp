import { useState } from "react";
import { BsPersonCircle } from 'react-icons/bs'; // Pour l'icône BsPersonCircle

import { MdClose } from "react-icons/md";

import { HiMenuAlt3 } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
function Header() {
 const [dropDown,setDropdown]=useState(false)   
    function showDropdown() {
        setDropdown(!dropDown);
  }
    
    
    return (
        <nav className="w-full h-24 flex flex-col justify-center items-center sticky top-0 z-50 bg-[#10231F]">
            <div className="container mx-auto lg:px-3 w-full">
                <div className="lg:w-full w-11/12 mx-auto h-full flex lg:justify-center items-center gap-4">
                    <div className=" flex flex-col gap-y-8">
                        <div className="flex items-center gap-x-2">
                            <img src="./src/assets/airplain.jpg" alt="logo.png" width={35} className="w-13 h-13 rounded-full"/>
                        </div>
                    </div>
                    <ul className="flex items-center xl-gap-12 gap-x-4 max-lg:hidden ">
                        <a href="#home" className="leading-normal no-underline text-white text-lg hover:text-green"> Home</a>
                        <a href="#tours" className="leading-normal no-underline text-white text-lg hover:text-green">Tours page</a>
                        <a href="#destination" className="leading-normal no-underline text-white text-lg hover:text-green">Destination</a>
                        <a href="#news" className="leading-normal no-underline text-white text-lg hover:text-green">Offre</a>
                        <a href="#page" className="leading-normal no-underline text-white text-lg hover:text-green">Page</a>
                        <a href="#contact" className="leading-normal no-underline text-white text-lg hover:text-green">Contact US</a>

                    </ul>
                    <div className="flex gap-4 max-lg:hidden w-40 justify-center">
                        <button className="rounded-full text-white w-10 h-10 flex items-center justify-center hover:text-green">
                            <BiSearch size={32} />
                          
                        </button>
                        <button className="rounded-full text-white w-10 h-10 flex items-center justify-center hover:text-green hover:text-orange"><BsPersonCircle size={24} />
                        </button>
                    </div>
                    {dropDown ? (<div className="lg:hidden text-2xl cursor-pointer text-beige" onClick={showDropdown}><MdClose /></div>) :
                        (<div className="lg:hidden text-2xl cursor-pointer text-beige" onClick={showDropdown}> <HiMenuAlt3/></div>)}
                </div>
                {dropDown && (
                    <div className="lg-hidden w-full fixed top-24 bg-white transition-all"> 
                        <div className="w-full flex flex-col items-baseline gap-4">
                            <ul className="w-full flex flex-col justify-center">
                            <a href="#home" className="px-6 h-10 flex items-center leading-normal no-underline text-orange text-lg hover:text-green"> Home</a>
                        <a href="#tours" className="px-6 h-10 flex items-center leading-normal no-underline text-orange text-lg hover:text-green">Tours page</a>
                        <a href="#destination" className="px-6 h-10 flex items-center leading-normal no-underline text-orange text-lg hover:text-green">Destination</a>
                        <a href="#news" className="px-6 h-10 flex items-center leading-normal no-underline text-orange text-lg hover:text-green">Offre</a>
                        <a href="#page" className="px-6 h-10 flex items-center leading-normal no-underline text-orange text-lg hover:text-green">Page</a>
                        <a href="#contact" className="px-6 h-10 flex items-center leading-normal no-underline text-orange text-lg hover:text-green">Contact US</a>

                    </ul></div> </div> 
                )}
          </div>  



</nav>

    )
}
export default Header;