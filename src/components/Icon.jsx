function Icon({ imageUrl, altText, onClick }) {
  return <img src={imageUrl} altText={altText} onClick={onClick} />;
}

export default Icon;
