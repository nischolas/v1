import styled from "styled-components";
import { FaLink } from "react-icons/fa";
import { glassStyle } from "../../../styles/variables";
import Image from "next/image";

const ProjectListItem = styled("li")`
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;

    @media (max-width: 768px) {
        grid-template-rows: repeat(2, 1fr);
        box-shadow: 0 10px 30px -15px black;
    }

    .project-image {
        box-shadow: 0 10px 30px -15px var(--navy-shadow);
        position: relative;
        grid-area: 1 / 5 / -1 / -1;

        border-radius: var(--border-radius-lg);
        aspect-ratio: 16/10;

        overflow: hidden;
        filter: grayscale(60%) brightness(60%);
        transition: var(--transition);

        @media (max-width: 768px) {
            filter: none;
            border-radius: var(--border-radius);
            grid-row: 1 / 3;
            grid-column: 1 / -1;
        }

        &:hover {
            /* BUG: filter: none hides image when transition finished  */
            filter: grayscale(0%) brightness(100%);
        }
    }

    &:nth-of-type(2n + 1) .project-image {
        grid-column: 1 / 9;

        @media (max-width: 768px) {
            grid-column: 1 / -1;
        }
    }

    .project-content {
        position: relative;
        grid-area: 1 / 1 / -1 / 7;
        z-index: 2;

        @media (max-width: 768px) {
            ${glassStyle};
            grid-column: 1 / -1;
            grid-row: 3/4;
            z-index: -1;
            margin-top: calc(-2 * var(--border-radius));
            padding: 2rem 1.5rem 1.5rem;
            text-align: left;
            border-bottom-left-radius: var(--border-radius);
            border-bottom-right-radius: var(--border-radius);
            border-top-left-radius: 0;
            border-top-right-radius: 0;
        }
    }

    &:nth-of-type(2n + 1) .project-content {
        grid-column: 7 / -1;
        text-align: right;

        @media (max-width: 768px) {
            grid-column: 1 / -1;
            text-align: left;
        }
    }

    .project-type {
        margin: 10px 0px;
        font-size: 1rem;
        font-weight: 400;
        color: var(--blue);
    }

    .project-title {
        font-size: clamp(1.2rem, 5vw, 2rem);
        color: var(--slate);
        margin: 0px 0px 20px;

        @media (max-width: 768px) {
            margin-bottom: 0.5rem;
        }

        a {
            transition: var(--transition);
            color: inherit;
            &:hover {
                color: var(--red);
            }
        }
    }

    .project-description {
        transition: var(--transition);
        position: relative;
        z-index: 2;
        padding: 25px;
        font-size: 1.2rem;
        @media (max-width: 768px) {
            font-size: 1rem;
            border: none;
            background: none;
        }
        font-weight: 700;
        margin-bottom: 1rem;

        ${glassStyle};

        @media (max-width: 768px) {
            background-color: transparent;
            padding: 0;
            box-shadow: none;
            backdrop-filter: none;
        }

        a {
            transition: var(--transition);
            color: var(--blue);
        }
    }

    .project-tech-list {
        display: flex;
        flex-wrap: wrap;
        position: relative;
        gap: 1rem;
        z-index: 2;
        margin-bottom: 1rem;
        padding: 0px;
        list-style: none;

        @media (max-width: 768px) {
            margin-bottom: 0.5rem;
        }

        li {
            color: white;
            font-size: 0.8rem;
            font-weight: 800;
            white-space: nowrap;
            background-color: var(--red);
            padding: 0.2rem 0.5rem 0.1rem;
            border-radius: 0.5rem;
            text-shadow: 1px 1px 5px black;
        }
    }

    &:nth-of-type(2n + 1) .project-tech-list {
        -webkit-box-pack: end;
        justify-content: flex-end;

        @media (max-width: 768px) {
            justify-content: flex-start;
        }
    }

    .project-link {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1ch;
        font-size: 1rem;
        color: var(--slate);

        transition: var(--transition);
        &:hover {
            color: var(--red);
        }
    }

    &:nth-of-type(2n + 1) .project-link {
        justify-content: flex-end;
        @media (max-width: 768px) {
            justify-content: flex-start;
        }
    }
`;

export const Project = ({ project }) => {
    return (
        <ProjectListItem className="project">
            <div className="project-content">
                <p className="project-type">{project.type}</p>
                <h3 className="project-title">
                    <a href={project.link} rel="noreferrer" target="_blank">
                        {project.name}
                    </a>
                </h3>
                <div className="project-description">
                    <p>{project.desc}</p>
                </div>
                <ul className="project-tech-list">
                    {project.tech.map((tag, index) => (
                        <li key={index}>{tag}</li>
                    ))}
                </ul>
                <div className="project-link">
                    <FaLink />{" "}
                    <a target="_blank" rel="noreferrer" href={project.link}>
                        {project.link.replace("https://www.", "")}
                    </a>
                </div>
            </div>
            <a href={project.link} rel="noreferrer" target="_blank" className="project-image">
                <Image src={project.img} layout="fill" objectFit="cover" alt={`Screenshot ${project.type} ${project.name}`} />
            </a>
        </ProjectListItem>
    );
};
