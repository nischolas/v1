import styled from "styled-components";

const AboutWrapper = styled.div`
    margin-top: 10rem;
    h2 {
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
    }

    .split {
        display: flex;
        gap: 3rem;
        @media (max-width: 768px) {
            flex-direction: column;
        }
    }

    .about-text {
        flex-basis: 66.66%;
        @media (max-width: 768px) {
            margin-bottom: 2rem;
        }
    }

    .about-img {
        flex-basis: 33.33%;
        img {
            width: 100%;
            max-width: 100%;
            height: auto;
        }
    }
`;

export const About = () => {
    return (
        <AboutWrapper id="about">
            <h2>Über mich</h2>
            <div className="split">
                <div className="about-text">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quos amet eaque modi, totam doloribus cumque iure nam a fuga, et quibusdam eveniet. Ad corporis blanditiis et
                        doloremque laborum qui?
                    </p>
                </div>
                <div className="about-img">
                    <img src="https://via.placeholder.com/500" alt="" />
                </div>
            </div>
        </AboutWrapper>
    );
};
