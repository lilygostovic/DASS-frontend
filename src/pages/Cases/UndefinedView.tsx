import React from "react";
import { StyledDiv } from "../../components/common/StyledDiv";
import { StyledText } from "../../components/common/StyledText";
import { readBook } from "../../images";
import { useTranslation } from "react-i18next";

export const UndefinedView = () => {
  const { t } = useTranslation();

  const title = t("filterPage.undefinedView.title");
  const subtitle = t("filterPage.undefinedView.subtitle");

  return (
    <StyledDiv width="100%" alignSelf="center">
      <StyledDiv height="200px" width="200px" margin="auto">
        <img src={readBook} height="200px" />
      </StyledDiv>
      <div
        style={{
          marginBottom: "12px",
          textAlign: "center",
        }}
      >
        <StyledText variant="paragraphMediumBold" mb="32px">
          {title}
        </StyledText>
      </div>
      <div
        style={{
          alignContent: "center",
          textAlign: "center",
          width: "350px",
          margin: "auto",
        }}
      >
        <StyledText variant="paragraphSmall" color="darkGrey">
          {subtitle}
        </StyledText>
      </div>
    </StyledDiv>
  );
};
