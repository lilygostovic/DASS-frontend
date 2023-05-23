import React from "react";
import { StyledDiv } from "../../../components/common/StyledDiv";
import { StyledText } from "../../../components/common/StyledText";

interface HomeTextBlockProps {
  title: string;
  text: string;
  links?: string[]
}

export const HomeTextBlock = ({ title, text, links }: HomeTextBlockProps) => {
  if (links !== undefined) {
    // Render block with link
    const [l1] = links;

    return (
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
      <a style={{
        fontSize: "20px",
        fontWeight: "bold",
      }} href={l1}>{l1}</a>
    </StyledDiv>
    )
  } else {
    // Render block without link
    return (
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
    )
  }
};
