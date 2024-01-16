import fs from 'fs';
import path from 'path';
import React from 'react';
import Image from 'next/image'
import Expertise from '../components/Expertise';
import AboutMe from '../components/AboutMe';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import ClientSays from '../components/ClientSays';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

// async function get3dModel() {
//   const filePath = await path.join(process.cwd(), 'public', '/welcome.html');
//   const htmlContent = fs.readFileSync('public/welcome.html', 'utf8');
//   // const contents = await fetch('/welcome.html');
//   console.log(htmlContent)
//   return {
//     props: {
//       htmlContent,
//     },
//   };
// }

export default async function Index() {
  // const {props}  = await get3dModel();

  return (
    <main className="h-screen overflow-y-scroll w-full gap-10 bg-[#222222] sm:snap-y sm:snap-mandatory 
    z-0 overflow-x-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-red-500">
        {/*<Loader />*/}
        <Hero />
        <AboutMe />
        <Expertise />
        <Projects />
        <ClientSays />
        <Contact />
        <Footer />
    </main>
  )
}
