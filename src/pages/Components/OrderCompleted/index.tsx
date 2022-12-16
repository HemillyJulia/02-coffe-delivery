import { RegularText, TitleText } from "../../../components/Tipografias";
import { OrderConfirmedBox, OrderDetailsBox } from "./styles";
import logomoto from '../../../assets/logomoto.png'
import { MapPin, Clock, CurrencyDollar } from "phosphor-react";
import { InfoComIconBox } from "../../../components/IconesBeneficios/style";
import { useTheme } from "styled-components";
import { IconesBeneficios } from "../../../components/IconesBeneficios";

export function OrderConfirmed (){
  const {colors} = useTheme()
    return (
       <OrderConfirmedBox className="container">
        <div>
          <TitleText size="l"> Uhuu! Pedido Confirmado!</TitleText>
          <RegularText size="l" color="subtitle">
            Agora é só aguardar que logo o café chegará até você.
          </RegularText>
        </div>
        <section>
        <OrderDetailsBox>
          <IconesBeneficios
          icon={<MapPin weight="fill"/>}
          iconBg={colors["brand-purple"]}
          text={
            <RegularText>
              Entrega em <strong>Rua João Daniel Martinelli,102</strong>
              <br/>
              Farrapos - Porto Alegre, RS
            </RegularText>
          }
          />
            <IconesBeneficios
          icon={<Clock weight="fill"/>}
          iconBg={colors["brand-yellow"]}
          text={
            <RegularText>
             Previsão de entrega <br/>
              <strong>20min - 30min</strong>
              Farrapos - Porto Alegre, RS
            </RegularText>
          }
          />
            <IconesBeneficios
          icon={<CurrencyDollar weight="fill"/>}
          iconBg={colors["brand-yellow-dark"]}
          text={
            <RegularText>
            Pagamento na entrega
            <strong>Cartão de crédito</strong>
            </RegularText>
          }
          />
        </OrderDetailsBox>
        <img src={logomoto}/>
        </section>
        
       </OrderConfirmedBox>
    )
}