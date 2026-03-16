import { motion } from "framer-motion";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding bg-foreground text-primary-foreground relative overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
          >
            <motion.span variants={fadeLeft} className="text-sm font-semibold text-primary tracking-widest uppercase block">
              Sobre a SEICRA
            </motion.span>
            <motion.h2 variants={fadeLeft} className="text-3xl md:text-5xl font-bold mt-3 text-primary-foreground">
              Engenharia com responsabilidade e resultados
            </motion.h2>
            <motion.div variants={fadeLeft} className="space-y-5 mt-8 text-primary-foreground/80 leading-relaxed">
              <p>
                A SEICRA Engenharia atua no mercado de construção civil em Campinas e região, 
                oferecendo soluções completas em obras, reformas e projetos de engenharia.
              </p>
              <p>
                Com uma equipe técnica qualificada e compromisso com normas ABNT, entregamos 
                projetos com transparência, cumprimento de prazos e rigor estrutural — do 
                diagnóstico à entrega final.
              </p>
              <p>
                Nosso foco está em construção comercial e industrial, reformas de alto padrão 
                e serviços especializados de instalações elétricas, hidráulicas e prevenção 
                contra incêndio.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { num: "+200", label: "Obras entregues" },
              { num: "15+", label: "Anos de experiência" },
              { num: "100%", label: "Obras com ART" },
              { num: "98%", label: "Clientes satisfeitos" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeRight}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                className="text-center p-6 border border-primary-foreground/10 rounded-sm"
              >
                <span className="tabular text-3xl md:text-4xl font-bold text-accent">{stat.num}</span>
                <p className="text-sm text-primary-foreground/60 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
