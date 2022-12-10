import styled, { css } from "styled-components";

export const HeaderContainer = styled.header `
width:100%;
height:6.5rem;
background: ${(props) => props.theme.colors["base-background"]};
display:flex;
align-items:center;
justify-content:center;
position: sticky;
top: 0;
left: 0;
z-index: 5;

> div {
    display:flex;
    align-items:center;
    justify-content:space-between;
   }
`;

export const HeaderButtonsBox = styled.div`
display: flex;
align-items:center;
gap: 0.75rem;


`;

interface HeaderButtonProps{
    variant: 'purple' | 'yellow'
}


export const HeaderButtons = styled.button<HeaderButtonProps>`
display:flex;
align-items:center;
justify-content:center;
gap: 4px;
min-width: 2.3rem;
height: 2.3rem;
border-radius: 6px;
border: none;
padding: 0 0.5rem;
position: relative;
font-size: ${(props) => props.theme.textSizes["text-regular-s"]};

//Usando a propriedade que eu criei na interface:

${({variant,theme}) => css`
background: ${theme.colors[`brand-${variant}-light`]};
color:${theme.colors[`brand-${variant}-dark`]};
`}

${({variant,theme}) => variant === 'purple' && css`
color:${theme.colors[`brand-purple`]};

`}

`