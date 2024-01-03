import {Montserrat} from "next/font/google";

const montserrat = Montserrat({
    subsets: ["latin"]
})

function Links(props) {
    const {linkTo, variant="dark", children} = props;
    function clsx (variant){
        let cls= ``;
        if(variant == "Brand"){
            cls = cls + "text-black hover:border-b-2 hover:border-blue-500 font-bold cursor-pointer " + montserrat.className
        }else if(variant == "NavLinks"){
            cls = cls + "text-black hover:border-b-2 hover:border-blue-500 cursor-pointer"
        }else if(variant == "GenreList"){
            cls += "text-black border-b border-transparent cursor-pointer w-full block my-2 py-1 hover:border-b hover:border-blue-500 "
        }
        return cls
    }
    return(
        <a href={linkTo} className={clsx(variant)}>{children}</a>
    )
};

export default Links;