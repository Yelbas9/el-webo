import HeaderSection from "../components/HeaderSection";
import SkillsListSection from "../components/SkillsListSection";
import SkillsOverviewSection from "../components/SkillsOverviewSection";
import ProjectSection from "../components/ProjectSection";
import TestimonialsSection from "../components/TestimonialsSection";

const Home = ({ onContactClick }) => {
  return (
    <div className="w-full min-h-screen bg-[#F7F5F2] flex flex-col">
      {/* NAVIGATION + HERO */}
      <section className="w-full bg-white">
        <div className="max-w-[1280px] mx-auto">
          <HeaderSection onContactClick={onContactClick} />
        </div>
      </section>

      {/* MES SERVICES (NOIR) */}
      <section className="w-full bg-[#1c1c1c] relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto">
          <SkillsListSection />
        </div>
      </section>

      {/* COMPÉTENCES, PROJETS, CONTACT (fond F7F5F2) */}
      <section className="w-full bg-[#F7F5F2]">
        <div className="max-w-[1280px] mx-auto">
          <SkillsOverviewSection />
          <ProjectSection />
          <TestimonialsSection />
        </div>
      </section>
    </div>
  );
};

export default Home;
