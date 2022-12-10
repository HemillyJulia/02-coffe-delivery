import { HeaderButtons, HeaderButtonsBox, HeaderContainer } from "./styles";
import logocoffe from '../../assets/logocoffe.svg'
import {MapPin,ShoppingCart} from 'phosphor-react'
import { NavLink } from "react-router-dom";

export function Header (){
    return (
    <HeaderContainer>
        <div className="container">
            <NavLink to="/">
       <img src={logocoffe} alt='Coffe Delivery'/>
       </NavLink>
       
       <HeaderButtonsBox>

       <HeaderButtons variant='purple'>
        <MapPin size={20} weight='fill'/>
        Porto Alegre,Rs
       </HeaderButtons>
       
       <NavLink to='/completeOrder'>
       <HeaderButtons variant='yellow'>
        <ShoppingCart size={20} weight='fill'/>
        </HeaderButtons>
        </NavLink>

        </HeaderButtonsBox>
       </div>
     
    </HeaderContainer>
    
        )
}