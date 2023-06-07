import React from "react";
import { StyledDiv } from "../../../components/common/StyledDiv";
import { StyledText } from "../../../components/common/StyledText";

interface CaseBodyProps {
  text: string;
}
export const CaseBody = ({ text }: CaseBodyProps) => (
  <StyledDiv
    data-testid="case-render"
    pt="20px"
    height="400px"
    overflow="auto"
    style={{ lineHeight: 1.25 }}
  >
    <StyledText variant="paragraphSmall">{text}</StyledText>
  </StyledDiv>
);
