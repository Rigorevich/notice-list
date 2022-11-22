import React from "react";

interface Type {
  id: number;
  text: string;
  tag: string;
}

const Card = ({ notice }: { notice: Type }) => {
  return (
    <div className="notice__card">
      <div className="notice__id">Notice №{notice.id}</div>
      <div className="notice__text">{notice.text}</div>
    </div>
  );
};

export default Card;
