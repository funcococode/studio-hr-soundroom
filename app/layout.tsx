import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.studiohr.com"),
  title: "Studio HR Soundroom — End-to-End Audio Production",
  description:
    "Studio HR Soundroom is a full-service audio production company delivering audio stories, audiobooks, podcasts, sound design, mixing, mastering, and quality-controlled final delivery at scale.",
  keywords: [
    "audio production company",
    "audiobook production",
    "podcast production",
    "audio story production",
    "sound design",
    "mixing and mastering",
  ],
  openGraph: {
    title: "Studio HR Soundroom — End-to-End Audio Production",
    description:
      "Full-service audio production for storytelling platforms, audiobook publishers, podcast networks, media companies, and creators.",
    type: "website",
  },
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans antialiased grain">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
