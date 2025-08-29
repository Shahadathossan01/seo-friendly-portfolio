import AboutMe from "@/_components/AboutMe";
import ContactSection from "@/_components/ContactSection";
import Education from "@/_components/Education";
import ProjectCard from "@/_components/Projects";
import FAQsThree from "@/components/faqs-3";
import Features from "@/components/features-1";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import IntegrationsSection from "@/components/integrations-4";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <AboutMe></AboutMe>
      <Education></Education>
      <IntegrationsSection></IntegrationsSection>
      <ProjectCard></ProjectCard>
      <ContactSection></ContactSection>
      <FAQsThree />
      <FooterSection />
    </>
  );
}
