
import AboutIntro from "@/components/about/AboutIntro";
import TechStack from "@/components/about/TechStack";
import BeyondCode from "@/components/about/BeyondCode";

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="border-y border-panel2 px-6 py-16 sm:px-10"
    >
      <div
        className="
          mx-auto grid w-full max-w-[940px]
          grid-cols-1 gap-10
          md:grid-cols-2
          lg:grid-cols-[1fr_1.15fr_0.9fr]
          lg:gap-8
        "
      >
        {/* ABOUT ME */}
        <AboutIntro />

        {/* TECHNOLOGY STACK */}
        <TechStack />

        {/* BEYOND CODE */}
        <BeyondCode />

      </div>
    </section>
  );
}
