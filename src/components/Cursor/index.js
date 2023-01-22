import { TbCursorText } from "react-icons/tb";
import { HiLink } from "react-icons/hi";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";

const Trailer = styled.div`
    height: 25px;
    width: 25px;
    background-color: ${(props) => (props.interacting ? "transparent" : "white")};
    border-radius: 25px;

    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 10000;

    pointer-events: none;
    /* opacity: ${(props) => (props.interacting ? "0" : "1")}; */
    transition: all 500ms ease;

    display: grid;
    place-items: center;
    cursor: none;
    color: white;
    text-shadow: 1px 1px 1px 1px red;
`;

export const Cursor = () => {
    const [icon, setIcon] = useState(null);
    const [interacting, setInteracting] = useState(false);
    const TrailerRef = useRef(null);

    const textEls = new Set(["H1", "H2", "H3", "H4", "H5", "H6", "P", "SPAN", "LI"]);
    const iLinkEls = new Set(["A", "SVG"]);

    const animateTrailer = (e, interacting, trailer) => {
        const x = e.clientX - trailer.offsetWidth / 2,
            y = e.clientY - trailer.offsetHeight / 2;

        const keyframes = {
            transform: `translate(${x}px, ${y}px) scale(${interacting ? 1.5 : 1})`,
        };

        trailer.animate(keyframes, {
            duration: 50,
            fill: "forwards",
        });
    };

    useEffect(() => {
        const trailer = TrailerRef.current;
        window.onmousemove = (e) => {
            animateTrailer(e, interacting, trailer);
            if (textEls.has(e.target.tagName) && icon !== "text") {
                setInteracting(true);
                setIcon("text");
            }
            if (iLinkEls.has(e.target.tagName) && icon !== "link") {
                setInteracting(true);
                setIcon("link");
            }
            if (icon !== null && !iLinkEls.has(e.target.tagName) && !textEls.has(e.target.tagName)) {
                setInteracting(false);
                setIcon(null);
            }
        };

        return () => {
            // second;
        };
    });

    return (
        <Trailer interacting={interacting} ref={TrailerRef}>
            {icon === "text" ? <TbCursorText /> : icon === "link" ? <HiLink /> : null}
        </Trailer>
    );
};
