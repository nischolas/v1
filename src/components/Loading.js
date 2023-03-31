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
    /* background-color: red; */
    display: flex;
    justify-content: flex-start;
    align-items: center;
    div {
        /* background-color: blue; */
        width: 0;
        height: 100vh;
        animation: ${loading} ${(props) => props.loadingDuration}ms ease-in-out forwards;
        background: linear-gradient(90deg, var(--navy) 0%, var(--light-navy) 100%);
        background-position: center 0%;
        z-index: 99999999;
    }
`;

export const Loading = ({ loadingDuration }) => {
    return (
        <StyledLoadingWrapper loadingDuration={loadingDuration}>
            <div></div>
        </StyledLoadingWrapper>
    );
};
