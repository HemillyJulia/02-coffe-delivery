import { Minus,Plus } from "phosphor-react";
import { IconWrapperSomSub, QuantidadeInputBox } from "./stlyles";

export function QuantidadeInput (){
    return(
       <QuantidadeInputBox> 
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