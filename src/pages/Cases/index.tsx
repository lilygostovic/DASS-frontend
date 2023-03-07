import { Footer, Nav } from "../../components";

import React from "react";
import { useTranslation } from "react-i18next";

export const Cases = () => {
  const { t } = useTranslation();
  const text = t("Placeholder: specific cases could be read here");

  return (
    <div
      style={{
        backgroundColor: "#ECF2FF",
        maxHeight: "100vh",
        minHeight: "100vh",
      }}
    >
      <Nav />
      <div
        style={{
          color: "black",
          marginBottom: "20px",
          justifyContent: "center",
          alignItems: "center",
          height: "85vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {text}
      </div>
      <div style={{ alignItems: "flex-end" }}>
        <Footer />
      </div>
    </div>
  );
};
