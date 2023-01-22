import styled from "styled-components";
import { DotTarget } from "./FollowingDot";

const StyledH2 = styled.h2`
    color: var(--red);
    margin-bottom: 3rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 3rem;
    &::before {
        content: "";
        background-color: var(--red);
        position: relative;
        width: 10%;
        height: 2px;
        border-radius: var(--border-radius);
    }
`;

export const Headline = ({ text }) => {
    return (
        <StyledH2>
            {text}
            <DotTarget />
        </StyledH2>
    );
};
