import { Layout } from "src/components/Layout";
import { LowLevelSiteContainer } from "src/components/Layout";

export default function Home() {
    return (
        <Layout>
            <LowLevelSiteContainer>
                <h1>Impressum</h1>

                <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
                <p>
                    Nicholas Schneider
                    <br />
                    Scheidter Str. 127
                    <br />
                    66123 Saarbr&uuml;cken
                </p>

                <h2>Kontakt</h2>
                <p>
                    Telefon: 015229998493
                    <br />
                    E-Mail: hallo@nicholas-schneider.de
                </p>

                <p>
                    Quelle: <a href="https://www.e-recht24.de/impressum-generator.html">https://www.e-recht24.de/impressum-generator.html</a>
                </p>
            </LowLevelSiteContainer>
        </Layout>
    );
}