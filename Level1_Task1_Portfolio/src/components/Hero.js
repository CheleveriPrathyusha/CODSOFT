function Hero() {
  return (
    <section id="hero" className="hero">

      <div className="hero-container">

        {/* Left Side - Text */}
        <div className="hero-text">

          <h1>Prathyusha Cheleveri</h1>

          <h3>Full Stack Developer (MERN) | Computer Science Student</h3>

          <p>
            I design and develop modern web applications using HTML, CSS, JavaScript, and the MERN stack. 
            I enjoy creating responsive interfaces and building efficient backend systems 
            that deliver smooth user experiences.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="btn-primary">
              Explore My Projects
            </a>

            <a
              href="/prathyusharesume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              View Resume
            </a>

          </div>

        </div>

        {/* Right Side - Photo */}
        <div className="hero-image">

          <img src="/profile.jpeg" alt="Prathyusha Profile" />

        </div>

      </div>

    </section>
  );
}

export default Hero;