import React from "react";
import styled from "styled-components";

const Container = styled.div`
  line-height: 1.25;
  padding-top: 20px;
  height: 400px;
  overflow: auto;
`;

interface CaseBodyProps {
  text: string;
}
export const CaseBody = ({ text }: CaseBodyProps) => (
  <Container>{text}</Container>
);
