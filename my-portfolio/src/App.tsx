import { SiteLayout } from "./components/layout/SiteLayout";
import { AboutSection } from "./sections/AboutSection";
import { ArchivingSection } from "./sections/ArchivingSection";
import { CareerSection } from "./sections/CareerSection";
import { Masthead } from "./sections/Masthead";
import { ProjectsSection } from "./sections/ProjectsSection";
import { SkillsSection } from "./sections/SkillsSection";

function App() {
  return (
    <SiteLayout>
      <Masthead />
      <AboutSection />
      <SkillsSection />
      <ArchivingSection />
      <ProjectsSection />
      <CareerSection />
    </SiteLayout>
  );
}

export default App;
