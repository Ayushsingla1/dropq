import { useEffect, useState } from "react";
import { data3 } from "../assets/data3";
import OtherDishCard from "./OtherDishCard";


const OtherDishes = ({restroid, mallid}) => {
    // const remainingDishes = useRecoilValue(addOnsFilterDoer)
    
    const [dishes, setDishes] = useState([]);
    const [randomIndexs, setRandomIndexs] = useState([]);
    const tempName = "Haldirams";

    
    useEffect(() => {
        //make a call to the backend fetching all the dishes from restaurant with mall id: 'mallid' and restaurant id : 'restroid'
        //if possible try making a call to fetch the restaurants's name too using the mallid and restroid
        const indexs = [];
        for(let i = 0 ; i < 2 ; i++){
            indexs.push(Math.floor(Math.random()* data3.length))
        }
        setRandomIndexs([...indexs]);
        setDishes(data3)
    },[restroid, mallid])

    return ( <div className="flex flex-wrap gap-x-5">
        {
            randomIndexs.map((val, index) => {
                if(dishes[val]) return <OtherDishCard dish={dishes[val]} restroName = {tempName} key={index} />;
                else return null;
            })
        }
    </div> );
}
 
export default OtherDishes;
        