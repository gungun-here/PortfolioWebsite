import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { Carousel } from "flowbite-react";
import { Link } from "react-router-dom";
  AOS.init();
  
export default function Home() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [showText, setShowText] = useState(true); // State to control visibility of the "Scroll to Explore More!" text
    const [showNavbar, setNavbar] = useState(false);

    const handleScroll = () => {
        if (window.scrollY) {
            setShowText(false); // Hide text after scrolling
        } else {
            setShowText(true); // Show text if we're at the top
        }
    };

    // Add event listener on mount and cleanup on unmount
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="bg-[#eee3d2] overflow-hidden font-my">
            <div className="flex justify-between items-center bg h-[35.8rem] px-[5rem]" data-aos="fade-down">
                <div className="relative hover:scale-110 cursor-pointer">
                    <img className="h-[40%] w-[80%] scale-x-[-1] pb-[15rem] ml-[5rem]" src="dialogue.png" />
                    <div className="text-[4rem] pb-[20rem] w-[20%] font-bold absolute top-[3.8rem] right-[15rem]">I'm Gungun,</div>
                </div>
                <img src="portgirl2.png" />
                <div className="relative top-[8rem] hover:scale-105 cursor-pointer">
                    <img className="" src="dialogue.png" />
                    <div className="text-[4rem] font-bold absolute top-[5.5rem] left-[3.5rem]">A Web Developer!</div>
                </div>
            </div>

            {/* "Scroll to Explore More" text */}
            {showText && (
                <div className="text-4xl text-center py-[1.4rem] cursor-pointer">
                    Scroll to Explore More!
                </div>
            )}

            <Link to="/about" className="flex justify-center items-center bg-[#eee3d2] cursor-pointer" data-aos="fade-left">
                <div className="w-[50%] py-[10rem]">
                    <div className="flex justify-center items-center">
                        <img className="h-[6rem] w-[24rem] ml-[4rem]" src="apt2.png" />
                    </div>
                    <div className="grid grid-cols-3 justify-center items-center gap-10 pl-[8rem] py-[2rem]">
                        <img className="h-[6rem] w-[6rem]" src="react2.png" />
                        <img className="h-[6rem] w-[5rem] ml-[0.5rem]" src="js2.png" />
                        <img className="h-[6rem] w-[8rem]" src="tail2.png" />
                        <img className="h-[6.5rem] w-[4.5rem]" src="css2.png" />
                        <img className="h-[6rem] w-[6rem]" src="html52.png" />
                        <img className="h-[5rem] w-[9rem]" src="php2.png" />
                    </div>
                </div>

                <div className="w-[50%] flex items-center px-[10rem] gap-4">
                    <img src="facenext2.png" className="shadow-2xl" />
                    <div className="hover:text-transparent hover:bg-clip-text hover:text-blue-500">
                        <IoArrowForwardCircleOutline size="3rem" />
                    </div>
                </div>
            </Link>
        </div>
    );
}
