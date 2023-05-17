import {
  CheckBoxDropDown,
  ContinentDropDown,
  CountryCheckBox,
  DropDown,
  SummaryChart,
} from "./components";
import React, { useState } from "react";

import { Nav } from "../../components";
import { StyledDiv } from "../../components/common/StyledDiv";
import { StyledText } from "../../components/common/StyledText";
import { data } from "./data";
import { genderData } from "./testGenderData";
import { useTranslation } from "react-i18next";

export const Dashboard = () => {
  const [dropDownOption, setDropDown] = useState<string>("country");
  const [continentOption, setContinentOption] = useState<string>("all");
  const [checkedOptionsChart, setCheckedOptionsChart] = useState<string[]>([]);
  const [checkBoxDropDownOption, setCheckBoxDropDownOption] =
    useState<string>("all");

  const { t } = useTranslation();

  const text = t("dashboardPage.overviewStats");
  const boxText = t("dashboardPage.checkBox");
  const boxDropDownText = t("dashboardPage.boxDropDownText");

  let chartAreaWidth: string;
  let chartWidth: number;
  let boxItems: string[];

  if (checkBoxDropDownOption === "all") {
    // Can we make a back-end request so that boxItems is the list of all country names in the database?
    boxItems = ["test1", "test2", "test3", "testAsianCountry"];
  } else if (checkBoxDropDownOption === "asia") {
    // Similarly, a back-end request gets all Asian country names and so on...?
    boxItems = ["testAsianCountry"];
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
    <StyledDiv backgroundColor="#ECF2FF" maxHeight="100vh" minHeight="100vh">
      <Nav />
      <StyledDiv bg="#ffffff" display="flex" flexDirection="row">
        <StyledDiv
          display="flex"
          justifyContent="space-bewteen"
          flexDirection="column"
          width={chartAreaWidth}
          height="810px"
          alignItems="center"
          boxShadow="0px 5px 15px rgba(0, 0, 0, 0.35)"
          borderRadius="8px"
          margin="30px 30px"
          color="black"
        >
          <StyledText variant="paragraphMedium" fontSize="20px" mb="20px">
            {text}
          </StyledText>
          <SummaryChart
            data={data}
            genderData={genderData}
            w={chartWidth}
            h={590}
            isSummaryPage={true}
            axisOption={dropDownOption}
            continentOption={continentOption}
            checkedCountryOptions={checkedOptionsChart}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {dropDownOption !== "country" && (
              <DropDown
                selectedOption={dropDownOption}
                setOption={setDropDown}
              />
            )}

            {dropDownOption === "country" && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "15px",
                  boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.35)",
                  borderRadius: "8px",
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
        </StyledDiv>
        {dropDownOption === "country" && (
          <StyledDiv
            display="flex"
            flexDirection="column"
            boxShadow="0px 5px 15px rgba(0, 0, 0, 0.35)"
            borderRadius="8px"
            width="250px"
            margin="30px 30px"
          >
            <StyledDiv
              display="flex"
              bg="#3E54AC"
              mb="20px"
              borderRadius="8px 8px 0 0"
              height="80px"
              justifyContent="center"
              alignItems="center"
            >
              <StyledText variant="paragraphMediumBold" color="white">
                {boxText}
              </StyledText>
            </StyledDiv>
            <StyledDiv ml="15px" mb="5px">
              {boxDropDownText}
            </StyledDiv>
            <CheckBoxDropDown
              selectedOption={checkBoxDropDownOption}
              setOption={setCheckBoxDropDownOption}
            />
            <CountryCheckBox
              options={boxItems}
              setCheckedOptionsChart={setCheckedOptionsChart}
            />
          </StyledDiv>
        )}
      </StyledDiv>
    </StyledDiv>
  );
};
