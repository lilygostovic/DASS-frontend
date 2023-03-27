import React from "react";
import styled from "styled-components";

export const BaseButton = styled.button`
  color: white;
  background-color: transparent;
  border: none;
  border-radius: 8px;
`;

interface ButtonProps {
  text: string;
  isSelected: boolean;
  onClick: () => void;
  selectColor: string;
  deselectColor: string
}

export const FilterButton = (
  {
    text,
    isSelected,
    onClick,
    selectColor,
    deselectColor,
  }: ButtonProps) => {
  const textColor = isSelected ? "black" : "grey";
  const borderColor = isSelected ? ("3px solid " + `${selectColor}`) : "3px solid " + `${deselectColor}`;

  return (
    <button
      onClick={onClick}
      style={{
        color: `${textColor}`,
        backgroundColor: "transparent",
        border: `${borderColor}`,
        borderRadius: "8px",
        margin: "20px",
        fontWeight: "bold",
        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.35)",
        width: "90px",
        padding: "10px",
      }}
    >
      {text}
    </button>
  );
};
