import { PROJECTS } from "../data/projects";
import { PROFILE } from "../data/profile";
import { ArrowUpRight } from "lucide-react";

export default function ProjectsGrid() {
  return (
    <section aria-labelledby="projects-title">
      <div className="project-grid">
        {PROJECTS.map((p) => (
          <a
            key={p.href}
            className="project-card"
            href={p.href}
            target="_blank"
            rel="noreferrer"
          >
            <div className="project-title">{p.title}</div>
            <p className="project-desc">{p.description}</p>
            {p.tags?.length ? (
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            ) : null}
          </a>
        ))}
      </div>

      <a className = "more-link" href={PROFILE.github} target="_blank" rel="noreferrer">
        see more on github <ArrowUpRight size={14} />
      </a>
    </section>
  );
}
