import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { deleteNotice, redactNotice } from "../store/slices/noticeSlice";
import { Type } from "../@types/interfaces";
import { createTag } from "../store/slices/tagsSlice";
import { findTag, splitText } from "../utils/utils";
import { text } from "stream/consumers";

const Card = ({ notice }: { notice: Type }) => {
  const dispatch = useAppDispatch();
  const { activeTag } = useAppSelector((state) => state.tags);
  const [isRedact, setIsRedact] = React.useState(false);
  const [textValue, setTextValue] = React.useState(notice.text);

  const onclick = () => {
    const sure = window.confirm("Are you sure?");
    if (sure) dispatch(deleteNotice(notice.id));
  };

  const saveChanging = () => {
    if (isRedact) {
      dispatch(
        redactNotice({
          ...notice,
          tag: findTag(textValue) as string[],
          text: textValue,
        })
      );
      dispatch(createTag(findTag(textValue) as string[]));
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
            splitText(notice.text).map((word, index) => {
              return (
                <div key={index}>
                  {word}
                  <span
                    className={notice.tag[index] === activeTag ? "active" : ""}
                  >
                    {notice.tag[index]}
                  </span>
                </div>
              );
            })
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
