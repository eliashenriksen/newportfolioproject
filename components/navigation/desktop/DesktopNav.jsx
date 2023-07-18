import styles from "./DesktopNav.module.css";
import Link from "next/link";
import PerformanceButton from "../performancebutton/PerformanceButton";

export default function DesktopNav() {

  return(
    <nav className={styles.desktopNav}>
      <Link href="/">Home</Link>
      <Link href="/">About</Link>
      <Link href="/testroute">Portfolio</Link>
      <Link href="/">Contact</Link>
      <PerformanceButton></PerformanceButton>
    </nav>
  )
}