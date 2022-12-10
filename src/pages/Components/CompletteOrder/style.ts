import styled from "styled-components";

export const CompleteOrderContainer = styled.form`
margin-top: 2.5rem;
display:flex;
justify-content:space-between;
gap:2rem;

`;

//abaixo, fundo do meu formulário
export const BoxBaseStyle = styled.div`
width:100%;
background:${({theme}) => theme.colors["base-card"]};
border-radius: 6px;
padding:2.5rem;

`;