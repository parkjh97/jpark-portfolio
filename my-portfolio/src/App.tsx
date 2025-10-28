import { SiteLayout } from "./components/layout/SiteLayout";
import { AboutSection } from "./sections/AboutSection";
//import { ArchivingSection } from "./sections/ArchivingSection";
import { CareerSection } from "./sections/CareerSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { SkillsSection } from "./sections/SkillsSection";

function App() {
  return (
    <SiteLayout>
      <AboutSection />
      <SkillsSection />
      {/* <ArchivingSection /> */}
      <CareerSection />
      <ProjectsSection />
    </SiteLayout>
  );
}

export default App;
