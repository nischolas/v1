import styled from "styled-components";
import { FaPaperPlane } from "react-icons/fa";

const HeroSection = styled.section`
    min-height: 100vh;
    max-width: 55ch;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2 {
        font-size: clamp(var(--fz-md), 2vw, var(--fz-xxl));
        color: var(--red);
    }
    h1 {
        font-size: clamp(50px, 9vw, 90px);
        color: var(--white);
        font-weight: 800;
    }

    h3 {
        margin-top: -1rem;
        font-weight: 800;
        font-size: clamp(var(--fz-xxl), 3vw, var(--fz-heading));
    }
    p {
        margin-top: 1rem;
    }
`;

const CtaBtn = styled.a`
    position: relative;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem 1rem;
    margin-top: 2rem;
    border-color: transparent;
    background-color: var(--navy);
    border-style: solid;
    border-radius: var(--border-radius);
    width: fit-content;
    color: var(--red);
    transition: var(--transition);
    font-weight: bold;
    --border-width: 0.3rem;
    /* border-image-slice: 1;
    border-image-source: linear-gradient(to right, var(--red), var(--red)); */
    svg {
        transition: var(--transition);
    }
    &::before {
        transition: var(--transition);
        content: "";
        position: absolute;
        background-color: var(--red);
        z-index: -1;
        border-radius: var(--border-radius);
        height: calc(100% + (2 * var(--border-width)));
        width: calc(100% + (2 * var(--border-width)));
        top: calc(-1 * var(--border-width));
        bottom: calc(-1 * var(--border-width));
        left: calc(-1 * var(--border-width));
        right: calc(-1 * var(--border-width));
    }
    &:hover {
        gap: 1.5rem;
        /* border-image-source: linear-gradient(to right, var(--red) 0%, rgba(0, 0, 0, 0) 80%); */
        svg {
            transform: scale(2);
        }
        &::before {
            --border-width: 0.3rem;
            background-color: transparent;
            background-image: linear-gradient(to right, var(--red), rgba(0, 0, 0, 0) 80%);
        }
    }
`;

export const Hero = () => {
    const mailtoLink = "mailto:hallo@nicholas-schneider.de";
    return (
        <HeroSection>
            <h2>Hallo, ich bin</h2>
            <h1>Nicholas</h1>
            <h3>Ich baue Webseiten.</h3>
            <p>
                Ich bin Frontend (und manchmal auch Backend) Entwickler aus Saarbrücken, spezialisiert auf&apos;s Bauen und Entwerfen von Webseiten, <br /> Applikationen und allem, was dazwischen
                liegt.
            </p>
            <CtaBtn href={mailtoLink}>
                Sag hallo!
                <FaPaperPlane />
            </CtaBtn>
        </HeroSection>
    );
};

export default Hero;
