import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href="https://www.linkedin.com/in/muratcamurlu/" target="_blank">
        <FontAwesomeIcon className={styles.linkedin} icon={faLinkedin} />
      </Link>
      <Link href="https://github.com/MuratCamurlu" target="_blank">
        <FontAwesomeIcon className={styles.github} icon={faGithub} />
      </Link>
      <p>
        Made by <b>Murat Çamurlu</b>
      </p>
    </footer>
  );
};

export default Footer;
