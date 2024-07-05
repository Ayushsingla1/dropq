import { Link } from "react-router-dom";

const Cards = ({item})=>{
    // console.log(item)
    return <div className="hover:scale-105 transition-all">
        <div className="flex flex-col bg-[#3E362E] w-72 l-10 text-center rounded-lg">
            <img src={item.image} alt = "Error" className="w-72 h-48"></img>
            <div className="text-[#FFDDAE] leading-6">
            <div>{item.name} , {item.location}</div>
            <div>{item.city}</div>
            </div>
            <div className="text-justify px-2 leading-5 mb-2 text-white font-thin">{item.description}</div>
            <Link className="text-[#FFE4BE] p-1 font-thin self-end bg-[#AE896D] mr-2 mb-2 rounded-md " to={`/Restro/${item.id}`}>View Restro</Link>
        </div>
    </div>
}

export default Cards;