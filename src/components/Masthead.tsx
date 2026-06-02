import { PROFILE, NAV } from "../data/profile";
import LogoTools from "./LogoTools";

export default function Masthead() {
  return (
    <header className="masthead">
      <div className="masthead-inner">
        <a className="brand" href="#top">{PROFILE.name}</a>

        <nav className="nav" aria-label="Primary">
          {NAV.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
        
        <LogoTools placement="masthead" />
      </div>
    </header>
  );
}
