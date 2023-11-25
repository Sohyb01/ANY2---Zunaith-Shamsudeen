import IntroSection from "./components/IntroSection";
import ExperienceSection from "./components/ExperienceSection";
import TestimonialsSection from "./components/TestimonialsSection";
import EducationSection from "./components/EducationSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      {/* <!-- Introduction Section --> */}
      <IntroSection />

      {/* <!-- Education --> */}
      <EducationSection />

      {/* <!-- Experience (and Activities) --> */}
      <ExperienceSection />

      {/* <!-- Testimonials / Awards / Recommendations --> */}
      <TestimonialsSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* <!-- Portfolio (Projects?) --> */}
      <ProjectsSection />

      <ContactSection />
    </main>
  );
}
