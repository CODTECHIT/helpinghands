import { useEffect, useState } from "react";
import { MessageCircle, Phone, ArrowUp } from "lucide-react";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5">
      <a
        href="https://wa.me/910000000000"
        aria-label="Chat on WhatsApp"
        className="rounded-full bg-teal p-3 text-cream shadow-lift transition-transform hover:-translate-y-0.5"
      >
        <MessageCircle className="size-5" />
      </a>
      <a
        href="tel:+910000000000"
        aria-label="Call us"
        className="rounded-full bg-navy p-3 text-cream shadow-lift transition-transform hover:-translate-y-0.5"
      >
        <Phone className="size-5" />
      </a>
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="rounded-full border border-border bg-cream p-3 text-navy shadow-soft transition-transform hover:-translate-y-0.5"
        >
          <ArrowUp className="size-5" />
        </button>
      )}
    </div>
  );
}
