"use client"
import styles from "./page.module.css";
import { createClient } from "contentful";
import HomeCanvas1 from "@/components/threejs/homecanvas1/HomeCanvas1";
import HomeCanvas2 from "@/components/threejs/homecanvas2/HomeCanvas2";
import { useEffect, useState } from "react";


export default function TestRoute() {

  const [aboutDescription, setAboutDescription] = useState([]);
  const [aboutEducation, setAboutEducation] = useState([]);
  const [aboutSkills, setAboutSkills] = useState([]);

  useEffect(() => {
    async function getContent() {
      const client = createClient({
        space: `${process.env.NEXT_PUBLIC_CONTENTFUL_API_SPACE}`,
        environment: 'master', // defaults to 'master' if not set
        accessToken: `${process.env.NEXT_PUBLIC_CONTENTFUL_API_KEY}`
      })

      try {
        const response = await client.getEntries();
        // console.log(response);
        console.log(response.items[0].fields);

        const splitAboutDescriptionData = response.items[0].fields.description.split('\n\n');
        const splitAboutEducationData = response.items[0].fields.education.split('\n');
        const splitAboutSkillsData = response.items[0].fields.skills.split('\n');

        console.log(splitAboutSkillsData);



        setAboutDescription(splitAboutDescriptionData);
        setAboutEducation(splitAboutEducationData);
        setAboutSkills(splitAboutSkillsData);

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
          <section>
            <h3>About?</h3>
            {aboutDescription.map((paragraph) => {
              return(
                <p key={Math.random()}>{paragraph}</p>
              )
            })}
          </section>
          <section className={styles.greenBackgrounds }>
            <h3>Education</h3>
            <ul>
              {aboutEducation.map((item) => {
                return(
                  <li key={Math.random()}>{item}</li>
                )
              })}
            </ul>
          </section>
          <section className={styles.greenBackgrounds }>
            <h3>Skills</h3>
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

      </section>
    </>
  )
}