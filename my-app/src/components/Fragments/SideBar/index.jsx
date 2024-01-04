"use client"
import Links from "@/components/elements/Links";
import { IoIosArrowForward } from "react-icons/io";



function SideBar(){
    return(
        <aside className="relative z-40 top-0 h-full w-full pt-16 bg-blue-600 shadow-xl">
            <div className="border px-5 h-full bg-white">
                <h1 className="font-black text-red-600 text-xl py-2 text-center">Genres :</h1>
                <Links variant="GenreList"><p className="flex justify-between items-center"><span className="flex items-center">Action</span> <IoIosArrowForward /></p></Links>
                <Links variant="GenreList"><p className="flex justify-between items-center"><span className="flex items-center">Romance</span> <IoIosArrowForward /></p></Links>
                <Links variant="GenreList"><p className="flex justify-between items-center"><span className="flex items-center">Family</span> <IoIosArrowForward /></p></Links>
                <Links variant="GenreList"><p className="flex justify-between items-center"><span className="flex items-center">Horror</span> <IoIosArrowForward /></p></Links>
                <Links variant="GenreList"><p className="flex justify-between items-center"><span className="flex items-center">Thriller</span> <IoIosArrowForward /></p></Links>
                <hr className="border-b-1 border-red-500"/>
            </div>
        </aside>
    )
};

export default SideBar;