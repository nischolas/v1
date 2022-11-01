import { data as projects } from "./data.js";
import { Project } from "./Project.js";
import styled from "styled-components";

const PortfolioWrapper = styled.div`
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
`;

const ProjectsWrapper = styled.ul`
    list-style: none;
    padding: 0px;
    display: flex;
    flex-direction: column;
    gap: 10rem;
    margin-bottom: 4rem;
`;

export const Portfolio = () => {
    return (
        <PortfolioWrapper id="portfolio">
            <h2>Portfolio</h2>
            <ProjectsWrapper>
                {projects.map((project, index) => (
                    <Project key={index} project={project} />
                ))}
            </ProjectsWrapper>
        </PortfolioWrapper>
    );
};
