import { Footer, Nav } from "../../components";
import { HomeText } from "./components/HomeText";
import { Link } from 'react-router-dom';
import React from "react";
import { SummaryChart } from "../Dashboard/components";
import { data } from "../Dashboard/data";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const { t } = useTranslation();

  const title = t("homePage.title");

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
          {title.toUpperCase()}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <HomeText />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  height: "47vh",
                  backgroundColor: "#ffffff",
                  border: "3px solid #78A6F5",
                  display: "flex",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <Link to="/summary" style={{ color: "black", fontSize: "15px", fontWeight: "normal" }}>
                  <SummaryChart data={data} w={600} h={400} isSummaryPage={false} />
                </Link>
              </div>
              <div
                style={{
                  backgroundColor: "#ffffff",
                  height: "100%",
                  border: "3px solid #78A6F5",
                }}
              >
                <h1 style={{ fontSize: "19px", color: "#577ACB" }}>
                  Something Cool
                  <div style={{ fontSize: "12px", color: "black" }}>
                    Something else cool...... description of above graph? Some
                    kind of help?
                  </div>
                </h1>
              </div>
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
