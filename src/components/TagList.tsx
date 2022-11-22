import React from "react";
import Tag from "./Tag";
import { useAppSelector } from "../store/hooks";

const TagList = () => {
  const tags = useAppSelector((state) => state.tags.tags);
  return (
    <div className="notice__list">
      {tags.map((tag) => (
        <Tag key={tag} tag={tag} />
      ))}
    </div>
  );
};

export default TagList;
