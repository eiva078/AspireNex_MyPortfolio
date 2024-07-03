import styles from "./Navbar.module.css";
import { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [openmenu, setopenmenu] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="#">
        Portfolio
      </a>

      <div className={styles.menu}>
        <div className={styles.icon} onClick={() => setopenmenu(!openmenu)}>
          {openmenu ? <IoReorderThreeOutline /> : <IoMdClose />}
        </div>
        <ul
          className={`${styles.menuItems} ${openmenu && styles.menuOpen}`}
          onClick={() => setopenmenu(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
