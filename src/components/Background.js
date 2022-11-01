import styled from "styled-components";
import { useEffect, useState, useRef } from "react";

const BgContainer = styled.div`
    position: fixed;
    --pers: 400px;
    perspective: var(--pers);
    width: 100vw;
    height: 100vh;
    bottom: 0;
    z-index: -99999;
`;
const BgMoving = styled.div`
    --rotation: ${(props) => props.rotation}deg;
    --translation: ${(props) => props.translation}vh;
    transform: rotateX(var(--rotation)) translateY(var(--translation));
    width: 100%;
    height: 100%;
    opacity: 0.5;
    background-image: radial-gradient(red 1px, transparent 0);
    background-size: 3vw 3vw;
    background-position: 2.5vw 2.5vw;
`;

export const Background = () => {
    const [rotation, setRotation] = useState(0);
    const [translation, setTranslation] = useState(0);
    const getMinToMaxPercent = (percent, min, max) => {
        let range = max - min;
        let x = (range / 100) * percent;
        return min + x;
    };

    const scrolling = () => {
        let html = document.documentElement;
        let body = document.body;
        let pageHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        let scrollTop = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        let viewportHeight = window.innerHeight;

        let range = pageHeight - viewportHeight;
        let percentScrolled = (scrollTop / range) * 100;

        setRotation(getMinToMaxPercent(percentScrolled, 0, 70));
        setTranslation(getMinToMaxPercent(percentScrolled, 0, 30));
    };
    useEffect(() => {
        window.addEventListener("scroll", scrolling);
        return () => {
            window.removeEventListener("scroll", scrolling);
        };
    });

    return (
        <BgContainer>
            <BgMoving rotation={rotation} translation={translation} />
        </BgContainer>
    );
};
