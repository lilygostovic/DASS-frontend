import React from "react";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <div style={{ height: "5vh", position: "relative" }}>
      <div
        style={{
          backgroundColor: "#919591",
          width: "100%",
          height: "100%",
          position: "absolute",
          opacity: "1",
          zIndex: 0,
        }}
      />
      <div
        style={{
          zIndex: 1,
          color: "white",
          padding: "12px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {t("footer.text")}
      </div>
    </div>
  );
};
