import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const AreaSection = () => {
  return (
    <section className="section-padding blueprint-grid">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-semibold text-primary tracking-widest uppercase">Área de Atuação</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3">
            Campinas e Região Metropolitana
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
            Atendemos Campinas, Valinhos, Vinhedo, Sumaré, Hortolândia, Indaiatuba, 
            Paulínia, Americana e toda a Região Metropolitana de Campinas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-4 flex items-center gap-2 justify-center text-muted-foreground"
        >
          <MapPin className="w-5 h-5 text-primary" />
          <span className="text-sm">Av. Monte Castelo, 255 – Jardim Proença, Campinas – SP, 13026-241</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 rounded-sm overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.948932016739!2d-47.05129502468929!3d-22.91525437924918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8cf2ffe2eaaab%3A0x46ba4c8a262c42bf!2sAv.%20Monte%20Castelo%2C%20255%20-%20Jardim%20Proen%C3%A7a%2C%20Campinas%20-%20SP%2C%2013026-241!5e0!3m2!1spt-BR!2sbr!4v1773776205856!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização SEICRA Engenharia"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AreaSection;
