import { PROFILE } from "../data/profile";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="card">
        <img className="avatar" src={PROFILE.avatarUrl} alt={PROFILE.name} />

        <div className="identity">
          <h1 className="name"> {PROFILE.name} </h1>
          <p className="role"> {PROFILE.role}</p>
          <p className="tagline"> {PROFILE.tagline} </p>
        </div>

        <div className="meta">
          <div className="meta-row">
            <MapPin size={15} /> {PROFILE.location}
          </div>
          
          <a className="meta-row" href={`mailto:${PROFILE.email}`}>
            <Mail size={16} /> {PROFILE.email}
          </a>
        </div>

        <div className="links">
          <a className="icon-link" href={`${PROFILE.github}`} target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
            <Github size={18} />
          </a>
        <a className="icon-link" href={`${PROFILE.linkedin}`} target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
          <Linkedin size={18} />
        </a>
        <a className="icon-link" href={`mailto:${PROFILE.email}`} target="_blank" rel="noreferrer" aria-label="Email" title="Email">
          <Mail size={18} />
        </a>
      </div>
    </div>
    </aside>
  );
}
