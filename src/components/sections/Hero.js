import styled from "styled-components";
import { FaPaperPlane } from "react-icons/fa";

const HeroSection = styled.section`
    min-height: 100vh;
    max-width: 55ch;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
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
        margin-top: -0.5rem;
        font-weight: 800;
        font-size: clamp(var(--fz-xxl), 3vw, var(--fz-heading));
    }
    p {
        font-weight: 700;
        margin-top: 1rem;
    }
`;

const CtaBtn = styled.a`
    position: relative;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.7rem 1.3rem;
    margin-top: 2rem;
    margin-bottom: 20vh;

    background-color: var(--navy);

    border-radius: var(--border-radius);
    width: fit-content;
    color: var(--red);
    transition: var(--transition);
    font-weight: bold;
    --border-width: 0px;
    background-color: var(--light-navy);

    svg {
        transition: var(--transition);
    }

    &::before {
        content: "";
        transition: var(--transition);
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
        gap: 1rem;
        background-color: var(--navy);
        --border-width: 2px;

        svg {
            transform: scale(1.2);
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
