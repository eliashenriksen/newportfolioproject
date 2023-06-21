"use client"
import styles from "./page.module.css";
import { createClient } from "contentful";
import HomeCanvas1 from "@/components/threejs/homecanvas1/HomeCanvas1";
import HomeCanvas2 from "@/components/threejs/homecanvas2/HomeCanvas2";
import { useEffect, useState } from "react";
import Image from "next/image";


export default function Home() {

  const [aboutDescription, setAboutDescription] = useState([]);
  const [aboutEducation, setAboutEducation] = useState([]);
  const [aboutSkills, setAboutSkills] = useState([]);
  const [portfolioProjects, setPortfolioProjects] = useState([]);

  useEffect(() => {
    async function getContent() {
      const client = createClient({
        space: `${process.env.NEXT_PUBLIC_CONTENTFUL_API_SPACE}`,
        environment: 'master', // defaults to 'master' if not set
        accessToken: `${process.env.NEXT_PUBLIC_CONTENTFUL_API_KEY}`
      })

      try {
        const response = await client.getEntries();
        console.log(response);

        //Below, I am checking all the entries for a specific ID, which is the ID of the "About" entry to populate the About section of the portfolio website.
        //In the same loop, I am also checking if an entry is of the type "projectPost", which means it must populate the project portfolio section of the website.
        let aboutData = "";
        const projectsArray = [];

        for (let i = 0; i < response.items.length; i++) {
          if (response.items[i].sys.id === "2eGTTG2psaSD2cCBtFQstE") {
            aboutData = response.items[i];
            console.log("response loop:" ,response.items[i]);
          }

          if (response.items[i].sys.contentType.sys.id === "projectPost") {
            projectsArray.push(response.items[i]);
          }
        }

        console.log("projects array here:", projectsArray);

        const splitAboutDescriptionData = aboutData.fields.description.split('\n\n');
        const splitAboutEducationData = aboutData.fields.education.split('\n');
        const splitAboutSkillsData = aboutData.fields.skills.split('\n');

        setAboutDescription(splitAboutDescriptionData);
        setAboutEducation(splitAboutEducationData);
        setAboutSkills(splitAboutSkillsData);
        setPortfolioProjects(projectsArray);

      } catch (error) {
        console.log(error);
      }
    }

    getContent();
  }, []);


  return(
    <>
      <section className={styles.landingSection}>
        <HomeCanvas1></HomeCanvas1>
      </section>
      <section className={styles.aboutSection}>
        <section className={styles.aboutSectionInfo}>
          <section className={styles.aboutSectionInfoDescription}>
            <h2>About?</h2>
            {aboutDescription.map((paragraph) => {
              return(
                <p key={Math.random()}>{paragraph}</p>
              )
            })}
          </section>
          <section>
            <h2>Education</h2>
            <ul>
              {aboutEducation.map((item) => {
                return(
                  <li key={Math.random()}>{item}</li>
                )
              })}
            </ul>
          </section>
          <section>
            <h2>Skills</h2>
            <ul className={styles.skillsList}>
              {aboutSkills.map((item) => {
                return(
                  <li key={Math.random()}>{item}</li>
                )
              })}
            </ul>
          </section>
        </section>
        <section>
          <HomeCanvas2></HomeCanvas2>
        </section>
      </section>
      <section className={styles.portfolioSection}>
        <h2>Portfolio</h2>
        <div className={styles.portfolioProjectGrid}></div>
      </section>
    </>
  )
}