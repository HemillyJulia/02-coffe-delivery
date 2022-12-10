import { InputHTMLAttributes } from "react";
import { InputStyleContainer } from "./style";


//abaixo eu extendo uma tipagem, desta forma eu tenho todos os atributos de um iput qualquer.
type InputProps = InputHTMLAttributes<HTMLInputElement>

export function Input ({...props}: InputProps){
    return(
        <InputStyleContainer{...props}/>
    )
}