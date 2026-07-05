import { Inter_Tight, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter-tight",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

export const metadata = {
  title: "Thoriq Dharmawan | Software Engineer",
  description: "Software engineer building web, mobile & AI-powered products — clean, fast, and beautifully interactive.",
  keywords: "Software Engineer, Fullstack Developer, Frontend Developer, React, Next.js, TypeScript, React Native, Node.js, AI Engineer, Thoriq Dharmawan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-PDE5LHLBG2"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-PDE5LHLBG2');
        `}
      </Script>
      <body
        className={`${interTight.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable}`}
        style={{ fontFamily: "var(--font-inter-tight), 'Inter Tight', -apple-system, system-ui, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
