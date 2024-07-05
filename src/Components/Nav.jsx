import { NavLink } from "react-router-dom"
import myimage from "../Screenshot 2024-07-03 204954.png"
const Navbar = ()=>{
    return (
    <div className="flex flex-col justify-center black-shadow-down items-center bg-[#3E362E] h-32">
        <div><img src = {myimage} alt="LOGO" className="bg-contain mix-blend-color-burn h-[90px] object-cover"></img></div>
        <ul className="flex text-2xl playfair-display font-semibold gap-[30px] mb-2" >
            <li><NavLink to='/'  className="text-[#93785B]  font-medium">Home</NavLink></li>
            <li><NavLink to='/Malls' className="text-[#93785B] font-medium">Malls</NavLink></li>
            <li><NavLink to='/Orders' className="text-[#93785B]  font-medium">Orders</NavLink></li>
            <li><NavLink to='/Touch' className="text-[#93785B] font-medium">Get In Touch</NavLink></li>
            <li><NavLink to='/Sign' className="text-[#FFE4BE] font-medium">SignUp</NavLink></li>
            <li><NavLink to='/Login' className="text-[#FFE4BE] font-medium">LogIn</NavLink></li>
        </ul>
    </div>
    )
}

export default Navbar;