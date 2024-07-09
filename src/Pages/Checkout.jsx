import FooterSmall from "../Components/FooterSmall";
import SmallNav from "../Components/SmallNav";
import PaymentOptions from "../Components/PaymentOption";
import Bill from "../Components/Bill";
import { useRecoilValue } from "recoil";
import { paymentOptionAtom } from "../atom store/PaymentAtom";
import PaymentForm from "../Components/PaymentForm";
import { useNavigate } from "react-router-dom";

const Checkout = () => {

    const option = useRecoilValue(paymentOptionAtom)
    const navigate = useNavigate()


    return ( <div className="w-full bg-[#AC8968]">
        <SmallNav />
        <div className="w-full flex flex-col min-h-[92vh] justify-center  items-center gap-y-10 py-[30px] px-10">
            <div className=" text-[36px] uppercase inknut">Checkout</div>
            <div className="flex min-h-[60vh] w-full">
                <div className="w-6/12 pb-5 border-r-2 flex flex-col justify-center items-center border-white pr-3">
                    <div className="text-[32px] inknut">Payment Option</div>
                    <PaymentOptions />
                    <button onClick={() => {navigate('/Orders')}} className="px-4 py-2 rounded-md bg-[#3E362E] text-[#FFE4BE] text-[20px] playfair-display font-semibold">Back to cart</button>
                </div>
                <div className="w-6/12 pl-3">
                    <Bill textColor={"text-[#FFDDAE]"} bgColor={"bg-[#3E362E]"}/>
                    <PaymentForm option={option} />
                </div>
            </div>
        </div>
        <FooterSmall />
    </div> );
}
 
export default Checkout;