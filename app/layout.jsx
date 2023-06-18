'use client'
import './globals.css';
import Link from "next/link";
import styles from './layout.module.css';
import localFont from 'next/font/local';
import MobileNav from "@/components/navigation/mobile/MobileNav";
import DesktopNav from "@/components/navigation/desktop/DesktopNav";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particleOptions from "../public/particleOptions.json";



const poppins = localFont({
  src: [
    {
      path: '../public/Poppins-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/Poppins-ExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../public/Poppins-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/Poppins-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/Poppins-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/Poppins-Thin.ttf',
      weight: '100',
      style: 'normal',
    }
  ],
  variable: '--fontPoppins',
});


const nothingyoucoulddo = localFont({
    src: [
    {
      path: '../public/NothingYouCouldDo-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--fontNothingYouCouldDo',
});


export const metadata = {
  title: 'Elias Henriksen | Home',
  description: 'Hi! Im Elias, a 27 year old designer and developer that appreciates clean, clever and aesthetic solutions.',
}

export default function RootLayout({ children }) {

  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  return (
    <html lang="en" className={`${poppins.variable} ${nothingyoucoulddo.variable}`}>
      <body>
        <MobileNav></MobileNav>
        <header className={styles.topLevelHeader}>
          <DesktopNav></DesktopNav>
        </header>
        <main>
          {children}
        </main>
        <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={particleOptions} />
      </body>
    </html>
  )
}
