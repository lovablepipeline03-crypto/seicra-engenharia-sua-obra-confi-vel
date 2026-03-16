import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import GridLines from "@/components/GridLines";

const testimonials = [
  {
    name: "Ricardo Mendes",
    role: "Diretor, Indústria Metalúrgica",
    text: "A SEICRA reformou nosso galpão industrial dentro do prazo e do orçamento. A equipe técnica é extremamente competente e o acompanhamento foi impecável.",
    stars: 5,
  },
  {
    name: "Fernanda Costa",
    role: "Proprietária, Clínica Odontológica",
    text: "Contratamos a SEICRA para a reforma completa da clínica. O resultado superou nossas expectativas. Profissionalismo do começo ao fim.",
    stars: 5,
  },
  {
    name: "Carlos Eduardo",
    role: "Investidor Imobiliário",
    text: "Já fiz três obras com a SEICRA. Confiança total na equipe. Orçamento transparente e entrega pontual em todos os projetos.",
    stars: 5,
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

const cardVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease },
  }),
};

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-secondary/30 relative">
      <GridLines />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary tracking-widest uppercase">Depoimentos</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3">
            O que nossos clientes dizem
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="bg-card steel-border rounded-sm p-8 relative"
            >
              <Quote className="w-8 h-8 text-primary/10 absolute top-6 right-6" strokeWidth={2.5} />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">"{t.text}"</p>
              <div>
                <p className="font-bold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
