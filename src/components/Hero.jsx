import { useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { FaBiking, FaPeopleCarry, FaPlaneSlash, FaUsers } from "react-icons/fa";
import { IoMdOptions } from "react-icons/io";
import { LiaWarehouseSolid} from "react-icons/lia";
import { MdOutlineParagliding, MdSearch } from "react-icons/md";
import { RiPlanetLine } from "react-icons/ri";
import { TbActivityHeartbeat, TbBeach } from "react-icons/tb";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Hero() {
    const responsives = {
        superLargeDesktop: {
        breakpoint:{max: 4000, min: 3000},
        items: 5,
        },
        desktop: {
        breakpoint:{ max: 3000, min: 1024 },
        items: 5,},
        tablet: {
        breakpoint:{ max: 1024, min: 464 },
        items: 3,},
        mobile: {
        breakpoint:{ max: 464, min: 0 },
        items: 1,}
    };
    const type = [
        { title: "Adventure", icon: <FaPlaneSlash /> },
        { title: "Discovery", icon: <RiPlanetLine /> },
        { title: "Biking", icon: <FaBiking /> },
        { title: "Beach", icon: <TbBeach /> },
        { title: "House", icon: <LiaWarehouseSolid /> },
        { title: "Calm", icon: <TbActivityHeartbeat /> },
    ];
    const [currentslide, setCurretslide] = useState(0);
    return (
        <div>
           <section className="relative bg-black lg:h-[80vh]" data-aos="fade-down" data-aos-delay="300" data-aos-duration="3000">
            <img src="./src/assets/fuji.jpg" alt="slider1" className="absolute inset-0 h-full w-full object-cover " />
                <div className="flex flex-col justify-center items-center relative z-10 lg:h-full h-screen  max-w-[1024px] px-6 lg:pt=0 pt-32 mx-auto">
                    <span className="pt-4 lg:text-3xl mt-0 text-3xl text-greeen text-center font-bold relative">
                        Where would You Like To Go?
                        <div className="bg-orange text-white text-lg -left-4 px-4 py-1 w-fit absolute -top-4 z-4 -rotate-12">
                            Let&apos;s Explore!</div>
                    </span>
                    <p className="  text-white text-center font-bold text-2xl my-2">Checkout Beautiful Places Around The world 🛩️✈️.</p>
                    <div className="bg-white p-6 rounded-lg lg:flex items-center justify-between w-full">
                        <div className="flex items-center w-full lg:border-r border-b py-0 pr-2 mr-4">
                            <MdOutlineParagliding className="text-green text-3xl mr-2" />
                            <div className="flex flex-col w-full">
                                <p className="text-beige-600 text-sm">Location</p>
                                <select className="focus:outline-none">
                                    <option value="">Locations</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex items-center w-full lg:border-r border-b py-0 pr-4 mr-4">
                            <FaPeopleCarry className="text-green text-3xl mr-2"/>
                            <div className="flex flex-col w-full">
                                <p className="text-beige-600 text-sm">Type  </p>
                                <select className="focus:outline-none">
                                    <option value="">Booking Type</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex items-center w-full lg:border-r border-b py-0 pr-4 mr-4">
                           <AiOutlineCalendar className="text-green text-3xl mr-2"/>
                            <div className="flex flex-col w-full">
                                <p className="text-beige-600 text-sm">Date from  </p>
                                <input type="date" className="focus:outline-none" />
                            </div>
                        </div>
                        
                        <div className="flex items-center w-full lg:border-r border-b py-2 pr-4 mr-4">
                           <FaUsers className="text-green text-3xl mr-2" />
                            
                            <div className="flex flex-col w-full">
                                <p className="text-beige-600 text-sm">Guests</p>
                                <input type="number" min='0' className=" w-full focus:outline-none" />
                            </div>
                        </div>
                        <div className="flex items-center mr-4 lg:mt-0 mt-0">
                            <IoMdOptions className="lg:block hidden text-green text-3xl mr-2"/>
                            <button className="bg-orange text-white flex items-center justify-center gap-4 px-4 outline-none border-none rounded-lg font-semibold text-sm w-full ">
                                <MdSearch className="bg-orange" size={20}/>Search
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center mt-0 my-8">
                        <img src="./src/assets/arrow.png" className="w-16 my-2 mr-2 animate-bounceArrow" alt="Arrow" /> {/* Arrow size adjusted */}
                        <p className="text-beige font-semibold lg:text-3xl text-xl lg:py-4 py-4">Or Browse the Selected Type</p>
                    </div>
                </div>
            </section>
            <section className="bg-beige bg-[url('/src/assets/nature.jpg')]">
                <div className="relative z-10 max-w-[1320px] px-6 mx-auto mt-12">
                    <Carousel 
                        responsive={responsives}
                        infinite
                        autoPlay={true}
                        itemClass="px-2"
                        beforeChange={(nextSlide) => setCurretslide(nextSlide) }>
        {type.map((item, index) => (    
            <div key={index}
                className="group">
                <div className={`cursor-pointer p-2 rounded-lg flex flex-col justify-center items-start gap-4 ${currentslide % type.length === index
                ? 'bg-green text-white'
                    : 'bg-white text-green group-hover:bg-greeen group-hover:text-beige '}`}>
                     <p className={`text-md ${currentslide % type.length === index
               ? 'bg-green text-white'
                : ' text-green group-hover:text-beige '} font-bold`}>
                        {item.title}</p>
                <span className={`text-3xl ${currentslide % type.length === index
                ? 'bg-green text-white'
                : ' text-green group-hover:text-beige '}`}>{item.icon}</span>
               
                <p className={`${currentslide % type.length === index
                ? 'bg-green text-white'
                : ' text-green group-hover:text-beige '} `}>This is the city of ...</p>
                </div>
                </div>
        ))}
    </Carousel>
                </div>

</section>
        </div>
    )
}
export default Hero;