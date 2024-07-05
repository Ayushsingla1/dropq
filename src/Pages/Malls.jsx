import Footer from "../Components/Footer";
import Navbar from "../Components/Nav";
import {data} from '../assets/data'
import Cards from "../Components/MallCard"
// import { useEffect, useState } from "react";
const Malls = ()=>{

    // const [data,setdata] = useState([]);
    // useEffect(()=>{
    //     const fetchdata = async() =>{
    //         const MALL_API = process.env.MALL_API
    //         const mallData = await fetch(MALL_API);
    //         const finalData = await mallData.json();
    //         setdata(finalData);
    //     }
    //     fetchdata();
    // },[MALL_API])

      return <div className="bg-[rgb(172,137,104)]">
        <Navbar/>
        <div className="mb-10">
            <h1 className="text-center font-medium text-3xl mt-3 text-[#3E362E]">Malls</h1>
            <div className="flex justify-center mt-5">
            <div className="grid grid-cols-3 gap-y-7 gap-x-20">
                {
                    data.map((item,index)=>{
                        return <div key = {index}><Cards item={item}></Cards></div>
                    })
                }
            </div>
            </div>   
        </div>
        <Footer/>
    </div>
}

export default Malls;