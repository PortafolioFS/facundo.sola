export type PortfolioProject = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  repositoryHref?: string;
  highlight: string;
  featured?: boolean;
  ctaLabel?: string;
};

export type Certificate = {
  title: string;
  institution: string;
  period: string;
  status: "Completado" | "En curso";
  verificationUrl?: string;
};

export type LearningTrack = {
  title: string;
  institution: string;
  period: string;
  description: string;
};

export type SkillGroup = {
  id: "support" | "systems" | "development" | "security";
  title: string;
  description: string;
  skills: string[];
};

function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (configuredUrl) {
    return configuredUrl.replace(/\/$/, "");
  }

  const vercelHost =
    process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;

  return vercelHost ? `https://${vercelHost}` : "http://localhost:3000";
}

export const portfolioProfile = {
  name: "Facundo Sola",
  role: "Soporte técnico IT & Desarrollo de Software",
  badge: "Soporte IT freelance desde 2019",
  summary:
    "Ayudo a personas y pequeños negocios a resolver problemas de hardware, software y conectividad. A esa experiencia práctica le sumo una formación activa en desarrollo de software, bases de datos y ciberseguridad.",
  emailAddress: "solafacu@gmail.com",
  email: "mailto:solafacu@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/facusola/",
  githubHandle: "Facundo2504",
  githubUrl: "https://github.com/Facundo2504",
  siteUrl: getSiteUrl(),
  cvUrl:
    "https://drive.google.com/file/d/1kRnBZO5FdoWgvsf0UfcUM1F2CG9nfyOz/view?usp=drive_link",
  location: "Tacural, Santa Fe",
};

export const professionalExperience = {
  role: "Soporte Técnico IT",
  company: "Freelance",
  period: "2019 - Actualidad",
  summary:
    "Soporte directo a usuarios particulares y pequeños negocios, desde el diagnóstico inicial hasta la puesta a punto del equipo o la red.",
  responsibilities: [
    "Diagnóstico, reparación y optimización de hardware y software en equipos de escritorio y notebooks.",
    "Mantenimiento preventivo, limpieza lógica y física, y optimización de sistemas Windows.",
    "Instalación y configuración de periféricos, drivers, software de productividad y herramientas de seguridad.",
    "Configuración básica de redes domiciliarias y pymes, con resolución inicial de problemas de conectividad.",
    "Relevamiento de necesidades, elaboración de presupuestos y comunicación clara con perfiles no técnicos.",
  ],
};

export const skillGroups: SkillGroup[] = [
  {
    id: "support",
    title: "Soporte IT & Hardware",
    description:
      "Experiencia práctica resolviendo incidentes y dejando equipos listos para el trabajo diario.",
    skills: [
      "Diagnóstico de equipos",
      "Mantenimiento preventivo y correctivo",
      "Optimización de Windows",
      "Software, drivers y periféricos",
      "Atención a usuarios / Help Desk",
    ],
  },
  {
    id: "systems",
    title: "Redes & Sistemas",
    description:
      "Fundamentos para identificar problemas, documentarlos y escalar cuando hace falta.",
    skills: [
      "Redes TCP/IP",
      "Routers y switches",
      "Troubleshooting de conectividad",
      "Windows",
      "Nociones de Linux",
    ],
  },
  {
    id: "development",
    title: "Desarrollo & Datos",
    description:
      "Base académica aplicada en proyectos propios y prácticas publicadas en GitHub.",
    skills: [
      "C# y Windows Forms",
      "Entity Framework",
      "HTML5, CSS3 y JavaScript",
      "SQL y SQL Server",
      "Git y GitHub",
    ],
  },
  {
    id: "security",
    title: "Seguridad & Herramientas",
    description:
      "Formación introductoria orientada a trabajar con criterio, prevención y gestión de riesgos.",
    skills: [
      "Seguridad informática",
      "Gestión de riesgos",
      "Microsoft Office",
      "Excel avanzado en curso",
      "Inglés técnico intermedio",
    ],
  },
];

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "memory-master",
    title: "Memory Master",
    description:
      "Juego de memoria para niños y adultos, con cinco niveles infantiles y un modo extremo configurable de 100 a 500 tarjetas.",
    tags: ["JavaScript", "HTML", "CSS"],
    href: "https://topmemorymaster.netlify.app/",
    repositoryHref: "https://github.com/Facundo2504/Juegos-Interactivos",
    highlight: "Juego interactivo",
    featured: true,
    ctaLabel: "Jugar ahora",
  },
  {
    id: "miturnosalud",
    title: "MiTurnoSalud",
    description:
      "Prototipo de sistema de turnos médicos con registro, solicitud de turnos, dashboard y pantallas de notificaciones.",
    tags: ["JavaScript", "HTML", "CSS"],
    href: "https://github.com/Facundo2504/MiTurnoSalud",
    highlight: "Proyecto web",
    featured: true,
    ctaLabel: "Ver repositorio",
  },
  {
    id: "totaltech",
    title: "Totaltech",
    description:
      "Sistema para una tienda de electrónica desarrollado en C# y organizado por capas de presentación, lógica y datos.",
    tags: ["C#", ".NET", "Arquitectura por capas"],
    href: "https://github.com/Facundo2504/Totaltech",
    highlight: "Sistema de gestión",
    featured: true,
    ctaLabel: "Ver repositorio",
  },
  {
    id: "hc06solution",
    title: "HC06Solution",
    description:
      "Aplicación Android en Kotlin orientada a la conexión con un módulo Bluetooth HC-06.",
    tags: ["Kotlin", "Android", "Bluetooth"],
    href: "https://github.com/Facundo2504/HC06Solution",
    highlight: "Proyecto Android",
    ctaLabel: "Ver repositorio",
  },
  {
    id: "programaccion1-2023",
    title: "Programación I 2023",
    description:
      "Ejercicios académicos en C# para consolidar fundamentos de programación y resolución de problemas.",
    tags: ["C#", "Fundamentos", "Práctica académica"],
    href: "https://github.com/Facundo2504/Programaccion1_2023-Facu-Sola",
    highlight: "Práctica académica",
    ctaLabel: "Ver repositorio",
  },
];

export const featuredProjects = portfolioProjects.filter(
  (project) => project.featured
);

export const learningTracks: LearningTrack[] = [
  {
    title: "Tecnicatura Superior en Desarrollo de Software",
    institution: "ICES",
    period: "2022 - Actualidad",
    description:
      "Formación en programación, sistemas operativos, arquitectura de computadoras, redes y gestión de bases de datos.",
  },
];

export const certificates: Certificate[] = [
  {
    title: "Fundamentos de Ciberseguridad",
    institution: "Google · Coursera",
    period: "Completado",
    status: "Completado",
    verificationUrl: "https://coursera.org/verify/W3BGB9U3RON1",
  },
  {
    title: "Juegue sobre seguro: Gestionar los Riesgos de Seguridad",
    institution: "Google · Coursera",
    period: "Completado",
    status: "Completado",
    verificationUrl: "https://coursera.org/verify/V8TWPZAGFH57",
  },
  {
    title: "Laboratorio de Ingeniería en Inteligencia Artificial",
    institution: "ICES",
    period: "2025",
    status: "Completado",
  },
  {
    title: "Introducción a SQL",
    institution: "Capacitación técnica",
    period: "2025",
    status: "Completado",
  },
  {
    title: "Google Cybersecurity Professional Certificate",
    institution: "Google · Coursera",
    period: "En curso",
    status: "En curso",
  },
  {
    title: "Excel Avanzado",
    institution: "Udemy",
    period: "2026 · En curso",
    status: "En curso",
  },
];

export const additionalProfile = {
  mobility: "Licencia de conducir B1 y disponibilidad para viajar.",
  workArea: "Disponibilidad laboral en Rafaela y Sunchales.",
};
