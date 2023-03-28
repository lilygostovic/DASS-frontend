import { DropDown, SummaryChart } from "./components";
import { Footer, Nav } from "../../components";
import React, { useState } from "react";

import { FilterButton } from "../../components/Button";
import { data } from "./data";
import { useTranslation } from "react-i18next";

export const Dashboard = () => {
  const [filter, setFilter] = useState<"sex" | "lgbtq">("sex");
  const { t } = useTranslation();

  const text = t("dashboardPage.overviewStats");

  const viewSex = () => {
    setFilter("sex");
  };
  const viewLGBTQ = () => {
    setFilter("lgbtq");
  };

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
            backgroundColor: "#ffffff",
            width: "20%",
            height: "87vh",
            display: "flex",
            flexDirection: "column",
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.35)",
            borderRadius: "8px",
            margin: "20px 10px",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: "19px", color: "black" }}>Filter Options</h1>
          <hr style={{ width: "99%", height: "2px", backgroundColor: "black" }}/>
           <FilterButton
            onClick={viewSex}
            isSelected={filter === "sex"}
            text={t("dashboardPage.sex")}
            selectColor="red"
            deselectColor="#FF9595"
          />

          <FilterButton
            onClick={viewLGBTQ}
            isSelected={filter === "lgbtq"}
            text={t("dashboardPage.lgbtq")}
            selectColor="green"
            deselectColor="#95B992"
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.35)",
            borderRadius: "8px",
            margin: "20px 20px",
          }}
        >
          <h1 style={{ fontSize: "25px", color: "black", marginBottom: "20px" }}>{text}</h1>
          <SummaryChart data={data} filter={filter} w={1150} h={600} isSummaryPage={true} />
          <DropDown options={["Country", "Gender", "Motive"]} />
        </div>
      </div>
      <div style={{ alignItems: "flex-end" }}>
        <Footer />
      </div>
    </div>
  );
};
