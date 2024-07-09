import Navbar from "../Components/Nav";
import Footer from "../Components/Footer";
import { useRecoilValue } from "recoil";
import { cart } from "../atom store/CartAtom";
import CartDish from "../Components/CartDish";
import OtherDishes from '../Components/OtherDishes'
import { useNavigate } from "react-router-dom";
import Bill from "../Components/Bill";


const Orders = ()=>{

    const cartDishes = useRecoilValue(cart)
    const navigate = useNavigate()
  

    return <div className="w-full bg-[#AC8968]">
        <Navbar/>
        <div className="flex justify-center  min-h-[60vh] items-center my-10 flex-col gap-y-4">
            <div className="text-[36px] text-white font-bold Inknut">Your <span className="text-[#3E362E]">Cart</span></div>
            <div className="flex justify-center items-center w-full">
            <div className="flex flex-col gap-y-2 w-6/12 pr-[20px] border-r-2 py-2 border-black justify-center items-center">
                    <div className=" self-start text-[28px] inknut">Items</div>
                    <div className="flex gap-y-4 w-full flex-col">
                        {
                            cartDishes.map((dish) => {
                                return (<CartDish key={dish.id} dish={dish} />)
                            })
                        }
                    </div>
                </div>
                <div className="flex flex-col pl-[20px] gap-y-2 w-4/12 justify-center items-center">
                    <div className="text-[28px] inknut">Quick add-ons</div>
                    <div>
                        <OtherDishes mallid = {cartDishes[0].dish.mallid} restroid = {cartDishes[0].dish.restroid} />
                    </div>
                    <Bill bgColor={"bg-[#93785B]"} textColor={"text-[#000000]"}/>
                    <div className="flex justify-center gap-x-5 mt-3 items-center">
                        <button className="py-2 px-4 playfair-display text-[20px] bg-[#3E362E] text-[#FFDDAE] rounded-[10px]" onClick={() => {navigate(`/Restro/${cartDishes[0].dish.mallid}/Menu/${cartDishes[0].dish.restroid}`)}}>Add more items</button>
                        <button className="py-2 px-4 playfair-display text-[20px] bg-[#3E362E] text-[#FFDDAE] rounded-[10px]" onClick={() => {navigate(`/Orders/Checkout`)}}>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
}

export default Orders;