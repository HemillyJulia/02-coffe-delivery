import { Header } from "../../../components/Header";
import { RegularText, TitleText } from "../../../components/Tipografias";
import { OrderConfirmedBox, OrderDetailsBox } from "./styles";
import logomoto from '../../../assets/logomoto.png'

export function OrderConfirmed (){
    return (
       <OrderConfirmedBox className="container">
        <div>
          <TitleText size="l">Pedido Confirmado!</TitleText>
          <RegularText size="l" color="subtitle">
            Agora é só aguardar que logo o café chegará até você.
          </RegularText>
        </div>
        <section>
        <OrderDetailsBox>
          <p> Teste </p>
        </OrderDetailsBox>
        <img src={logomoto}/>
        </section>
        
       </OrderConfirmedBox>
    )
}