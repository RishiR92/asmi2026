import Navigation from "@/components/Navigation";
import WaitlistForm from "@/components/WaitlistForm";
import heroLandscape from "@/assets/hero-landscape.jpg";

const Index = () => {
  return (
    <div className="relative flex h-full flex-col bg-background">
      <Navigation />

      <main className="flex flex-1 flex-col">
        {/* Top section with branding and text */}
        <div className="flex flex-1 flex-col items-center justify-center px-6 pt-20 pb-6 text-center md:px-10">
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
        </div>

        {/* Hero landscape image */}
        <div className="animate-fade-up-delay-4 relative w-full overflow-hidden">
          <img 
            src={heroLandscape} 
            alt="Serene landscape with glowing orb representing AI consciousness"
            className="h-[35vh] w-full object-cover object-center md:h-[40vh]"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-center gap-8 bg-gradient-to-t from-background via-background/80 to-transparent px-6 pb-4 pt-12">
        <span className="text-xs uppercase tracking-widest text-muted-foreground/60">
          © 2025 Asmi
        </span>
      </footer>
    </div>
  );
};

export default Index;
