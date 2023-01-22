import { DotTarget } from "@components/FollowingDot";
import { Headline } from "@components/Headline";
import styled from "styled-components";

const AboutWrapper = styled.div`
    margin-top: 10rem;

    .split {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 200px min-content 200px;
        gap: 0px 0px;
        @media (max-width: 768px) {
            flex-direction: column;
        }
    }

    .about-text {
        /* From https://css.glass */
        background: rgba(255, 255, 255, 0.33);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(7.5px);
        -webkit-backdrop-filter: blur(7.5px);
        border: 1px solid rgba(255, 255, 255, 0.31);
        color: var(--dark-navy);
        font-weight: 700;

        padding: 25px;
        padding-right: 20%;
        grid-area: 2 / 1 / 3 / 4;

        @media (max-width: 768px) {
            margin-bottom: 2rem;
        }
    }

    .about-img {
        grid-area: 1 / 3 / 4 / 5;
        z-index: 1;
        place-self: center;
        max-width: 80%;
        img {
            mix-blend-mode: multiply;
            filter: grayscale(0%) contrast(100%) brightness(100%);
            width: 100%;
            max-width: 100%;
            height: auto;
            clip-path: inset(0 0 0 0 round 5% 5% 50% 50%);
        }
    }
`;

export const About = () => {
    return (
        <AboutWrapper id="ueber-mich">
            <Headline text="Über mich" />

            <div className="split">
                <div className="about-text">
                    <p>
                        Herzlich willkommen auf meiner Webseite! Ich bin ein gelernter Mediengestalter aus Saarbrücken und habe mir in meiner Freizeit selbst die Welt der Webentwicklung beigebracht.
                        Ich liebe es, neue Technologien und Entwicklungen in diesem Bereich zu erforschen und anzuwenden. In meiner Freizeit genieße ich die Natur, was mich inspiriert und mir dabei
                        hilft, kreative Lösungen für Projekte zu finden.
                        <br />
                        Ich freue mich darauf, meine Fähigkeiten in Deinem Projekt einzubringen und gemeinsam mit Dir erfolgreich zu sein.
                    </p>
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
