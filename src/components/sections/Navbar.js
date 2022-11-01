import styled, { css, keyframes } from "styled-components";
import useScrollDirection from "src/hooks/useScrollDir";
import { useEffect, useState } from "react";
import { Logo } from "@components/Logo";
import Link from "next/link";

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
            background-color: var(--navy);
            height: var(--nav-scroll-height);
            transform: translateY(0px);
            box-shadow: 0 10px 30px -10px var(--navy-shadow);
        `};

    ${(props) =>
        props.scrollDirection === "down" &&
        !props.scrolledToTop &&
        css`
            height: var(--nav-scroll-height);
            transform: translateY(calc(var(--nav-scroll-height) * -1));
            box-shadow: 0 10px 30px -10px var(--navy-shadow);
        `};
`;

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 1.1rem;
    font-weight: 800;
    .links ul {
        display: flex;
        justify-content: space-between;
        gap: 0.3rem;
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

const StyledNavLink = styled.a`
    padding: 0.5rem 1rem;
    cursor: pointer;
    white-space: nowrap;

    transition: var(--transition);

    &:hover {
        color: var(--red);
    }
`;

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
                <Link href="/" className="logoddd">
                    <Logo />
                </Link>
                <div className="links">
                    <ul>
                        <li>
                            <StyledNavLink>Über mich</StyledNavLink>
                        </li>
                        <li>
                            <StyledNavLink>Portfolio</StyledNavLink>
                        </li>
                        <li>
                            <StyledNavLink>Kontakt</StyledNavLink>
                        </li>
                    </ul>
                </div>
                <div className="ham">=</div>
            </StyledNav>
        </StyledHeader>
    );
};
