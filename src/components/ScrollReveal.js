import styled, { keyframes, css } from "styled-components";
import { useInView } from "react-intersection-observer";

const scrollin = keyframes`
        from {
            transform: translateY(10px);
            opacity: 0;
        }
        to {
            transform: translateY(0px);
            opacity: 1;
        }
    `;

const StyledDiv = styled("div")`
    transform: translateY(10px);
    opacity: 0;
    animation: ${(props) =>
        props.inView
            ? css`
                  ${scrollin} 1s linear forwards;
              `
            : "none"};
`;

const ScrollReveal = ({ children, classname, tag = "div" }) => {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.5,
    });

    return (
        <StyledDiv as={tag} ref={ref} inView={inView} className={classname}>
            {children}
        </StyledDiv>
    );
};

export default ScrollReveal;
