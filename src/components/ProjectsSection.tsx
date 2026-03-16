import { motion } from "framer-motion";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";

const projects = [
  { src: project1, title: "Edifício Comercial", location: "Campinas – SP", className: "md:col-span-2 md:row-span-2" },
  { src: project2, title: "Reforma Industrial", location: "Valinhos – SP", className: "" },
  { src: project3, title: "Reforma Residencial", location: "Campinas – SP", className: "" },
  { src: project4, title: "Instalações Elétricas", location: "Sumaré – SP", className: "md:col-span-2" },
  { src: project5, title: "Estrutura em Concreto", location: "Hortolândia – SP", className: "" },
];

const ProjectsSection = () => {
  return (
    <section id="projetos" className="section-padding bg-secondary/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-semibold text-primary tracking-widest uppercase">Portfólio</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3">
            Obras e projetos executados
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 auto-rows-[280px]">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-sm ${p.className}`}
            >
              <img
                src={p.src}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              {/* Blueprint overlay on hover */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/70 transition-all duration-500 flex items-end">
                <div className="p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500" style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}>
                  <p className="text-sm font-semibold text-primary-foreground/70">{p.location}</p>
                  <h3 className="text-xl font-bold text-primary-foreground">{p.title}</h3>
                </div>
              </div>
              {/* Blueprint grid lines on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                style={{
                  backgroundImage: "linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
