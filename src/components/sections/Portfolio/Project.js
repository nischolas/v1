import styled from "styled-components";
import { FaLink } from "react-icons/fa";
import { glassStyle } from "../../../styles/variables";

const ProjectListItem = styled.li`
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(12, 1fr);
    -webkit-box-align: center;
    align-items: center;

    /* @media (max-width: 768px) {
        &:hover {
            .project-image {
                filter: none;
            }
        }
    } */

    .project-image {
        box-shadow: 0 10px 30px -15px black;
        grid-area: 1 / 6 / -1 / -1;
        position: relative;
        z-index: 1;
        border-radius: var(--border-radius-lg);
        overflow: hidden;
        aspect-ratio: 16/10;
        background-image: url(${(props) => props.image});
        background-size: cover;
        filter: grayscale(60%) contrast(1) brightness(100%) hue-rotate(0deg) sepia(0%);
        transition: var(--transition);
        @media (max-width: 768px) {
            filter: grayscale(60%) contrast(1) brightness(10%) hue-rotate(0deg) sepia(0%);
        }

        &::after {
            transition: var(--transition);
            z-index: -99;
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            background-color: var(--navy);
            mix-blend-mode: multiply;
            opacity: 0.4;
        }

        @media (max-width: 768px) {
            aspect-ratio: 1/1;
            grid-column: 1 / -1;
        }

        &:hover {
            @media (max-width: 768px) {
                filter: grayscale(60%) contrast(1) brightness(10%) hue-rotate(0deg) sepia(0%);
                &::after {
                    background-color: var(--navy);
                }
            }
            filter: none;
            &::after {
                background-color: transparent;
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
        <ProjectListItem image={project.img} className="project">
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
                        <a target="_blank" rel="noreferrer" href={project.link}>
                            {project.link.replace("https://www.", "")}
                        </a>
                    </div>
                </div>
            </div>
            <a href={project.link} rel="noreferrer" target="_blank" className="project-image">
                {/* <img src={project.img} alt={project.name} /> */}
            </a>
        </ProjectListItem>
    );
};
