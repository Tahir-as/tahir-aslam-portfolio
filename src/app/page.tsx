import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { portfolioData } from "@/data/portfolio";

export default function HomePage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolioData.profile.name,
    jobTitle: portfolioData.profile.title,
    email: `mailto:${portfolioData.profile.email}`,
    url: portfolioData.site.url,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Karachi",
      addressCountry: "Pakistan",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "DHA Suffa University",
    },
    sameAs: [
      portfolioData.profile.linkedinUrl,
      portfolioData.profile.githubUrl,
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:outline-none"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
