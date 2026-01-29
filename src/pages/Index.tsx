import Navigation from "@/components/Navigation";
import WaitlistForm from "@/components/WaitlistForm";
import heroBg from "@/assets/hero-bg.mp4";

const Index = () => {
  return (
    <div className="relative flex h-full flex-col overflow-hidden">
      {/* Full-screen video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={heroBg} type="video/mp4" />
      </video>

      {/* Subtle overlay for text readability - gradient from top */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-transparent" />

      {/* Content layer */}
      <div className="relative z-10 flex h-full flex-col">
        <Navigation />

        {/* Main content - floats naturally over video */}
        <main className="flex flex-1 flex-col items-center justify-center px-4 pb-32 text-center sm:px-6 md:px-10">
          {/* Headline */}
          <h1 className="animate-fade-up font-serif text-5xl leading-[1.1] tracking-tight text-foreground drop-shadow-sm sm:text-6xl md:text-7xl lg:text-8xl">
            asmi
          </h1>
          
          <p className="animate-fade-up-delay-1 mt-2 font-serif text-lg italic text-foreground/80 drop-shadow-sm md:mt-3 md:text-2xl">
            building personal intelligence
          </p>

          {/* Vision statement */}
          <p className="animate-fade-up-delay-2 mt-6 max-w-md font-mono text-sm leading-relaxed tracking-wide text-foreground/90 drop-shadow-sm md:mt-10 md:max-w-xl md:text-lg">
            The AI that understands your life as a complete system.
          </p>

          {/* Waitlist form */}
          <div className="animate-fade-up-delay-3 mt-6 w-full flex justify-center md:mt-10">
            <WaitlistForm />
          </div>
        </main>

        {/* Footer */}
        <footer className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-center px-6 pb-4">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/60 drop-shadow-sm">
            © 2025 Asmi
          </span>
        </footer>
      </div>
    </div>
  );
};

export default Index;
