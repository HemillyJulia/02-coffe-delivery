import { ButtonHTMLAttributes } from "react";
import { ButtonBox } from "./styles";


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    text:string |number
}
export function Button ({text,...props}:ButtonProps){
    return(
 <ButtonBox{...props}>
{text}

 </ButtonBox>
    )
}