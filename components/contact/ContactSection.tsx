
import ContactForm from "@/components/contact/ContactForm";
import ContactLinks from "@/components/contact/ContactLinks";

export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="border-y border-panel2 px-6 py-16 sm:px-10"
    >
      <div
        className="
          mx-auto grid w-full max-w-[940px]
          grid-cols-1 gap-10
          md:grid-cols-[0.9fr_1.1fr]
          lg:gap-20
        "
      >
        {/* CONTACT INFORMATION */}
        <ContactLinks />

        {/* CONTACT FORM */}
        <ContactForm />

      </div>
    </section>
  );
}
