import { useParams } from "react-router-dom";
import SideNav from "../Components/SideNav";
import { data3 } from "../assets/data3";
// import { data2 } from "../assets/data2";
import FilterMenu from "../Components/FilterMenu";
import DishCard from '../Components/DishCard'
// import { useState } from "react";
import FilterVegNonVeg from "../Components/FilterVegNonVeg";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { dataAtom, filterDoer } from "../atom store/FitlerAtom";
import { useEffect } from "react";

const Menu = ()=>{
    const {id, menuid} = useParams()
    const setDishesInAtom = useSetRecoilState(dataAtom)
    const dishesToDisplay = useRecoilValue(filterDoer)
    
    console.log(id, menuid);
    useEffect(() => {
        //get req to get all the dishes with mallid: "id" and restroid: "menuid" let's say data3 is the ouput of that api call
        
        setDishesInAtom(data3);

    }, [setDishesInAtom])

    return <div className="bg-[#AC8968] w-full min-h-[100vh] flex">
        <div className="max-w-[600px] w-3/12">
            <SideNav/>
        </div>
        <div className="flex flex-col items-center mb-[30px] w-full">
            <div className="text-[40px] mt-[16px] inknut font-semibold">Item</div>
            <div>
                <FilterMenu id={id} />
            </div>
            <div>
                <FilterVegNonVeg />
            </div>
            <div className="flex mt-[35px] transition-all flex-wrap w-full gap-x-[100px] gap-y-10 justify-center items-center">
                {
                    dishesToDisplay.map(dish => {
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