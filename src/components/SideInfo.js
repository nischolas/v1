import styled, { css } from "styled-components";
import useScrollDirection from "src/hooks/useScrollDir";
import { useEffect, useState } from "react";

const StyledSideInfo = styled.aside`
    position: fixed;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    bottom: 0;
    transition: var(--transition);
    @media (max-width: 768px) {
        display: none;
    }
    ${(props) =>
        props.pos === "right"
            ? css`
                  right: var(--padding-outer);
                  left: auto;
              `
            : css`
                  left: var(--padding-outer);
                  right: auto;
              `}

    ${(props) =>
        props.scrollDirection === "up" &&
        !props.scrolledToTop &&
        css`
            opacity: 1;
            transform: translateY(0);
        `};

    ${(props) =>
        props.scrollDirection === "down" &&
        !props.scrolledToTop &&
        css`
            opacity: 0;
            transform: translateY(10px);
        `};

    &::after {
        content: "";
        display: block;
        width: 2px;
        height: 80px;
        background-color: var(--slate);
    }
    a {
        margin: 0;
        padding: 0;
        writing-mode: vertical-rl;
        transition: var(--transition);
        &:hover {
            color: var(--red);
        }
    }
`;

export const SideInfo = ({ pos, children }) => {
    const scrollDirection = useScrollDirection("down");
    const [scrolledToTop, setScrolledToTop] = useState(true);

    const handleScroll = () => {
        setScrolledToTop(window.pageYOffset < 50);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <StyledSideInfo scrollDirection={scrollDirection} scrolledToTop={scrolledToTop} pos={pos}>
            {children}
        </StyledSideInfo>
    );
};
