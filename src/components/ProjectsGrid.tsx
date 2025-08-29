import { PROJECTS } from "../data/projects";

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
    </section>
  );
}
