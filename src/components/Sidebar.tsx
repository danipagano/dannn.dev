import { PROFILE} from "../data/profile";
import { Github, Linkedin, Mail, MapPin} from "lucide-react";
import LogoTools from "./LogoTools";

export default function Sidebar() {
  const nameParts = PROFILE.name.split(" ");
  const first = nameParts.slice(0, -1).join(" ") || PROFILE.name;
  const last = nameParts.at(-1) || "";

  return (
    <aside className="sidebar">
      <div className="card">
        <img className="avatar" src={PROFILE.avatarUrl} alt={PROFILE.name} />

        <div className="identity">
          <h1 className="name">
            <span className="accent"> {first}</span> {last}
          </h1>
          <p className="role">{PROFILE.role}</p>
          <p className="tagline">{PROFILE.tagline}</p>
        </div>

        <div className="meta">
          <div className="meta-row">
            <MapPin size={16} /> {PROFILE.location}
          </div>
          <a className="meta-row" href={`mailto:${PROFILE.email}`}>
            <Mail size={16} /> {PROFILE.email}
          </a>
        </div>

<div className="links">
  <a className="icon-link" href={`https://github.com/${PROFILE.github}`} target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
    <Github size={18} />
  </a>
  <a className="icon-link" href="https://linkedin.com/in/danielle-pagano-6a8491202" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
    <Linkedin size={18} />
  </a>
  <a className="icon-link" href={`mailto:${PROFILE.email}`} target="_blank" rel="noreferrer" aria-label="Email" title="Email">
    <Mail size={18} />
  </a>
</div>

<br />
<br />
    <div className="actions">
    <LogoTools placement="sidebar" />
    </div>
</div>
</aside>
  );
}
