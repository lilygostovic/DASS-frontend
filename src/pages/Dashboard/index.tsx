import { ContinentDropDown, DropDown, SummaryChart } from "./components";
import { Footer, Nav } from "../../components";
import React, { useState } from "react";

import { data } from "./data";
import { genderData } from "./testGenderData";
import { useTranslation } from "react-i18next";

export const Dashboard = () => {
  const [dropDownOption, setDropDown] = useState<string>("country");
  const [continentOption, setContinentOption] = useState<string>("all");

  const { t } = useTranslation();

  const text = t("dashboardPage.overviewStats");

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
          backgroundColor: "#ffffff",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-bewteen",
            flexDirection: "column",
            width: "100%",
            height: "830px",
            alignItems: "center",
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.35)",
            borderRadius: "8px",
            margin: "30px 30px",
            color: "black",
            fontSize: "20px",
          }}
        >
          <h1 style={{ fontSize: "25px", color: "black", marginBottom: "20px" }}>{text}</h1>

          <SummaryChart
          data={data}
          genderData={genderData}
          w={1400} h={590}
          isSummaryPage={true}
          axisOption={dropDownOption}
          continentOption={continentOption} />

          <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          >
            {dropDownOption !== "country" && (
              <DropDown selectedOption={dropDownOption} setOption={setDropDown} />
            )}

            {dropDownOption === "country" && (
              <div style={{
                display: "flex",
                flexDirection: "column",
                // marginLeft: "240px",
                marginTop: "15px",
                boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.35)",
                borderRadius: "8px",
                height: "140px",
              }}>
                <DropDown selectedOption={dropDownOption} setOption={setDropDown} />
                <ContinentDropDown selectedOption={continentOption} setOption={setContinentOption} />
              </div>
            )}
          </div>
        </div>
      </div>
      <div style={{ alignItems: "flex-end" }}>
        <Footer />
      </div>
    </div>
  );
};
