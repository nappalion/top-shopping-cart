import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

function NavBar({ logo, links, components }) {
  return (
    <div className={styles.container}>
      <Link to="/">
        <img className={styles.logo} src={logo} />
      </Link>
      <div className={styles.rightContainer}>
        {links &&
          links.map((link, index) => (
            <Link key={index} className={styles.link} to={link.path}>
              {link.text}
            </Link>
          ))}
        <div className={styles.iconContainer}>
          {components &&
            components.map((component, index) => (
              <div key={index}>{component}</div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
