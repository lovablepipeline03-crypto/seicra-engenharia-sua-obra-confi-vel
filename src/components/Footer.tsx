import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import pipelineLogo from "@/assets/pipeline-logo.png";

const ease = [0.16, 1, 0.3, 1] as const;

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground border-t border-primary-foreground/10">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-5%" }}
        className="container py-16"
      >
        <div className="grid md:grid-cols-3 gap-12">
          <motion.div variants={fadeUp}>
            <h3 className="font-display text-2xl font-bold tracking-tighter">
              SEICRA<span className="text-primary">.</span>
            </h3>
            <p className="text-primary-foreground/50 mt-4 text-sm leading-relaxed">
              Engenharia Civil, Construção, Reformas e Serviços de Engenharia em Campinas e Região.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-4">
            <h4 className="font-display font-bold text-sm tracking-widest uppercase text-primary-foreground/70">Contato</h4>
            <div className="space-y-3 text-sm text-primary-foreground/60">
              <a href="https://api.whatsapp.com/send/?phone=%2B5519982880865&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-primary-foreground transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                <span>(19) 98288-0865</span>
              </a>
              <a href="mailto:comercial@seicra.com.br" className="flex items-center gap-3 hover:text-primary-foreground transition-colors">
                <Mail className="w-4 h-4 text-primary" />
                <span>comercial@seicra.com.br</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>Campinas – SP</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-4">
            <h4 className="font-display font-bold text-sm tracking-widest uppercase text-primary-foreground/70">Institucional</h4>
            <div className="space-y-2 text-sm text-primary-foreground/60">
              <p>
                <a href="#servicos" className="nav-link hover:text-primary-foreground transition-colors">Serviços</a>
              </p>
              <p>
                <a href="#sobre" className="nav-link hover:text-primary-foreground transition-colors">Sobre</a>
              </p>
              <p>
                <a href="#contato" className="nav-link hover:text-primary-foreground transition-colors">Contato</a>
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm text-primary-foreground/30 space-y-2"
        >
          <p>© {new Date().getFullYear()} SEICRA Engenharia. Todos os direitos reservados.</p>
          <p>
            Desenvolvido por{" "}
            <a
              href="https://www.instagram.com/pipeline.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-foreground transition-colors underline underline-offset-2"
            >
              <img src={pipelineLogo} alt="Pipeline Consultoria Digital" className="inline-block w-5 h-5 mr-1 align-middle" />
              Pipeline Consultoria Digital
            </a>
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
