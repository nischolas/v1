import Link from "next/link";
import { glassStyle } from "src/styles/variables";
import styled from "styled-components";
import { useState } from "react";

const StyledCookieInfo = styled.div`
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    padding: 1rem;
    ${glassStyle}
    z-index: 99;
`;

const CookieBanner = () => {
    const [isClosed, setIsClosed] = useState(false);
    return (
        !isClosed && (
            <StyledCookieInfo>
                <p>Cookies?</p>
                <p>Gibts hier keine</p>
                <Link href="/datenschutz">
                    <a>Datenschutz</a>
                </Link>
                <button onClick={() => setIsClosed(true)}>Close</button>
            </StyledCookieInfo>
        )
    );
};
export default CookieBanner;
