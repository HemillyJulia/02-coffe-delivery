import { createContext, ReactNode, useState } from "react";
import { CoffeeProps } from "../pages/Components/Home/CoffeCard";
import {produce} from 'immer'

export interface CartItem extends CoffeeProps {
    quantity:number;

}

interface CartContextType{
    cartItens: CartItem[];
    addCoffeeNoCarrinho: (coffee:CartItem) => void;
}

interface CartContextProviderProps {
    children: ReactNode;
}
export const CartContext = createContext({} as CartContextType);

export function CartContextProvider ({children}:CartContextProviderProps){
    const [cartItens, setCartItens] = useState<CartItem []>([])

    function addCoffeeNoCarrinho (coffee:CartItem){
        const coffeeexistentenocarrinho = cartItens.findIndex(
            (cartItem) => cartItem.id === coffee.id
        )
        const newCart= produce(cartItens,(draft) =>{
            if (coffeeexistentenocarrinho < 0) {
                draft.push(coffee)
            }else {
                draft[coffeeexistentenocarrinho].quantity += coffee.quantity
            }
        })

        setCartItens (newCart)
    }
    return(
        <CartContext.Provider value={{cartItens, addCoffeeNoCarrinho}}>
            {children}
        </CartContext.Provider>
    )
}