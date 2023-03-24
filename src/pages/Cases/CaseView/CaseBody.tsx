import React from "react";
import styled from "styled-components";

const Container = styled.div`
  line-height: 1.5;
  padding: 20px 0px;
`;

interface CaseBodyProps {
  text: string;
}
export const CaseBody = ({ text }: CaseBodyProps) => (
  <Container>{text}</Container>
);
