import { useSetRecoilState } from "recoil";
import { paymentOptionAtom } from "../atom store/PaymentAtom";

const PaymentOptionCard = ({option}) => {

    const setPaymentOpton = useSetRecoilState(paymentOptionAtom)

    return ( <div className="flex justify-center items-center px-10 py-3">
        <div onClick={() => {setPaymentOpton(option)}} className="text-[32px] text-[#DDB289] rounded-[10px] inknut bg-[#3E362E] w-[400px] flex justify-center items-center py-[30px]">{option}</div>
    </div> );
}
 
export default PaymentOptionCard;