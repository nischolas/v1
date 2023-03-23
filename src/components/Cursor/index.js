import { TbCursorText } from "react-icons/tb";
import { HiLink } from "react-icons/hi";
import styled, { keyframes } from "styled-components";
import { useEffect, useRef, useState } from "react";

const wobble = keyframes`
    from{
    border-radius: 20% 80% 80% 20% / 20% 20% 80% 80%;
  }
  33%{
    border-radius: 60% 40% 20% 80% / 60% 60% 40% 40%;
  }
  66%{
    border-radius: 50% 50% 50% 50% / 50% 40% 60% 50%;
  }
  to{
    border-radius: 20% 80% 80% 20% / 20% 20% 80% 80%;
  }
`;
const spin = keyframes`
    from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

const Shadow = styled.div`
    height: 300px;
    width: 300px;
    /* filter: blur(50px); */
    border-radius: 100%;
    background: linear-gradient(90deg, var(--red) 0%, var(--blue) 100%);
    opacity: 0.2;
    animation: ${wobble} 3s linear infinite, ${spin} 12s linear infinite;
    z-index: -9999;
    filter: blur(50px);
`;

const Trailer = styled.div`
    /* background-color: ${(props) => (props.isInteracting ? "transparent" : "white")}; */

    position: relative;

    width: 500px;
    height: 500px;

    position: fixed;
    z-index: -999;

    pointer-events: none;
    transition: all 500ms ease;

    display: grid;
    place-items: center;

    @media (max-width: 768px) {
        display: none;
    }
    /* &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        backdrop-filter: blur(50px);
    } */
`;

export const Cursor = () => {
    const [icon, setIcon] = useState(null);
    const [isInteracting, setIsInteracting] = useState(false);
    const TrailerRef = useRef(null);

    const textEls = new Set(["H1", "H2", "H3", "H4", "H5", "H6", "P", "SPAN", "LI"]);
    const iLinkEls = new Set(["A", "SVG"]);

    const animateTrailer = (e, isInteracting, trailer) => {
        const x = e.clientX - trailer.offsetWidth / 2,
            y = e.clientY - trailer.offsetHeight / 2;

        const keyframes = {
            transform: `translate(${x}px, ${y}px) scale(${1})`,
        };

        trailer.animate(keyframes, {
            duration: 2000,
            fill: "forwards",
        });
    };

    useEffect(() => {
        const trailer = TrailerRef.current;
        window.onmousemove = (e) => {
            animateTrailer(e, isInteracting, trailer);
        };

        return () => {
            // second;
        };
    });

    return (
        <Trailer isInteracting={isInteracting} ref={TrailerRef}>
            {/* {icon === "text" ? <TbCursorText /> : icon === "link" ? <HiLink /> : null} */}
            <Shadow />
        </Trailer>
    );
};
