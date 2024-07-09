import { useRecoilState } from "recoil";
import { categoryFilterAtom } from "../atom store/FitlerAtom";

const FilterVegNonVeg = () => {

    const [nonVegFilterVal, setNonVegFilterVal] = useRecoilState(categoryFilterAtom)
    console.log(nonVegFilterVal)


    return ( <div className="mt-[20px] cursor-pointer flex justify-center items-center py-2 px-4 rounded-[10px] playfair-display text-[20px] bg-[#D9D9D9] gap-x-5">
        <div onClick={() => {setNonVegFilterVal(prev => prev === "veg" ? ("any") : ("veg"))}} className=" flex gap-x-2 justify-center items-center">
            <span className="bg-green-500 self-center w-[15px] h-[15px] border-green-500 border text-green-500 rounded-full"></span>
            <span className={`text-[24px] self-center transition-all ${nonVegFilterVal === "veg" ? ("text-green-500 font-bold") : ("text-gray-700")} playfair-display`}>Veg</span>
        </div>
        <div className="border border-black h-[25px]"></div>
        <div onClick={() => {setNonVegFilterVal(prev => prev === "non veg" ? ("any") : ("non veg"))}} className="flex gap-x-2 justify-center items-center">
            <span className="bg-red-500 self-center w-[15px] h-[15px] border-red-500 border text-red-500 rounded-full"></span>
            <span className={`text-[24px] self-center transition-all ${nonVegFilterVal === "non veg" ? ("text-red-500 font-bold") : ("text-gray-700")} playfair-display`}>Non-Veg</span>
        </div>
    </div> );
}
 
export default FilterVegNonVeg;