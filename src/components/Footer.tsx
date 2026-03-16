import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

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
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span>(19) 99999-9999</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span>contato@seicra.com.br</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>Campinas – SP</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-4">
            <h4 className="font-display font-bold text-sm tracking-widest uppercase text-primary-foreground/70">Institucional</h4>
            <div className="space-y-2 text-sm text-primary-foreground/60">
              <p>CNPJ: 00.000.000/0001-00</p>
              <p>CREA-SP: 0000000000</p>
              <p className="pt-2">
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
          className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm text-primary-foreground/30"
        >
          © {new Date().getFullYear()} SEICRA Engenharia. Todos os direitos reservados.
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
