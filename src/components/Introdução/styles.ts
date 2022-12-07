import styled from "styled-components"
import fundopng from '../../assets/fundo.png'
import { TitleText } from "../Tipografias";

export const IntroBox = styled.section`
width:100%;
height: 34rem;
background: ${() => `url(${fundopng}) no-repet center ` };
background-size:cover;
display:flex;
align-items:center;
justify-content:center;
`;

export const ConteudoIntro = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
gap: 3.5rem;
`;

export const IntroTitle = styled(TitleText)`
margin-bottom: 1rem;
`;
export const BeneficiosBox = styled.div`
width:100%;
display:grid;
grid-template-columns: 1fr 1fr;
row-gap: 1.25rem;
margin-top:4.125rem
`