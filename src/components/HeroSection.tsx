import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero-concrete.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 blueprint-grid" />

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="inline-block text-sm font-semibold text-primary tracking-widest uppercase mb-4 tabular">
              Engenharia Civil · Campinas – SP
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.05]">
              Engenharia de Precisão.{" "}
              <span className="text-primary">Execução Sem Falhas.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg text-muted-foreground max-w-lg leading-relaxed"
          >
            De reformas industriais a projetos estruturais em Campinas. 
            A SEICRA entrega o que o papel planejou — com rigor técnico, 
            normas ABNT e zero desperdício.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contato"
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
        </div>

        {/* Right: Image cutout */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          <div className="relative overflow-hidden rounded-sm" style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)" }}>
            <img
              src={heroImg}
              alt="Estrutura de concreto armado com vergalhões de aço — SEICRA Engenharia"
              className="w-full h-[600px] object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-primary/10" />
          </div>
          {/* Steel accent bar */}
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent rounded-sm" />
          <div className="absolute -top-4 -right-4 w-16 h-16 steel-border bg-background rounded-sm" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
