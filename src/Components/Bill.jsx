import {  useEffect } from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { cart, extraCharges, subTotalAtom, total } from "../atom store/CartAtom"


const Bill = ({bgColor, textColor}) => {


    const cartDishes = useRecoilValue(cart)
    const [subTotal, setSubTotal] = useRecoilState(subTotalAtom)
    const totalSum = useRecoilValue(total)
    const TotalExtraCharges = useRecoilValue(extraCharges)
        
    useEffect(() => {
        const getSum = () => {
            let total = 0;
            for(let i=0; i<cartDishes.length; i++){
                total = total + (cartDishes[i].count * cartDishes[i].dish.price)
            }
            return total
        }
        setSubTotal(getSum())
    }, [cartDishes, setSubTotal])


    return ( <div className={`flex flex-col justify-center rounded-md w-full items-center border-md ${bgColor} ${textColor} mt-5 py-4 px-3`}>
    <div className="flex border-b-2 text-[20px] pb-4 playfair-display flex-col font-semibold gap-y-2 w-full justify-center items-center">
        <div className="flex justify-between w-full items-center">
            <span>SubTotal</span>
            <span>Rs {subTotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center w-full">
            <span>Extra Charges</span>
            <span>Rs {TotalExtraCharges.toFixed(2)}</span>
        </div>
    </div>
    <div className="flex justify-between pt-2 text-[24px] inknut items-center w-full">
        <span>Total</span>
        <span>Rs {totalSum.toFixed(2)}</span>
    </div>
</div> );
}
 
export default Bill;