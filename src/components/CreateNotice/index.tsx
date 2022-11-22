import React from "react";
import { useAppDispatch } from "../../store/hooks";
import styles from "./CreateNotice.module.scss";
import { createNotice } from "../../store/slices/noticeSlice";
import { createTag } from "../../store/slices/tagsSlice";
import { findTag } from "../../utils/utils";

const CreateNotice: React.FC = () => {
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = React.useState("");

  const onclick = () => {
    if (inputValue.trim()) {
      dispatch(createNotice(inputValue));
      dispatch(createTag(findTag(inputValue)));
      setInputValue("");
    }
  };

  return (
    <form>
      <div className={styles.notice__form}>
        <label className={styles.notice__title}>Create notice</label>
        <div className={styles.notice__create}>
          <textarea
            className={styles.notice__text}
            placeholder="Write here your notice"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={onclick} className="notice__btn" type="button">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreateNotice;
