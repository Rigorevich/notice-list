import React from "react";
import Card from "./Card";
import { useAppSelector } from "../store/hooks";

const CardList = () => {
  const { notices, searchByTag } = useAppSelector((state) => state.notices);
  return (
    <div className="notice__list">
      {(searchByTag !== ""
        ? notices.filter((notice) => notice.tag.includes(searchByTag))
        : notices
      ).map((notice) => (
        <Card key={notice.id} notice={notice} />
      ))}
    </div>
  );
};

export default CardList;
