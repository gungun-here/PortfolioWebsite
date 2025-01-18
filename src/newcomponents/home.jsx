import { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {

     useEffect(() => {
            AOS.init();
          }, [])

    return (
        <div>
            <div className="flex justify-between items-center bg h-[35.8rem] px-[5rem]" data-aos="fade-down">
                <div className="relative hover:scale-110 cursor-pointer"><img className="h-[40%] w-[80%] scale-x-[-1] pb-[15rem] ml-[5rem]" src="dialogue.png"></img><div className="text-[4rem] pb-[20rem] w-[20%] font-bold absolute top-[4rem] right-[15rem]">I'm Gungun,</div></div>
                <img src="portgirl2.png"></img>
                <div className="relative hover:scale-105 cursor-pointer"><img className="h-[60%] w-[100%] pt-[15rem]" src="dialogue.png "></img><div className="text-[4rem] pt-[10rem] font-bold absolute top-[11rem] left-[3.5rem]">A Web Developer!</div></div>
            </div>
        </div>
    )
}