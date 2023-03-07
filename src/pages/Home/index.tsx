import { Footer, Nav } from "../../components";
import React, { useState } from "react";
import { SummaryChart } from "../Dashboard/components";
import { data } from "../Dashboard/data";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const { t } = useTranslation();
  const [filter] = useState<"sex" | "lgbtq">("sex");

  const text = t("WELCOME TO THE HOME OF ASYLUM SEEKERS");

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
            color: "white",
            height: "3.5vh",
            fontSize: "25px",
            fontWeight: "bold",
            width: "100%",
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: "#577ACB",
          }}
        >
          {text}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
          <div
            style={{
              color: "blue",
              backgroundColor: "#ffffff",
              height: "84vh",
              width: "100%",
              border: "4px solid #78A6F5",
            }}
          >
            PlaceholderText
          </div>
          <div
            style={{
              height: "85vh",
              backgroundColor: "#ffffff",
              border: "4px solid #78A6F5",
              width: "50%",
              display: "flex",
              justifyContent: "flex-start",
              fontSize: "13px",
              fontWeight: "normal",
            }}
          >
            <SummaryChart data={data} filter={filter} w={600} h={400} />
          </div>
        </div>
      </div>
    </div>
      <div style={{ alignItems: "flex-end" }}>
        <Footer />
      </div>
    </div>
  );
};
