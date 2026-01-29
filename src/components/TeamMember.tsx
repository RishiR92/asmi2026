import { ExternalLink } from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
  story?: string;
  description?: string[];
  linkedIn: string;
  delay?: string;
}

const TeamMember = ({ name, role, story, description, linkedIn, delay = "" }: TeamMemberProps) => {
  return (
    <div className={`rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-foreground/20 ${delay}`}>
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="text-lg font-medium text-foreground">{name}</h3>
          <p className="font-serif text-sm italic text-muted-foreground">{role}</p>
        </div>
        <a
          href={linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-foreground hover:text-foreground"
        >
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
      {story ? (
        <p className="text-sm leading-relaxed text-muted-foreground">
          {story}
        </p>
      ) : description ? (
        <ul className="space-y-2">
          {description.map((item, index) => (
            <li key={index} className="flex items-start gap-2.5 text-sm text-muted-foreground">
              <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-foreground/30" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default TeamMember;
