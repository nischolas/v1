import { data as projects } from "./data.js";
import { Project } from "./Project.js";
import styled from "styled-components";
import { Headline } from "@components/Headline.js";

const PortfolioWrapper = styled.section`
    margin-top: 10rem;
`;

const ProjectsWrapper = styled.ul`
    list-style: none;
    padding: 0px;
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
            <Headline text="Portfolio" />

            <ProjectsWrapper>
                {projects.map((project, index) => (
                    <Project key={index} project={project} />
                ))}
            </ProjectsWrapper>
        </PortfolioWrapper>
    );
};
