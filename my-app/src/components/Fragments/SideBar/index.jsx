"use client"
import Links from "@/components/elements/Links";
import { IoIosArrowForward, IoMdFlame,PiFlowerTulipBold } from "react-icons/io";


function SideBar(){
    return(
        <aside className="relative z-20 top-0 h-full w-80 pt-16 bg-blue-600">
            <div className="border px-5 h-full bg-white">
                <h1 className="font-black text-xl py-2">Genres :</h1>
                <Links variant="GenreList"><p className="flex justify-between items-center"><span className="flex items-center"><IoMdFlame />Action</span> <IoIosArrowForward /></p></Links>
                <Links variant="GenreList"><p className="flex justify-between items-center"><span className="flex items-center"><PiFlowerTulipBold />Romance</span> <IoIosArrowForward /></p></Links>
                <hr className="border-b-1 border-blue-600"/>
            </div>
        </aside>
    )
};

export default SideBar;