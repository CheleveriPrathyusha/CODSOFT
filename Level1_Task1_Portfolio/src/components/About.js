import { FaLightbulb, FaComments, FaRocket, FaCode } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="section">

      <h2>About Me</h2>

      <p className="about-text">
        I am a Computer Science undergraduate with a strong interest in web development and modern software technologies. I enjoy building responsive web applications and continuously improving my skills in full-stack development using the MERN stack.
      </p>

      <div className="about-cards">

        <div className="about-card">
          <FaLightbulb />
          <h3>Problem Solving</h3>
          <p>Strong analytical thinking and ability to solve complex problems efficiently.</p>
        </div>

        <div className="about-card">
          <FaComments />
          <h3>Communication</h3>
          <p>Clear communication and collaboration skills in team environments.</p>
        </div>

        <div className="about-card">
          <FaRocket />
          <h3>Quick Learning</h3>
          <p>Fast learner who adapts quickly to new technologies and tools.</p>
        </div>

        <div className="about-card">
          <FaCode />
          <h3>Project Developer</h3>
          <p>Experience developing full-stack projects using modern technologies.</p>
        </div>

      </div>

    </section>
  );
}

export default About;