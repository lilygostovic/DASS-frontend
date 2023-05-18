import {
  CheckBoxDropDown,
  ContinentDropDown,
  CountryCheckBox,
  DropDown,
  SummaryChart,
} from "./components";

import { Footer, Nav } from "../../components";
import React, { useEffect, useRef, useState } from 'react';

import { data } from "./data";
import { useTranslation } from "react-i18next";

interface Country {
  id: number;
  name: string;
  continent: string;
  last_modified: string;
  total: number;
  lgbt: number;
  status: {
    Accepted: number;
    Rejected: number;
    Unknown: number;
  };
  gender: {
    Male: number;
    Female: number;
    Other: number;
    Unknown: number;
  };
}

export const Dashboard = () => {
  const [dropDownOption, setDropDown] = useState<string>("result");
  const [continentOption, setContinentOption] = useState<string>("all");
  const [checkedOptionsChart, setCheckedOptionsChart] = useState<string[]>([]);
  const [checkBoxDropDownOption, setCheckBoxDropDownOption] = useState<string>("all");
  const [countries, setCountries] = useState<Country[]>([]);

  const { t } = useTranslation();

  const text = t("dashboardPage.overviewStats");
  const boxText = t("dashboardPage.checkBox");
  const boxDropDownText = t("dashboardPage.boxDropDownText")
  const initialChartHeight = 590;
  const [dynamicChartHeight, setChartHeight] = useState<number>(initialChartHeight);
  const scrollDivRef = useRef<HTMLDivElement>(null);

  let chartAreaWidth: string;
  let chartWidth: number;
  let boxItems: string[] = [];
  let countryNames: string[] = [];
  let countryEntries: Country[] = [];
  let chartHeight;

  // HTTP request that gets a list of all country entries from the database
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/countries");
        const data = await response.json();

        setCountries(data);
      } catch (error) {
        // eslint-disable-next-line
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // CountryNames is for having a list of names to display on checkbox
  countryNames = countries.map((c) => c.name).sort();

  // CountryEntries is for the chart having a list of country datapoints.
  // It's used in SummaryChart.tsx when we need to find the data for a single country to add
  countryEntries = countries.filter((c1) => !data.some((c2) => c2.name.toLowerCase() === c1.name.toLowerCase()));

  // Displayed countries on the checkbox are sorted by continent
  if (checkBoxDropDownOption === "all") {
    const deafultFilteredCountryNames = countryNames.filter((name) =>
      !data.some((c) => c.name.toLowerCase() === name.toLowerCase()));

    boxItems = deafultFilteredCountryNames;
  } else if (checkBoxDropDownOption === "asia") {
    const countriesAsia = countries.filter((c) => c.continent === "Asien");
    const countryNamesAsia = countriesAsia.map((c) => c.name).sort();
    const filteredCountryNamesAsia = countryNamesAsia.filter((name) =>
      !data.some((c) => c.name.toLowerCase() === name.toLowerCase()));

    boxItems = filteredCountryNamesAsia;
  } else if (checkBoxDropDownOption === "america") {
    const countriesMurica = countries.filter((c) => (c.continent === "Nordamerika") || (c.continent === "Sydamerika"));
    const countryNamesMurica = countriesMurica.map((c) => c.name).sort();
    const filteredCountryNamesMurica = countryNamesMurica.filter((name) =>
      !data.some((c) => c.name.toLowerCase() === name.toLowerCase()));

    boxItems = filteredCountryNamesMurica;
  } else if (checkBoxDropDownOption === "africa") {
    const countriesAfrica = countries.filter((c) => c.continent === "Afrika");
    const countryNamesAfrica = countriesAfrica.map((c) => c.name).sort();
    const filteredCountryNamesAfrica = countryNamesAfrica.filter((name) =>
      !data.some((c) => c.name.toLowerCase() === name.toLowerCase()));

    boxItems = filteredCountryNamesAfrica;
  } else if (checkBoxDropDownOption === "europe") {
    const countriesEurope = countries.filter((c) => c.continent === "Europa");
    const countryNamesEurope = countriesEurope.map((c) => c.name).sort();
    const filteredCountryNamesEurope = countryNamesEurope.filter((name) =>
      !data.some((c) => c.name.toLowerCase() === name.toLowerCase()));

    boxItems = filteredCountryNamesEurope;

  // Other has been selected
  } else {
    const countriesOther = countries.filter((c) => c.continent === "Other");
    const countryNamesOther = countriesOther.map((c) => c.name).sort();
    const filteredCountryNamesOther = countryNamesOther.filter((name) =>
      !data.some((c) => c.name.toLowerCase() === name.toLowerCase()));

    boxItems = filteredCountryNamesOther
  }

  // Resize the chart appropriately when viewing countries
  if ((dropDownOption === "result") ||
      (dropDownOption === "lgbt") ||
      (dropDownOption === "gender")) {
    chartAreaWidth = "1200px";
    chartWidth = 1100;
    chartHeight = dynamicChartHeight;
  } else {
    chartAreaWidth = "100%";
    chartWidth = 1400;
    chartHeight = initialChartHeight;
  }

  // Function that scrolls the chart back to the top
  // if few enough countries are displayed
  const ScrollChartToTop = () => {
    if (scrollDivRef.current !== null) {
      scrollDivRef.current.scrollTop = 0;
    }
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
            display: "flex",
            justifyContent: "space-bewteen",
            flexDirection: "column",
            width: chartAreaWidth,
            height: "810px",
            alignItems: "center",
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.35)",
            borderRadius: "8px",
            marginLeft: "30px",
            marginTop: "30px",
            marginBottom: "30px",
            color: "black",
            fontSize: "20px",
          }}
        >
          <h1 style={{ fontSize: "25px", color: "black", marginBottom: "20px" }}>{text}</h1>

          <div id="scrollDiv" ref={scrollDivRef} style={{
            height: "600px",
            overflowY: "scroll",
            border: "2px solid grey",
            borderRadius: "10px",
          }}>
            <SummaryChart
            data={data}
            w={chartWidth} h={chartHeight}
            isSummaryPage={true}
            axisOption={dropDownOption}
            continentOption={continentOption}
            checkedCountryOptions={checkedOptionsChart}
            countryNames={countryNames}
            countryEntries={countryEntries}
            initialH={initialChartHeight}
            scrollToTop={ScrollChartToTop}
            />
          </div>

          <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          >
            {((dropDownOption !== "result") &&
              (dropDownOption !== "lgbt") &&
              (dropDownOption !== "gender")) && (
              <DropDown selectedOption={dropDownOption} setOption={setDropDown} />
            )}

            {((dropDownOption === "result") ||
              (dropDownOption === "lgbt") ||
              (dropDownOption === "gender")) && (
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
        {((dropDownOption === "result") ||
          (dropDownOption === "lgbt") ||
          (dropDownOption === "gender")) && (
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
              setHeight={setChartHeight}
              initialChartHeight={initialChartHeight}
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
