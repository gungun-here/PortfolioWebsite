import { useEffect } from "react";
import {Link} from "react-router-dom"

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {

    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <div className="bg-[#eee3d2] overflow-hidden">
            <div className="flex justify-center items-center" data-aos="fade-right">
                <div className="w-[50%] px-[10rem] py-[4rem]">
                    <img src="face2.png" className="shadow-2xl" />
                </div>

                <div className="w-[50%] py-[10rem]">
                    <div className="flex justify-center items-center">
                        <img className="h-[10rem] w-[20rem]" src="hellofinal.png" />
                    </div>
                    <div className="font-my text-justify px-[7rem]">
                        <p>My name is Gungun Sahni and I'm currently a final year student persuing a Bachelor's Degree in Computer Applications (BCA).
                            I'm looking forward to a flourishing career in Web Development.
                        </p>
                    </div>
                </div>
            </div>

            <Link to="/about"><div className="flex justify-center items-center" data-aos="fade-left">
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

                <div className="w-[50%] px-[10rem] py-[4rem]">
                    <img src="facenext2.png" className="shadow-2xl" />
                </div>
            </div></Link>

        </div>
    )
}