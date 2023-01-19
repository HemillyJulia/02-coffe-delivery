import { Button } from "../../../components/QuantidadeInput/Button";
import { RegularText } from "../../../components/Tipografias";
import { useCart } from "../../../hooks/useCart";
import { formatMoney } from "../../../utilitário/formatMoney";
import { ConfirmationSectionBox } from "./style";

const Delivery_price = 3.5

export function ConfirmationSection (){
    const {cartItensTotal, cartQuantity} = useCart()
    const cartTotal = Delivery_price + cartItensTotal

    const formattedItensTotal = formatMoney (cartItensTotal)
    const formattedCartTotal = formatMoney (cartTotal)
    const formattedDeliveryPrice = formatMoney (Delivery_price)
    return(
    <ConfirmationSectionBox>
        <div>
            <RegularText size="s">Total de itens</RegularText>
            <RegularText>R$ {formattedItensTotal}</RegularText>
        </div>
        <div>
            <RegularText size="s">Entrega</RegularText>
            <RegularText>R$ {formattedDeliveryPrice}</RegularText>
        </div>
        <div>
            <RegularText weight="700" color="subtitle" size="l">Total</RegularText>
            <RegularText weight="700" color="subtitle" size="l">{formattedCartTotal}</RegularText>
        </div>
        <Button text="Confirmar pedido" disabled={cartQuantity <= 0} type="submit"/>
    
    </ConfirmationSectionBox>
    )
}
