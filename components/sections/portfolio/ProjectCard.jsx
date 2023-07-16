"use client"
import styles from "./ProjectCard.module.css";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ title, date, image, description, link }) {

  // console.log("project card log:" ,"title", title, "date", date, "image", image, "description", description);
  // console.log("description>>>", description);

  const imageStyle = {
    objectFit: "cover",
  }

  return(
    <Link href={link} className={styles.projectCard}>
      <div className={styles.projectCardInfo}>
        <p>{date}</p>
        <h3>{title}</h3>
      </div>
      <Image
        src={image.fields ? `https:${image.fields.file.url}` : `${image}`}
        fill
        alt={`An image of the ${title} project.`}
        style={imageStyle}>
      </Image>
    </Link>
  )
}