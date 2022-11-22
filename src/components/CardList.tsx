import React from "react";
import Card from "./Card";

interface Type {
  id: number;
  text: string;
  tag: string;
}

const CardList = () => {
  const data: Type[] = [
    {
      id: 1,
      text: "Notice #1",
      tag: "#1",
    },
    {
      id: 2,
      text: "Notice #2",
      tag: "#2",
    },
    {
      id: 3,
      text: "Notice #3",
      tag: "#3",
    },
    {
      id: 4,
      text: "Notice #4",
      tag: "#4",
    },
    {
      id: 5,
      text: "Notice #5",
      tag: "#5",
    },
    {
      id: 6,
      text: "Notice #6",
      tag: "#6",
    },
  ];
  return (
    <div className="notice__list">
      {data.map((notice) => (
        <Card key={notice.id} notice={notice} />
      ))}
    </div>
  );
};

export default CardList;
