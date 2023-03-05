import {
  Footer,
  Nav
} from '../../components';

import React from 'react';
import { useTranslation } from 'react-i18next';

export const Home = () => {
  const { t } = useTranslation();

  const text = t("Welcome to The Home of Asylum Seekers");

  return (
    <div style ={{
      backgroundColor: "#ECF2FF",
      maxHeight: "100vh",
      minHeight: "100vh"
    }}>
    <Nav />
      <div style={{ marginBottom: "20px", justifyContent: "center", alignItems: "center", height: "85vh", display: "flex", flexDirection: "column" }}>
        <div style={{ color: "black", height: "80vh", fontSize: "25px", fontWeight: "bold" }}>{text}</div>
      </div>
      <div style={{ alignItems: "flex-end" }} >
        <Footer />
      </div>
    </div>)
}
