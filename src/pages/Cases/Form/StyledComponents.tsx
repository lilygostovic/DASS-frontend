import styled from "styled-components";

const FIELD_WIDTH = 200;
const FONT_SIZE = 12;

export const Select = styled.select`
  font-size: ${FONT_SIZE}px;
  width: ${FIELD_WIDTH + 10}px;
  border: none;
  margin: 4px 0px;
`;

export const Submit = styled.input`
  background-color: #6f6ad1;

  border: none;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  color: white;
  font-weight: bold;

  padding: 16px 32px;
  margin-bottom: 30px;
  cursor: pointer;
`;

export const Label = styled.label`
  font-size: ${FONT_SIZE + 2}px;
  font-weight: 700;
  margin-bottom: 4px;
`;

export const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 0px;
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 10px 40px 40px 40px;

  background-color: #ffffffa2;
  border-radius: 12px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
