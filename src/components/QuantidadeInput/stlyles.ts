import styled, { css } from "styled-components";

interface QuantidadeInputBoxProps{
    size?: "medium" | "small";
 }

export const QuantidadeInputBox = styled.div<QuantidadeInputBoxProps>`
flex:1;
background:${({theme}) => theme.colors["base-button"]};
display: flex;
align-items:center;
justify-content:space-between;
gap:4px;
border-radius:6px;


input{
    text-align:center;
    width:100%;
    background:none;
    border:none;
    color: ${({theme}) => theme.colors["base-title"]};

    &focus {
        outline:none;
    }
}

//abaixo eu criei uma variação de tamanho para o meu input:
//Se o size for medio, então coloca o seguinte css, se não, coloca o seguinte padding
${({size}) => size === "medium" && 
css`
padding:0.5rem;
`}
${({size}) => size === "small" && 
css`
padding: 0.3rem 0.5rem;
`}
`;

export const IconWrapperSomSub = styled.button.attrs({
    type:"button"
})`

width: 0.875rem;
height:0.875rem;
border:none;
background:none;
color:${({theme}) => theme.colors["brand-purple"]};   
transition:0.4s;

&:disabled {
    opacity:0.4;
}

&:not(:disabled):hover{
    color:${({theme}) => theme.colors["brand-purple-dark"]};
}

`