import { useState } from "react";

const FilterMenu = ({restaurant}) => {
    const [searchFor, setSearchFor] = useState("");
    const changeHandeler = (e) => {
        setSearchFor(e.target.value)
    }
    const clickHandeler = (e) => {
        e.preventDefault();
        //get req to backend
        console.log(searchFor)
    }

    //will use "restaurant" prop instead of "Fuffa ji foods"

    return (    
        <div className="flex items-center gap-x-2">
            <div className="podkova bg-none text-white font-semibold text-[30px]">Fuffa ji foods</div>
            <input className="rounded-[10px] text-[24px] bg-[#3E362E] py-2 px-4 w-[300px] text-[#FFE4BE] playfair-display placeholder:playfair-display placeholder:text-[#FFE4BE] placeholder:opacity-60" type="text" placeholder="bhole chature" onChange={changeHandeler}/>
            <button className="rounded-[10px] playfair-display text-[24px] bg-[#3E362E] py-2 px-4 text-[#FFE4BE]" onClick={clickHandeler}>Search</button>
        </div>
    );
}
 
export default FilterMenu;