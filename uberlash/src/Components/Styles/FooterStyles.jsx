import styled from "styled-components";

export const Top_Footer = styled.div`
    height: 25%;
    width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;

    div {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    img {
        width: 2.5rem;
        border: 1px solid gray;
    }
`

export const Infos = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 5rem;

    div {
        display: flex;
        flex-direction: column;
        gap: 0.275rem;
    }
    
    img {
        width: 32px;
    }

    a {
        display: inline-block;
        position: relative;
  }
    a::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 1px;
        bottom: 0;
        left: 0;
        background-color: black;
        transform: scaleX(0);
        transform-origin: bottom center;
        transition: transform 0.25s ease-out;
    }

    a:hover::after {
        transform: scaleX(1);
    }
`

export const Bottom_Footer = styled.div`
    height: 25%;
    width: 100%;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    background-color: #b6b6b6;
    display: flex;
    justify-content: center;
    padding: 2rem;
`