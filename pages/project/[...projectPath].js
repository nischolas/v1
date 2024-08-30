import fs from "fs";
import path from "path";

export default function Project({ html }) {
    return <div dangerouslySetInnerHTML={{ __html: html }} suppressHydrationWarning />;
}

export async function getServerSideProps({ params, res }) {
    const projectPath = Array.isArray(params.projectPath) ? params.projectPath : [params.projectPath];
    const fullPath = path.join(process.cwd(), "public", "projects", ...projectPath);

    try {
        let stats = fs.statSync(fullPath);
        let filePath;

        if (stats.isDirectory()) {
            filePath = path.join(fullPath, "index.html");
        } else {
            filePath = fullPath;
        }

        if (!fs.existsSync(filePath)) {
            throw new Error("File not found");
        }

        let html = fs.readFileSync(filePath, "utf-8");

        // Use the full project path for replacements
        const projectRelativePath = projectPath.join("/");

        // Replace relative paths with absolute paths, including the full project path
        html = html.replace(/(src|href)="(?!http|\/\/|\/)/g, `$1="/projects/${projectRelativePath}/`);

        // Set the content type to text/html
        res.setHeader("Content-Type", "text/html");

        // Send the HTML directly
        res.write(html);
        res.end();

        return {
            props: {},
        };
    } catch (error) {
        return {
            notFound: true,
        };
    }
}

export const config = {
    unstable_runtimeJS: false,
};
