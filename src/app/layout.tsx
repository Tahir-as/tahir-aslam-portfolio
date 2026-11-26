import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { portfolioData } from "@/data/portfolio";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(portfolioData.site.url),
  title: {
    default: portfolioData.site.title,
    template: `%s | ${portfolioData.site.shortTitle}`,
  },
  description: portfolioData.site.description,
  keywords: [...portfolioData.site.keywords],
  authors: [
    {
      name: portfolioData.profile.name,
      url: portfolioData.profile.githubUrl,
    },
  ],
  creator: portfolioData.profile.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: portfolioData.site.url,
    siteName: portfolioData.profile.name,
    title: portfolioData.site.title,
    description: portfolioData.site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: portfolioData.site.title,
    description: portfolioData.site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
};

// Runs synchronously before first paint to prevent light/dark mode flicker.
const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    if (stored === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-screen bg-white text-slate-900 antialiased transition-colors duration-200 dark:bg-slate-950 dark:text-slate-100">
        {children}
      </body>
    </html>
  );
}
