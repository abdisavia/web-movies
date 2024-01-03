"use client"
import { IconContext } from "react-icons";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";


function Search(props){
    const {placeholder} = props;
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        const searchInput = document.getElementById("searchInput")
        e.preventDefault();
        console.log("Pencarian : "+ searchTerm);
        searchInput.value="";
        setSearchTerm("");
    }

    return(
        <form className="relative flex items-center" onSubmit={handleSearch}>
            <IconContext.Provider value= {{ className:"absolute left-2 text-slate-500", size:1.5+"rem" }}>
                <CiSearch/>
            </IconContext.Provider>
            <input 
            type="text"
            id="searchInput"
            placeholder={placeholder} 
            onChange={(e) => {setSearchTerm(e.target.value)}}
            className="w-96 h-10 ps-8 rounded-full bg-white focus:outline-none focus:ring focus:ring-blue-400"/>
            <button type="submit" className="hidden"></button>
        </form>
    )
};

export default Search;