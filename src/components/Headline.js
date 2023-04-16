import styled, { css } from "styled-components";

const StyledH2 = styled.h2`
    color: var(--color-accent);
    margin-bottom: 1rem;

    gap: 1rem;
    font-size: var(--fz-heading);

    ${(props) =>
        props.center &&
        css`
            text-align: center;
            font-size: calc(1.5 * var(--fz-heading));
        `};

    .sub {
        font-size: var(--fz-xxl);
        color: var(--color-main-lightest);
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
                {!center && <small>❯</small>} {text}
            </span>
            {sub && (
                <>
                    <span className="sub">{sub}</span>
                </>
            )}
        </StyledH2>
    );
};
