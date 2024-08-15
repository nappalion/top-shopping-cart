import styles from "./CartItem.module.css";

function CartItem({
  imageUrl,
  itemName,
  quantity,
  price,
  onQuantityChange,
  onRemove,
}) {
  const handleQuantityChange = (e) => {
    onQuantityChange && onQuantityChange(e.target.value);
  };
  return (
    <div className={styles.container}>
      <img className={styles.img} src={imageUrl} />
      <div className={styles.rightContainer}>
        <h2 className={styles.itemName}>{itemName}</h2>
        <p className={styles.price}>${price}</p>
        <div className={styles.actionFooter}>
          <label htmlFor="quantity">QTY</label>
          <select
            className={styles.select}
            name="quantity"
            id="quantity"
            defaultValue={quantity}
            onChange={handleQuantityChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <button className={styles.button} onClick={onRemove}>
            REMOVE
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
