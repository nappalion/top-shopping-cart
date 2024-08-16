import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./ShopPage.module.css";
import ShopItem from "@src/components/ShopItem.jsx";

function ShopPage() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    if (category == "men") {
      fetch("https://fakestoreapi.com/products/category/men%27s%20clothing")
        .then((res) => res.json())
        .then((json) => setItems(json));
    } else if (category == "women") {
      fetch("https://fakestoreapi.com/products/category/women%27s%20clothing")
        .then((res) => res.json())
        .then((json) => setItems(json));
    } else if (category == "accessories") {
      fetch("https://fakestoreapi.com/products/category/jewelery")
        .then((res) => res.json())
        .then((json) => setItems(json));
    }
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{category.toUpperCase()}</h1>
      <div className={styles.itemContainer}>
        {items &&
          items.map((item, index) => (
            <ShopItem
              key={index}
              name={item.title}
              price={item.price}
              imageUrl={item.image}
              onClick={() => navigate("/shop-item")}
            />
          ))}
      </div>
    </div>
  );
}

export default ShopPage;
