import { CreditCard } from "phosphor-react";
import { PaymentContainer } from "./style";

export function PaymentInput (){
    return(
        <PaymentContainer>
            <CreditCard size={16}/>
            Cartão de crédito
        </PaymentContainer>
    )
}