import styles from "./HomeScene1.module.css";

export default function HomeScene1({ view1Ref }) {
  return(
    <div ref={view1Ref} className={styles.view1}></div>
  )
}