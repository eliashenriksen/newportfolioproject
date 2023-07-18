import { createClient } from "contentful";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

async function getContent(id) {
  let data = "";

  const client = createClient({
    space: `${process.env.NEXT_PUBLIC_CONTENTFUL_API_SPACE}`,
    environment: 'master',
    accessToken: `${process.env.NEXT_PUBLIC_CONTENTFUL_API_KEY}`
  })

  try {
    const response = await client.getEntry(`${id}`);
    // console.log(response);
    data = response;

  } catch (error) {
    console.log(error);
  }

  return data;
}

export default async function Page({ params }) {
  const response = await getContent(params.id);
  // console.log("PARAMS:", params.id);
  // console.log("response for single entry:", response);
  // console.log("description content:", response.fields.projectDescription.content);

  let projectDescription = "";

  for (let i = 0; i < response.fields.projectDescription.content.length; i++) {

    //The below switch statement is handling the "rich text" content type for the project descriptions, which is returned from Contentful.
    //The rich text content type returns the content and also returns properties that describe what that content type should be.
    //For example a UL, a hyperlink, a simple paragraph etc.
    //The way the API is setup could probably be better, as you can probably see with the endless "content" stacking below.
    //The switch statement basically just checks what a specific piece of returned content should be, and then wraps that content piece in the needed HTML tags.
    switch (response.fields.projectDescription.content[i].nodeType) {
      case "paragraph":
        projectDescription += `<p>${response.fields.projectDescription.content[i].content[0].value}</p>`;
        for (let k = 0; k < response.fields.projectDescription.content[i].content.length; k++) {
          //For whatever reason, a hyperlink content piece returned from Contentful is first wrapped inside a paragraph.
          //Therefore the hyperlink check has to be inside the paragraph switch case.
          if (response.fields.projectDescription.content[i].content[k].nodeType === "hyperlink") {
            projectDescription += `<a href="${response.fields.projectDescription.content[i].content[k].data.uri}">${response.fields.projectDescription.content[i].content[k].content[0].value}</a>`;
          }
        }
        break
      case "unordered-list":
        let projectDescriptionLIs = "";
        for (let j = 0; j < response.fields.projectDescription.content[i].content.length; j++) {
          // console.log("dog123", response.fields.projectDescription.content[i].content[j].content[0].content[0].value);
          projectDescriptionLIs += `<li>${response.fields.projectDescription.content[i].content[j].content[0].content[0].value}</li>`;
        }
        const projectDescriptionUL = `<ul>${projectDescriptionLIs}</ul>`;
        projectDescription += projectDescriptionUL;
    }
  }

  const splitTechstack = response.fields.builtWith.split('\n');
  let splitNotes = [];
  if (response.fields.projectNotes) {
    splitNotes = response.fields.projectNotes.split('\n');
  }

  const imageStyle = {
    objectFit: "cover",
  }

  return(
    <section className={styles.specificProjectHolder}>
      <section className={styles.specificProjectTopInfo}>
        <p>{response.fields.yearMade}</p>
        <h1>{response.fields.header}</h1>
      </section>
      <div className={styles.specificProjectImageWrapper}>
        <Image src={`https:${response.fields.topMainImage.fields.file.url}`} alt={`An image of the ${response.fields.title} project.`} fill style={imageStyle}></Image>
      </div>
      <section className={styles.specificProjectPageLinks}>
        {response.fields.linkLivepage ? <Link href={response.fields.linkLivepage}>Link to live page</Link> : ""}
        <Link href={response.fields.linkGithub}>Link to GitHub page</Link>
      </section>
      <section className={styles.specificProjectPageMainContent}>
        <section className={styles.specificProjectPageMainContentTopInfo}>
          <div>
            <h2>Designed by</h2>
            <p>{response.fields.designedBy}</p>
          </div>
          <div>
            <h2>Developed by</h2>
            <p>{response.fields.developedBy}</p>
          </div>
        </section>
        <section className={styles.specificProjectMainContentDescription}>
          <h2>Description</h2>
          <div className={styles.specificProjectMainContentDescriptionHolder} dangerouslySetInnerHTML={{__html: projectDescription}}></div>
        </section>
        <section className={styles.specificProjectMainContentTechstack}>
          <h2>Built with</h2>
          <ul>
            {splitTechstack.map((item) => {
              return(
                <li key={Math.random()}>{item}</li>
              )
            })}
          </ul>
        </section>
        <section className={styles.specificProjectMainContentNotes}>
          {response.fields.projectNotes ? <h2>Notes</h2> : ""}
          {splitNotes.map((paragraph) => {
            return(
              <p key={Math.random()}>{paragraph}</p>
            )
          })}
        </section>
      </section>
    </section>
  )
}