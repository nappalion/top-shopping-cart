import SearchIcon from "@src/assets/icons/search-line.svg";
import styles from "./SearchBar.module.css";
import { useRef, useState } from "react";

function SearchBar({ onSearch }) {
  const [inputValue, setInputValue] = useState("");

  const inputRef = useRef();
  const buttonRef = useRef();

  const handleSearch = () => {
    if (onSearch && inputValue !== "") {
      onSearch(inputValue);
    }
  };

  const handleIconKeyPress = (e) => {
    if (e.key === "Tab" || e.key === "Shift") return;

    if (e.key === "Enter") {
      handleSearch();
    } else {
      inputRef.current.focus();
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchBar}>
        <input
          ref={inputRef}
          type="text"
          className={styles.textInput}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          placeholder="Search"
        />
        <button
          ref={buttonRef}
          onKeyDown={handleIconKeyPress}
          onClick={handleSearch}
          className={styles.searchButton}
        >
          <SearchIcon className={styles.icon} />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
