import heroUrl from "@src/assets/images/hero-image.png";
import menUrl from "@src/assets/images/men-link.jpg";
import womenUrl from "@src/assets/images/women-link.jpg";
import accessoriesUrl from "@src/assets/images/accessories-link.jpg";
import BoxLink from "@src/components/BoxLink.jsx";
import styles from "./HomePage.module.css";
function HomePage() {
  return (
    <div className={styles.container}>
      <img className={styles.hero} src={heroUrl} />
      <div className={styles.boxLinkContainer}>
        <BoxLink imageUrl={menUrl} text="MEN" />
        <BoxLink imageUrl={accessoriesUrl} text="ACCESSORIES" />
        <BoxLink imageUrl={womenUrl} text="WOMEN" />
      </div>
    </div>
  );
}

export default HomePage;
