import { useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Nav";
import myimage from "../assets/contact-us-image.jpg"
// import { Link } from "react-router-dom";

const Touch = ()=>{
    const [data,setdata] = useState({FirstName : "",LastName : "",MallName : "",MallEmail : "",City: "",Comments:""})
    const changeHandler = (e)=>{
        const {name,value} = e.target;
        setdata(prev=>{return {...prev, [name] : value}})
    }
    console.log(data)
    return <div className="bg-[#AC8968]">
        <Navbar/>
        <div>
            <img src={myimage} alt="Error" className="h-[100vh] w-[100vw] object-cover"></img>
            <h2 className="text-[#FFFFFF] font-semibold text-4xl text-center mt-10">Let's Start A Conversation</h2>
            <div className="flex justify-around gap-x-10 mt-10 mb-10">
                <div className="flex flex-col gap-y-8">
                <h3 className="text-[#FFFFFF] font-medium text-3xl">Ask how we can help you : </h3>
                <div>
                    <div className="text-[#3E362E] text-2xl font-semibold">See Our Platform In Action </div>
                    <div className="text-white text-lg">Request a personalized demo of Marketing platform</div>
                </div>
                <div>
                    <div className="text-[#3E362E] text-2xl font-semibold">See Our Platform In Action </div>
                    <div className="text-white text-lg">Request a personalized demo of Marketing platform</div>
                </div>                
                <div>
                    <div className="text-[#3E362E] text-2xl font-semibold">Points of Contact</div>
                    <div className="text-white text-lg">
                        <div>T.N. | INDIA</div>
                        <div>1196, XYZ , UP,</div>
                        <div>TN , India</div>
                    </div>
                </div>
                <div>
                    <div className="text-[#3E362E] text-2xl font-semibold">Billing enquires</div>
                    <div className="text-white text-lg"><a href={`tel:9416855609`}>+91-9416855609</a></div>
                </div>
                <div>
                    <div className="text-[#3E362E] text-2xl font-semibold">Information and sales</div>
                    <div className="text-white text-lg">partnermarketing@drop.com</div>
                </div>
                <div>
                    <div className="text-[#3E362E] text-2xl font-semibold">Support</div>
                    <div className="text-white text-lg"><a href={`mailto:support@drop.com`}>support@drop.com</a></div>
                </div>
                <div>
                    <div className="text-[#3E362E] text-2xl font-semibold">Verification of Employment</div>
                    <div className="text-white text-lg">vof@siu.com</div>
                </div>
                <div className="text-[#3E362E] text-3xl font-semibold">Additional Office Locations</div>
                <div className="flex flex-col gap-y-4">
                <div className="text-white text-xl">INDIA</div>
                <div className="text-white text-xl">Raman Hostel , NSUT , Dwarka , Delhi</div>
                </div>
                </div>
                <div>
                    <div className="text-[#3E362E] text-xl font-bold mt-16">Please note : All fields are required</div>
                    <form className="flex flex-col gap-y-5 mb-10 mt-5">
                        <div className="flex flex-col gap-y-1">
                        <label htmlFor="firstname" className="font-semibold">First Name</label>
                        <input type = "text" name = "FirstName" value = {data.FirstName} onChange={changeHandler} id="firstname" className="bg-[#E8CFAD] h-12 rounded-md pl-2 text-lg"/>
                        </div>
                        <div className="flex flex-col gap-y-1">
                        <label htmlFor="lastname" className="font-semibold">Last Name</label>
                        <input type = "text" name = "LastName" value = {data.LastName} onChange={changeHandler} id="lastname" className="bg-[#E8CFAD] h-12 rounded-md pl-2 text-lg"/>
                        </div>
                        <div className="flex flex-col gap-y-1">
                        <label htmlFor="mallname" className="font-semibold">Mall Name</label>
                        <input type = "text" name = "MallName" value = {data.MallName} onChange={changeHandler} id="mallname" className="bg-[#E8CFAD] h-12 rounded-md pl-2 text-lg"/>
                        </div>
                        <div className="flex flex-col gap-y-1">
                        <label htmlFor="mallemail" className="font-semibold">Mall Email</label>
                        <input type = "email" name = "MallEmail" value = {data.MallEmail} onChange={changeHandler} id="mallemail" className="bg-[#E8CFAD] h-12 rounded-md pl-2 text-lg"/>
                        </div>
                        <div className="flex flex-col gap-y-1">
                        <label htmlFor="city" className="font-semibold">City</label>
                        <input type = "text" name = "City" value = {data.City} onChange={changeHandler} id="city" className="bg-[#E8CFAD] h-12 rounded-md pl-2 text-lg"/>
                        </div>
                        <div className="flex flex-col gap-y-1">
                        <label htmlFor="comments" className="font-semibold">Comments</label>
                        <input type = "text" name = "Comments" value = {data.Comments} onChange={changeHandler} id="comments" className="bg-[#E8CFAD] h-12 rounded-md pl-2 text-lg"/>
                        </div>
                        <input type = "submit" value="SEND MESSAGE" className="h-14 bg-[#3E362E] rounded-md text-[#C1763D] font-semibold text-2xl mt-5"></input>
                    </form>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
}

export default Touch;