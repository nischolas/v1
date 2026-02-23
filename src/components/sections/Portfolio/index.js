import { Project } from "./Project.js";
import styled from "styled-components";
import { Headline } from "@components/Headline.js";
import projects from "@data/projects.json";

const PortfolioWrapper = styled.section`
    margin-top: 10rem;
`;

const ProjectsWrapper = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10rem;
    @media (max-width: 768px) {
        gap: 3rem;
    }
    margin-bottom: 4rem;
`;

export const Portfolio = () => {
    return (
        <PortfolioWrapper id="portfolio">
            <Headline text="Portfolio" sub="Eine Auwahl meiner aktuellen Projekte" />

            <ProjectsWrapper>
                {projects.map((project) => (
                    <Project key={project.id} project={project} />
                ))}
            </ProjectsWrapper>
        </PortfolioWrapper>
    );
};
