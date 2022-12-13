import { TitleText } from "../../../components/Tipografias";
import { CoffeeCartCard } from "../CompletteOrder/CoffeeCartCard";
import { ConfirmationSection } from "./ConfirmationSection";
import { DetailsBox, SelectCoffeesBox } from "./style";

export function SelectCoffee (){
    return(
        <SelectCoffeesBox>
            <TitleText size="xs" color="subtitle">
                Cafés Selecionados
            </TitleText>
            <DetailsBox>
                <CoffeeCartCard/>
                <CoffeeCartCard/>
                <CoffeeCartCard/>
                <ConfirmationSection/>
            </DetailsBox>
            
        </SelectCoffeesBox>
    )
}