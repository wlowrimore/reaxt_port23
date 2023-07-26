import Projects from "./projects/page";
import About from "./about/page";
import Skills from "./skills/page";

export default function Home(project, skill) {
  return (
    <main className="my-10 bg-cyan-800">
      <section className="bg-gray-200">
        <About />
      </section>
      <section className="bg-gray-200">
        <Skills skill={skill} />
      </section>
      <section className="bg-gray-200">
        <Projects project={project} />
      </section>
    </main>
  );
}
