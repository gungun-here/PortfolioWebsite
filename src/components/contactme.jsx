import Input from "./input"
import { useEffect } from "react";

export default function Contact() {

    useEffect(() => {
            window.scrollTo(0, 0);
        }, []);

    return (
        <div className="bg-[#eee3d2] h-full">
            <div className="relative" >
                <h1 className="text-white text-[20rem] font-bold flex justify-center items-center">Contact</h1>
            </div>
            <div className="absolute left-[40rem] top-[20rem]">
                <Input />
            </div>
            <div className="flex flex-col gap-4 w-[20rem] text-lg ml-[42%] mt-4">
                Leave a Comment
                <textarea rows={4} className="rounded-lg" name="comments" id="comments" placeholder="Type here..."></textarea>
            </div>
            <button type="submitForm" name="submitForm" class="ml-[57%] my-8 w-[10rem] h-[3rem] bg-black text-white rounded-full hover:bg-black">
                Submit
            </button>

        </div>
    )
}