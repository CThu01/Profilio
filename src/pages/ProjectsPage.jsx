import Reveal from "../components/Reveal";
import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";
import cv from "../data/cvData";

export default function ProjectsPage() { return <main className="container py-16 sm:py-20"><Reveal><SectionHeading eyebrow="Portfolio" title="Backend projects and systems work"><p>These projects reflect my focus on understanding backend fundamentals—from API design to databases, storage, and distributed-service tooling.</p></SectionHeading></Reveal><div className="mt-10 grid gap-5 lg:grid-cols-2">{cv.projects.map((project, index) => <Reveal key={project.name} delay={index * 0.06}><ProjectCard project={project} /></Reveal>)}</div></main>; }
