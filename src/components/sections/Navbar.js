import styled, { css, keyframes } from "styled-components";
import useScrollDirection from "src/hooks/useScrollDir";
import { useEffect, useState } from "react";
import { Logo } from "@components/Logo";
import Link from "next/link";
import { fade } from "src/styles/variables";

const StyledHeader = styled.header`
    position: fixed;
    z-index: 20;
    display: flex;
    align-items: center;
    padding: 0 var(--padding-outer);
    width: 100%;
    height: var(--nav-height);
    transition: var(--transition);

    @media (max-width: 768px) {
        padding: 0 var(--padding-mobile);
    }

    ${(props) =>
        props.scrollDirection === "up" &&
        !props.scrolledToTop &&
        css`
            background-color: var(--color-main);
            height: var(--nav-height);
            box-shadow: 0 10px 30px -10px var(--shadow);
        `};

    ${(props) =>
        props.scrollDirection === "down" &&
        !props.scrolledToTop &&
        css`
            height: var(--nav-scroll-height);
            box-shadow: 0 10px 30px -10px var(--shadow);
            backdrop-filter: blur(1rem);
            background-color: rgba(16, 20, 25, 0.8);
        `};
`;

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: var(--fz-xl);
    font-weight: 800;
    color: var(--color-main-lightest);

    @media (max-width: 768px) {
        font-size: var(--fz-md);
    }

    .links ul {
        display: flex;
        justify-content: space-between;
        gap: 0.3rem;
        @media (max-width: 768px) {
            gap: 0rem;
        }

        li {
            &:nth-child(1) {
                ${fade(1)}
            }
            &:nth-child(2) {
                ${fade(2)}
            }
            &:nth-child(3) {
                ${fade(3)}
            }
            a {
                padding: 0.5rem 1rem;
                white-space: nowrap;

                transition: var(--transition);

                &:hover {
                    color: var(--color-accent);
                }
            }
        }
        list-style-type: none;
        li:last-child a {
            padding-right: 0;
        }
    }

    .ham {
        display: none;
    }

    .logo {
        cursor: pointer;
    }
`;

const StyledNavLink = styled(Link)``;

export const Navbar = () => {
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
        <StyledHeader scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
            <StyledNav>
                <Logo />
                <div className="links">
                    <ul>
                        <li>
                            <StyledNavLink href="/#ueber-mich">
                                <a>Über mich</a>
                            </StyledNavLink>
                        </li>
                        <li>
                            <StyledNavLink href="/#portfolio">
                                <a>Portfolio</a>
                            </StyledNavLink>
                        </li>
                        <li>
                            <StyledNavLink href="/#kontakt">
                                <a>Kontakt</a>
                            </StyledNavLink>
                        </li>
                    </ul>
                </div>
                <div className="ham">=</div>
            </StyledNav>
        </StyledHeader>
    );
};
