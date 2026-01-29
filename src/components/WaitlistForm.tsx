import { useState, useRef } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const [sparkles, setSparkles] = useState<{ id: number; x: number; y: number }[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const createSparkles = () => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const newSparkles = Array.from({ length: 12 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * rect.width,
      y: Math.random() * rect.height,
    }));
    
    setSparkles(newSparkles);
    setTimeout(() => setSparkles([]), 800);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || formState === "loading") return;

    createSparkles();
    setFormState("loading");
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setFormState("success");
    setEmail("");
  };

  if (formState === "success") {
    return (
      <div className="animate-fade-up flex items-center gap-3 rounded-full bg-background/80 backdrop-blur-sm px-5 py-3 text-foreground">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground/10">
          <Check className="h-4 w-4" />
        </div>
        <span className="text-sm">You're on the list. We'll be in touch.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm">
      <div className="group relative flex items-center rounded-full border border-border/50 bg-background/80 backdrop-blur-sm p-1 transition-all duration-300 focus-within:border-foreground/30 focus-within:bg-background/90">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="h-10 flex-1 bg-transparent px-5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
        />
        <button
          ref={buttonRef}
          type="submit"
          disabled={formState === "loading"}
          className="relative flex h-10 items-center gap-2 overflow-hidden rounded-full bg-foreground px-5 text-sm font-medium text-background transition-all duration-300 hover:bg-foreground/85 hover:shadow-lg hover:shadow-foreground/20 disabled:opacity-70"
        >
          {/* Sparkle effects */}
          {sparkles.map((sparkle) => (
            <span
              key={sparkle.id}
              className="pointer-events-none absolute animate-sparkle"
              style={{
                left: sparkle.x,
                top: sparkle.y,
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                className="fill-background"
              >
                <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z" />
              </svg>
            </span>
          ))}
          
          {formState === "loading" ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <>
              <span className="hidden sm:inline">Join Waitlist</span>
              <span className="sm:hidden">Join</span>
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default WaitlistForm;