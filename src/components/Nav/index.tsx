import { LanguagePicker } from './LanguagePicker';
import { NavButton } from './NavButton';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const Nav = () => {
  const { t } = useTranslation();

  const homeText = t("Home");
  const chartsText = t("Summary");
  const casesText = t("Cases");

  return (
    <div style={{
      position: "relative",
      width: "100%",
      height: "8vh",
      display: "flex",
      alignItems: "center"
    }}>
      <div style={{ backgroundColor: "#3E54AC", width: "100%", height: "100%", position: 'absolute', opacity: "1", zIndex: "0" }}/>
      <div style={{ zIndex: 1, padding: "20px", justifyContent: "space-between", width: "100%", display: "flex" }}>
        <div>
          <NavButton to="/">
            {homeText}
          </NavButton>
          <NavButton to="/summary">
            {chartsText}
          </NavButton>
          <NavButton to="/cases">
            {casesText}
          </NavButton>
        </div>
        <LanguagePicker />
      </div>
    </div>
  )
};
