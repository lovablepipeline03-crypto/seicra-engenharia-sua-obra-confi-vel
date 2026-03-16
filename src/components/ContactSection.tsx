import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Phone, ArrowRight } from "lucide-react";

const serviceOptions = [
  "Construção e execução de obras",
  "Reformas comerciais e industriais",
  "Instalações elétricas e hidráulicas",
  "Alvenaria e acabamento",
  "Prevenção contra incêndio",
  "Projetos e supervisão de engenharia",
  "Outro",
];

const ease = [0.16, 1, 0.3, 1] as const;

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${formData.name}. Gostaria de solicitar um orçamento para: ${formData.service}. ${formData.message}`;
    window.open(`https://wa.me/5519999999999?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="contato" className="section-padding bg-foreground text-primary-foreground relative overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
          >
            <span className="text-sm font-semibold text-accent tracking-widest uppercase">Solicite seu Orçamento</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 text-primary-foreground">
              Inicie sua Análise Técnica
            </h2>
            <p className="text-primary-foreground/70 mt-6 leading-relaxed max-w-lg">
              Preencha o formulário e nossa equipe de engenharia entrará em contato 
              em até 24 horas com um estudo de viabilidade personalizado.
            </p>

            <div className="mt-10 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-primary/20 rounded-sm">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/50">Telefone / WhatsApp</p>
                  <p className="font-semibold text-primary-foreground">(19) 99999-9999</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-primary/20 rounded-sm">
                  <Send className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/50">E-mail</p>
                  <p className="font-semibold text-primary-foreground">contato@seicra.com.br</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              { id: "name", label: "Nome completo", type: "text", value: formData.name },
              { id: "phone", label: "Telefone", type: "tel", value: formData.phone },
              { id: "email", label: "E-mail", type: "email", value: formData.email },
            ].map((field) => (
              <div key={field.id}>
                <label htmlFor={field.id} className="text-sm text-primary-foreground/50 mb-2 block">
                  {field.label}
                </label>
                <input
                  id={field.id}
                  type={field.type}
                  required
                  value={field.value}
                  onChange={(e) => setFormData((prev) => ({ ...prev, [field.id]: e.target.value }))}
                  className="w-full bg-transparent border-b border-primary-foreground/20 py-3 text-primary-foreground focus:border-primary focus:outline-none transition-colors placeholder:text-primary-foreground/20"
                />
              </div>
            ))}

            <div>
              <label htmlFor="service" className="text-sm text-primary-foreground/50 mb-2 block">
                Tipo de serviço
              </label>
              <select
                id="service"
                required
                value={formData.service}
                onChange={(e) => setFormData((prev) => ({ ...prev, service: e.target.value }))}
                className="w-full bg-transparent border-b border-primary-foreground/20 py-3 text-primary-foreground focus:border-primary focus:outline-none transition-colors appearance-none"
              >
                <option value="" className="bg-foreground">Selecione um serviço</option>
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt} className="bg-foreground">{opt}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="text-sm text-primary-foreground/50 mb-2 block">
                Mensagem
              </label>
              <textarea
                id="message"
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                className="w-full bg-transparent border-b border-primary-foreground/20 py-3 text-primary-foreground focus:border-primary focus:outline-none transition-colors resize-none placeholder:text-primary-foreground/20"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-10 py-4 text-base font-bold rounded-sm hover:bg-accent/90 transition-colors w-full justify-center md:w-auto"
            >
              Iniciar Análise Técnica
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
