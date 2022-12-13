import { Minus,Plus } from "phosphor-react";
import { IconWrapperSomSub, QuantidadeInputBox } from "./stlyles";

interface QuantidadeInputProps{
   size?: "medium" | "small";
}

export function QuantidadeInput ({size = "medium"}: QuantidadeInputProps){
    return(
       <QuantidadeInputBox size={size} >
        <IconWrapperSomSub>
           <Minus size={14} weight="fill"/>
        </IconWrapperSomSub>
        <input type='number' readOnly value={1}/>
        <IconWrapperSomSub>
           <Plus size={14} weight="fill"/>
        </IconWrapperSomSub>
        
       </QuantidadeInputBox>
    )
}