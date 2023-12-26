import { ThemeCustomization } from '@/themes'
import { Inter } from 'next/font/google'
import SwiperCore, { Autoplay } from "swiper"

import Header from '@/components/shared/Header'

import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Autoplay]);

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Thoriq Dharmawan | Projects',
  description: 'A collection of projects that have been created',
  content: 'Explore my coding projects and portfolio.',
  keywords: 'Project, Portfolio, Thoriq Dharmawan',
  ogTitle: 'Thoriq Dharmawan | Projects', // Open Graph title
  ogDescription: 'Explore my coding projects and portfolio.', // Open Graph description
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <ThemeCustomization>
          {children}
        </ThemeCustomization>
      </body>
    </html>
  )
}
