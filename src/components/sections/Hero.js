import styled from "styled-components";
import { FaPaperPlane } from "react-icons/fa";
import { CtaBtn } from "@components/CtaBtn";
import { textOnBg, fade } from "src/styles/variables";

const HeroSection = styled.section`
    min-height: 100vh;
    max-width: 55ch;
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
        color: var(--white);
        font-weight: 800;
        ${fade(6)};
    }

    h3 {
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

export const Hero = () => {
    return (
        <HeroSection id="start">
            <h2>Hallo, ich bin</h2>
            <h1>Nicholas</h1>
            <h3>Ich baue Webseiten.</h3>
            <p>Ich bin Frontend (und manchmal auch Backend) Entwickler aus Saarbrücken, spezialisiert auf&apos;s Bauen und Entwerfen von Webseiten, Applikationen und allem, was dazwischen liegt.</p>
            <CtaBtn href={"mailto:hallo@nicholas-schneider.de"}>
                Sag hallo!
                <FaPaperPlane />
            </CtaBtn>
        </HeroSection>
    );
};

export default Hero;
