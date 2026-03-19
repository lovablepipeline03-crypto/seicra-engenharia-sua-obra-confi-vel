import { useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import GridLines from "@/components/GridLines";

// Project 1 - drive images
import p1_1 from "@/assets/projects/p1/1.jpg";
import p1_2 from "@/assets/projects/p1/2.jpg";
import p1_3 from "@/assets/projects/p1/3.jpg";
import p1_4 from "@/assets/projects/p1/4.jpg";
import p1_5 from "@/assets/projects/p1/5.jpg";
import p1_6 from "@/assets/projects/p1/6.jpg";
import p1_7 from "@/assets/projects/p1/7.jpg";

// Project 2 - drive images
import p2_1 from "@/assets/projects/p2/1.jpg";
import p2_2 from "@/assets/projects/p2/2.jpg";
import p2_3 from "@/assets/projects/p2/3.jpg";
import p2_4 from "@/assets/projects/p2/4.jpg";
import p2_5 from "@/assets/projects/p2/5.jpg";
import p2_6 from "@/assets/projects/p2/6.jpg";
import p2_7 from "@/assets/projects/p2/7.jpg";

// Project 3 images
import p3_1 from "@/assets/projects/p3/1.jpeg";
import p3_2 from "@/assets/projects/p3/2.jpeg";
import p3_3 from "@/assets/projects/p3/3.jpeg";
import p3_4 from "@/assets/projects/p3/4.jpeg";
import p3_5 from "@/assets/projects/p3/5.jpeg";

// Project 3 - drive images
import p3d_1 from "@/assets/projects/p3d/1.jpg";
import p3d_2 from "@/assets/projects/p3d/2.jpg";
import p3d_3 from "@/assets/projects/p3d/3.jpg";
import p3d_4 from "@/assets/projects/p3d/4.jpg";
import p3d_5 from "@/assets/projects/p3d/5.jpg";
import p3d_6 from "@/assets/projects/p3d/6.png";


interface Project {
  images?: string[];
  video?: string;
  title: string;
  location: string;
  className: string;
}

const projects: Project[] = [
  {
    video: "/videos/video_1.mp4",
    title: "Edifício Comercial",
    location: "Campinas – SP",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    images: [p2_1, p2_2, p2_3, p2_4, p2_5, p2_6, p2_7],
    title: "Reforma Residencial",
    location: "Valinhos – SP",
    className: "",
  },
  {
    images: [p3_1, p3_2, p3_3, p3_4, p3_5],
    title: "Reforma Residencial",
    location: "Campinas – SP",
    className: "",
  },
  {
    images: [p1_1, p1_2, p1_3, p1_4, p1_5, p1_6, p1_7],
    title: "Instalações Elétricas",
    location: "Sumaré – SP",
    className: "md:col-span-2",
  },
  {
    images: [p3d_1, p3d_2, p3d_3, p3d_4, p3d_5],
    title: "Estrutura em Concreto",
    location: "Hortolândia – SP",
    className: "",
  },
];

const ProjectVideo = ({ src }: { src: string }) => {
  return (
    <div className="w-full h-full overflow-hidden relative bg-black flex items-center justify-center">
      <video
        src={src}
        muted
        playsInline
        controls
        className="w-full h-full object-cover"
      />
    </div>
  );
};



const ProjectCarousel = ({ images, alt }: { images: string[]; alt: string }) => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);


  const prev = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  }, [images.length]);

  const next = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
  }, [images.length]);

  const hasMultiple = images.length > 1;

  return (
    <div ref={ref} className="w-full h-full overflow-hidden relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <motion.img
        key={current}
        src={images[current]}
        alt={`${alt} ${current + 1}`}
        className="w-full h-[120%] object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
        style={{ y }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      {hasMultiple && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-background/70 hover:bg-background/90 rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-4 h-4 text-foreground" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-background/70 hover:bg-background/90 rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Próximo"
          >
            <ChevronRight className="w-4 h-4 text-foreground" />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  i === current ? "bg-primary-foreground scale-125" : "bg-primary-foreground/50"
                }`}
                aria-label={`Imagem ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projetos" className="section-padding bg-secondary/30 relative">
      <GridLines />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
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
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden rounded-sm cursor-pointer ${p.className}`}
            >
              {p.video ? (
                <ProjectVideo src={p.video} />
              ) : (
                <ProjectCarousel images={p.images!} alt={p.title} />
              )}
              {/* Blueprint overlay on hover */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/70 transition-all duration-500 flex items-end pointer-events-none">
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
