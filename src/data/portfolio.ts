export interface NavItem {
  label: string;
  href: string;
}

export interface ProfileFact {
  label: string;
  value: string;
}

export interface SkillGroup {
  category: string;
  items: readonly string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: readonly string[];
  /**
   * Replace with the specific GitHub repository URL once published,
   * and set `isPlaceholderLink` to `false`.
   */
  githubUrl: string;
  isPlaceholderLink: boolean;
  /**
   * Optional live demo URL. Set `isLiveDemoPlaceholder` to `false`
   * once replaced with a real deployed URL.
   */
  liveDemoUrl?: string;
  isLiveDemoPlaceholder?: boolean;
  /**
   * Marks a template card awaiting real project details.
   * Remove or set to `false` once filled in.
   */
  isPlaceholderProject?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  summary: string;
  highlights: readonly string[];
}

export const portfolioData = {
  site: {
    // Replace NEXT_PUBLIC_SITE_URL in .env.local or Vercel Environment Variables after deployment.
    url:
      process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
      "https://your-portfolio-domain.vercel.app",
    title:
      "Tahir Aslam — Full-Stack Software Engineer | Frontend, Backend & AI/ML",
    shortTitle: "Tahir Aslam",
    description:
      "Portfolio of Tahir Aslam, a Computer Science graduate (BSCS, DHA Suffa University, Karachi) and Full-Stack Software Engineer building with React, Next.js, TypeScript, JavaScript, backend APIs, and AI/ML.",
    keywords: [
      "Tahir Aslam",
      "Full-Stack Software Engineer",
      "Software Engineer",
      "Frontend Developer",
      "Backend Developer",
      "AI/ML Developer",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Python",
      "TensorFlow",
      "Node.js",
      "Computer Science",
      "DHA Suffa University",
      "Karachi",
    ],
  },

  profile: {
    name: "Tahir Aslam",
    initials: "TA",
    title: "Full-Stack Software Engineer | Frontend, Backend & AI/ML",
    degree: "BSCS",
    university: "DHA Suffa University, Karachi",
    location: "Karachi, Pakistan",
    email: "tahiraslam200001@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/tahir-aslam-9a621131a/",
    githubUrl: "https://github.com/Tahir-as",
    resumePath: "/Tahir_Aslam_Resume.pdf",
    resumeLabel: "Download Resume",
    logoAlt: "Tahir Aslam monogram logo",
  },

  navigation: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavItem[],

  hero: {
    eyebrow: "Karachi, Pakistan · Open to Software Engineer & AI/ML Roles",
    greeting: "Hello, I'm",
    summary:
      "Computer Science graduate (BSCS, DHA Suffa University, Karachi) building user interfaces with React and Next.js, backend REST APIs, and applied AI/ML systems.",
    primaryCta: {
      label: "View Projects",
      href: "#projects",
    },
    secondaryCta: {
      label: "Contact Me",
      href: "#contact",
    },
  },

  about: {
    index: "01",
    eyebrow: "About",
    heading:
      "Building user interfaces, dependable backend APIs, and applied AI/ML systems.",
    paragraphs: [
      "I am Tahir Aslam, a Computer Science graduate (BSCS) from DHA Suffa University in Karachi, targeting Software Engineer and AI/ML roles.",
      "I build user interfaces with React and Next.js alongside backend APIs, microservices, relational databases, and applied machine learning systems spanning computer vision transfer learning and custom NLP extraction.",
      "Across team projects at DHA Suffa University, I have led technical implementation, UML architecture design, code reviews, Git workflows, and end-to-end demonstrations.",
    ],
    facts: [
      { label: "Education", value: "BSCS, DHA Suffa University" },
      { label: "Location", value: "Karachi, Pakistan" },
      { label: "Target Roles", value: "Software Engineer & AI/ML" },
      { label: "Focus Areas", value: "Frontend, Backend APIs & AI/ML" },
    ] satisfies ProfileFact[],
  },

  skills: {
    index: "02",
    eyebrow: "Skills",
    heading: "Technical Skills",
    description:
      "Grouped overview of the languages, frontend technologies, AI/ML libraries, backend frameworks, databases, and DevOps tools I work with.",
    groups: [
      {
        category: "Languages",
        items: ["Python", "JavaScript", "TypeScript", "C#", "SQL"],
      },
      {
        category: "Frontend",
        items: [
          "JavaScript (ES6+)",
          "TypeScript",
          "React",
          "Next.js",
          "HTML5",
          "CSS3",
          "Tailwind CSS",
        ],
      },
      {
        category: "AI/ML",
        items: [
          "NLP",
          "TensorFlow",
          "Keras",
          "TensorFlow Lite",
          "CNNs",
          "Transfer Learning",
          "NumPy",
          "Pandas",
          "Scikit-Learn",
          "Prompt Engineering",
        ],
      },
      {
        category: "Backend/APIs",
        items: [
          "REST APIs",
          "Flask",
          "Node.js",
          "Express.js",
          "Microservices",
          "WebSockets",
        ],
      },
      {
        category: "Databases",
        items: ["PostgreSQL", "MySQL", "SQL Server"],
      },
      {
        category: "DevOps/Tools",
        items: ["Docker", "Docker Compose", "CI/CD", "Git", "GitHub", "Linux"],
      },
    ] satisfies SkillGroup[],
  },

  projects: {
    index: "03",
    eyebrow: "Projects",
    heading: "Featured Projects",
    description:
      "Selected full-stack, backend engineering, and applied AI/ML projects.",
    placeholderBadgeLabel: "Placeholder",
    placeholderLinkLabel: "GitHub Repo (Placeholder)",
    liveLinkLabel: "View on GitHub",
    placeholderDemoLabel: "Live Demo (Placeholder)",
    liveDemoLabel: "Live Demo",
    placeholderNote:
      "Placeholder project cards, repository links, and live demo links can be updated anytime in src/data/portfolio.ts.",
    items: [
      {
        id: "plant-disease-identifier",
        title: "Plant Disease Identifier & Inference API",
        category: "Computer Vision & Backend",
        description:
          "Crop disease classification pipeline using MobileNetV2 and ResNet transfer learning across 38+ crop disease classes, served via a Flask REST API paired with a Node.js/Express backend, TensorFlow Lite deployment support, and Docker.",
        tags: [
          "MobileNetV2",
          "ResNet",
          "Transfer Learning",
          "TensorFlow Lite",
          "Flask",
          "REST APIs",
          "Node.js",
          "Express.js",
          "Docker",
        ],
        githubUrl: "https://github.com/Tahir-as/PLACEHOLDER-plant-disease-api",
        isPlaceholderLink: true,
      },
      {
        id: "conversational-voice-assistant",
        title: "Intelligent Conversational & Voice Assistant",
        category: "NLP & Speech",
        description:
          "Interactive assistant featuring regex-based intent recognition, multi-turn conversational context handling, and real-time text-to-speech synthesis with pyttsx3.",
        tags: ["Python", "NLP", "Regex", "Multi-Turn Context", "pyttsx3"],
        githubUrl: "https://github.com/Tahir-as/PLACEHOLDER-voice-assistant",
        isPlaceholderLink: true,
      },
      {
        id: "microservice-automation-pipeline",
        title: "Microservice & Full-Stack Automation Pipeline",
        category: "Full-Stack & DevOps",
        description:
          "Modular backend automation system built with Node.js, Express, TypeScript, and PostgreSQL, orchestrated using Docker Compose with asynchronous workers and centralized error handling.",
        // Add "React" or "Next.js" here if your full-stack client uses them.
        tags: [
          "Frontend",
          "TypeScript",
          "Node.js",
          "Express.js",
          "PostgreSQL",
          "Docker Compose",
          "Microservices",
          "Async Workers",
        ],
        githubUrl:
          "https://github.com/Tahir-as/PLACEHOLDER-microservice-pipeline",
        isPlaceholderLink: true,
      },
      {
        id: "nlp-math-word-problem-parser",
        title: "NLP Mathematical Word Problem Parser",
        category: "Natural Language Processing",
        description:
          "Natural language processing tool that parses mathematical word problems from plain text into structured equations using custom NLP extraction.",
        tags: ["Python", "NLP", "Custom Extraction", "Equation Parsing"],
        githubUrl: "https://github.com/Tahir-as/PLACEHOLDER-nlp-math-parser",
        isPlaceholderLink: true,
      },
      {
        id: "personal-portfolio-website",
        title: "Personal Portfolio Website",
        category: "Frontend",
        description:
          "Responsive single-page developer portfolio built with Next.js (App Router), React, TypeScript, and Tailwind CSS, featuring dark/light mode, a contact API route, and SEO metadata.",
        tags: ["Frontend", "React", "Next.js", "TypeScript", "Tailwind CSS"],
        githubUrl: "https://github.com/Tahir-as/portflolio101",
        isPlaceholderLink: false,
        liveDemoUrl: "https://PLACEHOLDER-live-demo.vercel.app",
        isLiveDemoPlaceholder: true,
        isPlaceholderProject: false,
      },
    ] satisfies ProjectItem[],
  },

  experience: {
    index: "04",
    eyebrow: "Experience",
    heading: "Experience",
    description:
      "Technical leadership and collaborative software engineering experience.",
    items: [
      {
        id: "dsu-lead-contributor",
        role: "Software Engineering & Applied ML Lead Contributor",
        organization: "DHA Suffa University",
        location: "Karachi, Pakistan",
        period: "2022 – Present",
        summary:
          "Led technical implementation of team software engineering and applied machine learning projects from system design through end-to-end delivery.",
        highlights: [
          "Led technical implementation of collaborative team projects.",
          "Created UML designs to structure application architecture and workflows.",
          "Conducted code reviews and managed Git workflows across contributors.",
          "Prepared and delivered end-to-end project demonstrations.",
        ],
      },
    ] satisfies ExperienceItem[],
  },

  contact: {
    index: "05",
    eyebrow: "Contact",
    heading: "Get in Touch",
    description:
      "Feel free to reach out about Software Engineer or AI/ML roles, project collaborations, or technical discussions.",
    directHeading: "Direct Links",
    formHeading: "Send a Message",
    fields: {
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "you@example.com",
      messageLabel: "Message",
      messagePlaceholder: "Tell me about the role or project...",
      submitLabel: "Send Message",
      submittingLabel: "Sending...",
    },
  },

  footer: {
    builtWith: "Built with Next.js, TypeScript, and Tailwind CSS.",
    backToTopLabel: "Back to top",
  },
} as const;
