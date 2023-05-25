import { LanguagePicker } from "./LanguagePicker";
import { NavButton } from "./NavButton";
import React from "react";
import { StyledDiv } from "../common/StyledDiv";
import { useMatch } from "react-router-dom";
import { useTranslation } from "react-i18next";

const BackgroundColorDiv = () => (
  <StyledDiv
    width="100%"
    height="100%"
    position="absolute"
    bg="lightGrey"
    opacity={0.97}
  />
);

export const Nav = () => {
  const { t } = useTranslation();

  const homeText = t("nav.home");
  const chartsText = t("nav.summary");
  const casesText = t("nav.cases");

  const isHome = useMatch("/");
  const isSummary = useMatch("/summary");
  const isCases = useMatch("/cases");

  return (
    <>
      <StyledDiv
        position="fixed"
        width="100%"
        height="65px"
        display="flex"
        boxShadow="rgba(0, 0, 0, 0.15) 0px 5px 15px"
      >
        <BackgroundColorDiv />
        <StyledDiv
          zIndex={1}
          padding="20px"
          justifyContent="space-between"
          width="100%"
          display="flex"
          bg="#3E54AC"
        >
          <div>
            <NavButton to="/" className={isHome !== null ? "active" : ""}>
              {homeText}
            </NavButton>
            <NavButton
              to="/summary"
              className={isSummary !== null ? "active" : ""}
            >
              {chartsText}
            </NavButton>
            <NavButton to="/cases" className={isCases !== null ? "active" : ""}>
              {casesText}
            </NavButton>
          </div>
          <LanguagePicker />
        </StyledDiv>
      </StyledDiv>
      <StyledDiv height="65px" />
    </>
  );
};
