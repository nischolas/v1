import { css } from "styled-components";

const variables = css`
    :root {
        --dark-navy: #020c1b;
        --navy: #101419;
        --light-navy: #112240;
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

        --fz-xxs: 12px;
        --fz-xs: 13px;
        --fz-sm: 14px;
        --fz-md: 16px;
        --fz-lg: 18px;
        --fz-xl: 20px;
        --fz-xxl: 22px;
        --fz-heading: 32px;

        --padding-outer: 3rem;
        --padding-inner: 10rem;

        --border-radius: 4px;
        --nav-height: 100px;
        --nav-scroll-height: 70px;

        --tab-height: 42px;
        --tab-width: 120px;

        --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
        --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        --purple: rgb(123, 31, 162);
        --violet: rgb(103, 58, 183);
        --pink: rgb(244, 143, 177);
    }
`;

export default variables;