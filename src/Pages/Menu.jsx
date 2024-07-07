import { useParams } from "react-router-dom";
import SideNav from "../Components/SideNav";
import { data3 } from "../assets/data3";
// import { data2 } from "../assets/data2";
import FilterMenu from "../Components/FilterMenu";
import DishCard from '../Components/DishCard'
import { useState } from "react";
import FilterVegNonVeg from "../Components/FilterVegNonVeg";

const Menu = ()=>{
    const {id, menuid} = useParams()
    console.log(id, menuid);
    const [dishes, ] = useState(data3)

    return <div className="bg-[#AC8968] w-full flex">
        <div className="max-w-[600px] w-3/12">
            <SideNav/>
        </div>
        <div className="flex flex-col items-center w-full">
            <div className="text-[40px] mt-[16px] inknut font-semibold">Item</div>
            <div>
                <FilterMenu id={id} />
            </div>
            <div>
                <FilterVegNonVeg />
            </div>
            <div className="flex mt-[35px] flex-wrap w-full gap-x-[100px] gap-y-10 justify-center items-center">
                {
                    dishes.map(dish => {
                        return (
                            <DishCard key={dish.id} dish={dish} id={id} menuid={menuid}/>
                        )
                    })
                }
            </div>
        </div>
    </div>
}

export default Menu;