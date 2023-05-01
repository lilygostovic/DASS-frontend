import React from "react";
import { StyledDiv } from "../../../components/common/StyledDiv";
import { StyledText } from "../../../components/common/StyledText";
import pic from "./test.png";

interface GuideBlockProps {
  title: string;
  text: string;
}

export const GuideBlock = ({ title, text }: GuideBlockProps) => {
  const t1 = "(Navigate to case summaries)";

  return (
    <StyledDiv
        display="flex"
        flexDirection="column"
        alignItems="center"
        mx="200px"
        py="40px"
    >
        <StyledText variant="headerBig">{title}</StyledText>
        <StyledText variant="paragraphMedium" textAlign="center">{text}</StyledText>
        <StyledDiv
            display="flex"
            flexDirection="column"
        >
            <StyledDiv margin="10px">
              <figure>
                <img src={pic} alt="hjhjh" width="800px" height="500px"></img>
                <figcaption style={{ fontWeight: "bold", textAlign: "center" }}>{t1}</figcaption>
              </figure>
            </StyledDiv>
            <StyledDiv margin="10px">
              <figure>
                <img src={pic} alt="hjhjh" width="800px" height="500px"></img>
                <figcaption style={{ fontWeight: "bold", textAlign: "center" }}>TBD</figcaption>
              </figure>
            </StyledDiv>
            <StyledDiv margin="10px">
              <figure>
                <img src={pic} alt="hjhjh" width="800px" height="500px"></img>
                <figcaption style={{ fontWeight: "bold", textAlign: "center" }}>TBD</figcaption>
              </figure>
            </StyledDiv>
        </StyledDiv>
    </StyledDiv>
  )
};
