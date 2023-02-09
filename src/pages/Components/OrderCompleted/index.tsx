import { RegularText, TitleText } from "../../../components/Tipografias";
import { OrderConfirmedBox, OrderDetailsBox } from "./styles";
import logomoto from '../../../assets/logomoto.png'
import { MapPin, Clock, CurrencyDollar } from "phosphor-react";
import { InfoComIconBox } from "../../../components/IconesBeneficios/style";
import { useTheme } from "styled-components";
import { IconesBeneficios } from "../../../components/IconesBeneficios";
import { useLocation, useNavigate } from "react-router-dom";
import { OrderData } from "../CompletteOrder";
import { paymentMethods } from "../CompletteOrder/PaymentOptions";
import { useEffect } from "react";

interface LocationType {
  state:OrderData
}

export function OrderConfirmed (){
  const {colors} = useTheme()

  const {state} = useLocation() as unknown as LocationType
  const navigate = useNavigate()
  useEffect(() => {
    if(!state){
      navigate("/")
    }
  },[])
  if (!state) return <></>
  console.log(state)
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
              Entrega em <strong>{state.street}, {state.number}</strong>
              <br/>
              {state.district} - {state.city}, {state.uf}
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
            <strong>{paymentMethods[state.paymentMethod].label}</strong>
            </RegularText>
          }
          />
        </OrderDetailsBox>
        <img src={logomoto}/>
        </section>
        
       </OrderConfirmedBox>
    )
}