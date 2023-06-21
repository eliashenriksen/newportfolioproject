"use client"
import styles from "./ProjectCard.module.css";
import Image from "next/image";

export default function ProjectCard({ title, date, image, description }) {

  console.log("project card log:" ,"title", title, "date", date, "image", image, "description", description);

  const imageStyle = {
    objectFit: "cover",
  }

  return(
    <div className={styles.projectCard}>
      <div className={styles.projectCardInfo}>
        <h3>{title}</h3>
      </div>
      <Image
        src={`https:${image.fields.file.url}`}
        fill
        alt={`An image of the ${title} project.`}
        style={imageStyle}>
      </Image>
    </div>
  )
}