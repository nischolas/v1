import styled, { css } from "styled-components";

const StyledH2 = styled.h2`
    color: var(--red);
    margin-bottom: 1rem;
    /* display: flex;
    align-items: flex-end; */
    gap: 1rem;
    font-size: 3rem;

    /* background: linear-gradient(90deg, var(--red), var(--red2));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */

    .sub {
        font-size: 1.4rem;
        color: var(--slate);
        margin-bottom: 0.4rem;
        display: block;
        margin-bottom: 3rem;
    }

    text-align: ${(props) => (props.center ? "center" : "left")};
`;

export const Headline = ({ center, text, sub }) => {
    return (
        <StyledH2 center={center}>
            <span>
                <small>❯</small> {text}
            </span>
            {sub && (
                <>
                    <span className="sub">{sub}</span>
                </>
            )}
        </StyledH2>
    );
};
