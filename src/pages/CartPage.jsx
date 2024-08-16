import CartItem from "@src/components/CartItem";
import testUrl from "@src/assets/images/test.jpg";
import styles from "./CartPage.module.css";
import { useState, useEffect } from "react";

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));

    fetch("https://fakestoreapi.com/carts/1")
      .then((res) => res.json())
      .then((json) => setCartItems(json.products));
  }, []);

  const getProduct = (id) => {
    return products.find((product) => product.id == id);
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.heading}>My Bag: 4 Items</h1>
        <div className={styles.leftContainer}>
          {cartItems.map((cartItem, index) => {
            const product = getProduct(cartItem.productId);
            console.log(cartItem.quantity);
            return (
              <CartItem
                key={index}
                itemName={product.title}
                price={product.price}
                quantity={cartItem.quantity}
                imageUrl={product.image}
              />
            );
          })}
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
