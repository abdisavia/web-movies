import Search from "@/components/elements/Search"

function Header(props){
    return(
        <header className="static w-full z-10 h-16 bg-blue-600 flex justify-center items-center">
            <Search placeholder="Search"/>
        </header>
    )
};

export default Header