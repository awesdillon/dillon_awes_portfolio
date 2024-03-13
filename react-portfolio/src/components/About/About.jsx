import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={StyleSheet.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="my about image"
          className={styles.aboutImage}
        />
      </div>
      <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
          <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor" />
          <div className={styles.aboutItemText}>
            <h3>Associate Developer</h3>
            <p>
              I have 3 years of experience as an associate front end software
              developer.
            </p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <img src={getImageUrl("about/uiIcon.png")} alt="UI" />
          <div className={styles.aboutItemText}>
            <h3>Dev Skills</h3>
            <p>
              My work experience and personal projects have equipped me with a
              wide range of skills including React, API Integration, Supabase,
              Redux, DevOps, Pair-Programming, CSS, HTML, and Node.js.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default About;
