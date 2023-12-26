import { ThemeCustomization } from '@/themes'
import { Inter } from 'next/font/google'
import SwiperCore, { Autoplay } from "swiper"
import Head from 'next/head';
import Script from 'next/script';

import Header from '@/components/shared/Header'

import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Autoplay]);

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Thoriq Dharmawan | Frontend Developer',
  description: 'A collection of projects that have been created',
  keywords: 'Frontend Developer, Senior Developer, Thoriq Dharmawan',
  content: 'Explore my coding projects and portfolio.',
  ogTitle: 'Thoriq Dharmawan | Frontend Developer', // Open Graph title
  ogDescription: 'Explore my coding projects and portfolio.', // Open Graph description
}

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
      <Head>
        {/* Add metadata tags */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        {/* Open Graph tags */}
        <meta property="og:title" content={metadata.ogTitle} />
        <meta property="og:description" content={metadata.ogDescription} />
        <meta property="og:image" content={metadata.ogImage} />
        <meta name="keywords" content={metadata.keywords} />

        {/* Viewport meta tag */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <body className={inter.className}>
        <Header />
        <ThemeCustomization>
          {children}
        </ThemeCustomization>
      </body>
    </html>
  )
}
