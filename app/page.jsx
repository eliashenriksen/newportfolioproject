import styles from "./page.module.css";
import { createClient } from "contentful";
import HomeCanvas1 from "@/components/threejs/homecanvas1/HomeCanvas1";
import HomeCanvas2 from "@/components/threejs/homecanvas2/HomeCanvas2";
import ProjectCard from "@/components/sections/portfolio/ProjectCard";
import { FaFileAlt } from "react-icons/fa";
import ContactForm from "@/components/forms/contactform/ContactForm";

export const metadata = {
  title: 'Elias Henriksen | Home',
  description: 'Hi! Im Elias, a 27 year old designer and developer that appreciates clean, clever and aesthetic solutions.',
}

//Trying out the new NextJS 13 server component server side data fetching.
async function getContent() {
  let data = "";
  let errorData = "";

  const client = createClient({
    space: `${process.env.NEXT_PUBLIC_CONTENTFUL_API_SPACE}`,
    environment: 'master', // defaults to 'master' if not set
    accessToken: `${process.env.NEXT_PUBLIC_CONTENTFUL_API_KEY}`
  })

  try {
    const response = await client.getEntries();
    // console.log(response);
    data = response;

  } catch (error) {
    errorData = error;
    // console.log(error);
  }

  if (data) {
    console.log("returning data::::::");
    return data;
  } else {
    console.log("returning error:::::");
    return errorData;
  }

  // return data;
}

export default async function Page() {
  const response = await getContent();

  console.log("response:" ,response);

  //Below, I am checking all the entries for a specific ID, which is the ID of the "About" entry to populate the About section of the portfolio website.
  //In the same loop, I am also checking if an entry is of the type "projectPost", which means it must populate the project portfolio section of the website.
  let aboutData = "";
  const projectsArray = [];
  let splitAboutDescriptionData = [];
  let splitAboutEducationData = [];
  let splitAboutSkillsData = [];

  if (response.items) {
    for (let i = 0; i < response.items.length; i++) {
      if (response.items[i].sys.id === "2eGTTG2psaSD2cCBtFQstE") {
        aboutData = response.items[i];
        // console.log("response loop:" ,response.items[i]);
      }
  
      if (response.items[i].sys.contentType.sys.id === "projectPost") {
        projectsArray.push(response.items[i]);
      }
    }
  
    // console.log("projects array here:", projectsArray);
  
    splitAboutDescriptionData = aboutData.fields.description.split('\n\n');
    splitAboutEducationData = aboutData.fields.education.split('\n');
    splitAboutSkillsData = aboutData.fields.skills.split('\n');
  }

  if (response.errno) {
    return(
      <div className={styles.fetchErrorHolder}>
        <p>An error occured fetching the page data, please refresh and try again.</p>
      </div>
    )
  }

  return(
    <>
      <section className={styles.landingSection}>
        {/* <HomeCanvas1></HomeCanvas1> */}
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
              <a href="https://www.dropbox.com/s/y1isnrnmlv9x2t8/elias%20henriksen.pdf?dl=0">
                <FaFileAlt className={styles.resumeIcon}></FaFileAlt>
              </a>
            </section>
          </div>
        </section>
        <section className={styles.aboutSectionCanvasHolder}>
          {/* <HomeCanvas2></HomeCanvas2> */}
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
        <ContactForm></ContactForm>
      </section>
    </>
  )
}