import { forwardRef, InputHTMLAttributes } from "react";
import { RegularText } from "../Tipografias";
import { InputStyleContainer, InputStyled, InputWrapper, RightText } from "./style";


//abaixo eu extendo uma tipagem, desta forma eu tenho todos os atributos de um iput qualquer.
type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    error?:string;
    rightText?:string;
    
}

export const Input = forwardRef<HTMLInputElement,InputProps>(({error,className,rightText,...props},ref) => {
    return(
        <InputWrapper className={className}>
        <InputStyleContainer hasError={!!error}>
        <InputStyled {...props} ref={ref}/>
        {rightText && <RightText>{rightText}</RightText>}
        </InputStyleContainer>
        {error && (
            <RegularText size="s">{error}</RegularText>
        )}
        </InputWrapper>   
    )
})