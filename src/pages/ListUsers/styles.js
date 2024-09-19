import styled from "styled-components";

export const TopBackground = styled.div`
    background-color: #f0f0f0; /* Cor de fundo */
    height: 200px; /* Altura do fundo */
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 24px; /* Tamanho da fonte */
    color: #333; /* Cor do texto */
`

export const Button = styled.button`
    border: none;
    background: linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%);
    font-size: 16px;
    color: #fff;
    padding: 16px 32px;
    width: fit-content;
    cursor: pointer;
    border-radius: 30px;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.5;
    }
`

