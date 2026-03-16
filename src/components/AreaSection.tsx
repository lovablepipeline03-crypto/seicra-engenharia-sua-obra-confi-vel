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
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 relative bg-foreground rounded-sm overflow-hidden p-12 md:p-20 flex items-center justify-center min-h-[300px]"
        >
          {/* Stylized blueprint map */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          
          {/* City dots */}
          {[
            { name: "Campinas", x: "50%", y: "45%", main: true },
            { name: "Valinhos", x: "38%", y: "55%", main: false },
            { name: "Sumaré", x: "60%", y: "30%", main: false },
            { name: "Hortolândia", x: "62%", y: "52%", main: false },
            { name: "Indaiatuba", x: "30%", y: "70%", main: false },
            { name: "Paulínia", x: "55%", y: "20%", main: false },
            { name: "Americana", x: "72%", y: "25%", main: false },
            { name: "Vinhedo", x: "35%", y: "42%", main: false },
          ].map((city, i) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.08 }}
              className="absolute flex flex-col items-center gap-1"
              style={{ left: city.x, top: city.y }}
            >
              <div className={`rounded-full ${city.main ? "w-4 h-4 bg-accent" : "w-2.5 h-2.5 bg-primary"}`}>
                {city.main && (
                  <div className="w-4 h-4 rounded-full bg-accent/30 animate-ping absolute" />
                )}
              </div>
              <span className={`text-xs whitespace-nowrap ${city.main ? "text-accent font-bold" : "text-primary/70"}`}>
                {city.name}
              </span>
            </motion.div>
          ))}

          <div className="relative z-10 text-center">
            <MapPin className="w-12 h-12 text-primary mx-auto mb-4" strokeWidth={2} />
            <p className="text-primary-foreground/60 text-sm">Região Metropolitana de Campinas</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AreaSection;
