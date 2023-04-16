import styled, { keyframes } from "styled-components";
import { useEffect, useRef } from "react";
import { fade } from "src/styles/variables";

const wobble = keyframes`
    from {
        border-radius: 20% 80% 80% 20% / 20% 20% 80% 80%;
    }
    33% {
        border-radius: 60% 40% 20% 80% / 60% 60% 40% 40%;
    }
    66% {
        border-radius: 50% 50% 50% 50% / 50% 40% 60% 50%;
    }
    to {
        border-radius: 20% 80% 80% 20% / 20% 20% 80% 80%;
    }
`;
const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const Shadow = styled.div`
    height: 300px;
    width: 300px;
    border-radius: 100%;
    background: linear-gradient(90deg, var(--color-accent) 0%, var(--color-accent-secondary) 100%);
    opacity: 0.2;
    animation: ${wobble} 3s linear infinite, ${spin} 12s linear infinite;
    z-index: -9999;
    filter: blur(50px);
`;

const Trailer = styled.div`
    position: relative;

    width: 500px;
    height: 500px;

    position: fixed;
    z-index: -999;

    pointer-events: none;
    transition: all 500ms ease;

    display: grid;
    place-items: center;

    ${fade(16)}

    @media (max-width: 768px) {
        display: none;
    }
`;

export const Cursor = () => {
    const TrailerRef = useRef(null);

    const animateTrailer = (e, trailer) => {
        const x = e.clientX - trailer.offsetWidth / 2,
            y = e.clientY - trailer.offsetHeight / 2;

        const keyframes = {
            transform: `translate(${x}px, ${y}px)`,
        };

        trailer.animate(keyframes, {
            duration: 2000,
            fill: "forwards",
        });
    };

    useEffect(() => {
        const trailer = TrailerRef.current;
        window.onmousemove = (e) => {
            animateTrailer(e, trailer);
        };
    });

    return (
        <Trailer ref={TrailerRef}>
            <Shadow />
        </Trailer>
    );
};
