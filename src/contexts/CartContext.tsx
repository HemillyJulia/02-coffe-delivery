import { createContext, ReactNode, useState } from "react";
import { CoffeeProps } from "../pages/Components/Home/CoffeCard";
import {produce} from 'immer'

export interface CartItem extends CoffeeProps {
    quantity:number;

}

interface CartContextType{
    cartItens: CartItem[];
    cartQuantity:number;
    addCoffeeNoCarrinho: (coffee:CartItem) => void;
    mudarQuantidadeItemDoCarrinho:(cartItemId:number, type:'onAumentar' | 'onDiminuir') => void;
}

interface CartContextProviderProps {
    children: ReactNode;
}
export const CartContext = createContext({} as CartContextType);

export function CartContextProvider ({children}:CartContextProviderProps){
    const [cartItens, setCartItens] = useState<CartItem []>([])

    const cartQuantity = cartItens.length

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
    function mudarQuantidadeItemDoCarrinho (
        cartItemId:number,
        type: 'onAumentar' | 'onDiminuir'){
        const newCart = produce(cartItens,(draft) => {
           const coffeeExistenteNoCarrinho = cartItens.findIndex(
            (cartItem) => cartItem.id === cartItemId
           );
           if(coffeeExistenteNoCarrinho >= 0 ) {
            const item = draft[coffeeExistenteNoCarrinho];
            draft[coffeeExistenteNoCarrinho].quantity=
            type === 'onAumentar' ? item.quantity + 1 : item.quantity -1 
           }
        })
        setCartItens (newCart)
    }
    return(
        <CartContext.Provider value={{cartItens,cartQuantity, addCoffeeNoCarrinho, mudarQuantidadeItemDoCarrinho}}>
            {children}
        </CartContext.Provider>
    )
}