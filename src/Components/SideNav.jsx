import { Link } from "react-router-dom";
import myimage from "../Screenshot 2024-07-03 204954.png"
import SmallFooterMenu from "./SmallFooterMenu";

const SideNav = () => {
    return ( 
        <div className="bg-[#3E362E] w-10/12 max-w-[450px] h-full justify-between flex flex-col gap-y-7">
            <div className="flex flex-col gap-y-5 mt-4 text-2xl playfair-display text-[#FFE4BE] font-semibold ml-8">
                <div><img src = {myimage} alt="LOGO" className="bg-contain mix-blend-color-burn h-[90px] object-cover"></img></div>
                <div className="flex flex-col ml-3 gap-y-3">
                    <div><Link to={'/'}>Home</Link></div>
                    <div><Link to={'/Malls'}>Malls</Link></div>
                    <div><Link to={'/Orders'}>Orders</Link></div>
                    <div><Link to={'/Restro/:id/Menu/:menuid'}>Back to Restaurants</Link></div>
                    <div><Link>Cart</Link></div>
                    <div><Link>Next</Link></div>
                </div>
            </div>
            <div>
                <SmallFooterMenu />
            </div>
        </div>
     );
}
 
export default SideNav;