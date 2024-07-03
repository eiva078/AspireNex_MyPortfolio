import styles from "./Contact.module.css";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <IoIosMail className={styles.icons} />
          <a href="mailto:eivayadav@gmail.com">eivayadav@gmail.com</a>
        </li>
        <li className={styles.link}>
          <FaLinkedin className={styles.icons} />
          <a href="https://www.linkedin.com/in/eiva2113/">
            linkedin.com/eiva2113
          </a>
        </li>
        <li className={styles.link}>
          <FaGithub className={styles.icons} />
          <a href="https://github.com/eiva078/">github.com/eiva078</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
