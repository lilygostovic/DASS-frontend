import React from "react";
import { StyledDiv } from "../../../components/common/StyledDiv";
import { StyledText } from "../../../components/common/StyledText";

interface linkPage {
  link: string;
  name: string;
}

interface HomeTextBlockProps {
  title: string;
  text: string;
  links?: linkPage[];
}

export const HomeTextBlock = ({ title, text, links }: HomeTextBlockProps) => (
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
    {links?.map((lp) => (
      <div key={lp.name}>
        <a style={{ fontSize: "20px" }} href={lp.link}>{lp.name}</a>
      </div>
    ))}
  </StyledDiv>
);
