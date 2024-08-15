import testUrl from "@src/assets/images/test.jpg";
import styles from "./ShopItem.module.css";
import { useState } from "react";

function ShopItem({ name, price, onClick, onQuickShop }) {
  const [isOverlay, setIsOverlay] = useState(false);

  return (
    <div
      onClick={() => {
        onClick && onClick();
      }}
      data-testid="container"
    >
      <div
        data-testid="inner-container"
        className={styles.container}
        onMouseEnter={() => {
          setIsOverlay(true);
        }}
        onMouseLeave={() => {
          setIsOverlay(false);
        }}
      >
        <img className={styles.img} src={testUrl} />

        {isOverlay && (
          <>
            <div className={styles.overlay}></div>
            <button
              className={styles.button}
              onClick={(e) => {
                e.stopPropagation();
                onQuickShop && onQuickShop();
              }}
            >
              QUICKSHOP
            </button>
          </>
        )}
      </div>
      <p className={styles.text}>{name}</p>
      <p className={styles.text}>{price}</p>
    </div>
  );
}

export default ShopItem;
