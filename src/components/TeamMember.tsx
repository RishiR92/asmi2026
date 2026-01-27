import { ExternalLink } from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
  description: string[];
  linkedIn: string;
  delay?: string;
}

const TeamMember = ({ name, role, description, linkedIn, delay = "" }: TeamMemberProps) => {
  return (
    <div className={`glass-card hover-lift rounded-2xl p-6 ${delay}`}>
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground">{name}</h3>
          <p className="text-sm text-primary">{role}</p>
        </div>
        <a
          href={linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
      <ul className="space-y-2">
        {description.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary/60" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamMember;
