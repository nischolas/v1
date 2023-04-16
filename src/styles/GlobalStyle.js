import { createGlobalStyle, css } from "styled-components";
import variables from "./variables";

// css`` inside CGS is a workaround for formatting createGlobalStyle
export const GlobalStyle = createGlobalStyle`${css`
    * {
        margin: 0;
        padding: 0;
    }

    ${variables}

    html {
        box-sizing: border-box;
        width: 100%;
        scroll-behavior: smooth;
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        width: 100%;
        min-height: 200vh;
        overflow-x: hidden;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        background-color: var(--color-main);
        font-family: "Nunito";
        font-size: var(--fz-xl);
        line-height: 1.3;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    @media (prefers-color-scheme: dark) {
        html {
            color-scheme: dark;
        }
    }
`}`;
