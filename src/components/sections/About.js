import { Headline } from "@components/Headline";
import styled from "styled-components";
import { glassStyle } from "src/styles/variables";
import Image from "next/image";
import useIsViewportLessThanWidth from "src/hooks/useIsMobile";

const AboutWrapper = styled.section`
    margin-top: 10rem;

    .split {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 4rem min-content 4rem;

        @media (max-width: 768px) {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: min-content repeat(4, 1fr);
        }
        h2 {
            grid-area: 1 / 1 / 2 / 4;
            place-self: end start;
            z-index: 3;
            @media (max-width: 768px) {
                grid-column: 1 / 3;
                grid-row: 1 / 2;
            }
        }
    }

    .about-text {
        ${glassStyle};
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-right-width: 0px;
        font-weight: 500;

        p {
            margin-bottom: 0.5rem;
        }

        padding: 1.6rem;
        grid-area: 2 / 1 / 3 / 4;
        @media (max-width: 768px) {
            font-size: var(--fz-md);
            padding: 1rem;
            padding-top: 1.6rem;
            z-index: 2;
            grid-column: 1 / 3;
            grid-row: 4 / 6;
            border-bottom-right-radius: var(--border-radius);
            border-top-left-radius: 0;
            border-top-width: 0;
            margin-top: calc(-1 * var(--border-radius));
            border-right-width: 1px;
        }

        .tools-wrapper {
            display: flex;
            gap: 2rem;
            @media (max-width: 768px) {
                gap: 1rem;
            }

            ul {
                list-style-type: none;
                li {
                    display: flex;
                    align-items: center;
                    gap: 0.3em;
                    &::before {
                        content: "❯";
                        font-size: var(--fz-md);
                        color: var(--color-main-lightest);
                    }
                }
            }
        }
    }

    .about-img {
        z-index: 1;
        grid-area: 1 / 4 / 4 / 6;
        overflow: hidden;
        position: relative;
        ${glassStyle};
        border-radius: var(--border-radius-lg);
        background: rgba(255, 255, 255, 0.5);
        transition: var(--transition);

        &:hover {
            background: rgba(255, 255, 255, 0.3);
        }

        @media (max-width: 768px) {
            grid-column: 1 / 3;
            grid-row: 2 / 4;
            z-index: 2;
        }
        img {
            filter: drop-shadow(-30px -0px 40px #10141980);
        }
    }
`;

export const About = () => {
    const isMobile = useIsViewportLessThanWidth();
    return (
        <AboutWrapper id="ueber-mich">
            <div className="split">
                <Headline text="Das bin ich" />
                <div className="about-text">
                    <p>Hey, ich bin leidenschaftlicher Webentwickler und arbeite daran, das Internet ein bisschen schöner und bedienbarer zu machen.</p>
                    <p>
                        Wenn Du auf der Suche nach einem zuverlässigen und erfahrenen Entwickler bist, der sich auf die Erstellung moderner und funktionaler Websites spezialisiert hat, dann bist Du
                        bei mir genau richtig.
                    </p>
                    <p>Egal ob es sich um eine einfache Landingpage oder eine komplexe Webanwendung handelt - ich stelle sicher, immer das beste Ergebnis abzuliefern.</p>
                    <br />
                    <p>Diese Tools setze ich unter anderem ein:</p>
                    <div className="tools-wrapper">
                        <ul>
                            <li>React</li>
                            <li>Next.js</li>
                            <li>Astro JS</li>
                            <li>Python</li>
                        </ul>
                        <ul>
                            <li>Tailwind CSS</li>
                            <li>Styled Components</li>
                            <li>Node.js</li>
                            <li>Express JS</li>
                        </ul>
                    </div>
                </div>
                <div className="about-img">
                    <Image src={isMobile ? "/img/portrait-mobile.png" : "/img/portrait.png"} layout="fill" objectFit="cover" alt="Portrait Nicholas Mathieu" />
                </div>
            </div>
        </AboutWrapper>
    );
};
