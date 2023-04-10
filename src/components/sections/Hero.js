import styled, { keyframes } from "styled-components";
import { FaPaperPlane } from "react-icons/fa";
import { CtaBtn } from "@components/CtaBtn";
import { textOnBg, fade } from "src/styles/variables";
import { useState, useEffect } from "react";

const HeroSection = styled.section`
    min-height: 100vh;
    /* max-width: 55ch; */
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    h1,
    h2,
    h3,
    p {
        ${textOnBg};
    }
    h2 {
        font-size: clamp(var(--fz-md), 2vw, var(--fz-xxl));
        color: var(--red);
        ${fade(5)};
    }
    h1 {
        font-size: clamp(50px, 9vw, 90px);
        color: var(--light-slate);
        font-weight: 800;
        ${fade(6)};
    }

    h3 {
        color: var(--red);
        margin-top: -0.5rem;
        font-weight: 800;
        font-size: clamp(var(--fz-xxl), 3vw, var(--fz-heading));
        ${fade(7)};
    }
    p {
        font-weight: 700;
        margin-top: 1rem;
        ${fade(8)};
    }
`;

const breatheAnimation = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-10px);
    }
    10% {
        opacity: 1;
        transform: translateX(0px);
    }
    90% {
        opacity: 1;
        transform: translateX(0px);
    }
    100% {
        opacity: 0;
        transform: translateX(30px);
    }
`;

const StyledWord = styled.span`
    animation-name: ${breatheAnimation};
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
    animation-duration: 3000ms;
    color: var(--white);
    display: inline-block;
`;

const WordCycler = ({ words }) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex === words.length - 1 ? 0 : prevIndex + 1));
        }, 3000);

        return () => clearInterval(intervalId);
    }, [words]);

    const currentWord = words[currentWordIndex];

    // key because change -> rerender -> animation restart
    return <StyledWord key={currentWordIndex}>{currentWord}.</StyledWord>;
};

export const Hero = () => {
    const words = ["Webseiten", "Web-Apps", "Interaktivität", "Frontends", "Backends"];
    return (
        <HeroSection id="start">
            <h3>Hallo, ich bin Nicholas</h3>
            <h1 title="Ich baue Webseiten.">Ich baue {<WordCycler words={words} />}</h1>
            <p>
                Ich bin Frontend- und bei Bedarf auch Backend-Entwickler aus Saarbrücken, spezialisiert auf&apos;s Entwerfen und Entwickeln von Webseiten, Applikationen und allem, was dazwischen
                liegt.
            </p>
            <CtaBtn href={"mailto:hallo@nicholas-schneider.de"}>
                Sag hallo!
                <FaPaperPlane />
            </CtaBtn>
        </HeroSection>
    );
};

export default Hero;
