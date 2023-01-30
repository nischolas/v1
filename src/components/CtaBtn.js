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

    background-color: var(--navy);

    border-radius: var(--border-radius);
    width: fit-content;
    color: var(--red);
    transition: var(--transition);
    font-weight: bold;
    background-color: var(--light-navy);

    ${fade(9)}

    box-shadow: 0px 0px 0px 2px var(--red);

    svg {
        transition: var(--transition);
    }
    &:hover {
        gap: 1rem;
        background-color: var(--navy);
        box-shadow: 0px 0px 0px 4px var(--red);

        svg {
            transform: scale(1.2);
        }
    }
`;

export const CtaBtn = ({ children, href }) => {
    return <StyledCtaBtn href={href}>{children}</StyledCtaBtn>;
};
