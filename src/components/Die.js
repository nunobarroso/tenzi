import React from "react";
import { DieFace } from "./styles/DieFace.styled";

export default function Die({ value, isHeld, holdDice }) {
  return (
    <DieFace isHeld={isHeld} onClick={holdDice}>
      <h2>{value}</h2>
    </DieFace>
  );
}
