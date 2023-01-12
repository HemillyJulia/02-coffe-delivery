import { ActionsBox, CoffeeCartCardBox, RemoveButton } from "./styles";
import coffeeexpresso from '../../../../assets/coffeeexpresso.png'
import { RegularText } from "../../../../components/Tipografias";
import { QuantidadeInput } from "../../../../components/QuantidadeInput";
import { Trash } from "phosphor-react";
import { CartItem } from "../../../../contexts/CartContext";
import { formatMoney } from "../../../../utilitário/formatMoney";
import { useCart } from "../../../../hooks/useCart";

interface CoffeCartCardProps{
   coffee: CartItem 
}

export function CoffeeCartCard ({coffee}:CoffeCartCardProps){
    const { mudarQuantidadeItemDoCarrinho} = useCart()

    function Aumentar (){
        mudarQuantidadeItemDoCarrinho (coffee.id, 'onAumentar') 
    }
    function Diminuir (){
        mudarQuantidadeItemDoCarrinho (coffee.id, 'onDiminuir') 
    }
    const coffeeTotal = coffee.price * coffee.quantity
    const formatandoPreço = formatMoney (coffeeTotal)
    return(
        <CoffeeCartCardBox>
            <div>
                <img src={coffee.photo}/>
                <div>
                    <RegularText color="subtitle">{coffee.name}</RegularText>
                    <ActionsBox>
                        <QuantidadeInput size="small" 
                        onAumentar={Aumentar}
                        onDiminuir={Diminuir}
                        quantity={coffee.quantity}/>
                        <RemoveButton> 
                            <Trash size={16}/>
                            REMOVER
                        </RemoveButton>
                    </ActionsBox>
                </div>

            </div>
            <p>{formatandoPreço}</p>
        </CoffeeCartCardBox>
    )
}