import React from "react";
import Card from "./Card";
import { useAppSelector } from "../store/hooks";

const CardList = () => {
  const notices = useAppSelector((state) => state.notices.notices);
  return (
    <div className="notice__list">
      {notices?.map((notice) => (
        <Card key={notice.id} notice={notice} />
      ))}
    </div>
  );
};

export default CardList;
