import {  useState } from "react";
import FooterSmall from "../Components/FooterSmall";
import Navbar from "../Components/Nav";
import img from '../assets/signup.jpg'

const Sign = ()=>{

    const [formData, setFormData] = useState({name:"", phNo:"", otp:""});

    const changeHandeler = (e) => {
        setFormData(prev => {
            return (
                {
                    ...prev,
                    [e.target.id] : e.target.value,
                }
            )
        })
    }

    const generateOtpBtn = (e) => {
        e.preventDefault()
    }

    const submitHandeler = (e) => {
        e.preventDefault()
            console.log(formData)
    }

    return <div className="bg-[#AC8968] h-screen w-full relative ">
        <Navbar/>
        <div className="sign-min-h">
            <span className=" absolute z-[1] top-[130px]">
                <svg width="251" height="351" viewBox="0 0 251 351" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.500002 350.5L0.500002 151.902L0.500002 0.500003L250.5 0.500003L0.500002 350.5Z" fill="#D8B99B"/>
                </svg>
            </span>
            <div className="absolute signup-img-top-div w-10/12 bg-[#C1763D] top-[20%] left-[8%] justify-between z-[2] rounded-tr-[120px] rounded-bl-[120px] flex items-center">
                <div className="flex flex-col justify-center items-center w-6/12">
                    <p className="text-2xl playfair-display font-semibold text-white"><span className="text-[#3E362E]">Services</span> like no other</p>
                    <p className="text-[20px] font-semibold text-white playfair-display">Sign Up</p>
                    <form className="flex flex-col gap-y-4 mt-3 inknut">
                        <input placeholder="Name" id="name" onChange={changeHandeler} className="rounded-md text-white inknut border-none w-full py-1 px-1 bg-[#3E362E] focus:border-none" type="text" />
                        <input placeholder="Ph No" id="phNo" onChange={changeHandeler} className="border-none rounded-md w-full text-white inknut p-1 bg-[#3E362E] focus:border-none" type="number hide-arrows"/>
                        <button onClick={generateOtpBtn} className="text-white text-[20px] rounded-md py-2 border-none w-full  bg-[#3E362E] focus:border-none">Generate OTP</button>
                        <input placeholder="OTP" id="otp" onChange={changeHandeler} className="border-none text-white inknut rounded-md w-full p-1 bg-[#3E362E] focus:border-none" type="text" />
                        <button onClick={submitHandeler} className="text-white text-[20px] rounded-md py-2 border-none w-full  bg-[#3E362E] focus:border-none">Submit</button>
                    </form>
                    <div className="flex flex-col text-[20px] mr-[53px] podkova text-white font-semibold">
                        <p>Want to be an affiliated mall</p>
                        <p><span className="inknut text-white font-bold">Sign Up</span> now</p>
                    </div>
                </div>
                <div>
                    <img className="w-[750px] signup-img rounded-tr-[120px] h-[600px]" src={img} alt="signup.jpeg"/>
                </div>
            </div>
            <span className="bottom-right-triangle absolute z-[3] rotate-180 bottom-[32px] right-0">
                <svg width="251" height="351" viewBox="0 0 251 351" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.500002 350.5L0.500002 151.902L0.500002 0.500003L250.5 0.500003L0.500002 350.5Z" fill="#D8B99B"/>
                </svg>
            </span>
        </div>
        <FooterSmall/>
    </div>
}

export default Sign;