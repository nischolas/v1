import "@fontsource/nunito/200.css";
import "@fontsource/nunito/300.css";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/500.css";
import "@fontsource/nunito/600.css";
import "@fontsource/nunito/700.css";
import "@fontsource/nunito/800.css";
import "@fontsource/nunito/900.css";

import Head from "next/head";
import { useRouter } from "next/router";

import { useEffect, useState } from "react";

import { Loading } from "@components/Loading";

import { GlobalStyle } from "src/styles/GlobalStyle";

function MyApp({ Component, pageProps }) {
    const [loading, setLoading] = useState(true);
    const [isOnHp, setIsOnHp] = useState(true);
    const router = useRouter();

    const loadingDuration = 0;

    useEffect(() => {
        if (router.pathname !== "/") {
            setLoading(false);
            setIsOnHp(false);
            return;
        }
        setTimeout(() => {
            setLoading(false);
        }, loadingDuration);
    }, []);
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Webentwickler aus Saarbrücken" />
                <meta charSet="UTF-8" />
                <title>Nicholas Schneider</title>
                <meta name="keywords" content="Webentwicklung, Webentwickler, Etnwicklwe, Programmierer, Webdev, Web Developer, Developer, Freelancer, Freelancing, Saarbrücken, Web 2.0" />
                <meta name="author" content="Nicholas Schneider" />
                <link rel="icon" href="/favicon/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/favicon/site.webmanifest" />
            </Head>
            <GlobalStyle />
            {loading && isOnHp ? <Loading loadingDuration={loadingDuration} /> : <Component {...pageProps} />}
        </>
    );
}

export default MyApp;
