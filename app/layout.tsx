import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-display", display: "swap", axes: ["opsz", "SOFT", "WONK"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.studiohr.in"),
  title: "Studio HR Soundroom — Remote Audio Production Partner",
  description:
    "Studio HR is a remote audio production company that helps businesses and production houses handle high-volume audio production — white-label, overflow, and dedicated capacity. Audio story, audiobook, AI audio/voice QA, localization, podcast, mixing, mastering and QC.",
  keywords: [
    "remote audio production",
    "white-label audio production",
    "audio production outsourcing",
    "AI audio QA",
    "AI voice quality control",
    "audiobook production",
    "audio story production",
    "localization and dubbing post-production",
    "podcast production",
  ],
  openGraph: {
    title: "Studio HR Soundroom — Remote Audio Production Partner",
    description:
      "High-volume, white-label and overflow audio production for businesses and production houses — delivered globally.",
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
