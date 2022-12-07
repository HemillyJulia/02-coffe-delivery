import { ReactNode } from "react";
import { IconContainer, InfoComIconBox } from "./style";

interface IconContainerProps{
    icon:ReactNode;
    text: string | ReactNode;
    iconBg:string;

}

export function IconesBeneficios ({icon, text, iconBg}:IconContainerProps){
    return(

        <InfoComIconBox>
            <IconContainer iconBg={iconBg}>{icon}</IconContainer>
            {typeof text === 'string'? <p>{text}</p> : text}
        </InfoComIconBox>
    )
}