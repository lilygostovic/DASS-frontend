import {
  Footer,
  Nav
} from '../../components';

import React from 'react';
import { useTranslation } from 'react-i18next';

export const Dashboard = () => {
  const { t } = useTranslation();

  const text = t("welcome");

  return (
    <div style ={{ backgroundColor: "#141C27", maxHeight: "100vh", minHeight: "100vh" }}>
      <Nav />
      <div style={{ height: "87vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ color: "white" }}>
          {text}
        </div>
      </div>
      <div style={{ alignItems: "flex-end" }} >
        <Footer />
      </div>
    </div>
  )
};
