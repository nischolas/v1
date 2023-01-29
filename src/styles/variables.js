import { css } from "styled-components";

const variables = css`
    :root {
        --dark-navy: #0a0c0f;
        --navy: #101419;
        --light-navy: #202030;
        --lightest-navy: #233554;
        --navy-shadow: rgba(2, 12, 27, 0.7);
        --dark-slate: #495670;
        --slate: #8892b0;
        --light-slate: #a8b2d1;
        --lightest-slate: #ccd6f6;
        --white: #e6f1ff;
        --green: #64ffda;
        --green-tint: rgba(100, 255, 218, 0.1);
        --pink: #f57dff;
        --blue: #47c2ff;
        --red: #dd0033;
        --red2: #c40467;

        --fz-xxs: 12px;
        --fz-xs: 13px;
        --fz-sm: 14px;
        --fz-md: 16px;
        --fz-lg: 18px;
        --fz-xl: 20px;
        --fz-xxl: 22px;
        --fz-heading: 32px;

        --padding-outer: 3rem;
        --padding-inner: clamp(8rem, 10vw, 10rem);

        --padding-mobile: 2rem;

        --bp-mobile: 768px;

        --border-radius: 4px;
        --border-radius-lg: 8px;
        --nav-height: 100px;
        --nav-scroll-height: 70px;

        --tab-height: 42px;
        --tab-width: 120px;

        --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
        --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

        --dot-animation-time: 1s;
        --dot-animation-timing: cubic-bezier(0.6, 0, 0.3, 1);
    }
`;

export const glassStyle = css`
    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.31);

    color: var(--white);
`;

export default variables;
