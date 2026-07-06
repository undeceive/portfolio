import {
  FaCode,
  FaShoppingCart,
  FaServer,
  FaLinux,
} from "react-icons/fa";
import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import "./App.css";

import htmlLogo from "./assets/tech/html.svg";
import cssLogo from "./assets/tech/css.svg";
import javascriptLogo from "./assets/tech/javascript.svg";
import typescriptLogo from "./assets/tech/typescript.svg";
import reactLogo from "./assets/tech/react.svg";
import nodeLogo from "./assets/tech/node.svg";
import expressLogo from "./assets/tech/express.svg";
import sqliteLogo from "./assets/tech/sqlite.svg";
import gitLogo from "./assets/tech/git.svg";
import linuxLogo from "./assets/tech/linux.svg";
import viteLogo from "./assets/tech/vite.svg";

const services = [
  {
    title: "Web Developer",
    icon: FaCode,
  },
  {
    title: "E-Commerce Systems",
    icon: FaShoppingCart,
  },
  {
    title: "Backend Developer",
    icon: FaServer,
  },
  {
    title: "Linux / IT Support",
    icon: FaLinux,
  },
];

const experiences = [
  {
    role: "E-Commerce Website and Marketplace Support",
    company: "HYW Products",
    date: "Dec 2024 - Present",
    points: [
      "Maintain online product listings across eBay, Shopify, Amazon, Zoro, TopDawg, and other sales platforms.",
      "Update product prices, photos, descriptions, and listing information to keep storefronts accurate.",
      "Review marketplace pages for broken listings, missing information, incorrect pricing, and image issues.",
      "Track inventory information and help keep online listings aligned with available stock.",
      "Trained a new hire on the same marketplace maintenance workflow.",
    ],
  },
  {
    role: "Computer Science Student",
    company: "Georgia State University",
    date: "2023 - Present",
    points: [
      "Studying computer science with a focus on programming, problem solving, and software development.",
      "Building full-stack projects using React, Node.js, Express, SQLite, Git, and Linux.",
      "Developing portfolio projects inspired by real business workflow problems.",
    ],
  },
];

const technologies = [
  { name: "HTML5", icon: htmlLogo },
  { name: "CSS3", icon: cssLogo },
  { name: "JavaScript", icon: javascriptLogo },
  { name: "TypeScript", icon: typescriptLogo },
  { name: "React", icon: reactLogo },
  { name: "Node.js", icon: nodeLogo },
  { name: "Express", icon: expressLogo },
  { name: "SQLite", icon: sqliteLogo },
  { name: "Git", icon: gitLogo },
  { name: "Linux", icon: linuxLogo },
  { name: "Vite", icon: viteLogo },
];

const projects = [
  {
    title: "OrderOps Dashboard",
    description:
      "A full-stack marketplace sync dashboard inspired by a real business idea. It tracks products, pricing, inventory, image status, and sync issues across sales channels.",
    tags: ["React", "Node.js", "Express", "SQLite"],
    link: "https://github.com/undeceive/orderops-dashboard",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern 3D developer portfolio built with React, Vite, Framer Motion, Three.js, and a custom light/dark theme.",
    tags: ["React", "Vite", "Three.js", "Framer Motion"],
    link: "https://github.com/undeceive/portfolio",
  },
  {
    title: "Paws E-Commerce App",
    description:
      "Earlier e-commerce project built to practice product pages, checkout workflows, and CMS-managed content.",
    tags: ["React", "Next.js", "Stripe"],
    link: "https://github.com/undeceive/paws",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

function FloatingComputer() {
  const group = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (group.current) {
      group.current.rotation.y = Math.sin(time * 0.45) * 0.22;
      group.current.rotation.x = Math.sin(time * 0.35) * 0.08;
      group.current.position.y = Math.sin(time * 1.1) * 0.1;
    }
  });

  return (
    <group ref={group} rotation={[0.05, -0.35, 0]}>
      <mesh position={[0, 0.35, 0]}>
        <boxGeometry args={[2.45, 1.35, 0.09]} />
        <meshStandardMaterial color="#171c33" metalness={0.35} roughness={0.28} />
      </mesh>

      <mesh position={[0, 0.35, 0.055]}>
        <boxGeometry args={[2.2, 1.1, 0.035]} />
        <meshStandardMaterial color="#101525" emissive="#3520a6" emissiveIntensity={0.32} />
      </mesh>

      <mesh position={[0, -0.55, 0]}>
        <boxGeometry args={[0.2, 0.55, 0.08]} />
        <meshStandardMaterial color="#4b5563" metalness={0.55} roughness={0.22} />
      </mesh>

      <mesh position={[0, -0.86, 0]}>
        <boxGeometry args={[1.15, 0.08, 0.55]} />
        <meshStandardMaterial color="#4b5563" metalness={0.55} roughness={0.22} />
      </mesh>

      <mesh position={[0, -1.25, 0.25]}>
        <boxGeometry args={[2.2, 0.12, 0.65]} />
        <meshStandardMaterial color="#111827" metalness={0.25} roughness={0.35} />
      </mesh>

      <mesh position={[1.75, -0.35, 0]}>
        <boxGeometry args={[0.55, 1.35, 0.75]} />
        <meshStandardMaterial color="#101525" metalness={0.35} roughness={0.26} />
      </mesh>

      <mesh position={[1.75, -0.05, 0.42]}>
        <sphereGeometry args={[0.18, 32, 32]} />
        <meshStandardMaterial color="#7c3aed" emissive="#7c3aed" emissiveIntensity={1.2} />
      </mesh>

      <mesh position={[1.75, -0.62, 0.42]}>
        <sphereGeometry args={[0.18, 32, 32]} />
        <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={1.1} />
      </mesh>

      <mesh position={[-1.45, -0.95, 0.25]}>
        <boxGeometry args={[0.42, 0.5, 0.22]} />
        <meshStandardMaterial color="#111827" metalness={0.3} roughness={0.3} />
      </mesh>

      <mesh position={[0.85, -1.06, 0.5]}>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshStandardMaterial color="#ec4899" emissive="#ec4899" emissiveIntensity={1.2} />
      </mesh>
    </group>
  );
}

function HeroCanvas() {
  return (
    <Canvas camera={{ position: [0, 0.2, 5.2], fov: 45 }}>
      <ambientLight intensity={0.85} />
      <pointLight position={[4, 5, 4]} intensity={2.3} />
      <pointLight position={[-4, -2, 3]} intensity={1.2} color="#7c3aed" />
      <FloatingComputer />
      <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.45} />
    </Canvas>
  );
}

function Ball() {
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.55} />
      <directionalLight position={[0, 0, 2]} intensity={1.2} />

      <mesh castShadow receiveShadow scale={2.55}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
      </mesh>
    </Float>
  );
}

function TechBall({ tech }) {
  return (
    <div className="techBallCard">
      <div className="techCanvas">
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
          <ambientLight intensity={0.85} />
          <pointLight position={[3, 4, 3]} intensity={1.4} />
          <Ball />
          <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.65} />
        </Canvas>

        <img className="techLogoImage" src={tech.icon} alt={tech.name} />
      </div>

      <p>{tech.name}</p>
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
      return;
    }

    document.documentElement.setAttribute("data-theme", "dark");
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  }

  return (
    <main>
      <div className="stars" />
      <div className="purpleGrid gridOne" />
      <div className="purpleGrid gridTwo" />

      <header className="navbar">
        <a className="logo" href="#home">
          <span>F</span>
          <p>Frank | Portfolio</p>
        </a>

        <nav>
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="themeButton" type="button" onClick={toggleTheme}>
          {theme === "dark" ? "Light" : "Dark"}
        </button>
      </header>

      <section className="hero" id="home">
        <motion.div className="heroText" initial="hidden" animate="visible" variants={stagger}>
          <motion.h1 variants={fadeUp}>
            Hi, I&apos;m <span>Frank</span>
          </motion.h1>

          <motion.p variants={fadeUp}>
            I build web applications, e-commerce workflow tools, marketplace sync
            dashboards, and Linux-based development projects.
          </motion.p>
        </motion.div>

        <motion.div
          className="heroModel"
          initial={{ opacity: 0, scale: 0.92, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <HeroCanvas />
        </motion.div>

        <a className="scrollMouse" href="#about" aria-label="Scroll to about">
          <span />
        </a>
      </section>

      <section className="section about" id="about">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.p className="sectionSub" variants={fadeUp}>
            Introduction
          </motion.p>

          <motion.h2 variants={fadeUp}>Overview.</motion.h2>

          <motion.p className="overviewText" variants={fadeUp}>
            I&apos;m a Computer Science student with hands-on experience maintaining
            e-commerce websites and marketplace storefronts. I work with platforms
            such as eBay, Shopify, Amazon, Zoro, and TopDawg, updating product
            listings, prices, images, descriptions, and inventory information.
            I&apos;m building full-stack projects with React, Node.js, Express,
            SQLite, Git, Linux, and Three.js.
          </motion.p>

          <motion.div className="serviceGrid" variants={stagger}>
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <motion.div
                  className="serviceCard"
                  key={service.title}
                  variants={fadeUp}
                  whileHover={{
                    y: -14,
                    rotateX: 7,
                    rotateY: -7,
                    scale: 1.04,
                  }}
                  transition={{ type: "spring", stiffness: 220, damping: 16 }}
                >
                  <div className="serviceIcon">
                    <Icon />
                  </div>
                  <h3>{service.title}</h3>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </section>

      <section className="section work" id="work">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={stagger}
        >
          <motion.p className="sectionSub" variants={fadeUp}>
            What I have done so far
          </motion.p>

          <motion.h2 variants={fadeUp}>Work Experience.</motion.h2>

          <div className="timeline">
            {experiences.map((experience, index) => (
              <motion.div
                className={`timelineItem ${index % 2 === 0 ? "left" : "right"}`}
                key={experience.role}
                variants={fadeUp}
              >
                <div className="timelineDot">{index + 1}</div>

                <div className="timelineCard">
                  <h3>{experience.role}</h3>
                  <h4>{experience.company}</h4>
                  <p className="date">{experience.date}</p>

                  <ul>
                    {experience.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="section tech">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.p className="sectionSub" variants={fadeUp}>
            Tools I use
          </motion.p>

          <motion.h2 variants={fadeUp}>Technologies.</motion.h2>

          <motion.p className="overviewText" variants={fadeUp}>
            Drag and rotate the 3D icons.
          </motion.p>

          <motion.div className="techGrid" variants={stagger}>
            {technologies.map((tech) => (
              <motion.div key={tech.name} variants={fadeUp}>
                <TechBall tech={tech} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="section projects" id="projects">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.p className="sectionSub" variants={fadeUp}>
            My work
          </motion.p>

          <motion.h2 variants={fadeUp}>Projects.</motion.h2>

          <motion.p className="overviewText" variants={fadeUp}>
            These projects show what I&apos;m building as I grow into software
            development, IT support, e-commerce systems, and technical operations.
          </motion.p>

          <div className="projectGrid">
            {projects.map((project) => (
              <motion.article
                className="projectCard"
                key={project.title}
                variants={fadeUp}
                whileHover={{ y: -8 }}
              >
                <div className="projectImage" aria-hidden="true"></div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tagList">
                  {project.tags.map((tag) => (
                    <span key={tag}>#{tag}</span>
                  ))}
                </div>

                <a href={project.link} target="_blank" rel="noreferrer">
                  View project
                </a>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="section contact" id="contact">
        <motion.div
          className="contactCard"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
        >
          <p className="sectionSub">Get in touch</p>
          <h2>Contact.</h2>

          <p>
            I&apos;m currently building software projects and looking for
            opportunities in software development, IT, e-commerce systems, and
            technical operations.
          </p>

          <div className="contactLinks">
            <a href="mailto:worksourcegaportal@proton.me">Email Me</a>
            <a href="https://github.com/undeceive" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://medium.com/@undeceive" target="_blank" rel="noreferrer">
              Medium
            </a>
          </div>
        </motion.div>
      </section>

      <footer>© 2026 Frank Garcia Sarmiento</footer>
    </main>
  );
}

export default App;
