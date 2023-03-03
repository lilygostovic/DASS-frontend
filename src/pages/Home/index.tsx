import {
  Nav
} from '../../components';

import React from 'react';
import { useTranslation } from 'react-i18next';

export const Home = () => {
  const { t } = useTranslation();

  const text = t("Welcome to The Home of Asylum Seekers");

  return (
    <div style ={{
      backgroundColor: "#141C27",
      maxHeight: "100vh",
      minHeight: "100vh"
    }}>
    <Nav />
      <div style={{ color: "white", marginBottom: "20px", justifyContent: "center", alignItems: "center", height: "15vh", display: "flex", flexDirection: "column" }}>
        {text}
      </div>
    </div>)
}
