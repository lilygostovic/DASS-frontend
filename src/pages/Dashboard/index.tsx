/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/comma-dangle */
import {
  CheckBoxDropDown,
  ContinentDropDown,
  CountryCheckBox,
  DropDown,
  SummaryChart,
} from "./components";
import React, { useRef, useState } from "react";

import type { Country } from "./types";
import { Nav } from "../../components";
import { countriesService } from "../../services";
import { useTranslation } from "react-i18next";

export const Dashboard = () => {
  const { getCountries } = countriesService;
  const [dropDownOption, setDropDown] = useState<string>("result");
  const [continentOption, setContinentOption] = useState<string>("all");
  const [checkedOptionsChart, setCheckedOptionsChart] = useState<string[]>([]);
  const [checkBoxDropDownOption, setCheckBoxDropDownOption] =
    useState<string>("all");

  const { t } = useTranslation();

  const text = t("dashboardPage.overviewStats");
  const boxDropDownText = t("dashboardPage.boxDropDownText");
  const initialChartHeight = 585;
  const [dynamicChartHeight, setChartHeight] =
    useState<number>(initialChartHeight);
  const chartDivRef = useRef<HTMLDivElement>(null);
  const [countries, defaultCountries] = getCountries();

  let chartWidth: number;
  let boxItems: string[] = [];
  let countryNames: string[] = [];
  let countryEntries: Country[] = [];
  let chartHeight;

  // CountryNames is for having a list of names to display on the checkbox
  countryNames = countries.map((c) => c.name).sort();

  // CountryEntries is for the chart having a list of country datapoints.
  // It's used in SummaryChart.tsx when we need to find the data for a single country to add
  countryEntries = countries.filter(
    (c1: Country) =>
      !defaultCountries.some(
        (c2: Country) => c2.name.toLowerCase() === c1.name.toLowerCase()
      )
  );

  // Displayed countries on the checkbox are sorted by continent
  if (checkBoxDropDownOption === "all") {
    const deafultFilteredCountryNames = countryNames.filter(
      (name) =>
        !defaultCountries.some(
          (c: Country) => c.name.toLowerCase() === name.toLowerCase()
        )
    );

    boxItems = deafultFilteredCountryNames;
  } else if (checkBoxDropDownOption === "asia") {
    const countriesAsia = countries.filter((c) => c.continent === "Asien");
    const countryNamesAsia = countriesAsia.map((c) => c.name).sort();
    const filteredCountryNamesAsia = countryNamesAsia.filter(
      (name) =>
        !defaultCountries.some(
          (c: Country) => c.name.toLowerCase() === name.toLowerCase()
        )
    );

    boxItems = filteredCountryNamesAsia;
  } else if (checkBoxDropDownOption === "america") {
    const countriesMurica = countries.filter(
      (c: Country) => c.continent === "Nordamerika" || c.continent === "Sydamerika"
    );
    const countryNamesMurica = countriesMurica.map((c) => c.name).sort();
    const filteredCountryNamesMurica = countryNamesMurica.filter(
      (name) =>
        !defaultCountries.some(
          (c: Country) => c.name.toLowerCase() === name.toLowerCase()
        )
    );

    boxItems = filteredCountryNamesMurica;
  } else if (checkBoxDropDownOption === "africa") {
    const countriesAfrica = countries.filter((c) => c.continent === "Afrika");
    const countryNamesAfrica = countriesAfrica.map((c) => c.name).sort();
    const filteredCountryNamesAfrica = countryNamesAfrica.filter(
      (name) =>
        !defaultCountries.some(
          (c: Country) => c.name.toLowerCase() === name.toLowerCase()
        )
    );

    boxItems = filteredCountryNamesAfrica;
  } else if (checkBoxDropDownOption === "europe") {
    const countriesEurope = countries.filter((c) => c.continent === "Europa");
    const countryNamesEurope = countriesEurope.map((c) => c.name).sort();
    const filteredCountryNamesEurope = countryNamesEurope.filter(
      (name) =>
        !defaultCountries.some(
          (c: Country) => c.name.toLowerCase() === name.toLowerCase()
        )
    );

    boxItems = filteredCountryNamesEurope;

    // Other has been selected
  } else {
    const countriesOther = countries.filter((c) => c.continent === "Other");
    const countryNamesOther = countriesOther.map((c) => c.name).sort();
    const filteredCountryNamesOther = countryNamesOther.filter(
      (name) =>
        !defaultCountries.some(
          (c: Country) => c.name.toLowerCase() === name.toLowerCase()
        )
    );

    boxItems = filteredCountryNamesOther;
  }

  // Resize the chart appropriately when viewing countries
  if (
    dropDownOption === "result" ||
    dropDownOption === "lgbt" ||
    dropDownOption === "gender"
  ) {
    chartWidth = 1100;
    chartHeight = dynamicChartHeight;
  } else {
    chartWidth = 1400;
    chartHeight = initialChartHeight;
  }

  // Function that scrolls the chart back to the top
  // if few enough countries are displayed
  const ScrollChartToTop = () => {
    if (chartDivRef.current !== null) {
      chartDivRef.current.scrollTop = 0;
    }
  };

  return (
    <div
      style={{
        backgroundColor: "white",
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
            height: "800px",
            alignItems: "center",
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            color: "black",
            fontSize: "20px",
          }}
        >
          <h1
            style={{ fontSize: "25px", color: "black", marginBottom: "20px" }}
          >
            {text}
          </h1>

          <div
            data-testid="summary-page"
            id="chartDiv"
            ref={chartDivRef}
            style={{
              height: "590px",
              overflowY: "scroll",
              border: "2px solid grey",
              borderRadius: "10px",
            }}
          >
            <SummaryChart
              data={defaultCountries}
              w={chartWidth}
              h={chartHeight}
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
            {dropDownOption !== "result" &&
              dropDownOption !== "lgbt" &&
              dropDownOption !== "gender" && (
                <DropDown
                  selectedOption={dropDownOption}
                  setOption={setDropDown}
                />
              )}
            {(dropDownOption === "result" ||
              dropDownOption === "lgbt" ||
              dropDownOption === "gender") && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "15px",
                  borderRadius: "8px",
                  border: "1px solid grey",
                  height: "110px",
                }}
              >
                <DropDown
                  selectedOption={dropDownOption}
                  setOption={setDropDown}
                />
                <ContinentDropDown
                  selectedOption={continentOption}
                  setOption={setContinentOption}
                />
              </div>
            )}
          </div>
        </div>
        {(dropDownOption === "result" ||
          dropDownOption === "lgbt" ||
          dropDownOption === "gender") && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              width: "300px",
              marginLeft: "40px",
            }}
            data-testid='checkbox'
          >
            <h1
              style={{
                fontWeight: "bold",
                fontSize: "20px",
                marginLeft: "15px",
              }}
            >
              {boxDropDownText}
            </h1>
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
    </div>
  );
};
