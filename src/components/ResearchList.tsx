import { RESEARCH, RESEARCH_INTRO } from "../data/research";
import { ArrowUpRight } from "lucide-react";

export default function ResearchList() {
  return (
    <section aria-labelledby="research-title">
      <p className="lede">{RESEARCH_INTRO}</p>
      <div className="project-grid">
        {RESEARCH.map((r) => {
          const inner = (
            <>
              <div className="project-title">
                {r.title}
                {r.status ? <span className="status">{r.status}</span> : null}
              </div>
              {r.meta ? <p className="card-meta">{r.meta}</p> : null}
              <p className="project-desc">{r.description}</p>
              {r.links?.length ? (
                <div className="card-links">
                  {r.links.map((l) => (
                    <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
                      {l.label} <ArrowUpRight size={14} />
                    </a>
                  ))}
                </div>
              ) : null}
              {r.tags?.length ? (
                <div className="project-tags">
                  {r.tags.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
              ) : null}
            </>
          );

          const className = `project-card${r.feature ? " feature" : ""}`;

          return r.href ? (
            <a key={r.title} className={className} href={r.href} target="_blank" rel="noreferrer">
              {inner}
            </a>
          ) : (
            <div key={r.title} className={className}>{inner}</div>
          );
        })}
      </div>
    </section>
  );
}
