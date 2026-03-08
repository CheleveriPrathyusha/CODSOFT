import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGithub, FaCuttlefish, FaFileWord, FaFileExcel, FaCode } from "react-icons/fa";
import { SiMongodb, SiMysql, SiPython } from "react-icons/si";

function Skills() {
  return (
    <section id="skills" className="section">
      <h2>My Skills</h2>

      <div className="skills-container">

        {/* Frontend */}
        <div className="skill-group">
          <h3>Web Technologies</h3>

          <div className="skill-items">
            <div className="skill"><FaHtml5 /> HTML</div>
            <div className="skill"><FaCss3Alt /> CSS</div>
            <div className="skill"><FaJsSquare /> JavaScript</div>
            <div className="skill"><FaReact /> MERN</div>
          </div>
        </div>

        {/* Database */}
        <div className="skill-group">
          <h3>Databases</h3>

          <div className="skill-items">
            <div className="skill"><SiMysql /> SQL</div>
            <div className="skill"><SiMongodb /> MongoDB</div>
          </div>
        </div>

        {/* Programming */}
        <div className="skill-group">
          <h3>Programming Languages</h3>

          <div className="skill-items">
            <div className="skill"><FaCuttlefish /> C</div>
            <div className="skill"><SiPython /> Python</div>
          </div>
        </div>

        {/* Tools */}
        <div className="skill-group">
          <h3>Tools</h3>

          <div className="skill-items">
            <div className="skill"><FaCode /> VS Code</div>
            <div className="skill"><FaGithub /> GitHub</div>
            <div className="skill"><FaFileWord /> MS Word</div>
            <div className="skill"><FaFileExcel /> MS Excel</div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;