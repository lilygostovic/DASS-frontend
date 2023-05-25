import React from "react";
import { StyledDiv } from "src/components/common/StyledDiv";
import { StyledText } from "src/components/common/StyledText";

interface CaseBodyProps {
  text: string;
}
export const CaseBody = ({ text }: CaseBodyProps) => (
  <StyledDiv
    pt="20px"
    height="400px"
    overflow="auto"
    style={{ lineHeight: 1.25 }}
  >
    <StyledText variant="paragraphSmall">{text}</StyledText>
  </StyledDiv>
);
