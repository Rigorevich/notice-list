import React from "react";
import { useAppDispatch } from "../store/hooks";
import { deleteTag, setActiveTag } from "../store/slices/tagsSlice";

const Tag = ({ tag }: { tag: string }) => {
  const dispatch = useAppDispatch();

  const deletingTag = () => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteTag(tag));
    }
  };

  return (
    <div
      className="notice__card"
      onMouseEnter={() => dispatch(setActiveTag(tag))}
      onMouseLeave={() => dispatch(setActiveTag(""))}
    >
      <div className="notice__info">
        <div className="notice__text">{tag}</div>
      </div>
      <div className="notice__change-block">
        <button className="notice__deleting" onClick={deletingTag}>
          Deleting
        </button>
      </div>
    </div>
  );
};

export default Tag;
