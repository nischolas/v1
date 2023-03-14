import Head from "next/head";
import { Footer } from "src/components/sections/Footer";
import { Navbar } from "src/components/sections/Navbar";
import styled from "styled-components";
import { GlobalStyle } from "src/styles/GlobalStyle";
import { SideInfo } from "./SideInfo";
import { Background } from "./Background";
import { FaInstagram, FaGithub, FaCodepen } from "react-icons/fa";
import { Cursor } from "./Cursor";
import { Loading } from "./Loading";

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
            {/* <Cursor /> */}

            <Navbar />
            <SideInfo pos={"right"}>
                <a href="mailto:hallo@nicholas-schneider.de">hallo@nicholas-schneider.de</a>
            </SideInfo>
            <SideInfo pos={"left"}>
                <a href="">
                    <FaGithub />
                </a>
                <a href="">
                    <FaInstagram />
                </a>
                <a href="">
                    <FaCodepen />
                </a>
            </SideInfo>

            <Container>{children}</Container>

            <Footer />
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
