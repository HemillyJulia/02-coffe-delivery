import { Button } from "../../../components/QuantidadeInput/Button";
import { RegularText } from "../../../components/Tipografias";
import { ConfirmationSectionBox } from "./style";

export function ConfirmationSection (){
    return(
    <ConfirmationSectionBox>
        <div>
            <RegularText size="s">Total de itens</RegularText>
            <RegularText>R$ 9,90</RegularText>
        </div>
        <div>
            <RegularText size="s">Entrega</RegularText>
            <RegularText>R$ 3,50</RegularText>
        </div>
        <div>
            <RegularText weight="700" color="subtitle" size="l">Total</RegularText>
            <RegularText weight="700" color="subtitle" size="l">29,90</RegularText>
        </div>
        <Button text="Confirmar pedido"/>
    
    </ConfirmationSectionBox>
    )
}
