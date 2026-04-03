import { motion } from "framer-motion";

const leftSkills = [
  { label: "Web Development", icon: "🌐" },
  { label: "UI/UX Design", icon: "🎨" },
  { label: "Digital Marketing", icon: "📈" },
];

const rightSkills = [
  { label: "Graphic Designing", icon: "✏️" },
  { label: "Video Editing", icon: "🎬" },
  { label: "AI & Automation", icon: "🤖" },
];

const AboutSkills = () => {
  return (
    <section id="about" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <span className="text-sm italic text-primary font-display">Hello!</span>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left skills */}
          <div className="flex-1 flex flex-col gap-4 items-center lg:items-end">
            {leftSkills.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="inline-flex items-center gap-2 rounded-full bg-card px-5 py-2.5 text-sm font-medium text-foreground shadow-card border border-border"
              >
                <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs">{s.icon}</span>
                {s.label}
              </motion.div>
            ))}
          </div>

          {/* Center statement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-[2] text-center"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display leading-snug text-foreground">
              focus is on blending clear strategy,
              <br />
              thoughtful design, and user
              <br />
              empathy to{" "}
              <span className="italic text-primary">
                craft experiences
                <br />
                that solve real problems
              </span>
            </h2>
          </motion.div>

          {/* Right skills */}
          <div className="flex-1 flex flex-col gap-4 items-center lg:items-start">
            {rightSkills.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="inline-flex items-center gap-2 rounded-full bg-card px-5 py-2.5 text-sm font-medium text-foreground shadow-card border border-border"
              >
                <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs">{s.icon}</span>
                {s.label}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSkills;