import "./App.css";

const projects = [
  {
    title: "OrderOps Dashboard",
    status: "In Progress",
    description:
      "A full-stack operations dashboard inspired by real e-commerce and warehouse workflows. Designed to track marketplace orders, fulfillment status, shipping issues, and operational data.",
    tech: ["React", "Node.js", "Express", "SQLite", "JavaScript", "Git"],
    link: "https://github.com/undeceive/orderops-dashboard",
  },
  {
    title: "Portfolio Website",
    status: "Current Project",
    description:
      "A modern personal portfolio rebuilt with React and Vite to showcase projects, technical skills, work experience, and contact information for employers.",
    tech: ["React", "Vite", "JavaScript", "CSS", "GitHub", "Vercel"],
    link: "https://github.com/undeceive/portfolio",
  },
  {
    title: "Linux Development Workflow",
    status: "Personal Project",
    description:
      "Personal Arch Linux development environment configured for programming, Git workflows, SSH-based GitHub authentication, project organization, and local development tooling.",
    tech: ["Arch Linux", "Bash", "Git", "SSH", "Node.js"],
    link: "https://github.com/undeceive",
  },
  {
    title: "Paws E-Commerce App",
    status: "Earlier Project",
    description:
      "Full-stack e-commerce project using React, Next.js, Context API, and Stripe integration. Built to practice product management, checkout workflows, and CMS-managed content.",
    tech: ["React", "Next.js", "Context API", "Stripe"],
    link: "https://github.com/undeceive/paws",
  },
  {
    title: "Claw Budget Tracker",
    status: "Earlier Project",
    description:
      "Expense tracking application using React, Context API, Local Storage, and Material UI. Designed to practice state management, financial tracking interfaces, and scalable front-end structure.",
    tech: ["React", "Context API", "Local Storage", "Material UI"],
    link: "https://github.com/undeceive/claw",
  },
];

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "SQLite",
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "Git",
  "GitHub",
  "SSH",
  "Linux",
  "Arch Linux",
  "Vite",
  "npm",
  "QuickBooks",
  "Order Processing",
  "Shipping Coordination",
  "Customer Service",
  "Inventory Tracking",
  "Marketplace Listings",
  "Training",
  "Documentation",
];

function App() {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Portfolio</p>
        <h1>Frank Garcia Sarmiento</h1>
        <p className="role">Computer Science Student and Aspiring Software Developer</p>
        <p className="subtitle">
          I build practical software for e-commerce operations, internal
          business workflows, data organization, and automation.
        </p>

        <div className="heroActions">
          <a className="button primary" href="#projects">
            View Projects
          </a>
          <a className="button secondary" href="mailto:worksourcegaportal@proton.me">
            Contact Me
          </a>
          <a
            className="button secondary"
            href="https://github.com/undeceive"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </section>

      <section className="section" id="summary">
        <div className="sectionHeader">
          <p className="eyebrow">Professional Summary</p>
          <h2>Software development with real operations experience.</h2>
        </div>

        <p>
          I am a Computer Science student with hands-on experience in e-commerce
          operations, customer service, order processing, and technical workflows.
          I am currently building full-stack software projects using React,
          Node.js, Express, SQLite, Git, and Linux.
        </p>

        <p>
          My work experience includes marketplace support, shipping coordination,
          spreadsheet-based reporting, product data accuracy, and training new
          team members. I am interested in software development, IT support,
          technical operations, cybersecurity, and open source technologies.
        </p>
      </section>

      <section className="section" id="experience">
        <div className="sectionHeader">
          <p className="eyebrow">Experience</p>
          <h2>E-Commerce and Operations Support</h2>
        </div>

        <div className="experienceCard">
          <div className="experienceTop">
            <div>
              <h3>HYW Products</h3>
              <p>Dec 2024 -- Present</p>
            </div>
            <span>Current Role</span>
          </div>

          <ul className="resumeList">
            <li>
              Supported daily e-commerce order operations across marketplace
              platforms including Amazon, eBay, Shopify, Temu, Zoro, and related
              sales channels.
            </li>
            <li>
              Assisted with order review, shipping coordination, product data
              accuracy, and fulfillment workflows.
            </li>
            <li>
              Used ShipStation-style order processing workflows to review orders,
              prepare order information, and support warehouse fulfillment.
            </li>
            <li>
              Trained a new hire on daily order-processing routines, platform
              workflows, internal procedures, and customer service expectations.
            </li>
            <li>
              Maintained spreadsheets for tracking orders, inventory details,
              product issues, and operational information.
            </li>
          </ul>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="sectionHeader">
          <p className="eyebrow">Projects</p>
          <h2>Selected work.</h2>
        </div>

        <div className="projectGrid">
          {projects.map((project) => (
            <article className="projectCard" key={project.title}>
              <div className="projectTop">
                <h3>{project.title}</h3>
                <span>{project.status}</span>
              </div>

              <p>{project.description}</p>

              <div className="techList">
                {project.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <a href={project.link} target="_blank" rel="noreferrer">
                View project
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="skills">
        <div className="sectionHeader">
          <p className="eyebrow">Technical Skills</p>
          <h2>Tools, technologies, and operational strengths.</h2>
        </div>

        <div className="skillsGrid">
          {skills.map((skill) => (
            <span className="skill" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="section" id="interests">
        <div className="sectionHeader">
          <p className="eyebrow">Areas of Interest</p>
          <h2>Where I want to keep growing.</h2>
        </div>

        <div className="interestGrid">
          <div>
            <h3>Software Development</h3>
            <p>Full-stack development, web applications, and internal business tools.</p>
          </div>
          <div>
            <h3>Systems and Security</h3>
            <p>Cybersecurity, Linux systems, IT support, and open source technologies.</p>
          </div>
          <div>
            <h3>Operations Automation</h3>
            <p>E-commerce automation, operations dashboards, and data organization.</p>
          </div>
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="sectionHeader">
          <p className="eyebrow">Contact</p>
          <h2>Let’s connect.</h2>
        </div>

        <p>
          I am currently building software projects and looking for opportunities
          to grow in software development, IT, and technical operations.
        </p>

        <div className="heroActions">
          <a className="button primary" href="mailto:worksourcegaportal@proton.me">
            Email Me
          </a>
          <a
            className="button secondary"
            href="https://github.com/undeceive"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;
