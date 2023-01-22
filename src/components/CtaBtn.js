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
    --border-width: 0px;
    background-color: var(--light-navy);

    svg {
        transition: var(--transition);
    }

    &::before {
        content: "";
        transition: var(--transition);
        position: absolute;
        background-color: var(--red);
        z-index: -1;
        border-radius: var(--border-radius);
        height: calc(100% + (2 * var(--border-width)));
        width: calc(100% + (2 * var(--border-width)));
        top: calc(-1 * var(--border-width));
        bottom: calc(-1 * var(--border-width));
        left: calc(-1 * var(--border-width));
        right: calc(-1 * var(--border-width));
    }
    &:hover {
        gap: 1rem;
        background-color: var(--navy);
        --border-width: 2px;

        svg {
            transform: scale(1.2);
        }
    }
`;

export const CtaBtn = ({ children, href }) => {
    return <StyledCtaBtn href={href}>{children}</StyledCtaBtn>;
};
