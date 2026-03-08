import { FaGithub } from "react-icons/fa";
import { FaGoogleDrive } from "react-icons/fa";

function Projects() {
  return (
    <section id="projects" className="section">

      <h2 className="section-title">My <span>Projects</span></h2>

      <div className="projects-container">

        {/* Campus Care */}
        <div className="project-card">

          <img
            src="/campus.jpeg"
            alt="Campus Care"
            className="project-image"
          />

          <div className="project-content">

            <h3>Campus Care</h3>

            <p>
              A MERN stack web application that enables students to register
              complaints and communicate with college administration with an
              admin dashboard for issue tracking and resolution.
            </p>

            <div className="project-buttons">
              <a
                href="https://github.com/CheleveriPrathyusha/campuscare.git"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub /> View Code
              </a>
            </div>

          </div>

        </div>


        {/* Job Fit Analyzer */}
        <div className="project-card">

          <img
            src="/jobb.jpeg"
            alt="Job Fit Analyzer"
            className="project-image"
          />

          <div className="project-content">

            <h3>Job Fit Analyzer</h3>

            <p>
              An AI-powered web application that analyzes resumes and matches
              them with job descriptions using NLP to generate skill match
              scores and job recommendations.
            </p>

            <div className="project-buttons">
              <a
                href="https://github.com/CheleveriPrathyusha/Job-Fit-Analyzer.git"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub /> View Code
              </a>
            </div>

          </div>

        </div>


        {/* Better Help */}
        <div className="project-card">

          <img
            src="/better.jpeg"
            alt="Better Help"
            className="project-image"
          />

          <div className="project-content">

            <h3>Better Help</h3>

            <p>
              A mobile healthcare application built using MIT App Inventor
              that helps users search medicines and find nearby hospitals
              through a simple and user-friendly interface.
            </p>

            <div className="project-buttons">
              <a
                href="https://drive.google.com/file/d/1T9-OiCLk35J4sqnbRFxbyPbi9rc1jiZl/view?usp=drivesdk"
                target="_blank"
                rel="noreferrer"
              >
                <FaGoogleDrive /> View Project
              </a>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;