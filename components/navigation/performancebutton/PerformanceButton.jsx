"use client"
import { useContext, useState } from "react";
import { PerformanceContext } from "@/app/layout";
import { BsSpeedometer2 } from "react-icons/bs";
import styles from "./PerformanceButton.module.css";

export default function PerformanceButton() {

  const {performanceMode, setPerformanceMode} = useContext(PerformanceContext);
  const [speed, setSpeed] = useState(styles.imSlow);

  function performanceToggler() {
    if (performanceMode === false) {
      setPerformanceMode(true);
      setSpeed(styles.imFast);
    } else if (performanceMode === true) {
      setPerformanceMode(false);
      setSpeed(styles.imSlow);
    }
  }

  return(
    <div onClick={performanceToggler} className={styles.performanceButtonHolder}>
      <BsSpeedometer2></BsSpeedometer2>
      <p className={speed}>SPEED</p>
    </div>
  )
}