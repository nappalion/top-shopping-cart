import styles from "./Icon.module.css";

function Icon({ imageUrl, Svg, altText, onClick, notificationCount }) {
  const showNotification =
    notificationCount !== null &&
    notificationCount !== undefined &&
    notificationCount > 0;

  return (
    <div className={styles.container}>
      {imageUrl ? (
        <img
          className={styles.icon}
          src={imageUrl}
          alt={altText}
          onClick={onClick}
        />
      ) : Svg ? (
        <Svg className={styles.icon} onClick={onClick} />
      ) : null}

      {showNotification && (
        <p className={styles.notification}>{notificationCount}</p>
      )}
    </div>
  );
}

export default Icon;
