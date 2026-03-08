import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="section">

      <h2>Let's Work Together</h2>

      <p className="contact-text">
        I am always open to discussing new ideas, projects, or opportunities related to web development. 
If you would like to collaborate or have any questions, feel free to reach out and connect with me. 
Let's turn ideas into something meaningful.
      </p>

      <h3 className="connect-heading">Connect With Me</h3>

      <div className="contact-icons">

        <a href="https://www.linkedin.com/in/prathyusha-cheleveri-294907376" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>

        <a href="https://github.com/CheleveriPrathyusha" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>

        <a href="mailto:cheleveriprathyusha234@gmail.com">
          <FaEnvelope />
        </a>

      </div>

    </section>
  );
}

export default Contact;