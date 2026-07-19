import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { BeAliveProject } from "@/components/BeAliveProject";
import { NeuralNetworkProject } from "@/components/NeuralNetworkProject";
import { Skills } from "@/components/Skills";
import { DesignGallery } from "@/components/DesignGallery";
import { Contact, Footer } from "@/components/Contact";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />

        <section id="projects" className="section-padding">
          <div className="container-wide">
            <SectionHeader
              label="Projects"
              title="Selected work"
              description="From survival games in C++ to hands-on neural network experiments. I build to learn, then polish to ship."
            />
            <div className="space-y-8">
              <BeAliveProject />
              <NeuralNetworkProject />
            </div>
          </div>
        </section>

        <Skills />
        <DesignGallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
