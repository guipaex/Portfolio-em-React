import styles from "./Home.module.scss";
import { Link } from "react-scroll";
import { FaChevronDown } from "react-icons/fa";

export default function Home() {
  return (
    <div id='home' className={styles.container}>
      <div className={styles.container__content}>
        <p className={styles.container__text}>Hello, there! I'm</p>
        <h1 className={styles.container__title}>
          Guilherme Paes<span className={styles.text__highlight}>.</span>
        </h1>
        <p className={styles.container__text}>
          A <span className={styles.bold}>Web Developer</span> and <span className={styles.bold}>Designer</span>.
        </p>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500}>
          <FaChevronDown className={styles.skipper__arrow} />
        </Link>
      </div>
    </div>
  );
}
