import SideBar from "@/components/Fragments/SideBar"
import Header from "@/components/Fragments/Header"


function MovieLayout(props){
    const {children} = props;
    return(
    <div className='w-full h-screen grid grid-cols-5'>
        <div className="col-span-1">
            <SideBar/>
        </div>
        <div className="col-span-4 relative h-screen overflow-y-auto">
            <Header/>
            {children}
        </div>
    </div>
    )
};

export default MovieLayout;