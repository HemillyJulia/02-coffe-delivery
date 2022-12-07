import { HeaderButtons, HeaderButtonsBox, HeaderContainer } from "./styles";
import logocoffe from '../../assets/logocoffe.svg'
import {MapPin,ShoppingCart} from 'phosphor-react'

export function Header (){
    return (
    <HeaderContainer>
        <div className="container">
       <img src={logocoffe} alt='Coffe Delivery'/>
       <HeaderButtonsBox>

       <HeaderButtons variant='purple'>
        <MapPin size={20} weight='fill'/>
        Porto Alegre,Rs
       </HeaderButtons>
       
       <HeaderButtons variant='yellow'>
        <ShoppingCart size={20} weight='fill'/>
        </HeaderButtons>

        </HeaderButtonsBox>
       </div>
     
    </HeaderContainer>
    
        )
}