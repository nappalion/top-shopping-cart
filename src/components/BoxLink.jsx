import { Link } from "react-router-dom";
import styles from "./BoxLink.module.css";

function BoxLink({ imageUrl, text }) {
  return (
    <Link className={styles.link} to="/">
      <div className={styles.container}>
        <img className={styles.img} src={imageUrl} />
        <p className={styles.text}>{text}</p>
      </div>
    </Link>
  );
}

export default BoxLink;
