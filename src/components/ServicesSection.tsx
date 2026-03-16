import { motion } from "framer-motion";
import { useState } from "react";
import { Building2, Wrench, Zap, BrickWall, ShieldAlert, ClipboardCheck, ChevronRight } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Construção e Execução de Obras",
    description: "Gerenciamento completo de obras residenciais, comerciais e industriais com rigor técnico e cumprimento de cronograma.",
  },
  {
    icon: Wrench,
    title: "Reformas Comerciais e Industriais",
    description: "Adequação de espaços comerciais e galpões industriais com foco em funcionalidade, segurança e normas regulatórias.",
  },
  {
    icon: Zap,
    title: "Instalações Elétricas e Hidráulicas",
    description: "Projetos e execução de instalações completas seguindo NBR 5410 e NBR 5626 com responsabilidade técnica.",
  },
  {
    icon: BrickWall,
    title: "Alvenaria e Acabamento",
    description: "Obras de alvenaria estrutural e acabamento de alto padrão com controle de qualidade em cada etapa.",
  },
  {
    icon: ShieldAlert,
    title: "Prevenção Contra Incêndio",
    description: "Sistemas completos de prevenção e combate a incêndio conforme normas do Corpo de Bombeiros e ABNT.",
  },
  {
    icon: ClipboardCheck,
    title: "Projetos e Supervisão",
    description: "Elaboração de projetos estruturais, acompanhamento técnico de obras e laudos de engenharia.",
  },
];

const ServicesSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="servicos" className="section-padding bg-secondary/50 blueprint-grid">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-semibold text-primary tracking-widest uppercase">Nossos Serviços</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3">
            Soluções completas em engenharia
          </h2>
        </motion.div>

        {/* Engineering Drawers */}
        <div className="space-y-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isExpanded = expandedIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                onMouseEnter={() => setExpandedIndex(i)}
                onMouseLeave={() => setExpandedIndex(null)}
                className="group bg-card steel-border rounded-sm overflow-hidden cursor-pointer transition-all duration-500"
                style={{ transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)" }}
              >
                <div className="flex items-center gap-6 px-6 md:px-10 py-6 md:py-8">
                  <span className="tabular text-sm font-bold text-primary/40 w-8">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/5 rounded-sm group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                    <Icon className="w-6 h-6" strokeWidth={2.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-foreground">
                      {service.title}
                    </h3>
                    <motion.div
                      animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-muted-foreground mt-2 max-w-2xl leading-relaxed">
                        {service.description}
                      </p>
                    </motion.div>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isExpanded ? "rotate-90" : ""}`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
