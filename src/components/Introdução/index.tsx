import { BeneficiosBox, ConteudoIntro, IntroBox } from "./styles";
import coffeimage from '../../assets/coffeimage.png'
import { RegularText, TitleText } from "../Tipografias";
import { IconesBeneficios } from "../IconesBeneficios";
import {ShoppingCart, Package, Timer, Coffee} from 'phosphor-react'
import { useTheme } from "styled-components";

export function Introdução (){
  const {colors} = useTheme()
    return (
      <IntroBox>
        <ConteudoIntro className="container">
          <div>
            <section>
              <TitleText size="xl">
              Encontre o café perfeito para qualquer hora do dia
              </TitleText>
              <RegularText size='l' color="subtitle" as='h3'>
              Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
              </RegularText>
            </section>
            <BeneficiosBox>
              <IconesBeneficios 
              iconBg={colors["brand-yellow-dark"]}
              icon={<ShoppingCart weight="fill" />} 
              text={"Compra simples e segura"}/>
            <IconesBeneficios 
              iconBg={colors["base-text"]}
              icon={<Package weight="fill" />} 
              text={"Embalagem mantem o café intacto"}/>
                <IconesBeneficios 
              iconBg={colors["brand-yellow"]}
              icon={<Timer weight="fill" />} 
              text={"Entrega rápida e rastreável"}/>
                    <IconesBeneficios 
              iconBg={colors["brand-purple"]}
              icon={<Coffee weight="fill" />} 
              text={"O café chega fresquinho até você"}/>
            </BeneficiosBox>
          </div>
          <img src={coffeimage}/>
        </ConteudoIntro>
      </IntroBox>
    )
}