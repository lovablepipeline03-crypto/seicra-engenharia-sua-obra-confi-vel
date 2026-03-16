import { motion } from "framer-motion";
import GridLines from "@/components/GridLines";
import cdmc from "@/assets/clients/cdmc.png";
import maxlan from "@/assets/clients/maxlan.png";
import takata from "@/assets/clients/takata.png";
import unimed from "@/assets/clients/unimed.jpeg";
import abl from "@/assets/clients/abl.png";
import atento from "@/assets/clients/atento.jpeg";

const clients = [
  { src: cdmc, name: "CDMC" },
  { src: maxlan, name: "Maxlan" },
  { src: takata, name: "Takata Engenharia" },
  { src: unimed, name: "Unimed" },
  { src: abl, name: "ABL Antibióticos do Brasil" },
  { src: atento, name: "Atento" },
];

const ease = [0.16, 1, 0.3, 1] as const;

const ClientsSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <GridLines />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary tracking-widest uppercase">
            Credibilidade
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3">
            Empresas que confiaram em nós
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
              whileHover={{ scale: 1.08, transition: { duration: 0.3 } }}
              className="flex items-center justify-center p-6 bg-card steel-border rounded-sm grayscale hover:grayscale-0 transition-all duration-500"
            >
              <img
                src={client.src}
                alt={client.name}
                className="max-h-16 w-auto object-contain"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
