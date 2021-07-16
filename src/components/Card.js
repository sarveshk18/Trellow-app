import React from "react";
import "../styles/card.css";

const onDragStarts = (e, id) => {
  e.dataTransfer.setData("id", id);
};

export function Card({ id, name }) {
  return (
    <div
      className="cardContainer"
      draggable
      onDragStart={(e) => {
        onDragStarts(e, id);
      }}
    >
      <div>{name}</div>
    </div>
  );
}
