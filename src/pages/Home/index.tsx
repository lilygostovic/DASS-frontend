import { Footer, Nav } from "../../components";
import React, { useState } from "react";
import { SummaryChart } from "../Dashboard/components";
import { data } from "../Dashboard/data";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const { t } = useTranslation();
  const [filter] = useState<"sex" | "lgbtq">("sex");

  const text = t("Welcome to The Home of Asylum Seekers");

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
          marginBottom: "20px",
          justifyContent: "space-bewteen",
          alignItems: "right",
          height: "85vh",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            color: "black",
            height: "80vh",
            fontSize: "25px",
            fontWeight: "bold",
            width: "100%",
            justifyContent: "center",
          }}
        >
          {text}
        </div>
        <div
          style={{
            color: "black",
            height: "50vh",
            backgroundColor: "#ffffff",
            border: "1px solid #3E54AC",
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <SummaryChart data={data} filter={filter} w={800} h={400} />
        </div>
      </div>
      <div style={{ alignItems: "flex-end" }}>
        <Footer />
      </div>
    </div>
  );
};
