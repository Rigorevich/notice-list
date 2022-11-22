import React from "react";
import styles from "./SearchNotice.module.scss";

const SearchNotice = () => {
  return (
    <div className={styles.search__notice}>
      <input
        className={styles.notice__input}
        type="text"
        placeholder="Write the tag..."
      />
      <button className="notice__btn">Search</button>
    </div>
  );
};

export default SearchNotice;
