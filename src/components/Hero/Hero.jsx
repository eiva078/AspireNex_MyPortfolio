import styles from "./Hero.module.css";
import heroImg from "../../assets/image.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Hi, I'm Eiva Prabhakar Yadav</h2>
        <p className={styles.description}>
          I'm specialize in creating dynamic and responsive web applications
          that solve real-world problems and elevate user experiences...
        </p>
      </div>
      <div className={styles.heroImg}>
        <img src={heroImg} alt="my picture" className={styles.IMG} />
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
export default Hero;
