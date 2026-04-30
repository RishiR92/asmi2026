import Navigation from "@/components/Navigation";
import WaitlistForm from "@/components/WaitlistForm";
import StoryScroll from "@/components/StoryScroll";
import act1Asset from "@/assets/act1-bg.mp4.asset.json";
import act2Asset from "@/assets/act2-bg.mp4.asset.json";
import act3Asset from "@/assets/act3-bg.mp4.asset.json";

const acts = [
  {
    videoUrl: act1Asset.url,
    caption: "Every morning, the list begins.",
    label: "Act 01 — The pile",
  },
  {
    videoUrl: act2Asset.url,
    caption: "Tell Asmi once. She takes it all.",
    label: "Act 02 — The handoff",
  },
  {
    videoUrl: act3Asset.url,
    caption: "Go live your day. She'll handle it.",
    label: "Act 03 — Done, quietly.",
  },
];

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navigation />

      {/* Hero — first viewport */}
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pt-24 pb-16 text-center sm:px-6 md:px-10">
        <h1 className="animate-fade-up font-serif text-5xl leading-[1.1] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
          asmi
        </h1>

        <p className="animate-fade-up-delay-1 mt-2 font-serif text-lg italic text-foreground/70 md:mt-3 md:text-2xl">
          building personal intelligence
        </p>

        <p className="animate-fade-up-delay-2 mt-6 max-w-md font-mono text-sm leading-relaxed tracking-wide text-foreground md:mt-10 md:max-w-xl md:text-lg italic">
          The AI that handles your <span className="font-bold">personal chores</span> in the real world.
        </p>

        <div className="animate-fade-up-delay-3 mt-6 flex w-full justify-center md:mt-10">
          <WaitlistForm />
        </div>

        <div className="animate-fade-up-delay-3 mt-16 font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/40 md:text-xs">
          scroll to see how
        </div>
      </main>

      {/* Three-act story with sticky cross-fade scroll */}
      <StoryScroll acts={acts} />

      <footer className="flex items-center justify-center bg-background px-6 py-6">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/60">
          © 2025 Asmi
        </span>
      </footer>
    </div>
  );
};

export default Index;
