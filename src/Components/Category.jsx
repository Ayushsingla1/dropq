const Category = ({category}) => {
    return ( 
        <div className="flex gap-x-2 h-[60px]">
            {
                category === "veg" ?
                (<span className="bg-green-500 self-center w-[15px] h-[15px] border-green-500 border text-green-500 rounded-full"></span>) :
                (<span className="bg-red-500 self-center w-[15px] h-[15px] border-red-500 border text-red-500 rounded-full">.</span>)
            }
            <span className={`text-[24px] self-center ${category === "veg" ? "text-green-500" : "text-red-500"} playfair-display`}>
                {category}
            </span>
        </div>
     );
}
 
export default Category;