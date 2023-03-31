import styled, { keyframes } from "styled-components";

const StyledLoadingWrapper = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledLogo = styled.svg`
    width: 20rem;
    path {
        fill: ${(props) => (props.color ? props.color : "var(--red)")};
    }
    .logo-path {
        animation-timing-function: cubic-bezier(0.27, 0.81, 0.56, 0.99);
        animation-duration: 500ms;
        animation-delay: 1700ms;
        animation-fill-mode: forwards;
    }

    animation-name: logoturn;
    animation-fill-mode: forwards;
    animation-duration: 1s;
    animation-delay: 500ms;
    opacity: 0;

    .logo-path-1 {
        animation-name: logopath1;
    }
    .logo-path-2 {
        animation-name: logopath2;
        transform-origin: center;
        opacity: 0.6;
    }
    .logo-path-3 {
        animation-name: logopath3;
    }

    @keyframes logoturn {
        0% {
            opacity: 0;
        }
        40% {
            opacity: 1;
            transform: rotate(0deg);
        }
        100% {
            opacity: 1;
            transform: rotate(360deg) scale(2);
        }
    }

    @keyframes logopath1 {
        from {
            transform: translateX(0px);
        }
        to {
            transform: translateX(-10px);
            opacity: 0;
        }
    }
    @keyframes logopath2 {
        from {
            transform: scale(1);
            opacity: 1;
        }
        to {
            transform: scale(1.2);
            opacity: 0;
        }
    }
    @keyframes logopath3 {
        from {
            transform: translateX(0px);
        }
        to {
            transform: translateX(10px);
            opacity: 0;
        }
    }
`;

export const Loading = ({ loadingDuration }) => {
    return (
        <StyledLoadingWrapper loadingDuration={loadingDuration}>
            <StyledLogo width="100" height="100" id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
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
        </StyledLoadingWrapper>
    );
};
