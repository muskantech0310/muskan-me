export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col gap-16">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl font-black tracking-tight uppercase">About <span className="gradient-text">Me</span></h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            I&apos;m a Software Developer with a passion for building clean, scalable, and user-centric web applications. My journey in technology is driven by a deep curiosity about how things work and a desire to create tools that make a difference.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With expertise in the MERN stack and Next.js, I bridge the gap between complex backend architectures and intuitive frontend experiences. I believe that great software is not just about code, but about solving real-world problems through elegant engineering.
          </p>
        </div>
        <div className="relative aspect-square rounded-3xl bg-secondary overflow-hidden border border-border">
           <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
           <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-8xl font-black text-foreground/5 uppercase italic">Dev</span>
           </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 rounded-2xl bg-card border border-border space-y-4 hover:border-primary/30 transition-colors">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
          </div>
          <h3 className="text-xl font-bold">Frontend Development</h3>
          <p className="text-muted-foreground text-sm">
            Crafting responsive, high-performance user interfaces using React, Next.js, and Tailwind CSS.
          </p>
        </div>
        <div className="p-8 rounded-2xl bg-card border border-border space-y-4 hover:border-primary/30 transition-colors">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>
          </div>
          <h3 className="text-xl font-bold">Backend Architecture</h3>
          <p className="text-muted-foreground text-sm">
            Building robust APIs and server-side logic with Node.js, Express, and modern database solutions.
          </p>
        </div>
        <div className="p-8 rounded-2xl bg-card border border-border space-y-4 hover:border-primary/30 transition-colors">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/></svg>
          </div>
          <h3 className="text-xl font-bold">Database Management</h3>
          <p className="text-muted-foreground text-sm">
            Designing efficient schemas and managing data flow with MongoDB and other SQL/NoSQL databases.
          </p>
        </div>
      </section>

      <section className="space-y-8 py-12">
        <h2 className="text-3xl font-black uppercase tracking-tight">Experience & Education</h2>
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row justify-between gap-4 p-6 rounded-xl border border-border hover:bg-secondary/20 transition-colors">
            <div>
              <h4 className="font-bold text-lg">Full Stack Developer</h4>
              <p className="text-muted-foreground">Self-Employed / Freelance</p>
            </div>
            <div className="text-primary font-mono text-sm uppercase">2023 - Present</div>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-4 p-6 rounded-xl border border-border hover:bg-secondary/20 transition-colors">
            <div>
              <h4 className="font-bold text-lg">Bachelor of Computer Science</h4>
              <p className="text-muted-foreground">Major University</p>
            </div>
            <div className="text-primary font-mono text-sm uppercase">2019 - 2023</div>
          </div>
        </div>
      </section>
    </div>
  );
}
