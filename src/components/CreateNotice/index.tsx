import React from "react";
import styles from "./CreateNotice.module.scss";

const CreateNotice: React.FC = () => {
  return (
    <form>
      <div className={styles.notice__form}>
        <label className={styles.notice__title}>Create notice</label>
        <div className={styles.notice__create}>
          <textarea
            className={styles.notice__text}
            placeholder="This is an awesome comment box"
          />
          <button className="notice__btn" type="button">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreateNotice;
