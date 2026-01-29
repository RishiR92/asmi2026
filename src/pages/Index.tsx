import Navigation from "@/components/Navigation";
import WaitlistForm from "@/components/WaitlistForm";
import heroBg from "@/assets/hero-bg.mp4";

const Index = () => {
  return (
    <div className="flex h-full flex-col overflow-hidden bg-background">
      <Navigation />

      {/* Top section - Solid cream background with text content */}
      <main className="relative z-10 flex flex-col items-center px-4 pt-16 text-center sm:px-6 md:px-10 md:pt-20">
        {/* Headline */}
        <h1 className="animate-fade-up font-serif text-5xl leading-[1.1] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
          asmi
        </h1>
        
        <p className="animate-fade-up-delay-1 mt-2 font-serif text-lg italic text-foreground/70 md:mt-3 md:text-2xl">
          building personal intelligence
        </p>

        {/* Vision statement */}
        <p className="animate-fade-up-delay-2 mt-6 max-w-md font-mono text-sm leading-relaxed tracking-wide text-foreground md:mt-10 md:max-w-xl md:text-lg">
          The AI that understands your life as a complete system.
        </p>

        {/* Waitlist form */}
        <div className="animate-fade-up-delay-3 mt-6 w-full flex justify-center md:mt-10">
          <WaitlistForm />
        </div>
      </main>

      {/* Bottom section - Video background */}
      <div className="relative mt-auto min-h-[30vh] flex-1 sm:min-h-[35vh] md:min-h-[40vh]">
        {/* Subtle top gradient for smooth transition */}
        <div className="absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-background to-transparent" />
        
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={heroBg} type="video/mp4" />
        </video>

        {/* Footer overlaid on video */}
        <footer className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-center px-6 pb-4">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/60">
            © 2025 Asmi
          </span>
        </footer>
      </div>
    </div>
  );
};

export default Index;
