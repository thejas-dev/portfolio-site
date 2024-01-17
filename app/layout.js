import { Inter, Fira_Sans, Audiowide, Exo_2, Quantico, Montserrat_Alternates,
  Nunito_Sans, Work_Sans, Poppins, Cormorant_Garamond, Space_Grotesk } from 'next/font/google'
import Head from 'next/head';

import './globals.css'

export const Space_Grotesk_Init = Space_Grotesk({
  subsets:['latin'],
  display:'swap',
  variable:'--font-space_grotesk',
  weight:'400'
})

export const Cormorant_Garamond_Init = Cormorant_Garamond({
  subsets:['latin'],
  display:'swap',
  variable:'--font-cormorant_garamond',
  weight:'700'
})

export const Poppins_Init = Poppins({
  subsets:['latin'],
  display:'swap',
  variable:'--font-poppins',
  weight:'400'
})

export const Work_Sans_Init = Work_Sans({
  subsets:['latin'],
  display:'swap',
  variable:'--font-work_sans',
  weight:'400'
})

export const Nunito_Sans_Init = Nunito_Sans({
  subsets:['latin'],
  display:'swap',
  variable:'--font-nunito_sans',
  weight:'400'
}) 

export const Fira_Sans_Init = Fira_Sans({
  subsets:['latin'],
  display:'swap',
  variable:'--font-fira_sans',
  weight:'500'
}) 

export const Exo_2_Init = Exo_2({
  subsets:['latin'],
  display:'swap',
  variable:'--font-exo_2',
  weight:'400'
}) 

export const Audiowide_Init = Audiowide({
  subsets:['latin'],
  display:'swap',
  variable:'--font-audiowide',
  weight:'400'
}) 

export const Quantico_Init = Quantico({
  subsets:['latin'],
  display:'swap',
  variable:'--font-quantico',
  weight:'400'
}) 

export const Montserrat_Alternates_Init = Montserrat_Alternates({
  subsets:['latin'],
  display:'swap',
  variable:'--font-monoserrat',
  weight:'600'
}) 

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://thejashari.vercel.app'),
  title: 'Thejas hari',
  description: 'Hi! I am Thejas, and its my portfolio website. Here, you can learn about me, explore the projects I have previously completed, and contact me if you are interested in collaboration.',
  openGraph: {
    title: 'Thejas Hari Portfolio',
    description: 'Hi! I am Thejas, and its my portfolio website. Here, you can learn about me, explore the projects I have previously completed, and contact me if you are interested in collaboration.',
    image:'https://ik.imagekit.io/d3kzbpbila/thejashari_MNUFga7_b'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ThejasHari42675',
    title: 'Thejas Hari Portfolio',
    description: 'Hi! I am Thejas, and its my portfolio website. Here, you can learn about me, explore the projects I have previously completed, and contact me if you are interested in collaboration.',
    image: 'https://ik.imagekit.io/d3kzbpbila/thejashari_MNUFga7_b'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta property='title' content="Thejas hari portfolio"/>
        <meta property="og:url" content="https://thejashari.vercel.app" key="ogurl" />
        <meta property="og:image" content="https://ik.imagekit.io/d3kzbpbila/thejashari_MNUFga7_b" key="ogimage" />
        <meta property="og:site_name" content="Porfolio Website" key="ogsitename" />
        <meta property="og:title" content="Thejashari Portfolio" key="ogtitle" />
        <meta property="og:description" content="Hi! I am Thejas, and its my portfolio website. Here, you can learn about me, explore the projects I have previously completed, and contact me if you are interested in collaboration." key="ogdesc" />
      </Head>
      <body className={`${inter.className} ${Fira_Sans_Init.variable} ${Audiowide_Init.variable}
      ${Exo_2_Init.variable} ${Quantico_Init.variable} ${Montserrat_Alternates_Init.variable}
      ${Nunito_Sans_Init.variable} ${Work_Sans_Init.variable} ${Poppins_Init.variable}
      ${Cormorant_Garamond_Init.variable} ${Space_Grotesk_Init.variable}
      `}>{children}</body>
    </html>
  )
}
