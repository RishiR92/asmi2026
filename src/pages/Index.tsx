import Navigation from "@/components/Navigation";
import WaitlistForm from "@/components/WaitlistForm";
import heroBg from "@/assets/hero-bg.mp4";

const Index = () => {
  return (
    <div className="relative flex h-full flex-col overflow-hidden bg-background">
      {/* Full-page video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      >
        <source src={heroBg} type="video/mp4" />
      </video>

      {/* Soft gradient overlay for crisp text */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background/70" />

      <Navigation />

      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center md:px-10">
        {/* Headline */}
        <h1 className="animate-fade-up font-serif text-6xl leading-[1.1] tracking-tight text-foreground md:text-7xl lg:text-8xl">
          asmi
        </h1>
        
        <p className="animate-fade-up-delay-1 mt-3 font-serif text-xl italic text-foreground/70 md:text-2xl">
          a personal intelligence
        </p>

        {/* Vision statement */}
        <p className="animate-fade-up-delay-2 mt-10 max-w-lg font-mono text-sm leading-relaxed tracking-wide text-foreground md:text-base">
          The AI that understands your life as a complete system.
        </p>
        
        <p className="animate-fade-up-delay-2 mt-3 max-w-lg font-mono text-sm leading-relaxed tracking-wide text-foreground/60">
          Not another app. A Living Context Engine that infers your current state
          and executes with precision.
        </p>

        {/* Waitlist form */}
        <div className="animate-fade-up-delay-3 mt-10 w-full flex justify-center">
          <WaitlistForm />
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 flex items-center justify-center px-6 pb-6 pt-4">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/40">
          © 2025 Asmi
        </span>
      </footer>
    </div>
  );
};

export default Index;
