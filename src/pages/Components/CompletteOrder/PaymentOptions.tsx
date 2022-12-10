import { PaymentOptionsContainer } from "./CompleteOrderForm/styles";
import { PaymentInput } from "./PaymentInput";

export function PaymentOptions (){
    return(
        <PaymentOptionsContainer>
            <PaymentInput/>
            <PaymentInput/>
            <PaymentInput/>
        </PaymentOptionsContainer>
    )
}