import { AddCart, CardFooter, CoffeeCardStyle, Description, Name, Tags } from "./styles";
import { RegularText, TitleText } from "../../../../components/Tipografias";
import { QuantidadeInput } from "../../../../components/QuantidadeInput";
import { ShoppingCart } from "phosphor-react";
import { formatMoney } from "../../../../utilitário/formatMoney";
import { useCart } from "../../../../hooks/useCart";
import { useState } from "react";

 export interface CoffeeProps{
    id:number;
    tags:string[];
    name:string;
    description:string;
    photo:string;
    price:number;

}

export function CoffeeCardBox ({coffee}:{coffee:CoffeeProps}){

  const [quantity, setQuantity] = useState(1)

  function handleAumentar (){
    setQuantity((state) => state + 1)
  }
  function handleDiminuir (){
    setQuantity((state) => state - 1)
  }

  const {addCoffeeNoCarrinho} = useCart()
  function handleAddToCart (){
    const coffeeToAdd = {
      ...coffee,
      quantity:1
    }
    addCoffeeNoCarrinho (coffeeToAdd)
  }
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
                <QuantidadeInput
                onAumentar ={handleAumentar}
                onDiminuir={handleDiminuir}
                quantity={quantity}
                />
                <button onClick={handleAddToCart}>
                    <ShoppingCart weight="fill" size={22}/>
                </button>
            </AddCart>
          </CardFooter>
        </CoffeeCardStyle>
     
    )
}

function addCoffeeNoCarrinho(coffeeToAdd: { quantity: number; id: number; tags: string[]; name: string; description: string; photo: string; price: number; }) {
  throw new Error("Function not implemented.");
}
