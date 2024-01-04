import Image from "next/image"

function Card(props){
    const {ImageUrl, title, desc} = props;
    return(
        <div className='relative h-80 rounded-sm shadow-xl hover:translate-x-2 hover:translate-y-2'>
            <div className="w-full h-full absolute z-10 ">
                <Image 
                src={ImageUrl}
                alt={title}
                fill={true}
                className="w-full h-full static object-cover" />
            </div>
            <div className="left-0 bottom-0 px-2 py-5 w-full  text-balance absolute z-20 bg-gradient-to-t from-white ">
                <h1 className='text-lg font-bold'>{title}</h1>
                <p className=" text-sm text-ellipsis overflow-hidden">{desc}</p>
            </div>
        </div>
    )
};

export default Card;