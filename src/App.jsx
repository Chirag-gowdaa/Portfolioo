import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import ProjectModal from "./ProjectModal";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [selectedProject, setSelectedProject] = useState(null);

  // Theme toggler with persistence
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  // Active section highlight
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "home";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) current = section.getAttribute("id");
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      title: "CreatorSpace",
      desc: "Full-stack platform for creators with OAuth & Razorpay.",
      tech: "Next.js, Tailwind, MongoDB, OAuth, Razorpay",
      img: "./yourspace.png",
      link: "https://creator-space-puce.vercel.app/",
    },
    {
      title: "Password Manager",
      desc: "Secure password storage with encryption.",
      tech: "React, Node.js, MongoDB",
      img: "./password.png",
      link: "https://password-manager-frontend-coral.vercel.app",
    },
    {
      title: "Mood Matrix",
      desc: "Daily mood tracking with charts.",
      tech: "React, LocalStorage",
      img: "./mood.png",
      link: "https://moodpredictai.onrender.com",
    },
    {
      title: "Spotify Clone",
      desc: "Functional clone with Spotify API.",
      tech: "React, Redux",
      img: "./spotify.jpg",
    },
    {
      title: "Free2Feed",
      desc: "A platform created during a hackathon to connect surplus food donors with NGOs. Built using MERN stack and deployed on Render",
      tech: "React, Node.js, MongoDB",
      img: "./spotify.jpg",
    },
  ];

  return (
    <div
      className={`transition-colors duration-500 ${
        theme === "dark" ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <Navbar
        activeSection={activeSection}
        toggleTheme={toggleTheme}
        theme={theme}
      />

      {/* HERO SECTION */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl px-6"
        >
          <motion.img
            src="./Chirag.jpg"
            alt="Chirag S"
            className="w-40 h-40 rounded-full mx-auto border-4 border-indigo-400 shadow-xl"
            whileHover={{ scale: 1.05 }}
          />
          <h1 className="text-5xl md:text-6xl font-extrabold mt-6">
            Hi, I'm{" "}
            <span className="text-indigo-500 dark:text-indigo-400">Chirag S</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300">
            CS & Business System Engineer | Full-Stack Developer | Content Creator
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="./resume.pdf"
              target="_blank"
              className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full shadow-lg transition"
            >
              View Resume
            </a>
            <a
              href="./resume.pdf"
              download
              className="px-6 py-3 border border-indigo-400 text-indigo-500 dark:text-indigo-300 hover:bg-indigo-500 hover:text-white rounded-full transition"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-indigo-700/50 to-transparent -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 md:px-20 lg:px-40">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-5xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          <p>
            I'm a passionate coder, gym freak, and part-time content creator. I thrive on building
            sleek UIs, solving complex problems, and pushing boundaries in tech.
          </p>
          <p className="mt-4">
            When not coding, I'm lifting heavy or creating content about tech, fitness, and
            discipline—the ultimate tools for growth.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 bg-gray-100 dark:bg-gray-800 px-6 md:px-20 lg:px-40">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-10 max-w-6xl mx-auto">
          {[
            "html5/html5-original",
            "css3/css3-original",
            "tailwindcss/tailwindcss-original",
            "react/react-original",
            "nextjs/nextjs-original",
            "express/express-original",
            "nodejs/nodejs-original",
            "mongodb/mongodb-original",
            "python/python-original",
            "java/java-original",
            "git/git-original",
            "postgresql/postgresql-original",
            "mysql/mysql-original",
            "c/c-original",
            "cplusplus/cplusplus-original",
          ].map((icon, index) => (
            <motion.img
              key={index}
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}.svg`}
              alt={icon}
              className="w-16 h-16 mx-auto hover:scale-110 transition-transform"
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 px-6 md:px-20 lg:px-40">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl hover:shadow-2xl transition cursor-pointer"
              onClick={() => setSelectedProject(p)}
            >
              <img src={p.img} alt={p.title} className="rounded-lg mb-4" />
              <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">{p.desc}</p>
              <p className="text-sm text-indigo-500">{p.tech}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-24 bg-gray-100 dark:bg-gray-800 px-6 md:px-20 lg:px-40">
        <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
        <p className="text-center text-gray-600 dark:text-gray-300">No experience yet, but open to opportunities!</p>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-24 px-6 md:px-20 lg:px-40 bg-gradient-to-r from-indigo-800 to-indigo-700 text-center text-white"
      >
        <h2 className="text-4xl font-bold mb-6">Contact</h2>
        <p className="mb-3">Phone: +91 9036552272</p>
        <p className="mb-6">Email: gowdachiru552@gmail.com</p>
        <a
          href="mailto:gowdachiru552@gmail.com"
          className="px-8 py-3 bg-white text-indigo-700 rounded-full font-semibold shadow-lg hover:scale-105 transition"
        >
          Send Email
        </a>
      </section>

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>
  );
}

export default App;
