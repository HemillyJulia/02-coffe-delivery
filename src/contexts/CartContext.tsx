import { createContext, ReactNode, useEffect, useState } from "react";
import { CoffeeProps } from "../pages/Components/Home/CoffeCard";
import {produce} from 'immer'

export interface CartItem extends CoffeeProps {
    quantity:number;

}

interface CartContextType{
    cartItens: CartItem[];
    cartQuantity:number;
    cartItensTotal:number
    addCoffeeNoCarrinho: (coffee:CartItem) => void;
    mudarQuantidadeItemDoCarrinho:(cartItemId:number, type:'onAumentar' | 'onDiminuir') => void;
    removeCartItem: (cartItemId:number) => void;
    cleanCart: () => void
}

interface CartContextProviderProps {
    children: ReactNode;
}
const COFFEE_ITENS_STORAGE_KEY ="coffeeDelivery:cartItens"

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider ({children}:CartContextProviderProps){
    const [cartItens, setCartItens] = useState<CartItem[]> (() => {
        const storedCartItens = localStorage.getItem(COFFEE_ITENS_STORAGE_KEY)
        if (storedCartItens) {
            return JSON.parse(storedCartItens)
        } return[]
    })

    const cartQuantity = cartItens.length

        // O reduce abaixo iá funcionar da seguinte maneira: Vai receber uma função que contém dois parãmetros
        // o total e o item atual ... A minha soma irá começar em 0
    const cartItensTotal = cartItens.reduce((total, cartItem) => {
        return total + cartItem.price * cartItem.quantity
    }, 0)

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
    function cleanCart(){
        setCartItens([])
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
    function removeCartItem (cartItemId:number) {
        const newCart = produce(cartItens,(draft) => {
            const coffeeExistenteNoCarrinho = cartItens.findIndex(
             (cartItem) => cartItem.id === cartItemId
            );  
            if (coffeeExistenteNoCarrinho >=0){
                draft.splice (coffeeExistenteNoCarrinho,1)
            }
    })
    setCartItens (newCart)
}
useEffect (() => {
    localStorage.setItem(COFFEE_ITENS_STORAGE_KEY, JSON.stringify(cartItens))
},[cartItens])
    return(
        <CartContext.Provider value={{
            cartItens,
            cartQuantity, 
            cartItensTotal,
            addCoffeeNoCarrinho,
             mudarQuantidadeItemDoCarrinho,
             removeCartItem,cleanCart}}>
            {children}
        </CartContext.Provider>
    )}
