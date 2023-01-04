import { createContext, ReactNode, useState } from "react";
import { CoffeeProps } from "../pages/Components/Home/CoffeCard";
//import {coffee} from "../../src/pages/Components/Home/CoffeCard"

export interface CartItem extends CoffeeProps {
    quantity:number;

}

interface CartContextType{
    cartItens: CartItem[]
}

interface CartContextProviderProps {
    children: ReactNode;
}
export const CartContext = createContext({} as CartContextType);

export function CartContextProvider ({children}:CartContextProviderProps){
    const [cartItens, setCartItens] = useState<CartItem []>([])
    return(
        <CartContext.Provider value={{cartItens}}>
            {children}
        </CartContext.Provider>
    )
}