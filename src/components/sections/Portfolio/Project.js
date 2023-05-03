import styled from "styled-components";
import { FaLink } from "react-icons/fa";
import { glassStyle } from "src/styles/variables";
import Image from "next/image";
import { cmsUrl } from "src/styles/variables";
import useParallax from "src/hooks/useParallax";

const ProjectListItem = styled("li")`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;

    &:hover {
        .project-image {
            filter: grayscale(0%) brightness(100%);
        }
    }

    @media (max-width: 768px) {
        grid-template-rows: repeat(2, 1fr);
        box-shadow: 0 10px 30px -15px black;
    }

    .project-image {
        box-shadow: 0 10px 30px -15px var(--shadow);
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
        display: flex;
        flex-direction: column;
        gap: 1rem;

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
        font-size: var(--fz-md);
        font-weight: 400;
        color: var(--color-accent-secondary);
    }

    .project-title {
        font-size: clamp(var(--fz-xl), 5vw, var(--fz-heading));
        color: var(--color-main-lightest);
        margin-top: -1rem;

        a {
            transition: var(--transition);
            color: inherit;
            &:hover {
                color: var(--color-accent);
            }
        }
    }

    .project-description {
        transition: var(--transition);
        position: relative;
        z-index: 2;
        padding: 1.5rem;
        font-size: var(--fz-xl);
        @media (max-width: 768px) {
            border: none;
            background: none;
        }
        font-weight: 700;

        ${glassStyle};

        @media (max-width: 768px) {
            background-color: transparent;
            padding: 0;
            box-shadow: none;
            backdrop-filter: none;
        }

        a {
            transition: var(--transition);
            color: var(--color-accent-secondary);
        }
    }

    .project-tech-list {
        display: flex;
        flex-wrap: wrap;
        position: relative;
        gap: 1rem;
        z-index: 2;
        list-style: none;

        li {
            color: white;
            font-size: var(--fz-xxs);
            font-weight: 800;
            white-space: nowrap;
            background-color: var(--color-accent);
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
        font-size: var(--fz-md);
        color: var(--color-main-lightest);

        transition: var(--transition);
        &:hover {
            color: var(--color-accent);
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
    const { name, type, url, description, image, technologies } = project.attributes;
    const imgurl = image.data.attributes.formats.large.url;
    return (
        <ProjectListItem className="project">
            <div className="project-content">
                <p className="project-type">{type}</p>
                <h3 className="project-title">
                    <a href={url} rel="noreferrer" target="_blank">
                        {name}
                    </a>
                </h3>
                <div className="project-description">
                    <p>{description}</p>
                </div>
                <ul className="project-tech-list">
                    {technologies.data.map((tech) => (
                        <li key={tech.id}>{tech.attributes.name}</li>
                    ))}
                </ul>
                <div className="project-link">
                    <FaLink />{" "}
                    <a target="_blank" rel="noreferrer" href={url}>
                        {url.replace("https://www.", "")}
                    </a>
                </div>
            </div>
            <a href={url} rel="noreferrer" target="_blank" className="project-image">
                {/* unoptimized bc of strapi for now https://github.com/vercel/next.js/discussions/39239 */}
                <Image unoptimized={true} src={`${cmsUrl}${imgurl}`} layout="fill" objectFit="cover" alt={`Screenshot ${type} ${name}`} />
            </a>
        </ProjectListItem>
    );
};
