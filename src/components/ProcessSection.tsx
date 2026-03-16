import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FileText, Calculator, ClipboardList, HardHat, CheckCircle2 } from "lucide-react";
import GridLines from "@/components/GridLines";

const steps = [
  { icon: FileText, num: "01", title: "Solicitação", desc: "Você entra em contato e descreve sua necessidade de obra ou reforma." },
  { icon: Calculator, num: "02", title: "Análise Técnica", desc: "Nosso engenheiro avalia o escopo, visita o local e elabora o estudo técnico." },
  { icon: ClipboardList, num: "03", title: "Planejamento", desc: "Cronograma detalhado, orçamento transparente e aprovação do projeto." },
  { icon: HardHat, num: "04", title: "Execução", desc: "Obra executada com acompanhamento técnico diário e relatórios de progresso." },
  { icon: CheckCircle2, num: "05", title: "Entrega", desc: "Entrega do projeto finalizado com documentação técnica completa." },
];

const ProcessSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section id="processo" className="section-padding relative" ref={ref}>
      <GridLines />
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16">
          {/* Sticky title */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <span className="text-sm font-semibold text-primary tracking-widest uppercase">Como Funciona</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3">
              Do orçamento à entrega
            </h2>
            <p className="text-muted-foreground mt-4 leading-relaxed hidden lg:block">
              Um processo transparente e técnico para garantir o sucesso do seu projeto.
            </p>
          </motion.div>

          {/* Steps */}
          <div className="relative">
            {/* Vertical pipeline line */}
            <div className="absolute left-8 md:left-12 top-0 bottom-0 w-px bg-border">
              <motion.div
                className="w-full bg-primary origin-top"
                style={{ height: lineHeight }}
              />
            </div>

            <div className="space-y-12">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-5%" }}
                    transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="relative flex items-start gap-6 md:gap-10 pl-2"
                  >
                    {/* Node */}
                    <div className="relative z-10 w-14 h-14 md:w-20 md:h-20 flex-shrink-0 flex items-center justify-center bg-background steel-border rounded-sm">
                      <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary" strokeWidth={2.5} />
                    </div>
                    <div className="pt-2 md:pt-4">
                      <span className="tabular text-sm font-bold text-primary/50">{step.num}</span>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mt-1">{step.title}</h3>
                      <p className="text-muted-foreground mt-2 leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
