
import { SelectCoffee } from "../SelectCoffees";
import { CompleteOrderForm } from "./CompleteOrderForm";
import { CompleteOrderContainer } from "./style";

export function CompleteOrder (){
    return (
        <CompleteOrderContainer className="container" >
             <CompleteOrderForm/>
             <SelectCoffee/>
        </CompleteOrderContainer >
    )
}