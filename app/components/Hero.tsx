import Blurb from "../components/Blurb";
import Image, { StaticImageData } from "next/image";
import Scroll from "@/app/components/Scroll";

import cat from "../../public/images/cat.jpg";
import burger from "../../public/images/burger.jpg";
import oop from "../../public/images/oop.jpg";
import fish from "../../public/images/fish.jpg";

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
}

export default function Hero() {
  // ----------------------
  // Images used for parallax sections
  // ----------------------
  const images = [
    { src: cat, alt: "Cat" },
    { src: burger, alt: "burger" },
    { src: oop, alt: "Object-Oriented Programming" },
    { src: fish, alt: "Fish" },
  ];

  // ----------------------
  // Project list for "Projects" section
  // ----------------------
  const projectList: Project[] = [
    {
      title: "onX East Coast Ski Mapping",
      description:
        "GIS-based steep ski-mapping demo built with Next.js, React Leaflet, custom GeoJSON layers, and detailed route metadata.",
      image: onx,
      link: "https://tcaron146.github.io/onX-east-coast",
    },
    {
      title: "Food Blog Website",
      description:
        "A responsive food blog website built with Next.JS, Firebase, Tailwind, ReactJS, and more.",
      image: burger,
      link: "https://soupdejourtommy-ba24e.web.app/",
    },
  ];

  return (
    <div className={"bg-background w-screen min-h-screen"}>
      {/* ---------------------- Header ---------------------- */}
      <header
        className={
          "fixed drop-shadow-2xl top-0 left-0 w-full h-16 bg-background text-text font-roboto flex items-center justify-between px-8 shadow-md z-50"
        }
      >
        <h1 className={"text-3xl"}>Tom Caron</h1>
<nav className="text-lg space-x-6 flex items-center">
  <a href="#about" className="hover:text-accent">About</a>
  <a href="#projects" className="hover:text-accent">Projects</a>

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
</nav>


      </header>

      <div className={"relative"}>
        {/* ---------------------- Parallax Section 1 ---------------------- */}
        <div
          className={
            "parallax bg-mountains bg-cover bg-center h-screen text-white flex items-center justify-center"
          }
        >
          <h2 className={"text-4xl font-bold font-roboto text-background"}>
            Welcome to My Portfolio
          </h2>
        </div>

        {/* ---------------------- About Section ---------------------- */}
        <section id="about" className={"bg-background text-white py-16"}>
          <Blurb
            id={"about"}
            title={"About Me"}
            blurb={
              "My name is Tom Caron, I am a recent graduate of Montana State University with a bachelors degree in Computer Science who possesses a thorough understanding of concepts in Data Structures in Algorithms, Databases, Web Development, and Discrete Mathematics. My current goal is to start a career in software engineering/development whether it be front-end, back-end, or full-stack. I have experience in leadership roles such as vice president in my fraternity, and through that experience I have grown to love working in a team and working towards a goal collectively. I hope to soon be working with a team of like minded individuals who are all striving to achieve a common goal."
            }
          />
        </section>

        {/* ---------------------- Parallax Section 2 ---------------------- */}
        <div
          className={
            "parallax bg-ocean bg-cover bg-center h-screen text-white flex items-center justify-center"
          }
        >
          <h2 className={"text-4xl text-background font-roboto font-bold"}>
            Explore My Work
          </h2>
        </div>

        {/* ---------------------- Projects Section ---------------------- */}
        <section id="projects" className={"bg-black text-white py-16"}>
          <Blurb
            id={"projects"}
            title={"Projects"}
            blurb={
              "These are some of my favorite projects that have utilized a plethora of my favorite frameworks, libraries, and algorithms to create and display some really cool apps and sites as well as do some pretty awesome things within programs."
            }
          />

          {/* Project Cards Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
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
      </div>
    </div>
  );
}
