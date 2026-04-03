import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/fizra-portrait.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-20">
      {/* Green radial glow background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[80%] rounded-[50%] bg-[radial-gradient(ellipse_at_center,hsl(82_100%_75%/0.5)_0%,hsl(82_100%_85%/0.25)_40%,transparent_70%)]" />
      </div>

      <div className="container mx-auto px-6 py-16 lg:py-24 relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mb-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-xs font-medium text-muted-foreground shadow-card border border-border">
            ⭐ Full Stack Developer & Digital Marketer
          </span>
        </motion.div>

        {/* Main heading centered */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-center text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] text-foreground mb-8"
        >
          Hi I'm Fizra
          <br />
          <span className="italic font-display text-foreground">
            Creative <span className="text-primary">Developer</span>
          </span>
        </motion.h1>

        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-center gap-8 lg:gap-0">
          {/* Left - availability badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex-1 flex flex-col items-center lg:items-start gap-4 lg:pb-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-medium text-foreground border border-border shadow-card">
              <span className="h-2.5 w-2.5 rounded-full bg-primary animate-pulse" />
              Available for new opportunities
            </div>
          </motion.div>

          {/* Center image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex-shrink-0 relative"
          >
            <div className="w-64 h-80 sm:w-80 sm:h-[400px] lg:w-[380px] lg:h-[460px] relative">
              <img
                src={heroImg}
                alt="Fizra Amir - Full Stack Developer & Digital Marketer"
                width={800}
                height={900}
                className="w-full h-full object-cover object-top rounded-3xl grayscale"
              />
            </div>
          </motion.div>

          {/* Right text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="flex-1 flex flex-col items-center lg:items-end gap-6 lg:pb-8"
          >
            <p className="text-muted-foreground text-sm lg:text-base max-w-xs text-center lg:text-right leading-relaxed">
              passionate about building modern web applications, digital marketing strategies, and solving real-world problems through innovative technology.
            </p>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-muted border-2 border-card" />
                ))}
              </div>
              <p className="text-xs text-muted-foreground">
                Trusted by <strong className="text-foreground">happy clients worldwide</strong>
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background shadow-elevated hover:scale-105 transition-all"
            >
              <ArrowRight size={16} />
              Get in Touch
            </a>
          </motion.div>
        </div>

        {/* Logo bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 lg:mt-24 border-t border-border pt-8"
        >
          <div className="overflow-hidden">
            <div className="flex items-center gap-12 animate-marquee whitespace-nowrap">
              {["React", "Next.js", "Node.js", "TypeScript", "Figma", "n8n", "WordPress", "Canva", "React", "Next.js", "Node.js", "TypeScript", "Figma", "n8n", "WordPress", "Canva"].map(
                (name, i) => (
                  <span key={i} className="text-muted-foreground/50 font-semibold text-lg tracking-wide flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-primary/20" />
                    {name}
                  </span>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;