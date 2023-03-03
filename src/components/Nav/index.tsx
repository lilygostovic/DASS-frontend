import { LanguagePicker } from './LanguagePicker';
import { NavButton } from './NavButton';
import React from 'react';
import { useMatch } from 'react-router-dom';

export const Nav = () => {
  const isHome = useMatch("/");
  const isCharts = useMatch("/charts");

  return (
    <div style={{
      position: "relative",
      width: "100%",
      height: "8vh",
      display: "flex",
      alignItems: "center"
    }}>
      <div style={{ backgroundColor: "#000000", width: "100%", height: "100%", position: 'absolute', opacity: "0.5", zIndex: "0" }}/>
      <div style={{ zIndex: 1, padding: "20px", justifyContent: "space-between", width: "100%", display: "flex" }}>
        <div>
          <NavButton
            // className={isHome?"active":""}
            to="/"
          >
            Home
          </NavButton>
          <NavButton
            // className={isCharts?"active":""}
            to="/charts"
          >
            Charts
          </NavButton>
        </div>
        <LanguagePicker />
      </div>
    </div>
  )
};
