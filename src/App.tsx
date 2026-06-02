import "./styles/global.css";
import Masthead from "./components/Masthead";
import ResearchList from "./components/ResearchList";
import Sidebar from "./components/Sidebar";
import ProjectsGrid from "./components/ProjectsGrid";
// import { FileDown} from "lucide-react";

export default function App() {
  return (
    <>
      <Masthead />
      
      <div className="layout" id = "top">
        <Sidebar />
        
        <main className="content">
          <section id="about" className="section">
            <h2 className="hero">
              hey! i’m <span className="accent">dani</span>
            </h2>

            <p className="lede about">
              Currently finishing up dual B.A. degrees in Computer Science and Cognitive Science, set to graduate in 2026 from {" "}
              <a href="https://newbrunswick.rutgers.edu/" target="_blank" rel="noreferrer"> 
              Rutgers University. 
              </a>
            <br /> 
            <br /> 
            My research interests lie at the intersection of human and artificial intelligence, with a focus on understanding how humans learn and process information. I am particularly interested in exploring the cognitive processes underlying learning and decision-making, and how these processes can be modeled in artificial systems, in order to better understand the nature of intelligence.
            <br />
            <br />
            When I'm not researching or coding, you can find me playing the bass guitar, tinkering with my minilab, or hanging out with my cat.
            <br />
          </p>
         </section>
        
        <section id = "research" className="section">
          <h2 className="section-title">
            <span className="section-pill"> Research </span>
          </h2>
          <ResearchList /> 
          </section>

          <section id = "projects" className="section">
            <h2 className="section-title">
              <span className="section-pill"> Projects </span>
            </h2>
            <ProjectsGrid />
          </section>
      </main>
    </div>
  </>
  );
}