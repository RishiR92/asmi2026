import Navigation from "@/components/Navigation";
import WaitlistForm from "@/components/WaitlistForm";
import heroBgVideo from "@/assets/hero-bg.mp4";

const Index = () => {
  return (
    <div className="relative flex h-full flex-col overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={heroBgVideo} type="video/mp4" />
      </video>

      {/* Light overlay for text readability */}
      <div className="absolute inset-0 bg-background/40" />

      <Navigation />

      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center">
        {/* Headline */}
        <h1 className="animate-fade-up font-serif text-5xl leading-[1.1] text-foreground md:text-6xl lg:text-7xl">
          asmi
        </h1>
        
        <p className="animate-fade-up-delay-1 mt-2 font-serif text-lg italic text-muted-foreground md:text-xl">
          a personal intelligence
        </p>

        {/* Vision statement */}
        <p className="animate-fade-up-delay-2 mt-8 max-w-md text-sm leading-relaxed text-foreground md:text-base">
          The AI that understands your life as a complete system.
        </p>
        
        <p className="animate-fade-up-delay-2 mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
          Not another app. A Living Context Engine that infers your current state
          and executes with precision.
        </p>

        {/* Waitlist form */}
        <div className="animate-fade-up-delay-3 mt-8 w-full flex justify-center">
          <WaitlistForm />
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 px-6 pb-5 pt-4 text-center">
        <span className="text-xs uppercase tracking-widest text-muted-foreground/70">
          © 2025 Asmi
        </span>
      </footer>
    </div>
  );
};

export default Index;
