import React from 'react';
import styled from 'styled-components';

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
}

export const FilterButton = ({ text, isSelected, onClick }: ButtonProps) => {
  const textColor = isSelected ? "white" : "grey";

  return (
    <button
        onClick={onClick}
        style={{
          color: `${textColor}`,
          backgroundColor: "transparent",
          border: "none",
          borderRadius: "8px",
          margin: "20px"
        }}>
            {text}
    </button>
  )
};
