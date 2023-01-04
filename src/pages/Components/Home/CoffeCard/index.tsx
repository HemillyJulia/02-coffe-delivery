import { AddCart, CardFooter, CoffeeCardStyle, Description, Name, Tags } from "./styles";
import { RegularText, TitleText } from "../../../../components/Tipografias";
import { QuantidadeInput } from "../../../../components/QuantidadeInput";
import { ShoppingCart } from "phosphor-react";
import { formatMoney } from "../../../../utilitário/formatMoney";

 export interface CoffeeProps{
    id:number;
    tags:string[];
    name:string;
    description:string;
    photo:string;
    price:number;

}

export function CoffeeCardBox ({coffee}:{coffee:CoffeeProps}){
    const formattedPrice = formatMoney(coffee.price)
    return(
        <CoffeeCardStyle>
          <img src={coffee.photo}/>  
          <Tags>
            {coffee.tags.map((tag) =>(
                <span key={`${coffee.id} ${tag}`}>{tag}</span>
            ))}
          </Tags>
          <Name>{coffee.name}</Name>
          <Description>
            {coffee.description}
          </Description>
          <CardFooter>
            <div>
                <RegularText size="s">R$</RegularText>
                <TitleText size="m" color="text" as="strong">{formattedPrice}</TitleText>
            </div>
            <AddCart>
                <QuantidadeInput/>
                <button>
                    <ShoppingCart weight="fill" size={22}/>
                </button>
            </AddCart>
          </CardFooter>
        </CoffeeCardStyle>
     
    )
}