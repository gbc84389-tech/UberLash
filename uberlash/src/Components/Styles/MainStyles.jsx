import styled from "styled-components";

export const Products = styled.section`
    min-height: 100vh;
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    place-items: center;
    gap: 1rem;
`

export const Item = styled.div`
    border: 1px solid gray;
    width: 20rem;
    height: 30rem;
    padding-top: 0.5rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    div {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 1rem;

        .Cortado{
            text-decoration: line-through;
            color: gray;
        }

        .Destaque {
            color: red;
        }
    }
`;

export const Carousel = styled.div`
    height: 85vh;
    width: 100%;
    overflow: hidden;
    position: relative;

    div {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;

        button {
            margin: 1rem;
            border-radius: 50%;
            background-color: transparent;
            color: black;
            border: none;
            display: flex;
            align-items: center;
            cursor: pointer;
        }
    }
`;

export const ItemsCarousel = styled.div` 
    display: flex;
    transition: .4s ease;
    transform: translateX(-${({ curr }) => curr * 100}%);
    
    img {
        min-width: 100%;
        object-fit: cover;
    }
`