/* eslint-disable react/prop-types */
import { IoCheckmarkCircle } from "react-icons/io5";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar,buildStyles } from "react-circular-progressbar";

function Popular() {
    const categorie = [
        { text: "Familly Camping", tilt: "-rotate-6" },
        { text: "Friend-Camping", tilt: "-rotate-0" },
        { text: "Fishing", tilt: "-rotate-6" },
        { text: "Climbing", tilt: "-rotate-0" },
        { text: "Mountain Biking", tilt: "-rotate-6" },
        { text: "Luxury Cabin", tilt: "-rotate-0" },
        { text: "Barbeccue party", tilt: "-rotate-6" },
    ];
    function Section({ title, text, children, image, reverse }) {
        return (
            <div className="max-w-[1320px] mx-auto mt-12 px-3">
                <div className={`lg:flex gap-8 ${reverse ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className="lg:w-1/2">
                        <h6 className="text-green bg-white w-fit rounded-md px-12 py-2 font-bold">{title}</h6>
                        <h3 className="lg:text-4xl text-3xl font-bold pb-8 leading-tight">{text}</h3>
                        <p className="text-gray-600">
                            Traveling around the beautiful country is enriching. Create unforgettable memories and experiences. Exploring brings joy.
                        </p>
                        <div className="flex flex-col mt-4">
                            {children}
                        </div>
                    </div>
                    <div className="lg:w-1/2 flex justify-end">
                        <img className="rounded-t-[60px] w-1/2 lg:w-4/5" src={image} alt="" />
                    </div>
                </div>
            </div>
        );
    }
    function Card({ text, tilt }) {
        return (
           < div className="flex-col mb-4 justify-content items-center">
            <div className={`flex  flex-rows gap-2 ml-2 items-center border rounded-lg cursor-pointer  transition-transform w-60 hover:scale-105 bg-gray border-none shadow-xl ${tilt} lg:gap-8 my-4 p-2`}>

                <IoCheckmarkCircle className="text-xl text-gren" />
                <span className=" font-bold text-gray-800 ">{text}</span>
            </div></div>
        );
    }
    function ProgresBar({ value, text }) {
       
        return (
        
            <div className=" flex flex-col items-center px-2">
                <div className="w-24">
                    <CircularProgressbar
                        value={value}
                        text={`${value}%`}
                        styles={buildStyles({
                            pathColor:"#9A7E6F",
                            textColor: "#000",
                            trailColor:"#B1D690", 
                            backgroundColor:"#54473F"
                        })} />
                </div>
                <p className="font-bold mt-2 ">{ text}</p>
        </div>);

        
    }
    return ( 
        <div>
            <Section
                image='./src/assets/japan.jpg'
                text="My traveling company offers unique adventures and unforgettable experiences."
                title='Welcome Home' >
            
                <div className="flex-col items-center">
                {categorie.map((cat) => (
    <Card key={cat.text} text={cat.text} tilt={cat.tilt} />
))}

                </div>
            </Section>
            <Section
                image='./src/assets/china.jpg'
                text="traveling with us and have a new soul and a diffrent vibes."
                title='We Are One'
            reverse>
           
                <div className="flex justify-center items-center bg-gray-100 my-12">
                    <div className="bg-white p-8 rounded-lg shadow-xl flex lg:flex-row flex-col items-center lg:gap-16 gap-4 justify-center w-full">
                    <ProgresBar value={70} text="Satisfied Clients" />
                        <ProgresBar value={90} text="Success rating" />
                     </div>

                </div>
        </Section>
        </div>
        
    )
} export default Popular;