import { useNavigate } from "react-router-dom";
import styles from "./ShopPage.module.css";
import ShopItem from "@src/components/ShopItem.jsx";

function ShopPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>MEN</h1>
      <div className={styles.itemContainer}>
        <ShopItem onClick={() => navigate("/shop-item")} />
      </div>
    </div>
  );
}

export default ShopPage;
