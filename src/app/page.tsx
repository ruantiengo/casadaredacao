import AboutMe from "@/components/aboutme/AboutMe";
import { Header } from "@/components/header";
import Hero from "@/components/hero/hero";
import ReviewPage from "@/components/review/ReviewPage";
import SkillPage from "@/components/skills/SkillPage";

export default function Home() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-scroll overflow-x-clip">
      <Header />

      <section id="hero" className="snap-start min-h-screen">
        <Hero />
      </section>

      <section id="aboutme" className="snap-start min-h-screen">
        <AboutMe />
      </section>

      <section id="skill" className="snap-start min-h-screen">
        <SkillPage />
      </section>

      <section id="review" className="snap-start min-h-screen">
        <ReviewPage />
      </section>
    </div>
  );
}
