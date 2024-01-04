import Search from "@/components/elements/Search"

function Header(props){
    return(
        <header className="sticky top-0 w-full z-30 h-16 bg-blue-600 flex justify-center items-center">
                <Search placeholder="Search"/>
        </header>
    )
};

export default Header