import Navigation from "@/components/Navigation";
import WaitlistForm from "@/components/WaitlistForm";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div className="relative flex h-full flex-col overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-background/60" />

      <Navigation />

      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-10 pt-20 md:px-10">
        <div className="flex w-full max-w-xl flex-col items-center text-center">
          {/* Tagline */}
          <div className="animate-fade-up mb-6">
            <span className="inline-block rounded-full border border-border/50 bg-card/40 backdrop-blur-sm px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground">
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
