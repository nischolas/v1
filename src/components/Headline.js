import styled, { css } from "styled-components";

const StyledH2 = styled.h2`
    color: var(--red);
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 3rem;

    text-align: ${(props) => (props.center ? "center" : "left")};

    ${(props) =>
        !props.center &&
        css`
            margin-bottom: 3rem;
            &::before {
                content: "";
                background-color: var(--red);
                position: relative;
                width: 5rem;
                height: 5px;
                border-radius: var(--border-radius);
            }
        `};
`;

export const Headline = ({ center, text }) => {
    return <StyledH2 center={center}>{text}</StyledH2>;
};
