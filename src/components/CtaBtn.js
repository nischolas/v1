import { fade } from "src/styles/variables";
import styled from "styled-components";

const StyledCtaBtn = styled.a`
    position: relative;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.7rem 1.3rem;
    margin-top: 2rem;
    margin-bottom: 25vh;

    background-color: var(--color-main);

    border-radius: var(--border-radius);
    width: fit-content;
    color: var(--color-accent);
    transition: var(--transition);
    font-weight: 800;
    background-color: var(--color-main-lighter);

    ${fade(9)}

    box-shadow: 0px 0px 0px 2px var(--color-accent);

    svg {
        transition: var(--transition);
    }
    &:hover {
        gap: 1rem;
        background-color: var(--color-main);
        box-shadow: 0px 0px 0px 4px var(--color-accent);

        svg {
            transform: scale(1.2);
        }
    }
`;

export const CtaBtn = ({ children, href }) => {
    return <StyledCtaBtn href={href}>{children}</StyledCtaBtn>;
};
