import { motion } from "framer-motion";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpeg";
import project6 from "@/assets/project-6.jpeg";
import project7 from "@/assets/project-7.jpeg";
import project8 from "@/assets/project-8.jpeg";  

const projects = [
  { img: project1, title: "E-Commerce Website — Syeda's Fashion", tags: ["Full Stack", "MERN"] },
  { img: project2, title: "News & SEO Website", tags: ["SEO", "WordPress"] },
  { img: project3, title: "AI Email Automation with n8n", tags: ["AI", "Automation"] },
  { img: project4, title: "LinkedIn Profile Revamp", tags: ["Branding", "Design"] },
  { img: project5, title: "Digital Marketing — Clothing Brand",tags: ["Ads", "Marketing"]},
  { img: project6, title: "AI Mockups, eBooks & Photoshop", tags: ["AI", "Design"] },
  { img: project7, title: "Social Media Marketing & Graphics",  tags: ["SMM", "Strategy"] },
  { img: project8, title: "Figma UI/UX Designs", tags: ["Figma", "UI/UX"] },
];

const projects2 = [
 { img: project5, title: "Digital Marketing — Clothing Brand",tags: ["Ads", "Marketing"]},
  { img: project6, title: "AI Mockups, eBooks & Photoshop", tags: ["AI", "Design"] },
  { img: project7, title: "Social Media Marketing & Graphics",  tags: ["SMM", "Strategy"] },
  { img: project8, title: "Figma UI/UX Designs", tags: ["Figma", "UI/UX"] },
];

const SelectedWorks = () => {
  return (
    <section id="works" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm text-muted-foreground italic font-display">/ Best Projects</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-2 text-foreground">Selected Works</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div className="rounded-2xl overflow-hidden bg-muted shadow-card hover:shadow-elevated transition-shadow border border-border">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-56 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold text-foreground">{p.title}</h3>
                <div className="flex gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs text-muted-foreground bg-muted rounded-full px-3 py-1 border border-border">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional projects without images */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {projects2.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >  
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWorks;