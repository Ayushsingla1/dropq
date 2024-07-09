import PaymentOptionCard from "./PaymentOptionCard";

const PaymentOptions = () => {
    const paymentOptions = ['UPI', 'Credit Card', 'Net Banking'];

    return  <div className="flex justify-center items-center py-7">
        <div className="flex justify-center py-7 bg-[#DDB289] rounded-[10px] items-center flex-col">
            {
                paymentOptions.map((option, index) => {
                    return (
                        <PaymentOptionCard option={option} key={index} />
                    )
                })
            }
        </div>
    </div> ;
}
 
export default PaymentOptions;