import Navigation from "@/components/Navigation";
import WaitlistForm from "@/components/WaitlistForm";

const Index = () => {
  return (
    <div className="relative flex h-full flex-col bg-background">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <Navigation />

      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-10 pt-20 md:px-10">
        <div className="flex w-full max-w-xl flex-col items-center text-center">
          {/* Tagline */}
          <div className="animate-fade-up mb-6">
            <span className="inline-block rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Personal AI, redefined
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up-delay-1 mb-6 font-serif text-4xl leading-tight text-foreground md:text-5xl lg:text-6xl">
            The AI that <span className="italic text-gradient">understands</span> your life
          </h1>

          {/* Vision statement */}
          <p className="animate-fade-up-delay-2 mb-10 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
            Asmi is the first Living Context Engine—inferring your current state across time, 
            relationships, and priorities to execute tasks with precision. Not another app. 
            A system that truly knows what matters today.
          </p>

          {/* Waitlist form */}
          <div className="animate-fade-up-delay-3 w-full">
            <WaitlistForm />
          </div>

          {/* Social proof */}
          <p className="animate-fade-up-delay-3 mt-8 text-xs text-muted-foreground">
            Backed by founders from{" "}
            <span className="text-foreground">DoorDash</span>,{" "}
            <span className="text-foreground">Zoom</span>, and global investors
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 px-6 pb-6 pt-4 text-center">
        <p className="text-xs text-muted-foreground/60">
          © 2025 Asmi. Building the future of personal intelligence.
        </p>
      </footer>
    </div>
  );
};

export default Index;
