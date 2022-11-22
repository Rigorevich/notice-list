import React from "react";
import { useAppDispatch } from "../store/hooks";
import { deleteNotice, redactNotice } from "../store/slices/noticeSlice";
import { Type } from "../@types/interfaces";

const Card = ({ notice }: { notice: Type }) => {
  const dispatch = useAppDispatch();
  const [isRedact, setIsRedact] = React.useState(false);
  const [textValue, setTextValue] = React.useState(notice.text);

  const onclick = () => {
    const sure = window.confirm("Are you sure?");
    if (sure) dispatch(deleteNotice(notice.id));
  };

  const saveChanging = () => {
    if (isRedact) {
      dispatch(redactNotice({ ...notice, text: textValue }));
    }
    setIsRedact(!isRedact);
  };

  return (
    <div className="notice__card">
      <div className="notice__info">
        <div className="notice__text">
          {isRedact ? (
            <textarea
              className="notice__text-redact"
              value={textValue}
              onChange={(e) => setTextValue(e.target.value)}
            ></textarea>
          ) : (
            notice.text
          )}
        </div>
      </div>
      <div className="notice__change-block">
        <button className="notice__editing" onClick={saveChanging}>
          {isRedact ? "Save" : "Editing"}
        </button>
        <button className="notice__deleting" onClick={onclick}>
          Deleting
        </button>
      </div>
    </div>
  );
};

export default Card;
