import { CtaBtn } from "@components/CtaBtn";
import { Headline } from "@components/Headline";
import { Logo } from "@components/Logo";
import { FaCodepen, FaGithub, FaInstagram, FaPaperPlane, FaSpotify } from "react-icons/fa";
import styled from "styled-components";
import { glassStyle, textOnBg } from "src/styles/variables";

const Container = styled.div`
    padding: 0 var(--padding-inner);
    max-width: 1400px;
    margin: 0 auto;
    @media (max-width: 768px) {
        padding: var(--padding-mobile);
    }
`;

const StyledContact = styled.div`
    margin-top: 20rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
        color: var(--color-white);
        ${textOnBg}
    }
`;

const StyledFooter = styled.footer`
    ${glassStyle};
    margin-top: 0rem;
    padding: 1.5rem;
    font-weight: 700;

    .lists {
        margin-top: 1rem;
        display: grid;
        grid-template-areas: "logo list list list list";
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(1, 1fr);
        @media (max-width: 768px) {
            margin-top: 0rem;
            grid-template-areas: "logo logo" "list list" "list list";
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: 3rem repeat(2, 1fr);
        }
        > * {
            @media (max-width: 768px) {
                font-size: var(--fz-md);
            }
            width: 25%;
        }
        .icon-links {
        }
        svg {
            height: 2rem;
        }

        .social-links {
            width: 100%;
            grid-area: logo;
            display: flex;
            align-items: center;
            align-self: start;
            font-size: var(--fz-xxl);
            justify-content: space-between;
        }

        .icon-links {
            display: flex;
            align-items: center;
            gap: 1.5rem;
            justify-content: space-between;
            @media (min-width: 768px) {
                display: none;
            }
        }

        ul {
            list-style-type: none;
            &:nth-child(2) {
                li {
                    width: min-content;
                }
            }

            li {
                line-height: 1.7;
                font-weight: 800;
                width: max-content;
                a {
                    color: inherit;
                    font-weight: 600;
                    &:hover {
                        text-decoration: underline;
                        color: white;
                    }
                }
            }
            li:first-child {
                @media (max-width: 768px) {
                    margin-bottom: 0.5rem;
                }
                margin-bottom: 0.9rem;
            }
        }
    }
`;

const Credits = styled.p`
    text-align: center;
    color: var(--color-main-lightest);
    margin-top: 3rem;
    margin-bottom: 3rem;
    font-weight: 700;
    ${textOnBg}
`;

export const Footer = () => {
    return (
        <Container>
            <StyledContact>
                <Headline center text="Worauf wartest Du?" />
                <h3>Ich bin immer auf der Suche nach neuen und herausfordernden Projekten.</h3>
                <CtaBtn href="mailto:hallo@nicholas-schneider.de">
                    Sag hallo!
                    <FaPaperPlane />
                </CtaBtn>
            </StyledContact>
            <StyledFooter id="kontakt">
                <div className="lists">
                    <div className="social-links">
                        <Logo notext color={"var(--color-white)"} />
                        <div className="icon-links">
                            <a target="_blank" rel="noreferrer" href="https://github.com/nchlsschndr">
                                <FaGithub />
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/nchlsschndr/">
                                <FaInstagram />
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://codepen.io/nchlsschndr">
                                <FaCodepen />
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://open.spotify.com/user/1135788776">
                                <FaSpotify />
                            </a>
                        </div>
                    </div>
                    <ul>
                        <li>Kontakt</li>
                        <li>
                            <a href="mailto:hallo@nicholas-schneider.de">hallo@nicholas-schneider.de</a>
                        </li>
                    </ul>
                    <ul>
                        <li>Navigation</li>
                        <li>
                            <a href="#start">Nach oben</a>
                        </li>
                        <li>
                            <a href="#ueber-mich">Über mich</a>
                        </li>
                        <li>
                            <a href="#portfolio">Projekte</a>
                        </li>
                    </ul>
                    <ul>
                        <li>Finde mich bei</li>
                        <li>
                            <a href="https://github.com/nchlsschndr" target="_blank" rel="noreferrer">
                                Github
                            </a>
                        </li>
                        <li>
                            <a href="https://codepen.io" target="_blank" rel="noreferrer">
                                Codepen
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/nchlsschndr/" target="_blank" rel="noreferrer">
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a href="https://open.spotify.com/user/1135788776" target="_blank" rel="noreferrer">
                                Spotify
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li>Rechtliches</li>
                        <li>
                            <a href="impressum">Impressum</a>
                        </li>
                        <li>
                            <a href="datenschutz">Datenschutz</a>
                        </li>
                    </ul>
                </div>
            </StyledFooter>
            <Credits>Entworfen und entwickelt von Nicholas Mathieu</Credits>
        </Container>
    );
};
