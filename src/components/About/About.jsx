import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" /> */}
            <div className={styles.aboutItemText}>
              <h3>Education</h3>
              <p>
                I'm currently pursuing a Bachelor of Technology in Mechanical
                Engineering at Indian Institute of Technology (ISM), Dhanbad.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" /> */}
            <div className={styles.aboutItemText}>
              <h3>Contributions to Open-Source</h3>
              <p>
                I contributed to the open-source community, through my
                participation in the GirlScript Summer of Code (GSSoC).
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" /> */}
            <div className={styles.aboutItemText}>
              <h3>Full Stack Developer</h3>
              <p>
                Alongside my academic pursuits, I engage in full-stack
                development, utilizing my technical expertise to create robust
                and scalable web applications. This allows me to design
                integrated solutions that span from user interface to database
                management.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
