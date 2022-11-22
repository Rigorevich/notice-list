import React from "react";
import { useAppDispatch } from "../store/hooks";
import { deleteNotice } from "../store/slices/noticeSlice";
import { Type } from "../@types/interfaces";

const Card = ({ notice }: { notice: Type }) => {
  const dispatch = useAppDispatch();

  const onclick = () => {
    const sure = window.confirm("Are you sure?");
    if (sure) dispatch(deleteNotice(notice.id));
  };
  return (
    <div className="notice__card">
      <div className="notice__info">
        <div className="notice__id">Notice №{notice.id}</div>
        <div className="notice__text">{notice.text}</div>
      </div>
      <div className="notice__change-block">
        <button className="notice__editing">Editing</button>
        <button className="notice__deleting" onClick={onclick}>
          Deleting
        </button>
      </div>
    </div>
  );
};

export default Card;
