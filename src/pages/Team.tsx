import Navigation from "@/components/Navigation";
import TeamMember from "@/components/TeamMember";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Team = () => {
  const founders = [
    {
      name: "Rishi",
      role: "Co-founder & CEO",
      linkedIn: "https://www.linkedin.com/in/rishi-r-37705a3a/",
      story: "Built and exited India's largest full-stack vertical e-commerce platform with $400M in annualized sales. Raised $100M backed by founders from DoorDash and Zoom. Built products reaching 500M+ consumers at Flipkart ($16B acq by Walmart). Recognized as Forbes 30 Under 30 Asia and #9 on Hurun India U35 List.",
    },
    {
      name: "Satwik",
      role: "Co-founder & CTO",
      linkedIn: "https://satwikkottur.github.io/",
      story: "A pioneer in agentic AI and Large Action Models, with experience at FAIR and DeepMind. Holds a PhD from CMU with an award-winning thesis on LAMs. Has published 40+ papers collaborating with AI leaders at Nvidia, Apple, and FAIR. Achieved All India Rank 6 in IIT and is an International Olympiad medalist.",
    },
  ];

  return (
    <div className="flex h-full flex-col bg-background">
      <Navigation />

      <main className="flex flex-1 flex-col overflow-y-auto px-6 pb-8 pt-24 md:px-10">
        <div className="mx-auto w-full max-w-2xl">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>

          <div className="mb-10 animate-fade-up">
            <h1 className="mb-3 font-serif text-3xl italic text-foreground md:text-4xl">
              The Founding Anomaly
            </h1>
            <p className="text-sm text-muted-foreground md:text-base">
              Building the next iconic consumer company requires the rarest combination:{" "}
              <span className="text-foreground">hyper-scale execution meets world-class AI research.</span>
            </p>
          </div>

          {/* Highlighted Team Origin Statement */}
          <div className="mb-8 animate-fade-up-delay-1 rounded-xl border border-foreground/10 bg-foreground/[0.03] px-6 py-5">
            <p className="text-center text-sm leading-relaxed text-foreground md:text-base">
              Founding team spans{" "}
              <span className="font-medium">DeepMind</span>,{" "}
              <span className="font-medium">Google</span>,{" "}
              <span className="font-medium">Amazon</span>,{" "}
              <span className="font-medium">CMU</span>,{" "}
              <span className="font-medium">UC Berkeley</span>{" "}
              & more.
            </p>
          </div>

          <div className="space-y-4">
            {founders.map((founder, index) => (
              <TeamMember
                key={founder.name}
                {...founder}
                delay={`animate-fade-up-delay-${index + 2}`}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Team;
