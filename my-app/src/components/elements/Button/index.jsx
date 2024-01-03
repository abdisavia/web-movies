function Buttons(props) {
    const{children, variant, type="submit"} = props
    
    const clsx = (variant) => {
        let cls = "rounded-sm border ";
        if(variant == "Login"){
            cls += "border-blue-500 text-blue-500 py-1 px-5  hover:border-none hover:bg-blue-500 hover:text-white"
        }
        return cls
    }

    return(
        <button type="" className={clsx(variant)}>{children}</button>
    )
};

export default Buttons;