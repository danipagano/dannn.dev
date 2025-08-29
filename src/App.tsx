import "./styles/global.css";
import Sidebar from "./components/Sidebar";
import ProjectsGrid from "./components/ProjectsGrid";
import { FileDown, Moon, Sun } from "lucide-react";
import { PROFILE } from "./data/profile";

export default function App() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="content">
        <section className="panel">
          <h2 className="hero">hey!
            i’m <span className="accent">dani</span>
          </h2>

          <p className="lede about">
          <br />
          Currently finishing up dual B.A. degrees in Cognitive Science and Computer Science at{" "}
          <a href="https://newbrunswick.rutgers.edu/" target="_blank" rel="noreferrer">
          Rutgers University</a>
            <br /> 
            <br /> When I'm not coding or studying, you can find me playing the bass guitar, taking photos of random animals, or hanging around New Jersey.
            <br />
            <br />
            <a className="btn" href="/public/404.html" target="_blank" rel="noreferrer">
              <FileDown size={16} />
              <span> Resume (August 2025) </span>
            </a>
          </p>
        </section>
        <hr className="rule" />
          <section className="section">
            <h2 className="section-title">
              <span className="section-pill"> Projects </span>
            </h2>
            <ProjectsGrid />
          </section>
  </main>
  </div>
  );
}
