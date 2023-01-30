import styled from "styled-components";
import { FaLink } from "react-icons/fa";
import { glassStyle } from "../../../styles/variables";

const ProjectListItem = styled.li`
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(12, 1fr);
    -webkit-box-align: center;
    align-items: center;

    .project-image {
        box-shadow: 0 10px 30px -15px black;
        grid-area: 1 / 6 / -1 / -1;
        position: relative;
        z-index: 1;
        border-radius: var(--border-radius-lg);
        overflow: hidden;
        aspect-ratio: 16/10;

        @media (max-width: 768px) {
            aspect-ratio: 1/1;
            grid-column: 1 / -1;
        }

        a {
            display: block;
            background-color: var(--slate);
            transition: background-color var(--easing);

            &:hover {
                background-color: transparent;
            }
        }

        img {
            max-width: 100%;
            mix-blend-mode: multiply;
            filter: grayscale(0%) contrast(100%) brightness(100%);
            transition: filter var(--easing);

            @media (max-width: 768px) {
                filter: grayscale(100%) contrast(0.3) brightness(40%);
                object-fit: cover;
            }

            &:hover {
                filter: none;
            }
        }
    }

    &:nth-of-type(2n + 1) .project-image {
        grid-column: 1 / 8;

        @media (max-width: 768px) {
            grid-column: 1 / -1;
        }
    }

    .project-content {
        position: relative;
        grid-area: 1 / 1 / -1 / 7;
        z-index: 2;

        @media (max-width: 768px) {
            grid-column: 1 / -1;
            padding: 0px 1.5rem;
            text-align: left;
        }
    }

    &:nth-of-type(2n + 1) .project-content {
        grid-column: 7 / -1;
        text-align: right;

        @media (max-width: 768px) {
            grid-column: 1 / -1;
            padding: 0 1.5rem;
            text-align: left;
            // background-color: rgba(16, 20, 25, 0.9);
        }
    }

    .project-overline {
        margin: 10px 0px;
        font-size: 1rem;
        font-weight: 400;
        color: var(--blue);
    }

    .project-title {
        font-size: clamp(1.2rem, 5vw, 2rem);
        color: var(--light-slate);
        margin: 0px 0px 20px;
        @media (max-width: 768px) {
            margin-bottom: 0.5rem;
        }

        a {
            color: inherit;
        }
        transition: var(--transition);
        &:hover {
            color: var(--red);
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
        }

        a {
            display: inline-block;
            text-decoration: none;
            text-decoration-skip-ink: auto;
            position: relative;
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

    .project-links {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1ch;
        font-size: 1rem;
        transition: var(--transition);
        &:hover {
            color: var(--red);
        }
    }
    &:nth-of-type(2n + 1) .project-links {
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
                <div>
                    <p className="project-overline">{project.type}</p>
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
                    <div className="project-links">
                        <FaLink />{" "}
                        <a target="_blank" without rel="noreferrer" href={project.link}>
                            {project.link.replace("https://www.", "")}
                        </a>
                    </div>
                </div>
            </div>
            <div className="project-image">
                <a href={project.link} rel="noreferrer" target="_blank">
                    <img src={project.img} alt={project.name} />
                </a>
            </div>
        </ProjectListItem>
    );
};
