import {
  CheckBoxDropDown,
  ContinentDropDown,
  CountryCheckBox,
  DropDown,
  SummaryChart,
} from "./components";

import { Footer, Nav } from "../../components";
import React, { useEffect, useState } from "react";

import { data } from "./data";
import { genderData } from "./testGenderData";
import { useTranslation } from "react-i18next";

interface Country {
  id: number,
  name: string,
  lastModified: Date,
}

export const Dashboard = () => {
  const [dropDownOption, setDropDown] = useState<string>("country");
  const [continentOption, setContinentOption] = useState<string>("all");
  const [checkedOptionsChart, setCheckedOptionsChart] = useState<string[]>([]);
  const [checkBoxDropDownOption, setCheckBoxDropDownOption] = useState<string>("all");

  const [countries, setCountries] = useState<Country[]>([]);

  const { t } = useTranslation();

  const text = t("dashboardPage.overviewStats");
  const boxText = t("dashboardPage.checkBox");
  const boxDropDownText = t("dashboardPage.boxDropDownText")

  let chartAreaWidth: string;
  let chartWidth: number;
  let boxItems: string[];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/countries");
        const data = await response.json();

        setCountries(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const countryNames: string[] = countries.map((c) => c.name)

  if (checkBoxDropDownOption === "all") {
    boxItems = ["test1", "test2", "test3", ...countryNames];
  } else if (checkBoxDropDownOption === "asia") {
    // Similarly, a back-end request gets all Asian country names and so on...?
    boxItems = ["testAsianCountry"]
  } else {
    boxItems = [];
  }

  // Resize the chart appropriately when x-axis is set to country
  if (dropDownOption === "country") {
    chartAreaWidth = "1200px";
    chartWidth = 1100;
  } else {
    chartAreaWidth = "100%";
    chartWidth = 1400;
  }

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
            width: chartAreaWidth,
            height: "810px",
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
          w={chartWidth} h={590}
          isSummaryPage={true}
          axisOption={dropDownOption}
          continentOption={continentOption}
          checkedCountryOptions={checkedOptionsChart}
          />

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
                marginTop: "15px",
                boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.35)",
                borderRadius: "8px",
                height: "110px",
              }}>
                <DropDown selectedOption={dropDownOption} setOption={setDropDown} />
                <ContinentDropDown selectedOption={continentOption} setOption={setContinentOption} />
              </div>
            )}
          </div>
        </div>
        {dropDownOption === "country" && (
          <div style={{
            display: "flex",
            flexDirection: "column",
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.35)",
            borderRadius: "8px",
            width: "250px",
            margin: "30px 30px",
          }}>
            <div style={{
              display: "flex",
              fontWeight: "bold",
              fontSize: "19px",
              backgroundColor: "#3E54AC",
              color: "white",
              marginBottom: "20px",
              borderRadius: "8px 8px 0 0",
              height: "80px",
              justifyContent: "center",
              alignItems: "center",
            }}>
              {boxText}
            </div>
            <div style={{
              fontWeight: "bold",
              fontSize: "18px",
              marginLeft: "15px",
              marginBottom: "5px",
            }}>
              {boxDropDownText}
            </div>
            <CheckBoxDropDown
              selectedOption={checkBoxDropDownOption}
              setOption={setCheckBoxDropDownOption}
            />
            <CountryCheckBox
              options={boxItems}
              setCheckedOptionsChart={setCheckedOptionsChart}
            />
          </div>
        )}
      </div>
      <div style={{ alignItems: "flex-end" }}>
        <Footer />
      </div>
    </div>
  );
};
