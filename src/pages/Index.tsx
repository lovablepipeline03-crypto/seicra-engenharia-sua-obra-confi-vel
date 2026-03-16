import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProcessSection from "@/components/ProcessSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ClientsSection from "@/components/ClientsSection";
import ContactSection from "@/components/ContactSection";
import AreaSection from "@/components/AreaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <ServicesSection />
        <DifferentialsSection />
        <ProjectsSection />
        <ProcessSection />
        <AboutSection />
        <ClientsSection />
        <TestimonialsSection />
        <ContactSection />
        <AreaSection />
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default Index;
