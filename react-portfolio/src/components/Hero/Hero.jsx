import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Dillon</h1>
        <p className={styles.description}>
          I am an associate software developer seeking more experience and
          skills in the Computer Science and Software Development industry
        </p>
        <a href="mailto:dillonawes@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero"
        className={styles.heroImg}
      />
    </section>
  );
};

export default Hero;
