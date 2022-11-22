import React from "react";
import styles from "./SearchNotice.module.scss";
import { useAppDispatch } from "../../store/hooks";
import { setSearchByTag } from "../../store/slices/noticeSlice";

const SearchNotice = () => {
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = React.useState("");

  const onSearchBtn = () => {
    dispatch(setSearchByTag(searchValue));
  };

  return (
    <div className={styles.search__notice}>
      <input
        className={styles.notice__input}
        type="text"
        placeholder="Search notices by tag..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button className="notice__btn" onClick={onSearchBtn}>
        Search
      </button>
    </div>
  );
};

export default SearchNotice;
