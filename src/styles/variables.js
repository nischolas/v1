import { css, keyframes } from "styled-components";

const variables = css`
    :root {
        --color-main: #101419;
        --color-main-lighter: #10101a;
        --color-main-lightest: #8892b0;
        --color-white: #e6f1ff;
        --color-accent: #00f;
        --color-accent-alt: #c40467;
        --color-accent-secondary: #47c2ff;
        --shadow: rgba(2, 12, 27, 0.9);

        --fz-xxs: 0.75rem;
        --fz-md: 1rem;
        --fz-xl: 1.25rem;
        --fz-xxl: 1.375rem;
        --fz-heading: 2rem;

        --padding-outer: 3rem;
        --padding-inner: clamp(8rem, 10vw, 10rem);

        --padding-mobile: 1rem;

        --border-radius: 0.5rem;
        --border-radius-lg: 1rem;

        --nav-height: 6.25rem;
        --nav-scroll-height: 4.375rem;

        --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
        --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        @media (max-width: 1600px) {
            font-size: 14px;
        }
    }
`;

export const glassStyle = css`
    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.1);
    border-radius: var(--border-radius);
    box-shadow: 0 0.25rem 2rem rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.31);
    color: var(--color-white);
`;

export const textOnBg = css`
    text-shadow: 0px 0px 0.25rem var(--color-main), 0px 0px 0.25rem var(--color-main), 0px 0px 0.25rem var(--color-main), 0.25rem 0.25rem 10px var(--color-main),
        0.25rem -0.25rem 10px var(--color-main), -0.25rem -0.25rem 10px var(--color-main), -0.25rem 0.25rem 10px var(--color-main);
`;

const fadeIn = keyframes`
    from { transform: translateY(2rem); opacity:0; }
    to { transform: translateY(0); opacity:1; }
`;

export const loadingDuration = process.env.NODE_ENV === "production" ? 1700 : 200;
export const cmsUrl = process.env.NODE_ENV === "production" ? "https://admin.nicholas-schneider.de" : "http://localhost:1337";

export const loadingAni1Duration = loadingDuration / 1.7;
export const loadingAni2Duration = loadingDuration / 3.4;
export const loadingAni2Delay = loadingDuration / 1.41;

export const fade = (pos = 0) => {
    const timeDifference = 85;
    return css`
        opacity: 0;
        transform: translateY(2rem);
        animation-name: ${fadeIn};
        animation-fill-mode: forwards;
        animation-duration: 1s;
        animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
        animation-delay: ${timeDifference * pos}ms;
    `;
};

export default variables;
