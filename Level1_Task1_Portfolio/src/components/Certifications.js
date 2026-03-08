import { FaAws } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";

function Certifications() {
  return (
    <section id="certifications" className="section">

      <h2>Certifications</h2>

      <div className="certifications">

        {/* AWS */}
        <div className="cert-card">
          <div className="cert-icon aws">
            <FaAws />
          </div>

          <h3>AWS Cloud Virtual Internship</h3>
          <p>Issued by Eduskills Academy — 2024</p>

          <a href="https://drive.google.com/file/d/1IUJ9aiHuqo22DwJ_iOIvPRlnB7E9Nbf4/view?usp=drivesdk" target="_blank" rel="noreferrer">
            View Credential →
          </a>
        </div>


        {/* DEVOPS */}
        <div className="cert-card">
          <div className="cert-icon devops">
            DEVOPS
          </div>

          <h3>Jenkins for DevOps</h3>
          <p>Issued by Infosys Springboard — 2024</p>

          <a href="https://drive.google.com/file/d/1MyDszIHhC9nsw8LjPsdZyniZHtp3nA3Y/view?usp=drivesdk" target="_blank" rel="noreferrer">
            View Credential →
          </a>
        </div>


        {/* MERN */}
        <div className="cert-card">
          <div className="cert-icon mern">
            MERN
          </div>

          <h3>MERN Stack Internship</h3>
          <p>Issued by Brain O Vision — 2025</p>

          <a href="https://drive.google.com/file/d/1F7XM78NnjmWVDSKAghq-cj41LTwA7uig/view?usp=drivesdk" target="_blank" rel="noreferrer">
            View Credential →
          </a>
        </div>


        {/* Celonis */}
        <div className="cert-card">
          <div className="cert-icon celonis">
            <FaProjectDiagram />
          </div>

          <h3>Celonis Process Mining Fundamentals</h3>
          <p>Issued by Celonis — 2025</p>

          <a href="https://drive.google.com/file/d/1BNLOCYWNPm82tUVaaTtV_irDHcikF98T/view?usp=drivesdk" target="_blank" rel="noreferrer">
            View Credential →
          </a>
        </div>

      </div>

    </section>
  );
}

export default Certifications;