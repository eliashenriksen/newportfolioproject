"use client"
import styles from "./Homepage.module.css";
import HomeCanvas from "../threejs/homecanvas/HomeCanvas";
import ProjectCard from "../sections/portfolio/ProjectCard";
import ContactForm from "../forms/contactform/ContactForm";
import { FaFileAlt } from "react-icons/fa";
import { useRef } from "react";
import HomeScene2 from "../threejs/homecanvas/scenes/HomeScene2";

export default function Homepage({ splitAboutDescriptionData, splitAboutEducationData, splitAboutSkillsData, projectsArray,  }) {

  const containerRef = useRef();
  const view1Ref = useRef();
  const view2Ref = useRef();

  return(
    <>
      <section className={styles.landingSection}>
        <HomeCanvas containerRef={containerRef} view1Ref={view1Ref} view2Ref={view2Ref}></HomeCanvas>
      </section>
      <section className={styles.aboutSection}>
        <section className={styles.aboutSectionInfo}>
          <div className={styles.aboutSectionInfoWrapper}>
            <section className={styles.aboutSectionInfoDescription}>
              <h2>About?</h2>
              {splitAboutDescriptionData.map((paragraph) => {
                return(
                  <p key={Math.random()}>{paragraph}</p>
                )
              })}
            </section>
            <section>
              <h2>Education</h2>
              <ul>
                {splitAboutEducationData.map((item) => {
                  return(
                    <li key={Math.random()}>{item}</li>
                  )
                })}
              </ul>
            </section>
            <section>
              <h2>Skills</h2>
              <ul className={styles.skillsList}>
                {splitAboutSkillsData.map((item) => {
                  return(
                    <li key={Math.random()}>{item}</li>
                  )
                })}
              </ul>
            </section>
            <section>
              <h2>Resume</h2>
              <a aria-label="Resume Link" href="https://www.dropbox.com/s/y1isnrnmlv9x2t8/elias%20henriksen.pdf?dl=0">
                <FaFileAlt className={styles.resumeIcon}></FaFileAlt>
              </a>
            </section>
          </div>
        </section>
        <section className={styles.aboutSectionCanvasHolder}>
          <HomeScene2 view2Ref={view2Ref}></HomeScene2>
        </section>
      </section>
      <section className={styles.portfolioSection}>
        <h2>Portfolio</h2>
        <div className={styles.portfolioProjectGrid}>
          {projectsArray.map((project) => {
            return(
              <ProjectCard
              key={project.sys.id}
              title={project.fields.title}
              date={project.fields.yearMade}
              image={project.fields.topMainImage}
              description={project.fields.projectDescription}
              link={`project/${project.sys.id}`}>
              </ProjectCard>
            )
          })}
          <ProjectCard title="Design Portfolio" date={2020} image="/designportfoliocover.png" link="https://www.dropbox.com/s/f1131k6zp37qi2e/MAPPE%20PORTEF%C3%98LJE%20elias%20henriksen.pdf?dl=0"></ProjectCard>
        </div>
      </section>
      <section className={styles.contactSection}>
        <h2>Contact me</h2>
        <ContactForm></ContactForm>
      </section>
    </>
  )
}