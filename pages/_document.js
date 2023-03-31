import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="de" style={{ scrollBehavior: "smooth" }}>
            <Head />
            {/* Prevents a little flashing on pageload */}
            <body style={{ backgroundColor: "#101419", margin: "0px" }}>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
