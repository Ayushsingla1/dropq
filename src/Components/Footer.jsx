import { Link } from "react-router-dom";
import myimage from "../Screenshot 2024-07-03 204954.png"

const Footer = () => {
    return ( 
        <div className="w-full black-shadow-up h-[205px] flex flex-col justify-between bg-[#3E362E]">
            <div className="flex justify-between items-start">
                <div><img src = {myimage} alt="LOGO" className="bg-contain mix-blend-color-burn h-[90px] object-cover"></img></div>
                <div className="flex gap-[90px] mr-[50px]">
                    <div className="flex flex-col gap-y-2">
                        <div className="text-[20px] playfair-display text-white font-bold">Order</div>
                        <div className="text-[16px] font-bold opacity-40 text-[#FFE4BE] playfair-display">
                            <div><Link to={"/Malls"}>Malls</Link></div>
                            <div><Link to={"/Orders"}>Orders</Link></div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <div className="text-[20px] playfair-display text-white font-bold">Company</div>
                        <div className="text-[16px] font-bold opacity-40 text-[#FFE4BE] playfair-display">
                            <div><Link to={"Sign"}>Sing Up</Link></div>
                            <div><Link to={"/Touch"}>Contact Us</Link></div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <div className="text-[20px] playfair-display text-white font-bold">Support</div>
                        <div className="text-[16px] font-bold opacity-40 text-[#FFE4BE] playfair-display">
                            <div>Term of Use</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-end">
                <div className="text-[20px] text-[#E8CFAD] podkova"><span className="playfair-display">@MagicTouch</span> All rights reserved</div>
                <div className="flex gap-x-[20px] mr-[50px] text-[20px] playfair-display text-[#FFE4BE]">
                    <div>Email : drop@gm.com</div>
                    <div>Phone: 0012234469</div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;