import { useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || formState === "loading") return;

    setFormState("loading");
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setFormState("success");
    setEmail("");
  };

  if (formState === "success") {
    return (
      <div className="animate-fade-up flex items-center gap-3 text-foreground">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground/10">
          <Check className="h-4 w-4" />
        </div>
        <span className="text-sm">You're on the list. We'll be in touch.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm">
      <div className="group relative flex items-center rounded-full border border-border bg-background p-1 transition-all duration-300 focus-within:border-foreground/30">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="h-10 flex-1 bg-transparent px-5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
        />
        <button
          type="submit"
          disabled={formState === "loading"}
          className="flex h-10 items-center gap-2 rounded-full bg-foreground px-5 text-sm font-medium text-background transition-all duration-300 hover:bg-foreground/85 disabled:opacity-70"
        >
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
