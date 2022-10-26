import Head from "next/head";
import { Footer } from "src/components/sections/Footer";
import { Navbar } from "src/components/sections/Navbar";
import styled from "styled-components";
import { GlobalStyle } from "src/styles/GlobalStyle";
import { SideInfo } from "./SideInfo";

export const Layout = ({ children, title }) => {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Webentwickler aus Saarbrücken" />
                <meta charSet="UTF-8" />
                <meta name="keywords" content="Webentwicklung, Webentwickler, Etnwicklwe, Programmierer, Webdev, Web Developer, Developer, Freelancer, Freelancing, Saarbrücken, Web 2.0" />
                <meta name="author" content="Nicholas Schneider" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{`${title ? title + " | " : ""}Nicholas Schneider`}</title>
                {/* FAVICON */}
            </Head>
            <GlobalStyle />

            <Navbar />
            <SideInfo pos={"right"}>
                <a href="mailto:hallo@nicholas-schneider.de">hallo@nicholas-schneider.de</a>
            </SideInfo>
            <SideInfo pos={"left"}>
                <p>x</p>
                <p>x</p>
                <p>x</p>
            </SideInfo>

            <Container>{children}</Container>

            <Footer />
        </>
    );
};

export const Container = styled.main`
    padding: 0 var(--padding-inner);
    min-height: 100vh;
`;
