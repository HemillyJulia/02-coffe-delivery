import { CoffeList } from "../../../components/CoffeList"
import { Introdução } from "../../../components/Introdução"
import { IntroBox } from "../../../components/Introdução/styles"
import { HomeBox } from "./styled"

export function Home (){
    return (
     <HomeBox> 
      <Introdução/>
      <CoffeList/>
     </HomeBox>
    )
}