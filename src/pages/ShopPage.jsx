import styles from "./ShopPage.module.css";
import ShopItem from "@src/components/ShopItem.jsx";

function ShopPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>MEN</h1>
      <div className={styles.itemContainer}>
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
      </div>
    </div>
  );
}

export default ShopPage;
