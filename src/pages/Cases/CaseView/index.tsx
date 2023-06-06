import { CaseHighlights, type CaseHighlightsProps } from "./CaseHighlights";

import { CaseBody } from "./CaseBody";
import React from "react";
import { StyledDiv } from "../../../components/common/StyledDiv";
import { StyledText } from "../../../components/common/StyledText";
import { useTranslation } from "react-i18next";

export const CaseView = ({ randomCase }: CaseHighlightsProps) => {
  const { t } = useTranslation();
  const title = `${t("filterPage.caseViewTitle")}${randomCase.id}`;

  return (
    <StyledDiv
      data-testid="case-view"
      width="70%"
      height="75%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p="10px 80px 40px 80px"
      bg="#ffffffa2"
      borderRadius="12px"
      boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
    >
      <StyledText variant="headerBig" color="#4e3dcb" mt="12px" mb="12px">
        {title}
      </StyledText>
      <CaseHighlights randomCase={randomCase} />
      <CaseBody text={randomCase.body} />
    </StyledDiv>
  );
};
