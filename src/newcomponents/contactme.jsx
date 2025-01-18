import Input from "./input"

import Button from "./submitbtn"

export default function Contact()
{
    return(
        <div className="bg-[#eee3d2] h-screen">
            <div className="relative">
                <h1 className="text-white text-[20rem] font-bold flex justify-center items-center">Contact</h1>
            </div>
            <div className="absolute left-[40rem] top-[20rem]">
                <Input />
                <div className="pl-[12rem] py-[3rem]"><Button /></div>
            </div>
        </div>
    )
}