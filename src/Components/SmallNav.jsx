import { ImHome } from "react-icons/im";
import pic from '../Screenshot 2024-07-03 204954.png'
import { useNavigate } from "react-router-dom";

const SmallNav = () => {
    const navigate = useNavigate();
    return ( 
        <div className="flex justify-center bg-[#3E362E] items-center w-full">
            <div className="flex justify-between items-center w-10/12">
                <div><img src={pic} alt="LOGO" className="bg-contain mix-blend-color-burn h-[70px] object-cover"/></div>
                <div onClick={() => {navigate('/')}} className="bg-[#AC8968] p-2 rounded-full">
                    <ImHome size={20} />
                </div>
            </div>
        </div>
     );
}
 
export default SmallNav;