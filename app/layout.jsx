import './globals.css';
import Link from "next/link";
import styles from './layout.module.css';
import localFont from 'next/font/local';
import MobileNav from "@/components/navigation/mobile/MobileNav";
import DesktopNav from "@/components/navigation/desktop/DesktopNav";



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
      </body>
    </html>
  )
}
