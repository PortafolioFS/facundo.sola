import "./globals.css";
import type { Metadata, Viewport } from "next";
import { BackgroundFX } from "@/components/background-fx";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { portfolioProfile } from "@/lib/portfolio";

const title = "Facundo Sola | Soporte Técnico IT y Desarrollo de Software";
const description =
  "Portfolio de Facundo Sola: soporte técnico IT freelance desde 2019, formación en desarrollo de software, proyectos, redes y ciberseguridad.";

export const metadata: Metadata = {
  metadataBase: new URL(portfolioProfile.siteUrl),
  title: {
    default: title,
    template: "%s | Facundo Sola",
  },
  description,
  applicationName: "Portfolio de Facundo Sola",
  authors: [{ name: portfolioProfile.name }],
  creator: portfolioProfile.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    title,
    description,
    url: "/",
    siteName: "Facundo Sola",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#08111f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolioProfile.name,
    url: portfolioProfile.siteUrl,
    jobTitle: "Soporte Técnico IT",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tacural",
      addressRegion: "Santa Fe",
      addressCountry: "AR",
    },
    sameAs: [portfolioProfile.linkedinUrl, portfolioProfile.githubUrl],
  };

  return (
    <html lang="es">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-cyan-300 px-4 py-2 font-bold text-slate-950 transition focus:translate-y-0"
        >
          Saltar al contenido
        </a>
        <BackgroundFX />
        <Navbar />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
