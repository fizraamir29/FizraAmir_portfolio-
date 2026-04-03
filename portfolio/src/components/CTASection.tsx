import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/50 relative overflow-hidden">
      {/* Green glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/15 blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm italic font-display text-muted-foreground">/ What's Next</span>
          <h2 className="text-4xl lg:text-6xl font-bold mt-4 mb-6 text-foreground">
            Let's Make It Happen
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8 text-sm leading-relaxed">
            I'm always open to new projects, ideas, or partnerships, and would love to hear from you. Let's work together to bring your vision to life.
          </p>
          <a
            href="mailto:fizraamir3@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-semibold text-background hover:scale-105 transition-transform shadow-elevated"
          >
            <ArrowRight size={16} />
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;