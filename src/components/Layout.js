import Head from "next/head";
import { Footer } from "src/components/sections/Footer";
import { Navbar } from "src/components/sections/Navbar";
import styled from "styled-components";
import { GlobalStyle } from "src/styles/GlobalStyle";
import { SideInfo } from "./SideInfo";
import { Background } from "./Background";
import { FaInstagram, FaGithub, FaCodepen, FaSpotify } from "react-icons/fa";
import { Cursor } from "./Cursor";
import { Loading } from "./Loading";
import ScrollReveal from "./ScrollReveal";

export const Layout = ({ children, title }) => {
    return (
        <>
            <Head>
                <meta name="description" content="Webentwickler aus Saarbrücken" />
                <meta charSet="UTF-8" />
                <title>{`${title ? title + " | " : ""}Nicholas Schneider`}</title>
            </Head>

            <GlobalStyle />
            <Loading />
            <Background />
            <Cursor />

            <Navbar />
            <SideInfo pos={"right"}>
                <a href="mailto:hallo@nicholas-schneider.de">hallo@nicholas-schneider.de</a>
            </SideInfo>
            <SideInfo pos={"left"}>
                <a href="https://github.com/nchlsschndr">
                    <FaGithub />
                </a>
                <a href="https://www.instagram.com/nchlsschndr/">
                    <FaInstagram />
                </a>
                <a href="https://codepen.io/nchlsschndr">
                    <FaCodepen />
                </a>
                <a href="https://open.spotify.com/user/1135788776">
                    <FaSpotify />
                </a>
            </SideInfo>

            <Container>{children}</Container>

            <Footer />
            <ScrollReveal />
        </>
    );
};

export const Container = styled.main`
    padding: 0 var(--padding-inner);
    max-width: 1400px;
    margin: 0 auto;
    /* min-height: 100vh; */
    @media (max-width: 768px) {
        padding: var(--padding-mobile);
    }
`;

export const LowLevelSiteContainer = styled.div`
    padding-top: 200px;
    * {
        text-align: justify;
    }
`;
