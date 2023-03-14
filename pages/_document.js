import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="de">
            <Head>
                <meta name="keywords" content="Webentwicklung, Webentwickler, Etnwicklwe, Programmierer, Webdev, Web Developer, Developer, Freelancer, Freelancing, Saarbrücken, Web 2.0" />
                <meta name="author" content="Nicholas Schneider" />
                <link rel="icon" href="/favicon/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/favicon/site.webmanifest" />
            </Head>
            {/* Prevents a little flashing on pageload */}
            <body style={{ backgroundColor: "#101419" }}>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
