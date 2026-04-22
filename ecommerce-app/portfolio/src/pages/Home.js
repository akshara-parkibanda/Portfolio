import profile from '../assets/profile.jpg';

function Home() {
  return (
    <div>

      {/* HERO SECTION */}
      <div className="hero">
        <div className="hero-left">
          <img src={profile} alt="Profile" />
        </div>

        <div className="hero-right">
          <h1>Welcome to Akshara's Portfolio</h1>

          <p>
            I am a B.Tech student specializing in Artificial Intelligence with a strong interest in machine learning, web development, and software engineering. I enjoy building practical projects and applying my knowledge to solve real-world problems.
          </p>

          <div className="buttons">
            <a href="/resume.pdf" target="_blank" rel="noreferrer">
  Resume
</a>
            <a href="https://github.com/akshara-parkibanda" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <div className="card">
        <h2>About Me</h2>
        <p>
          I am a B.Tech student specializing in Artificial Intelligence with a strong interest in machine learning, web development, and software engineering. I enjoy building practical projects and applying my knowledge to solve real-world problems. I am continuously working on improving my technical skills and aim to develop efficient and impactful solutions.
        </p>
      </div>

      {/* RESEARCH */}
      <div className="card">
        <h2>Research Interests</h2>
        <p>AI, ML, Web Development, Software Development, Quantum Computing</p>
      </div>

      {/* DETAILS */}
      <div className="card">
        <h2>Personal Details</h2>
        <p>Phone: +91 8143180379</p>
        <p>Email: aksharaparkibanda@gmail.com</p>
        <p>College Email: se23uari090@mahindrauniversity.edu.in</p>
      </div>

      {/* SKILLS */}
      <div className="card">
  <h2>Skills</h2>

  <div className="skills-container">
    <span className="skill">C</span>
    <span className="skill">Java</span>
    <span className="skill">Python</span>
    <span className="skill">React</span>
    <span className="skill">Matlab</span>
    <span className="skill">MongoDB</span>
    <span className="skill">MySQL</span>
    <span className="skill">PyTorch</span>
    <span className="skill">NumPy</span>
    <span className="skill">Pandas</span>
  </div>
</div>
    </div>
  );
}

export default Home;