import React from "react";
import { StyledDiv } from "../../../components/common/StyledDiv";
import { StyledText } from "../../../components/common/StyledText";

interface HomeTextBlockProps {
  title: string;
  text: string;
}

export const HomeTextBlock = ({ title, text }: HomeTextBlockProps) => (
  <StyledDiv
    display="flex"
    flexDirection="column"
    alignItems="center"
    mx="200px"
    py="40px"
  >
    <StyledText variant="headerBig">{title}</StyledText>
    <StyledText variant="paragraphMedium" textAlign="center">
      {text}
    </StyledText>
  </StyledDiv>
);
