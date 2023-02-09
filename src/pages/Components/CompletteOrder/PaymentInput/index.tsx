import { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import { PaymentContainer,ContentContainer} from "./style";

type PaymentInputProps = InputHTMLAttributes<HTMLInputElement> & {
    icon: ReactNode;
    label: string;
}
export const PaymentInput = forwardRef<
HTMLInputElement,
PaymentInputProps
>(({id,icon,label,...props},ref) =>{
    return(
           <PaymentContainer>
            <input id={id} type="radio" {...props} name="paymentMethod" ref={ref}/>
            <label htmlFor={id}>
                <ContentContainer>
                    {icon}
                    {label}
                </ContentContainer>
            </label>
         
        </PaymentContainer>
    )
})