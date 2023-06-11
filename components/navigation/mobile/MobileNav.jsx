"use client"
import styles from "./MobileNav.module.css";
import Link from "next/link";
import { useState } from "react";

export default function MobileNav() {

  const [toggled, setToggled] = useState(false);

  function mobileNavToggler() {
    console.log("hamburger clicked");
    if (toggled) {
      setToggled(false);
    } else {
      setToggled(true);
    }
  }

  return(
    <>
      <div onClick={mobileNavToggler} className={styles.mobileHamburgerHolder}>
        <div className={`${styles.mobileHamburgerMenuBar1} ${toggled ? styles.mobileHamburgerMenuBar1Toggled : ""}`}></div>
        <div className={`${styles.mobileHamburgerMenuBar2} ${toggled ? styles.mobileHamburgerMenuBar2Toggled : ""}`}></div>
      </div>
      <div className={styles.mobileNavHolder} style={{visibility: toggled ? "visible" : "hidden", opacity: toggled ? "100" : "0"}}>
        <nav className={styles.mobileNav} style={{marginRight: toggled ? "0rem" : "200rem"}}>
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/testroute">Portfolio</Link>
          <Link href="/">Contact</Link>
        </nav>
      </div>
    </>
  )
}