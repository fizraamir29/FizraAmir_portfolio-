import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Fizra and her team built our complete e-commerce website and handled all our digital marketing. From website design to social media graphics and posting strategy — they provided a complete one-window solution. Highly recommended!",
    name: "Syeda Bushra",
    role: "Founder of Syeda's Fashion",
    stars: 5,
  },
  {
    text: "Really great work, above and beyond expectations. Will certainly order again.",
    name: "ashuaibi7",
    role: "Fiverr Client — United States",
    stars: 5,
  },
  {
    text: "The social media images and content strategy for Zeeswardrobe were absolutely perfect. Every graphic was on point and the posting schedule really boosted our engagement.",
    name: "Zeeswardrobe",
    role: "Fashion Brand — Social Media Client",
    stars: 5,
  },
  {
    text: "Fizra designed amazing packaging and branding for our hair growth oil product. Very professional work with great attention to detail.",
    name: "Hairgrowth Oil",
    role: "Product Branding Client",
    stars: 5,
  },
  {
    text: "Excellent video editing skills! The content she produced for our brand was top-notch and really helped us connect with our UK audience.",
    name: "Jamaica",
    role: "Video Editing Client — UK",
    stars: 5,
  },
  {
    text: "Fizra built our car business website with a stunning logo and complete branding. A true one-window solution — from website to graphics, everything was handled perfectly.",
    name: "Rafay",
    role: "Car Business Owner",
    stars: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm italic text-muted-foreground font-display">/ What Clients Say</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-2 text-foreground">Client Reviews</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-elevated transition-shadow"
            >
              <span className="text-5xl text-primary/20 font-display absolute top-4 right-6 leading-none">"</span>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6 pr-8">{t.text}</p>

              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <Star key={si} size={14} className="fill-primary text-primary" />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-sm font-bold text-foreground">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;