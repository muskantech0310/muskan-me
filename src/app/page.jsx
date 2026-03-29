import SkillBadge from "@/components/SkillBadge";
import ProjectCard from "@/components/ProjectCard";

const skills = [
  "Next.js", "React", "Node.js", "MongoDB", 
  "JavaScript", "TypeScript", "Tailwind CSS", 
  "Express.js", "REST APIs", "Git"
];

const projects = [
  {
    title: "EcoShop E-commerce",
    description: "A full-stack e-commerce platform with real-time inventory management, secure payments, and a sleek user interface.",
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    link: "#"
  },
  {
    title: "TaskFlow Manager",
    description: "Project management tool with drag-and-drop boards, collaborative workspaces, and real-time dashboard updates.",
    tags: ["React", "Express", "Socket.io", "Tailwind"],
    link: "#"
  },
  {
    title: "StreamLine Social",
    description: "A community-focused social media app featuring media sharing, private messaging, and content discovery algorithms.",
    tags: ["Next.js", "Appwrite", "Framer Motion"],
    link: "#"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col justify-center px-6 max-w-7xl mx-auto w-full">
        <div className="space-y-6 max-w-3xl">
          <h2 className="text-primary font-mono tracking-widest text-sm uppercase">
            Available for new opportunities
          </h2>
          <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.9]">
            I build <span className="gradient-text">full-stack</span> web applications.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Hi, I&apos;m <span className="text-foreground font-semibold">Muskan S.</span>, a software developer focused on creating performant, scalable, and beautiful digital experiences using the MERN stack and Next.js.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:translate-y-[-2px] transition-transform shadow-lg shadow-primary/20"
            >
              View My Work
            </a>
            <a
              href="mailto:muskan@example.com"
              className="px-8 py-4 rounded-xl border border-border bg-secondary hover:bg-secondary/50 transition-colors font-bold"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 max-w-7xl mx-auto w-full">
        <h3 className="text-2xl font-bold mb-10 flex items-center gap-4">
          Tech Stack <div className="h-px flex-grow bg-border" />
        </h3>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <SkillBadge key={skill} name={skill} />
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 max-w-7xl mx-auto w-full pt-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div>
            <h3 className="text-4xl font-black tracking-tight mb-2 uppercase">Selected Works</h3>
            <p className="text-muted-foreground">A collection of projects that demonstrate my technical expertise.</p>
          </div>
          <a href="#" className="text-primary font-bold hover:underline mb-2">View All Projects &rarr;</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="px-6 max-w-7xl mx-auto w-full py-24 text-center">
        <div className="p-12 md:p-24 rounded-3xl bg-secondary relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <h2 className="text-4xl md:text-6xl font-black mb-6 relative z-10 uppercase italic">Let&apos;s build something <span className="gradient-text">amazing</span> together.</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto relative z-10">
            Currently looking for a new role or interesting freelance projects. If you have any idea, I&apos;d love to hear it.
          </p>
          <a
            href="mailto:muskan@example.com"
            className="inline-block px-12 py-6 bg-primary text-primary-foreground text-xl font-black rounded-2xl hover:scale-105 transition-transform relative z-10 shadow-2xl shadow-primary/30"
          >
            Say Hello!
          </a>
        </div>
      </section>
    </div>
  );
}
