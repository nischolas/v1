import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { loadingDelay } from "src/styles/variables";

const loading = keyframes`
    0% {
        width: 0%;
    }

    30% {
        width: 30%;
    }

    90% {
        opacity: 1;
        width: 90%;
    }

    100% {
        opacity: 0;
        width: 100%;
    }
`;

const StyledLoadingWrapper = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    /* height: var(--nav-height); */
    background-color: var(--navy);
    /* display: flex; */
    justify-content: flex-start;
    align-items: center;
    z-index: 99;
    display: ${(props) => (props.finishedLoading ? "none" : "flex")};
    &::before {
        content: "";
        width: 30%;
        height: 100%;
        animation: ${loading} ${loadingDelay}ms ease-in-out forwards;
        background: linear-gradient(90deg, var(--navy) 0%, var(--light-navy) 100%);
        background-position: center 0%;
    }
`;

export const Loading = () => {
    const [finishedLoading, setFinishedLoading] = useState(false);
    setTimeout(() => {
        setFinishedLoading(true);
    }, loadingDelay);
    return (
        <StyledLoadingWrapper finishedLoading={finishedLoading} className="loading">
            {/* <p>Loading</p> */}
        </StyledLoadingWrapper>
    );
};
