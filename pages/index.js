import { Layout } from "src/components/Layout";
import Hero from "src/components/sections/Hero";

export default function Home() {
    return (
        <Layout>
            <Hero />

            <main>
                <p>Sections</p>
            </main>
        </Layout>
    );
}
