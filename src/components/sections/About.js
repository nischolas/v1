import { Headline } from "@components/Headline";
import styled from "styled-components";
import { glassStyle } from "../../styles/variables";

const AboutWrapper = styled.div`
    margin-top: 10rem;

    .split {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 200px min-content 200px;
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
        font-weight: 700;
        @media (max-width: 768px) {
            font-size: 1rem;
        }

        padding: 1.6rem;
        padding-right: 20%;
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
        place-self: center;
        max-width: 80%;
        grid-area: 1 / 3 / 4 / 5;
        @media (max-width: 768px) {
            grid-area: 1 / 3 / 2 / 5;
        }
        img {
            filter: drop-shadow(0px -2px 10px var(--dark-navy));
            clip-path: inset(0 0 0 0 round 0% 0% 20% 20%);
            width: 100%;
            max-width: 100%;
            height: auto;
            @media (max-width: 768px) {
            }
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
                    <div className="person">
                        <div className="container">
                            <div className="container-inner">
                                <img className="circle" />
                                <img src="img/portrait.png" alt="" />
                            </div>
                        </div>

                        {/* <div className="name">Nicholas</div>
                        <div className="title">Frontend-Entwickler</div> */}
                    </div>
                </div>
            </div>
        </AboutWrapper>
    );
};
