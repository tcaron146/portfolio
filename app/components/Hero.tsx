import Blurb from "../components/Blurb";
import { StaticImageData } from "next/image";

import burger from "../../public/images/burger.jpg";
import ProjectCard from "../components/ProjectCard";
import onx from "../../public/images/bridger.jpg";

// ----------------------
// Interfaces
// ----------------------
interface Project {
  title: string;
  description: string;
  image: StaticImageData;
  link: string;
  github?: string;
}

export default function Hero() {
  // ----------------------
  // Project list for "Projects" section
  // ----------------------
  const projectList: Project[] = [
    {
      title: "onX East Coast Ski Mapping",
      description:
        "GIS-based steep ski-mapping demo built with Mapbox GL JS, Custom GeoJSON data, Python DEM Processing ,Hillshade overlays, Draw Tools, OnX-inspired UX.",
      image: onx,
      link: "https://tcaron146.github.io/onX-east-coast",
      github: "https://github.com/tcaron146/onX-east-coast",
    },
    {
      title: "Food Blog Website",
      description:
        "A responsive food blog website built with Next.JS, Firebase, Tailwind, ReactJS, and more.",
      image: burger,
      link: "https://soupdejourtommy-ba24e.web.app/",
      github: "https://github.com/tcaron146/soupdejourtommy",
    },
  ];

  return (
    <div className="bg-background w-screen min-h-screen">
      {/* ---------------------- Header ---------------------- */}
      <header className="fixed drop-shadow-2xl top-0 left-0 w-full h-20 bg-background text-text font-roboto flex items-center justify-between px-8 shadow-md z-50">
        <h1 className="text-3xl">Tom Caron</h1>
        <nav className="text-lg space-x-6 flex items-center">
          <a href="#about" className="hover:text-accent">
            About
          </a>
          <a href="#projects" className="hover:text-accent">
            Projects
          </a>

          {/* LinkedIn Icon Button */}
          <a
            href="https://www.linkedin.com/in/thomas-caron-montana/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.98h4.47V24H.22V8.98zM8.67 8.98h4.29v2.05h.06c.6-1.14 2.07-2.33 4.26-2.33 4.56 0 5.4 3 5.4 6.9V24h-4.47v-7.64c0-1.82-.03-4.16-2.54-4.16-2.54 0-2.93 1.98-2.93 4.03V24H8.67V8.98z" />
            </svg>
          </a>

          <a
            href="https://www.instagram.com/soupdejourtommy/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
        </nav>
      </header>

      <div className="relative">
        {/* ---------------------- Parallax Section 1 ---------------------- */}
        <div className="parallax bg-mountains bg-cover bg-center h-screen text-white flex items-center justify-center">
          <h2 className="text-4xl font-bold font-roboto text-background">
            Welcome to My Portfolio
          </h2>
        </div>

        {/* ---------------------- About Section ---------------------- */}
        <section id="about" className="bg-background text-white py-16">
          <Blurb
            title="About Me"
            blurb="I'm Tom Caron, a recent Computer Science graduate from Montana State University with a strong foundation in Data Structures & Algorithms, Web Development, and Front-End Development. I thrive in fast-paced, productive environments and am actively seeking software engineering and web development opportunities where I can build impactful solutions. My leadership experience as vice president of my fraternity reinforced my love for collaborative teamwork and goal-oriented projects. When I'm not coding, you'll find me exploring the outdoors. I'm driven to continuously learn, grow, and advance my career alongside a team that shares my commitment to excellence and innovation."
          />

          {/* Resume Download Button */}
          <div className="flex justify-center mt-8">

            <a
              href="Resume.pdf"
              download
              className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors flex items-center gap-2"
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            Download Resume
          </a>
      </div>
    </section>

        {/* ---------------------- Parallax Section 2 ---------------------- */ }
  <div className="parallax bg-ocean bg-cover bg-center h-screen text-white flex items-center justify-center">
    <h2 className="text-4xl text-background font-roboto font-bold">
      Explore My Work
    </h2>
  </div>

  {/* ---------------------- Projects Section ---------------------- */ }
  <section id="projects" className="bg-black text-white py-16">
    <Blurb
      title="Projects"
      blurb="Here are some projects I've built that combine my technical skills with my interests. From outdoor adventure mapping to web applications, each project represents a challenge I've tackled and a skill I've developed."
    />

    {/* Project Cards Grid */}
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-6 max-w-5xl mx-auto">
      {projectList.map((p, i) => (
        <ProjectCard
          key={i}
          title={p.title}
          description={p.description}
          image={p.image}
          link={p.link}
        />
      ))}
    </div>
  </section>
      </div >
    </div >
  );
}
