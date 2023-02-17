import React from 'react';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <div style ={{ height: "5vh", position: "relative" }}>
      <div style={{ backgroundColor: "#000000", width: "100%", height: "100%", position: 'absolute', opacity: "0.5", zIndex: 0 }}/>
      <div style={{ zIndex: 1, color: "white", padding: "12px" }}>
        {t("this is the footer!")}
      </div>
    </div>
  )
};
