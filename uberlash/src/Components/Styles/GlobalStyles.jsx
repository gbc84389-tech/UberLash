import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        min-height: 100vh;
        background-color: white;
        font-family: Arial, Helvetica, sans-serif;
    }

    header {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        position: sticky;
        top: 0;
        background-color: white;
        z-index: 1000;
    }

    main {
        min-height: 100vh;
        padding: 0 10rem;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    footer {
        min-height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
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
        text-decoration: none;
        color: inherit;
    }

    small {
        font-size: 0.875rem;
    }
`;
