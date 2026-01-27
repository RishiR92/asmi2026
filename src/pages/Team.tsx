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
      description: [
        "Built & exited Arzooo — $400M annualized sales, largest full-stack vertical e-commerce in India",
        "Raised $100M, backed by founders from DoorDash, Zoom",
        "Built products for 500M+ consumers at Flipkart (acq. by Walmart at $16B)",
        "Forbes 30U30 Asia, #9 Hurun India U35 List",
      ],
    },
    {
      name: "Satwik",
      role: "Co-founder & CTO",
      linkedIn: "https://satwikkottur.github.io/",
      description: [
        "Pioneer in agentic AI and Large Action Models",
        "ex-FAIR and DeepMind",
        "PhD CMU — award-winning thesis on LAMs",
        "40+ papers with AI leaders at Nvidia, Apple, FAIR",
        "All India Rank-6 in IIT, International Olympiad medalist",
      ],
    },
  ];

  return (
    <div className="flex h-full flex-col bg-background">
      <Navigation />

      <main className="flex flex-1 flex-col overflow-y-auto px-6 pb-8 pt-24 md:px-10">
        <div className="mx-auto w-full max-w-2xl">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>

          <div className="mb-10 animate-fade-up">
            <h1 className="mb-3 font-serif text-3xl italic text-foreground md:text-4xl">
              The Founding Anomaly
            </h1>
            <p className="text-muted-foreground">
              Building the next iconic consumer company requires the rarest combination:{" "}
              <span className="text-foreground">hyper-scale execution meets world-class AI research.</span>
            </p>
          </div>

          <div className="space-y-4">
            {founders.map((founder, index) => (
              <TeamMember
                key={founder.name}
                {...founder}
                delay={`animate-fade-up-delay-${index + 1}`}
              />
            ))}
          </div>

          <p className="mt-8 animate-fade-up-delay-3 text-center text-sm text-muted-foreground">
            Founding team spans{" "}
            <span className="text-foreground">DeepMind, Google, Amazon, CMU, UC Berkeley</span> & more.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Team;
