import { createGlobalStyle, css } from "styled-components";
import variables from "./variables";

// Workaround for formatting createGlobalStyle
export const GlobalStyle = createGlobalStyle`${css`
    @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;800&display=swap");
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

    ::selection {
        background-color: var(--lightest-navy);
        color: var(--lightest-slate);
    }

    body {
        margin: 0;
        width: 100%;
        min-height: 200vh;
        overflow-x: hidden;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        background-color: var(--navy);
        color: var(--slate);
        font-family: "Nunito";
        font-size: var(--fz-xl);
        line-height: 1.3;
    }
`}`;
