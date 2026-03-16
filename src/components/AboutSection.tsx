import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding bg-foreground text-primary-foreground">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold text-primary tracking-widest uppercase">Sobre a SEICRA</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 text-primary-foreground">
              Engenharia com responsabilidade e resultados
            </h2>
            <div className="space-y-5 mt-8 text-primary-foreground/80 leading-relaxed">
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
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { num: "+200", label: "Obras entregues" },
              { num: "15+", label: "Anos de experiência" },
              { num: "100%", label: "Obras com ART" },
              { num: "98%", label: "Clientes satisfeitos" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 border border-primary-foreground/10 rounded-sm">
                <span className="tabular text-3xl md:text-4xl font-bold text-accent">{stat.num}</span>
                <p className="text-sm text-primary-foreground/60 mt-2">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
