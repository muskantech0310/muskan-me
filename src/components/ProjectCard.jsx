import Image from "next/image";

export default function ProjectCard({ title, description, tags, link }) {
  return (
    <div className="group relative rounded-xl border border-border bg-card overflow-hidden hover:border-primary/50 transition-all duration-300">
      <div className="aspect-video relative overflow-hidden bg-muted">
        {/* Placeholder image background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-60 transition-opacity">
          <span className="text-4xl font-bold uppercase tracking-tighter text-foreground/20">{title.split(' ')[0]}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-[10px] uppercase font-bold tracking-wider rounded bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={link}
          className="text-primary text-sm font-semibold flex items-center gap-1 hover:underline"
        >
          View Case Study 
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}
