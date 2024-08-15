import CartItem from "@src/components/CartItem";
import testUrl from "@src/assets/images/test.jpg";
import styles from "./CartPage.module.css";

function CartPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.heading}>My Bag: 4 Items</h1>
        <div className={styles.leftContainer}>
          <CartItem imageUrl={testUrl} />
          <CartItem imageUrl={testUrl} />
          <CartItem imageUrl={testUrl} />
        </div>
        <div className={styles.rightContainer}>
          <h1 className={styles.heading}>Order Summary</h1>
          <p>Estimated Shipping</p>
          <p>Estimated Sales Tax</p>
          <p>Total</p>
          <div className={styles.overlay}>
            <p className={styles.overlayTotal}>Estimated Total</p>
            <button className={styles.button}>CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
