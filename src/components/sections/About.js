import { Headline } from "@components/Headline";
import styled from "styled-components";
import { glassStyle } from "../../styles/variables";
import Image from "next/image";

const AboutWrapper = styled.div`
    margin-top: 10rem;

    .split {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 100px min-content 100px;
        gap: 0px 0px;
        h2 {
            grid-area: 1 / 1 / 2 / 4;
            place-self: end start;
            z-index: 3;
            @media (max-width: 768px) {
                grid-area: 1 / 1 / 2 / 3;
            }
        }
    }

    .about-text {
        ${glassStyle};
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-right-width: 0px;
        font-weight: 700;
        @media (max-width: 768px) {
            font-size: 1rem;
        }

        padding: 1.6rem;
        line-height: 1.6;
        grid-area: 2 / 1 / 3 / 4;
        @media (max-width: 768px) {
            padding-right: 1.6rem;
            z-index: 2;
            grid-area: 2 / 1 / 4 / 5;
        }

        .tools-wrapper {
            display: flex;
            gap: 2rem;
            @media (max-width: 768px) {
                gap: 0rem;
            }

            ul {
                list-style-type: none;
                li {
                    display: flex;
                    align-items: center;
                    gap: 0.3em;
                    &::before {
                        content: "❯";
                        font-size: 1rem;
                        color: var(--slate);
                    }
                }
            }
        }
    }

    .about-img {
        z-index: 1;
        /* place-self: center; */
        grid-area: 1 / 4 / 4 / 6;
        border-radius: 30px;
        overflow: hidden;
        position: relative;
        ${glassStyle};
        background: rgba(255, 255, 255, 0.7);

        &:hover {
            &::before {
                opacity: 0;
            }
        }
        &::before {
            content: "";
            /* z-index: 1; */
            position: absolute;
            background-color: var(--navy);
            width: 100%;
            height: 100%;
            /* mix-blend-mode: color; */
            opacity: 0.5;
            transition: var(--transition);
        }

        @media (max-width: 768px) {
            grid-area: 1 / 3 / 2 / 5;
        }
        img {
            filter: drop-shadow(-30px -0px 40px #10141980);
        }
    }
`;

export const About = () => {
    return (
        <AboutWrapper id="ueber-mich">
            <div className="split">
                <Headline text="Über mich" />
                <div className="about-text">
                    <p>
                        Herzlich willkommen auf meiner Webseite! Ich bin ein gelernter Mediengestalter aus Saarbrücken und habe mir in meiner Freizeit selbst die Welt der Webentwicklung beigebracht.
                        Ich liebe es, neue Technologien und Entwicklungen in diesem Bereich zu erforschen und anzuwenden.
                    </p>
                    <br />
                    <p>Diese Tools habe ich kürzlich benutzt:</p>
                    <div className="tools-wrapper">
                        <ul>
                            <li>Javascript (ES6+)</li>
                            <li>React</li>
                            <li>Next.js</li>
                            <li>Astro JS</li>
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
                    <Image src={"/img/portrait.png"} layout="fill" objectFit="cover" alt="Portrait Nicholas Schneider" />
                </div>
            </div>
        </AboutWrapper>
    );
};
