import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        height: 100%;
        background-color: white;
        font-family: Arial, Helvetica, sans-serif;
    }

    h1 {
        font-size: 3rem;
        font-weight: 700;
    }

    h2 {
        font-size: 2.25rem;
        font-weight: 600;
        text-transform: uppercase;
    }

    h3 {
        font-size: 1.875rem;
        font-weight: 600;
    }

    a {
        font-size: 0.875rem;
        font-weight: 400;
    }

    small {
        font-size: 0.875rem;
    }
`;
