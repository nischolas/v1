import styled from "styled-components";
import { useEffect, useState, useRef } from "react";

const BgContainer = styled.div`
    position: fixed;
    --pers: 400px;
    perspective: var(--pers);
    display: flex;
    align-items: flex-end;
    width: 100vw;
    height: 100vh;
    bottom: 0;
    z-index: -99999;
`;
const BgMoving = styled.div`
    --rotation: ${(props) => props.rotation}deg;
    --translation: ${(props) => props.translation}vh;
    transform: rotateX(var(--rotation)) translateY(var(--translation));
    position: relative;
    width: 100%;
    height: 90%;
    opacity: 0.5;
    background-image: radial-gradient(red 0.1rem, transparent 0);
    background-size: 40px 40px;
    background-position: 35px 35px;
    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(to bottom, var(--navy), rgba(0, 0, 0, 0) 50%);
    }
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
