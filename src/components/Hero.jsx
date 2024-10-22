/* eslint-disable react/prop-types */
import { useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { FaBiking, FaPeopleCarry, FaPlaneSlash, FaUsers } from "react-icons/fa";
import { IoMdOptions } from "react-icons/io";
import { LiaWarehouseSolid } from "react-icons/lia";
import { IoArrowForward} from "react-icons/io5";
import { MdOutlineParagliding, MdSearch } from "react-icons/md";
import { RiPlanetLine } from "react-icons/ri";
import { TbActivityHeartbeat, TbBeach } from "react-icons/tb";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Hero() {
    const responsives = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        }
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
    const handleAfterChange = (_, state) => {
        setCurretslide(state.currentslide);
        
    }
    function Explore({ image, country }) {
        return (
            <div className="relative group overflow-hidden group-rounded-[10px] shadow-lg">
                <img className="w-full h-[350px] object-cover  rounded-[10px] transition-transform duration-200 ease-in-out group-hover:scale-125" src={image} alt="image explore" />
                <span className="bg-orange text-beige rounded-lg text-xs absolute top-5 right-5 uppercase font-bold leading-8 whitespace-pre">3 Tours</span>
                <div className="absolute bottom-0 w-full bg-greeen opacity-70  py-5 flex flec-col items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:bg-opacity-100">
                    <p className="text-green text-xl font-bold flex flex-col ">Travel to
                        <span className="text-white group-hover:text-greeen text-3xl">{country}</span>
                    </p>
                    <div className="absolute -top-5 right-5 opacity-40transition-opacity duration-400 group-hover:opacity-0">
                        <button className="bg-orange text-white rounded-full p-2">
                            <IoArrowForward className="text-xl" />
                            
                        </button>
                    </div>
                </div>
            </div>
        )
        
    }
    return (
        <div>
           <section className="relative bg-black lg:h-[80vh]" data-aos="fade-down" data-aos-delay="200" data-aos-duration="3000">
            <img src="./src/assets/fuji.jpg" alt="slider1" className="absolute inset-0 h-full w-full object-cover " />
                <div className="flex flex-col justify-center items-center relative z-10 lg:h-full h-screen  max-w-[1024px] px-6 lg:pt-16 pt-32 mx-auto">
                    <span className="lg:pt-4 pt-0 lg:text-3xl mt-0 text-2xl text-greeen text-center font-bold relative">
                        Where would You Like To Go?
                        <div className="bg-orange text-white text-lg -left-4 px-4 py-1 w-fit absolute -top-8 z-4 -rotate-12">
                            Let&apos;s Explore!</div>
                    </span>
                    <p className="  text-white text-center font-bold text-1xl my-2">Checkout Beautiful Places Around The world 🛩️✈️.</p>
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
                        <div className="flex items-center w-full lg:border-r border-b py-0 pr-2 mr-4">
                            <FaPeopleCarry className="text-green text-3xl mr-2"/>
                            <div className="flex flex-col w-full">
                                <p className="text-beige-600 text-sm">Type  </p>
                                <select className="focus:outline-none">
                                    <option value="">Booking Type</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex items-center w-full lg:border-r border-b py-0 pr-2 mr-4">
                           <AiOutlineCalendar className="text-green text-3xl mr-2"/>
                            <div className="flex flex-col w-full">
                                <p className="text-beige-600 text-sm">Date from  </p>
                                <input type="date" className="focus:outline-none" />
                            </div>
                        </div>
                        
                        <div className="flex items-center w-full lg:border-r border-b py-2 pr-2 mr-4">
                           <FaUsers className="text-green text-3xl mr-2" />
                            
                            <div className="flex flex-col w-full">
                                <p className="text-beige-600 text-sm">Guests</p>
                                <input type="number" min='0' className=" w-full focus:outline-none" />
                            </div>
                        </div>
                        <div className="flex items-center mr-4 lg:mt-0 mt-0">
                            <IoMdOptions className="lg:block hidden text-green text-3xl mr-2"/>
                            <button className="bg-orange text-white flex items-center justify-center gap-4 lg:px-4 px-2 outline-none pr-2 border-none rounded-lg font-semibold text-sm w-full ">
                                <MdSearch className="bg-orange" size={20}/>Search
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center mt-0 my-8">
                        <img src="./src/assets/arrow.png" className="lg:w-16 w-8 my-2 mr-2 animate-bounceArrow" alt="Arrow" /> {/* Arrow size adjusted */}
                        <p className="text-white font-semibold lg:text-3xl text-xl lg:py-8 py-4">Or Browse the Selected Type</p>
                    </div>
                </div>
            </section>
            <section className="bg-beige bg-[url('/src/assets/nature.jpg')]">
                <div className="relative z-10 max-w-[1320px] px-2 mx-auto mt-0">
                    <Carousel 
                        responsive={responsives}
                        infinite
                        afterChange={handleAfterChange}
                        autoPlay={true}
                        itemClass="px-3"
                        beforeChange={(nextSlide) => setCurretslide(nextSlide) }>
        {type.map((item, index) => (    
            <div key={index}
                className="group">
                <div className={`cursor-pointer p-3 rounded-lg flex flex-col justify-center items-start gap-2 ${currentslide % type.length === index
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
                <div className="max-w-[1320px] mx-auto pt-24">
                    <div className="py-16">
                        <div className="flex flex-col items-center">
                            <div className="relative w-fit px-8 py-2 flex items-center justify-center">
                                <span className="bg-green rounded-md opacity-15 absolute w-full h-full z-10">
                                  <h6> Popular Activities ✨</h6> 
                                </span>
                            </div>
                            <h4 className=" z-10 lg:text-5xl text-3xl font-bold pb-6 text-center py-4">Explore Adventure </h4>
                        </div>
                        <div className="py-8">
                        <Carousel 
                        responsive={responsives}
                        infinite
                        autoPlay={true}
                        itemClass="px-2 pb-6">
                                <Explore country="United Kingdom" image='./src/assets/uk.jpg' />
                                <Explore country="Japan" image='./src/assets/japan.jpg' />       
                                <Explore country="China" image='./src/assets/china.jpg' />       
                                <Explore country="NetherLand" image='./src/assets/netherland.jpg' />       
                                <Explore country="Korea" image='./src/assets/korea.jpg' />       
                                <Explore country="Spain" image='./src/assets/spain.jpg' />       
                        </Carousel>
                        </div>
                    </div>
    </div>

</section>
        </div>
    )
}
export default Hero;