import React from "react";

import styled from "styled-components";

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    p {
        display: none;
        font-weight: 700;
        font-size: 1.1rem;
        @media (min-width: 600px) {
            display: inline-block;
        }
    }
    .logo-path {
        animation-timing-function: cubic-bezier(0.27, 0.81, 0.56, 0.99);
        animation-iteration-count: infinite;
        animation-duration: 3s;
    }

    .logo-path-1 {
        animation-name: logopath1;
        transform: translateX(-6px);
    }
    .logo-path-2 {
        animation-name: logopath2;
        opacity: 0.6;
        transform: scale(0.95) translate(2.5px, 2.5px);
    }
    .logo-path-3 {
        animation-name: logopath3;
        transform: translateX(6px);
    }

    @keyframes logopath1 {
        from {
            transform: translateX(-6px);
        }
        50% {
            transform: translateX(0px);
        }
        to {
            transform: translateX(-6px);
        }
    }
    @keyframes logopath2 {
        from {
            transform: scale(0.95) translate(2.5px, 2.5px);
            opacity: 0.6;
        }
        50% {
            transform: scale(1) translate(0px, 0px);
            opacity: 1;
            fill: var(--red);
        }
        to {
            transform: scale(0.95) translate(2.5px, 2.5px);
            opacity: 0.6;
        }
    }
    @keyframes logopath3 {
        from {
            transform: translateX(6px);
        }
        50% {
            transform: translateX(0px);
        }
        to {
            transform: translateX(6px);
        }
    }
`;

const StyledLogo = styled.svg`
    max-width: 2rem;
    path {
        fill: var(--slate);
    }
`;

export const Logo = () => {
    return (
        <LogoContainer>
            <StyledLogo width="100" height="100" className="max-w-xxxs lg:max-w-xxs" id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <path
                    id="L"
                    className="logo-path logo-path-1 "
                    d="M6,50a3.68,3.68,0,0,1,1.15-2.7l15.6-14.93a4.54,4.54,0,0,1,6.06-.09,3.83,3.83,0,0,1,1.26,2.94h0V64.78h0a3.83,3.83,0,0,1-1.26,2.94,4.54,4.54,0,0,1-6.06-.09L7.15,52.7A3.64,3.64,0,0,1,6,50Z"
                />
                <path
                    id="M"
                    className="logo-path logo-path-2 "
                    d="M60.63,65.63V23.13a12.09,12.09,0,0,0-3.15-9.08c-4.22-4.53-10.4-3.53-15.67,0s-8.88,6.18-8.88,8.59c0,4.61,6,3.66,6,11.71v42.5A12.13,12.13,0,0,0,42.13,86c4.23,4.53,10.41,3.53,15.67,0s8.88-6.18,8.88-8.59C66.68,72.73,60.63,73.68,60.63,65.63Z"
                />
                <path
                    id="R"
                    className="logo-path logo-path-3 "
                    d="M92.85,52.7,77.25,67.63a4.54,4.54,0,0,1-6.06.09,3.83,3.83,0,0,1-1.26-2.94h0V35.22h0a3.83,3.83,0,0,1,1.26-2.94,4.54,4.54,0,0,1,6.06.09L92.85,47.3A3.68,3.68,0,0,1,94,50,3.64,3.64,0,0,1,92.85,52.7Z"
                />
            </StyledLogo>
            <p>Nicholas Schneider</p>
        </LogoContainer>
    );
};
