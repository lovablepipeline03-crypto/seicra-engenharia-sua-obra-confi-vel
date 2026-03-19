import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero-concrete.jpg";
import ScrollIndicator from "@/components/ScrollIndicator";
import GridLines from "@/components/GridLines";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <GridLines />
      <div className="absolute inset-0 blueprint-grid" />

      <motion.div style={{ opacity }} className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <motion.div style={{ y: textY }} className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block text-sm font-semibold text-primary tracking-widest uppercase mb-4 tabular">
              Engenharia Civil · Campinas – SP
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.05]">
              Engenharia de Precisão.{" "}
              <motion.span
                className="text-primary inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                Execução Sem Falhas.
              </motion.span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg text-muted-foreground max-w-lg leading-relaxed"
          >
            De reformas industriais a projetos estruturais em Campinas. 
            A SEICRA entrega o que o papel planejou — com rigor técnico, 
            normas ABNT e zero desperdício.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://api.whatsapp.com/send/?phone=%2B5519982880865&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 text-base font-bold rounded-sm animate-pulse-cta hover:bg-accent/90 transition-colors shadow-[var(--steel-shadow)]"
            >
              Solicitar Orçamento
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/5519999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 text-base font-semibold rounded-sm steel-border hover:bg-muted transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </a>
          </motion.div>

          {/* Trust bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-6 pt-4 text-sm text-muted-foreground"
          >
            <span className="tabular font-semibold text-foreground">+200</span>
            <span>obras entregues</span>
            <span className="w-px h-4 bg-border" />
            <span className="tabular font-semibold text-foreground">15+</span>
            <span>anos de experiência</span>
          </motion.div>
        </motion.div>

        {/* Right: Image with parallax */}
        <motion.div
          initial={{ opacity: 0, x: 80, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative overflow-hidden rounded-sm" style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)" }}>
            <motion.img
              src={heroImg}
              alt="Estrutura de concreto armado com vergalhões de aço — SEICRA Engenharia"
              className="w-full h-[600px] object-cover"
              loading="eager"
              style={{ y: imgY }}
            />
            <div className="absolute inset-0 bg-primary/10" />
          </div>
          <motion.div
            className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent rounded-sm"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
          />
          <motion.div
            className="absolute -top-4 -right-4 w-16 h-16 steel-border bg-background rounded-sm"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 200 }}
          />
        </motion.div>
      </motion.div>

      <ScrollIndicator />
    </section>
  );
};

export default Hero;
