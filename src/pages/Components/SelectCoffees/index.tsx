import { TitleText } from "../../../components/Tipografias";
import { useCart } from "../../../hooks/useCart";
import { CoffeeCartCard } from "../CompletteOrder/CoffeeCartCard";
import { ConfirmationSection } from "./ConfirmationSection";
import { DetailsBox, SelectCoffeesBox } from "./style";

export function SelectCoffee (){
    const {cartItens} = useCart()
    return(
        <SelectCoffeesBox>
            <TitleText size="xs" color="subtitle">
                Cafés Selecionados
            </TitleText>
            <DetailsBox>
            {cartItens.map((item) => (
                <CoffeeCartCard key={item.id} coffee={item}/>
            ))}
                <ConfirmationSection/>
            </DetailsBox>
            
        </SelectCoffeesBox>
    )
}