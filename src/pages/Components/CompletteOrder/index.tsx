
import { SelectCoffee } from "../SelectCoffees";
import { CompleteOrderForm } from "./CompleteOrderForm";
import { CompleteOrderContainer } from "./style";
import * as zod from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import {useForm, FormProvider} from 'react-hook-form'

const confirmOrderFormValidation = zod.object({
    cep: zod.string().min(1,"Informe um CEP válido"),
    street: zod.string().min(1,"Informa a Rua"),
    number: zod.string().min(1,"Informe o Número"),
    complement: zod.string(),
    district:zod.string().min(1,"Informe o Bairro"),
    city: zod.string().min(1, "Informe a Cidade"),
    uf: zod.string().min(1,"Informe a UF")

})
export type OrderData = zod.infer <typeof confirmOrderFormValidation> 
type ConfirmOrderFormData = OrderData
export function CompleteOrder (){
    const confirmOrderForm = useForm<ConfirmOrderFormData>({
        resolver: zodResolver(confirmOrderFormValidation)
    })
const {handleSubmit}=confirmOrderForm
function handleConfirmOrder (data:ConfirmOrderFormData){
console.log(data)
}
    return (
        <FormProvider {...confirmOrderForm}>
        <CompleteOrderContainer className="container" onSubmit={handleSubmit(handleConfirmOrder)} >
             <CompleteOrderForm/>
             <SelectCoffee/>
        </CompleteOrderContainer >
        </FormProvider>
    )
}