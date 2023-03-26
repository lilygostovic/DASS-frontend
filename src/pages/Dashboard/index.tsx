import { DropDown, SummaryChart } from "./components";
import { Footer, Nav } from "../../components";
import React, { useState } from "react";

import { FilterButton } from "../../components/Button";
import { data } from "./data";
import { useTranslation } from "react-i18next";

export const Dashboard = () => {
  const [filter, setFilter] = useState<"sex" | "lgbtq">("sex");
  const { t } = useTranslation();

  const text = t("dashBoard.overviewStats");

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
            border: "3px solid #78A6F5",
          }}
        >
          <h1 style={{ fontSize: "19px", color: "#577ACB" }}>Filter Options</h1>
           <FilterButton
            onClick={viewSex}
            isSelected={filter === "sex"}
            text={t("dashBoard.sex")}
            selectColor="red"
            deselectColor="#FF9595"
          />

          <FilterButton
            onClick={viewLGBTQ}
            isSelected={filter === "lgbtq"}
            text={t("dashBoard.lgbtq")}
            selectColor="green"
            deselectColor="#95B992"
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            border: "3px solid #78A6F5",
            width: "100%",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: "19px", color: "#577ACB", marginBottom: "20px" }}>{text}</h1>
          <SummaryChart data={data} filter={filter} w={1200} h={600} isSummaryPage={true} />
          <DropDown options={["Gender", "Country", "Motive"]} />
        </div>
      </div>
      <div style={{ alignItems: "flex-end" }}>
        <Footer />
      </div>
    </div>
  );
};
