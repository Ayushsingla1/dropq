const DishCard = ({dish}) => {

    const description = dish.description.slice(100) + "...";

    return ( 
        <div className="flex hover:scale-105 transition-all dish-card-top-div rounded-[10px] gap-x-5 w-[680px] bg-[#FFE4BE]">
            <div><img className="w-[250px] h-[200px] rounded-tl-[10px] rounded-bl-[10px] " src={dish.image} alt={dish.name}/></div>
            <div className="flex flex-col justify-between py-3 items-center gap-y-3 pr-2 w-7/12">
                <div className=" self-start inknut font-semibold text-[24px]">{dish.name}</div>
                <div className="playfair-display opacity-80">{description}</div>
                <button className=" self-end bg-[#3E362E] py-1 px-4 text-white playfair-display font-semibold rounded-[10px]">View Items</button>
            </div>
        </div>
     );
}
 
export default DishCard;