import SearchIcon from "@src/assets/icons/search-line.svg";
import styles from "./SearchBar.module.css";
import { useRef } from "react";

function SearchBar({ test }) {
  const inputRef = useRef();
  const buttonRef = useRef();
  const handleIconClick = (e) => {
    e.key === "Enter" ? buttonRef.current.blur() : inputRef.current.focus();
  };
  return (
    <div className={styles.container}>
      {test}
      <div className={styles.searchBar}>
        <input
          ref={inputRef}
          type="text"
          className={styles.textInput}
          placeholder="Search"
        />
        <button
          ref={buttonRef}
          onKeyDown={handleIconClick}
          className={styles.searchButton}
        >
          <SearchIcon className={styles.icon} />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
