import { useEffect, useRef, useState } from "react";

export interface Act {
  videoUrl: string;
  caption: string;
  label: string;
}

interface StoryScrollProps {
  acts: Act[];
}

/**
 * Sticky cross-fade scroll experience.
 * One fixed-height stage holds all videos stacked. As the user scrolls
 * through a tall outer container, the active video cross-fades to the next.
 * Mobile-first, no heavy libraries.
 */
const StoryScroll = ({ acts }: StoryScrollProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [progress, setProgress] = useState(0); // 0..acts.length-1

  useEffect(() => {
    const onScroll = () => {
      const node = containerRef.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const vh = window.innerHeight;
      // total scrollable distance inside the container (container height - one viewport for the sticky stage)
      const scrollable = node.offsetHeight - vh;
      // how far we've scrolled past the top of the container
      const scrolled = Math.min(Math.max(-rect.top, 0), scrollable);
      const ratio = scrollable > 0 ? scrolled / scrollable : 0;
      setProgress(ratio * (acts.length - 1));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [acts.length]);

  // Ensure videos keep playing (some mobile browsers pause when offscreen)
  useEffect(() => {
    videoRefs.current.forEach((v) => {
      if (v && v.paused) v.play().catch(() => {});
    });
  }, [progress]);

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ height: `${acts.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-background">
        {/* Stacked videos with cross-fade */}
        {acts.map((act, i) => {
          const distance = Math.abs(progress - i);
          const opacity = Math.max(0, 1 - distance);
          // subtle scale for cinematic feel
          const scale = 1 + Math.max(0, 0.06 - distance * 0.06);
          return (
            <video
              key={act.videoUrl}
              ref={(el) => (videoRefs.current[i] = el)}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ease-out"
              style={{
                opacity,
                transform: `scale(${scale})`,
                willChange: "opacity, transform",
              }}
            >
              <source src={act.videoUrl} type="video/mp4" />
            </video>
          );
        })}

        {/* Legibility gradients */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-background/30" />

        {/* Captions stacked, fade with progress */}
        <div className="absolute inset-x-0 bottom-0 z-10">
          <div className="mx-auto w-full max-w-2xl px-6 pb-16 sm:pb-20 md:max-w-4xl md:px-10 md:pb-28">
            {acts.map((act, i) => {
              const distance = Math.abs(progress - i);
              const opacity = Math.max(0, 1 - distance * 1.4);
              const translate = (progress - i) * 24;
              const active = distance < 0.5;
              return (
                <div
                  key={act.label}
                  className={`absolute inset-x-0 bottom-16 px-6 sm:bottom-20 md:bottom-28 md:px-10 ${
                    active ? "" : "pointer-events-none"
                  }`}
                  style={{
                    opacity,
                    transform: `translateY(${translate}px)`,
                  }}
                >
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/70 md:text-xs">
                    {act.label}
                  </div>
                  <p
                    className="mt-3 max-w-3xl font-serif text-3xl italic leading-tight text-foreground sm:text-4xl md:mt-5 md:text-5xl lg:text-6xl"
                    style={{ textShadow: "0 1px 24px hsl(var(--background) / 0.7)" }}
                  >
                    {act.caption}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Progress dots */}
        <div className="absolute right-4 top-1/2 z-10 flex -translate-y-1/2 flex-col gap-2 md:right-8">
          {acts.map((_, i) => {
            const active = Math.round(progress) === i;
            return (
              <span
                key={i}
                className="block h-2 w-2 rounded-full bg-foreground transition-opacity duration-300"
                style={{ opacity: active ? 0.9 : 0.25 }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StoryScroll;