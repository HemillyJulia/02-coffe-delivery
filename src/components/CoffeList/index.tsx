import { coffees } from "../../data/coffees";
import { CoffeeCardBox } from "../../pages/Components/Home/CoffeCard";
import { TitleText } from "../Tipografias";
import { CoffeeList, CoffeListBox } from "./styles";

export function CoffeList (){
    return(
  <CoffeListBox className="container">
    <TitleText size='l'>Nossos Cafés</TitleText>
    <CoffeeList>
   {coffees.map ((coffee) => (
    <CoffeeCardBox key={coffee.id} coffee={coffee}/>
   ))}
    </CoffeeList>
    
  </CoffeListBox>
   
    )
}