import styled from "styled-components";
import { BoxBaseStyle } from "../CompletteOrder/style";

export const SelectCoffeesBox = styled.div`

display:flex;
flex-direction:column;
gap:0.75rem;
width:40rem;

`;

export const DetailsBox = styled(BoxBaseStyle)`
border-radius: 6px 44px 6 px 44px;
display:flex;
flex-direction:column;
`
export const ConfirmationSectionBox = styled.div`
display:flex;
flex-direction:column;
gap: 0.8rem;

> div{
display:flex;
align-items:center;
justify-content:space-between;
}


`
