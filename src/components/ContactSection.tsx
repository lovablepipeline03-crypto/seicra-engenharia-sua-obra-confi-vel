import { motion } from "framer-motion";
import { Phone, Send, ArrowRight } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const ContactSection = () => {
  return (
    <section id="contato" className="section-padding bg-foreground text-primary-foreground relative overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-sm font-semibold text-accent tracking-widest uppercase">Solicite seu Orçamento</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 text-primary-foreground">
            Inicie sua Análise Técnica
          </h2>
          <p className="text-primary-foreground/70 mt-6 leading-relaxed">
            Entre em contato com nossa equipe de engenharia para um estudo de viabilidade personalizado.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8"
        >
          <a href="https://api.whatsapp.com/send/?phone=%2B5519982880865&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
            <div className="w-12 h-12 flex items-center justify-center bg-primary/20 rounded-sm">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-primary-foreground/50">Telefone / WhatsApp</p>
              <p className="font-semibold text-primary-foreground">(19) 98288-0865</p>
            </div>
          </a>

          <a href="mailto:comercial@seicra.com.br" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
            <div className="w-12 h-12 flex items-center justify-center bg-primary/20 rounded-sm">
              <Send className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-primary-foreground/50">E-mail</p>
              <p className="font-semibold text-primary-foreground">comercial@seicra.com.br</p>
            </div>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35, ease }}
          className="mt-10 flex justify-center"
        >
          <motion.a
            href="https://wa.me/5519999999999?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-10 py-4 text-base font-bold rounded-sm hover:bg-accent/90 transition-colors"
          >
            Solicitar Orçamento via WhatsApp
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
