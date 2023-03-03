import { LanguagePicker } from './LanguagePicker';
import { NavButton } from './NavButton';
import React from 'react';
import { useMatch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Nav = () => {
  const isHome = useMatch("/");
  const isCharts = useMatch("/charts");

  const { t } = useTranslation();

  const homeText = t("Home");
  const chartsText = t("Charts");

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
          <NavButton
            // className={isHome?"active":""}
            to="/"
          >
            {homeText}
          </NavButton>
          <NavButton
            // className={isCharts?"active":""}
            to="/charts"
          >
            {chartsText}
          </NavButton>
        </div>
        <LanguagePicker />
      </div>
    </div>
  )
};

// stage changes
// commit message
// click commit
// click sync

// git checkout existing branch
// git checkout -b "new-branch"
