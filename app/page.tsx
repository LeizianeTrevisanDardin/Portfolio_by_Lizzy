
import Header from "@/components/layout/Header";
import Hero from "@/components/hero/Hero";
import FeaturedProject from "@/components/projects/FeaturedProject";
import ProjectSection from "@/components/projects/ProjectSection"
import TestimonialSection from "@/components/testimonials/TestimonialSection";
import AchievementsSection from "@/components/achievements/AchievementsSection";
import AboutSection from "@/components/about/AboutSection";
import ContactSection from "@/components/contact/ContactSection";


export default function Home() {
  return (
    <>
    <Header />
    
    <main>
      <Hero />
      < FeaturedProject />
      < ProjectSection />
      < TestimonialSection/>
      < AchievementsSection />
      < AboutSection />
      < ContactSection />
    </main>
    </>
  );
}
