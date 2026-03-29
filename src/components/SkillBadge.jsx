export default function SkillBadge({ name }) {
  return (
    <span className="px-4 py-2 rounded-full bg-secondary border border-border text-sm font-medium hover:border-primary transition-colors cursor-default">
      {name}
    </span>
  );
}
