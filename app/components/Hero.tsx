import Blurb from "../components/Blurb"
export default function Navbar() {
    return (
        <div className="bg-background w-screen min-h-screen">
            <header className="fixed top-0 left-0 w-full h-16 bg-background text-text font-roboto flex items-center justify-between px-8 shadow-md z-50">
                <h1 className="text-3xl">Tom Caron</h1>

                <nav className="text-lg space-x-6">
                    <a href="#about" className="hover:text-accent">About</a>
                    <a href="#projects" className="hover:text-accent">Projects</a>
                    <a href="#experience" className="hover:text-accent">Experience</a>
                </nav>
            </header>

            <Blurb id={"about"} title={"About Me"} blurb={"My name is Tom Caron, I am a recent graduate of Montana State University with a bachelors degree in Computer Science who possesses a thorough understanding of concepts in Data Structures in Algorithms, Databases, Web Development, and Discrete Mathematics. My current goal is to start a career in software engineering/development whether it be front-end, back-end, or full-stack. I have experience in leadership roles such as vice president in my fraternity, and through that experience I have grown to love working in a team and working towards a goal collectively. I hope to soon be working with a team of like minded individuals who are all striving to achieve a common goal."}/>

            <Blurb id={"projects"} title={"Projects"} blurb={"These are some of my favorite projects that have utilized a plethora of my favorite frameworks, libraries, and algorithms to create and display some really cool apps and sites as well as do some pretty awesome things within programs."}/>
            

        </div>
);
}
