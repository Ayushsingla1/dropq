import CreditCardForm from "./CreditCardForm";
import UPIForm from "./UPIForm";
import NetBankingForm from "./NetBankingForm";


const PaymentForm = ({option}) => {
    
    return (
        <div>
            {
                option === "UPI" ?
                (<UPIForm />) :
                option === "Credit Card" ?
                (<CreditCardForm />) :
                (<NetBankingForm />)
            }
        </div>
    );
}
 
export default PaymentForm;