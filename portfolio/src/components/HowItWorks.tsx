import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discover",
    desc: "Understanding your goals, requirements, and challenges through detailed consultation and research.",
    testimonial: { name: "Syeda Bushra", role: "Founder of Syeda's Fashion" },
  },
  {
    num: "02",
    title: "Design",
    desc: "Crafting modern, responsive designs with clean UI/UX, custom graphics, and brand-focused marketing strategies.",
    testimonial: { name: "Zeeswardrobe", role: "Fashion Brand" },
  },
  {
    num: "03",
    title: "Deliver",
    desc: "Testing, optimizing, and launching the final product with ongoing support, automation, and marketing execution.",
    testimonial: { name: "Rafay", role: "Car Business Owner" },
  },
];

const HowItWorks = () => {
  return (
    <section id="process" className="py-24 bg-background relative overflow-hidden">
      {/* Subtle green glow behind cards */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-primary/10 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm italic text-muted-foreground font-display">/ Our Process Explained</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-2 text-foreground">Here's how it works</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative"
            >
              {/* Card */}
              <div className="bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-elevated transition-shadow relative">
                {/* Number badge */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-primary-foreground font-display text-sm font-bold flex items-center justify-center shadow-soft">
                  {s.num}
                </div>

                {/* Connecting curve SVG */}
                {i < 2 && (
                  <svg className="hidden lg:block absolute -right-8 top-0 w-8 h-12 text-primary" viewBox="0 0 32 48" fill="none">
                    <path d="M0 24 C16 24, 16 8, 32 8" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                )}

                <div className="mt-4 text-center">
                  <h3 className="font-display text-xl font-semibold italic text-foreground mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>

              {/* Testimonial person below card */}
              <div className="flex items-center gap-2 justify-center mt-6">
                <div className="w-8 h-8 rounded-full bg-muted" />
                <div className="text-left">
                  <p className="text-xs font-semibold text-foreground">{s.testimonial.name}</p>
                  <p className="text-[10px] text-muted-foreground">{s.testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;