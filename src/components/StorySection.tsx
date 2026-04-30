import { useEffect, useRef, useState } from "react";

interface StorySectionProps {
  videoUrl: string;
  caption: string;
  /** Visual order index, used as a subtle act label. */
  index: number;
}

const StorySection = ({ videoUrl, caption, index }: StorySectionProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.35 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen w-full items-end overflow-hidden bg-background"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

      {/* Gentle gradient for caption legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
      {/* Smooth top blend with previous section */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent" />

      <div
        className={`relative z-10 mx-auto w-full max-w-5xl px-6 pb-20 md:px-10 md:pb-28 transition-all duration-1000 ease-out ${
          visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/60 md:text-xs">
          Act {String(index).padStart(2, "0")}
        </div>
        <p
          className="mt-3 max-w-3xl font-serif text-3xl italic leading-tight text-foreground md:mt-5 md:text-5xl lg:text-6xl"
          style={{ textShadow: "0 1px 24px hsl(var(--background) / 0.6)" }}
        >
          {caption}
        </p>
      </div>
    </section>
  );
};

export default StorySection;