import { TbCursorText } from "react-icons/tb";
import { HiLink } from "react-icons/hi";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";

const Trailer = styled.div`
    height: 25px;
    width: 25px;
    background-color: white;
    border-radius: 25px;

    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 10000;

    pointer-events: none;
    opacity: 1;
    transition: opacity 500ms ease;

    display: grid;
    place-items: center;
    cursor: none;
`;

export const Cursor = () => {
    const [icon, setIcon] = useState(null);
    const [interacting, setInteracting] = useState(false);
    const TrailerRef = useRef(null);

    const textEls = new Set(["H1", "H2", "H3", "H4", "H5", "H6", "P", "SPAN", "LI"]);
    const iLinkEls = new Set(["A"]);

    const animateTrailer = (e, interacting, trailer) => {
        const x = e.clientX - trailer.offsetWidth / 2,
            y = e.clientY - trailer.offsetHeight / 2;

        const keyframes = {
            transform: `translate(${x}px, ${y}px) scale(${interacting ? 1.3 : 1})`,
        };

        trailer.animate(keyframes, {
            duration: 100,
            fill: "forwards",
        });
    };

    useEffect(() => {
        const trailer = TrailerRef.current;
        window.onmousemove = (e) => {
            animateTrailer(e, interacting, trailer);
            if (textEls.has(e.target.tagName)) {
                setInteracting(true);
                setIcon(<TbCursorText />);
            } else if (iLinkEls.has(e.target.tagName)) {
                setInteracting(true);
                setIcon(<HiLink />);
            } else {
                setInteracting(false);
                setIcon(null);
            }
        };

        return () => {
            // second;
        };
    });

    return <Trailer ref={TrailerRef}>{icon}</Trailer>;
};
