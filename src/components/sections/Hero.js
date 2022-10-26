import styled from "styled-components";

const HeroSection = styled.section`
    min-height: 100vh;
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
        margin-top: 2rem;
    }
`;

export const Hero = () => {
    return (
        <HeroSection>
            <h2>Hallo, ich bin</h2>
            <h1>Nicholas</h1>
            <h3>Ich baue Webseiten.</h3>
            <p>
                Ich bin Frontend (und manchmal auch Backend) Entwickler aus Saarbrücken, <br /> spezialisiert auf&apos;s Bauen und Entwerfen von Webseiten, <br /> Applikationen und allem, was
                dazwischen liegt.
            </p>
        </HeroSection>
    );
};

export default Hero;
