import { ActionsBox, CoffeeCartCardBox, RemoveButton } from "./styles";
import coffeeexpresso from '../../../../assets/coffeeexpresso.png'
import { RegularText } from "../../../../components/Tipografias";
import { QuantidadeInput } from "../../../../components/QuantidadeInput";
import { Trash } from "phosphor-react";

export function CoffeeCartCard (){
    return(
        <CoffeeCartCardBox>
            <div>
                <img src={coffeeexpresso}/>
                <div>
                    <RegularText color="subtitle">Expresso Tradicional</RegularText>
                    <ActionsBox>
                        <QuantidadeInput size="small"/>
                        <RemoveButton> 
                            <Trash size={16}/>
                            REMOVER
                        </RemoveButton>
                    </ActionsBox>
                </div>

            </div>
            <p> R$ 9,90</p>
        </CoffeeCartCardBox>
    )
}