import { Minus,Plus } from "phosphor-react";
import { IconWrapperSomSub, QuantidadeInputBox } from "./stlyles";

interface QuantidadeInputProps{
   size?: "medium" | "small";
   quantity: number;
   onAumentar: () => void;
   onDiminuir: () => void;
}

export function QuantidadeInput ({onAumentar, onDiminuir, quantity,size = "medium"}: QuantidadeInputProps){
    return(
       <QuantidadeInputBox size={size} >
        <IconWrapperSomSub disabled={quantity<=1} onClick={onDiminuir}>
           <Minus size={14} weight="fill"/>
        </IconWrapperSomSub>
        <input type='number' readOnly value={quantity}/>
        <IconWrapperSomSub onClick={onAumentar}>
           <Plus size={14} weight="fill"/>
        </IconWrapperSomSub>
        
       </QuantidadeInputBox>
    )
}