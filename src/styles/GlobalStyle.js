import { createGlobalStyle, css } from "styled-components";
import variables from "./variables";

// import localFont from "@next/font/local";

// const NunitoWoff = localFont({ src: "../fonts/nunito/nunito-v25-latin-regular.woff" });
// const NunitoWoff2 = localFont({ src: "../fonts/nunito/nunito-v25-latin-regular.woff2" });
// const NunitoLightWoff = localFont({ src: "../fonts/nunito/nunito-v25-latin-200.woff" });
// const NunitoLightWoff2 = localFont({ src: "../fonts/nunito/nunito-v25-latin-200.woff2" });
// const NunitoItalicWoff = localFont({ src: "../fonts/nunito/nunito-v25-latin-italic.woff" });
// const NunitoItalicWoff2 = localFont({ src: "../fonts/nunito/nunito-v25-latin-italic.woff2" });
// const NunitoBoldWoff = localFont({ src: "../fonts/nunito/nunito-v25-latin-800.woff" });
// const NunitoBoldWoff2 = localFont({ src: "../fonts/nunito/nunito-v25-latin-800.woff2" });

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
