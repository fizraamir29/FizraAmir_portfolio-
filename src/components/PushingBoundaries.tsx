import { motion } from "framer-motion";
import aboutImg from "@/assets/fizra-portrait.png";

const experience = [
  { role: "Freelance Web & Graphic Designer", company: "Freelance", years: "2021 — Present" },
  { role: "Frontend Developer", company: "Mark Developer", years: "2024 — 2025" },
  { role: "Full Stack Developer", company: "Frionexar Software Agency", years: "2025 — Present" },
];

const PushingBoundaries = () => {
  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm italic text-background/60 font-display">/ Who Am I</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-2 text-background">
            Pushing Boundaries <span className="italic text-primary">since 2021</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-sm"
          >
            <img
              src={aboutImg}
              alt="Fizra Amir working"
              loading="lazy"
              width={600}
              height={700}
              className="rounded-2xl w-full object-cover grayscale"
            />
            <div className="flex items-center gap-4 mt-6">
              {["X", "in", "📷"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-sm text-background/60 hover:bg-primary/20 hover:text-primary transition-colors"
                >
                  {icon}
                </a>
              ))}
              <div className="ml-auto text-right">
                <p className="text-sm font-semibold text-background">Fizra Amir</p>
                <p className="text-xs text-background/60">Full Stack Developer</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-6"
          >
            <p className="text-background/70 leading-relaxed">
              A motivated Software Engineering student with strong skills in full-stack development, UI/UX design, and AI automation. Passionate about building modern web applications and solving real-world problems through innovative technology. Currently leading Frionexar Software Agency, specializing in web development, design solutions, and digital services.
            </p>

            <div className="space-y-4">
              {experience.map((e) => (
                <div key={e.role} className="flex items-center justify-between border-b border-background/20 pb-3">
                  <div>
                    <p className="font-semibold text-background text-sm">{e.role}</p>
                    <p className="text-xs text-background/50">{e.company}</p>
                  </div>
                  <span className="text-xs text-background/50">{e.years}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PushingBoundaries;