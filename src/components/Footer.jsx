export default function Footer() {
  return (
    <footer className="border-t border-border mt-auto py-12 bg-card">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h2 className="text-xl font-bold gradient-text mb-2">Muskan S.</h2>
          <p className="text-muted-foreground text-sm">
            Full Stack Developer | Crafting immersive digital experiences.
          </p>
        </div>
        <div className="flex gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors text-sm"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors text-sm"
          >
            LinkedIn
          </a>
          <a
            href="mailto:muskan@example.com"
            className="text-muted-foreground hover:text-primary transition-colors text-sm"
          >
            Email
          </a>
        </div>
        <p className="text-muted-foreground text-xs">
          &copy; {new Date().getFullYear()} Muskan S. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
