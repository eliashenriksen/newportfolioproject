import styles from "./DesktopNav.module.css";
import Link from "next/link";
import PerformanceButton from "../performancebutton/PerformanceButton";

export default function DesktopNav() {

  return(
    <nav className={styles.desktopNav}>
      <Link href="#landingSectionID">Home</Link>
      <Link href="#aboutSectionID">About</Link>
      <Link href="#portfolioSectionID">Portfolio</Link>
      <Link href="#contactSectionID">Contact</Link>
      <PerformanceButton></PerformanceButton>
    </nav>
  )
}