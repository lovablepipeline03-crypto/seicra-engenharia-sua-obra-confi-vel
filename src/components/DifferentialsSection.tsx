import { motion } from "framer-motion";
import { ShieldCheck, Users, Clock, HeadphonesIcon, Factory } from "lucide-react";
import GridLines from "@/components/GridLines";

const differentials = [
  { icon: ShieldCheck, title: "Responsabilidade Técnica", desc: "ART emitida para todas as obras. CREA ativo e em dia." },
  { icon: Users, title: "Equipe Especializada", desc: "Engenheiros, mestres de obra e técnicos com formação contínua." },
  { icon: Clock, title: "Cumprimento de Prazos", desc: "Gestão de cronograma com indicadores e entregas mensuráveis." },
  { icon: HeadphonesIcon, title: "Atendimento Personalizado", desc: "Engenheiro responsável dedicado do orçamento à entrega." },
  { icon: Factory, title: "Experiência Comercial e Industrial", desc: "Obras em galpões, lojas, escritórios e plantas industriais." },
];

const cardVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="section-padding relative">
      <GridLines />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary tracking-widest uppercase">Por que a SEICRA</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3">
            Diferenciais que constroem confiança
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -6, boxShadow: "var(--steel-shadow)", transition: { duration: 0.3 } }}
                className="bg-card steel-border rounded-sm p-8 transition-colors duration-300"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-primary/10 rounded-sm mb-5 group-hover:bg-primary transition-colors duration-300">
                  <Icon className="w-7 h-7 text-primary" strokeWidth={2.5} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
