import styled, { css } from "styled-components";
import useScrollDirection from "src/hooks/useScrollDir";
import { useEffect, useState } from "react";
import { Logo } from "@components/Logo";

const StyledHeader = styled.header`
    position: fixed;
    z-index: 20;
    display: flex;
    align-items: center;
    padding: 0 var(--padding-outer);
    background-color: var(--navy);
    width: 100%;
    height: var(--nav-height);
    transition: var(--transition);

    ${(props) =>
        props.scrollDirection === "up" &&
        !props.scrolledToTop &&
        css`
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
        gap: 2rem;
        list-style-type: none;
    }

    .ham {
        display: none;
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
                <div className="logo">
                    <Logo />
                </div>
                <div className="links">
                    <ul>
                        <li>Über</li>
                        <li>Arbeit</li>
                        <li>Kontakt</li>
                    </ul>
                </div>
                <div className="ham">=</div>
            </StyledNav>
        </StyledHeader>
    );
};
