// import { useState } from "react";
// import { useEffect } from "react";
// import { useParams } from "react-router-dom";
import Navbar from "../Components/Nav";
import Footer from "../Components/Footer";
import { data2 } from "../assets/data2";
import DishCard from "../Components/DishCard";

const Restro = ()=>{
    // const {id} = useParams();

    // const [menu, setMenu] = useState([]);
    const menu = data2
    console.log(data2)

    // const fetchMenu = async() => {
    //     try {
    //         const menuAPI = process.env.menuAPI;
    //         const output = await fetch(menuAPI);
    //         setMenu(output);
            
    //     } catch (error) {
    //         console.log(`error while fetch the menu: ${error}`);
    //     }
    // }

    // useEffect(() => {
        // fetchMenu();
    // }, [id])


    return (
        <div className="bg-[#AC8968]">
            <Navbar/>
            <div className="flex py-10 flex-col justify-center items-center gap-y-7 w-full">
                <div className="text-3xl inknut font-semibold">Food Courts</div>
                <div className=" flex flex-wrap justify-center gap-x-9 items-center gap-y-4 w-10/12">
                    {
                        menu.map((dish, index) => {
                            return(
                                <DishCard key={index} dish={dish}/>
                            )
                        })
                    }
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Restro;