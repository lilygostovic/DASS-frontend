import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// test merge to master
import type { Country } from "../types";
import React from "react";
import i18n from "../../../i18n/config";
import { useTranslation } from "react-i18next";

interface SummaryChartProps {
  data: Country[];
  w: number
  h: number
  initialH?: number;
  isSummaryPage: boolean
  axisOption?: string
  continentOption?: string
  checkedCountryOptions?: string[]
  countryNames?: string[];
  countryEntries?: Country[];
  scrollToTop?: () => void;
}

export const SummaryChart = ({
  data,
  w,
  h,
  initialH,
  isSummaryPage,
  axisOption,
  continentOption,
  checkedCountryOptions,
  countryNames,
  countryEntries,
  scrollToTop,
}: SummaryChartProps) => {
  const { t } = useTranslation();

  let leftMargin;

  // The default displayed data is the fake country dataset
  // eslint-disable-next-line
  let displayedData = data;
  let ticks = data.length;
  let height = h;
  const deafultCountries = data.map((c) => c.name);
  const numberOfDataPointLimit = 15;
  const xTextSize = 15;
  const chartLayout = ((axisOption === "result") || (axisOption === "lgbt") || (axisOption === "gender") || !isSummaryPage) ? "vertical" : "horizontal";
  const emptyPageText1 = t("dashboardPage.emptyPage1");
  const emptyPageText2 = t("dashboardPage.emptyPage2");
  const unknownText = t("dashboardPage.unknown");
  const maleText = t("filterPage.gender.male");
  const femaleText = t("filterPage.gender.female");
  const accText = t("filterPage.accepted.accepted");
  const recText = t("filterPage.accepted.rejected");
  const lgbtText = t("summaryDropDown.options.lgbt");

  // The y-axis needs more space to be displayed if we are on summary
  if (isSummaryPage) {
    leftMargin = 65;
  } else {
    leftMargin = 25
  }

  // The below block is responsible for adding checked countries to the chart.
  // It loops through all country names in the database,
  // and every name that appears as "checked" is added to the currently displayed dataset
  if ((checkedCountryOptions !== undefined) &&
      (countryEntries !== undefined) &&
      ((axisOption === "result") ||
        (axisOption === "lgbt") ||
        (axisOption === "gender")) &&
      isSummaryPage) {
    countryNames?.forEach((c) => {
      // Check if the current country is checked in the box
      if (checkedCountryOptions.includes(c)) {
        const singleCountryDataPoint = countryEntries.find((x) => x.name === c);

        // Add country to the displayed dataset if not already there
        if (!displayedData.some((cou) => cou.name === c) && (singleCountryDataPoint !== undefined)) {
          displayedData = displayedData.concat(singleCountryDataPoint);
        }
        // Remove countries from the dataset that are not part of the default
      } else if (!deafultCountries.some((y) => y === c)) {
        displayedData = displayedData.filter((x) => (x.name !== c));
      }
    });
  }

  // Display only countries from the selected continent
  if (((axisOption === "result") ||
        (axisOption === "lgbt") ||
        (axisOption === "gender")) &&
        continentOption !== "all" && isSummaryPage) {
    if (continentOption === "Amerika") {
      displayedData = displayedData.filter((c) => (c.continent === "Nordamerika") || (c.continent === "Sydamerika"));
      ticks = displayedData.length;
    } else {
      displayedData = displayedData.filter((c) => (c.continent === continentOption));
      ticks = displayedData.length;
    }
  }

  if ((axisOption === "result") || (axisOption === "gender")) {
    // Sort displayed data according to number of cases
    displayedData = displayedData.sort((a, b) => (b.total - a.total));
  } else if (axisOption === "lgbt") {
    // Sort displayed data according to number of LGBTQ cases
    displayedData = displayedData.sort((a, b) => (b.lgbt - a.lgbt));
  }

  // If we are displaying few enough countries, we don't need to expand the chart height
  if ((displayedData.length < numberOfDataPointLimit) &&
  (initialH !== undefined) &&
  (scrollToTop !== undefined)) {
    height = initialH;
    scrollToTop();
  }

  // Display a message to the user if the chosen category has no selected countries
  if (displayedData.length === 0) {
    return (
      <div style={{
        height: initialH,
        width: w,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <div style={{ marginBottom: "30px" }}>{emptyPageText1}</div>
        <div>{emptyPageText2}</div>
      </div>
    )
  }

  return (
    <BarChart
      width={w}
      height={height}
      data={displayedData}
      layout={chartLayout}
      margin={{
        top: 10,
        right: 30,
        left: leftMargin,
        bottom: 0,
      }}
    >
      <defs>
        <linearGradient id="colorAccepted" x1="0" x2="0" y1="0" y2="1">
          <stop offset="5%" stopColor="green" stopOpacity={0.6} />
          <stop offset="75%" stopColor="green" stopOpacity={0.7} />
        </linearGradient>
        <linearGradient id="colorRejected" x1="0" x2="0" y1="0" y2="1">
          <stop offset="5%" stopColor="#F01406" stopOpacity={0.6} />
          <stop offset="75%" stopColor="#F01406" stopOpacity={0.7} />
        </linearGradient>
        <linearGradient id="colorLGBT" x1="0" x2="0" y1="0" y2="1">
          <stop offset="5%" stopColor="#0352F1" stopOpacity={0.6} />
          <stop offset="75%" stopColor="#0352F1" stopOpacity={0.7} />
        </linearGradient>
        <linearGradient id="colorFemale" x1="0" x2="0" y1="0" y2="1">
          <stop offset="5%" stopColor="#C429F5" stopOpacity={0.6} />
          <stop offset="75%" stopColor="#C429F5" stopOpacity={0.7} />
        </linearGradient>
        <linearGradient id="colorMale" x1="0" x2="0" y1="0" y2="1">
          <stop offset="5%" stopColor="#FB8D1E" stopOpacity={0.6} />
          <stop offset="75%" stopColor="#FB8D1E" stopOpacity={0.7} />
        </linearGradient>
        <linearGradient id="colorUnknown" x1="0" x2="0" y1="0" y2="1">
          <stop offset="5%" stopColor="#black" stopOpacity={0.2} />
          <stop offset="75%" stopColor="#black" stopOpacity={0.2} />
        </linearGradient>
      </defs>

      <Tooltip
        labelFormatter={(label: string) => t(`countries.${label}.fullName`)}
      />

      {((isSummaryPage && (axisOption === "result")) || !isSummaryPage) && (
        <>
          <Bar
            type="monotone"
            dataKey={"status.Accepted"}
            stackId="1"
            stroke="green"
            fill="url(#colorAccepted)"
            name={accText}
          />
          <Bar
            type="monotone"
            dataKey={"status.Rejected"}
            stackId="1"
            stroke="red"
            fill="url(#colorRejected)"
            name={recText}
          />
          <Bar
            type="monotone"
            dataKey={"status.Unknown"}
            stackId="1"
            stroke="black"
            fill="url(#colorUnknown)"
            strokeDasharray="5 5"
            name={unknownText}
          />
        </>
      )}

      {(isSummaryPage && (axisOption === "lgbt")) && (
        <Bar
          type="monotone"
          dataKey={"lgbt"}
          stackId="1"
          stroke="blue"
          fill="url(#colorLGBT)"
          name={lgbtText}
        />
      )}

      {(isSummaryPage && (axisOption === "gender")) && (
        <>
        <Bar
          type="monotone"
          dataKey={"gender.Male"}
          stackId="1"
          stroke="orange"
          fill="url(#colorMale)"
          name={maleText}
        />
        <Bar
          type="monotone"
          dataKey={"gender.Female"}
          stackId="1"
          stroke="purple"
          fill="url(#colorFemale)"
          name={femaleText}
        />
        <Bar
            type="monotone"
            dataKey={"gender.Unknown"}
            stackId="1"
            stroke="black"
            fill="url(#colorUnknown)"
            strokeDasharray="5 5"
            name={unknownText}
          />
      </>
      )}

      <CartesianGrid strokeDasharray="2 3" opacity={0.1} vertical={false} />

      {!isSummaryPage && (
        <XAxis
        type="number"
        axisLine={true}
        tickLine={true}
        />
      )}

      {!isSummaryPage && (
        <YAxis
        axisLine={true}
        tickLine={true}
        tickCount={ticks}
        type="category"
        dataKey="name"
        tickFormatter={(name: string) =>
          t(`countries.${name}.fullName`)
        }
        >
        </YAxis>
      )}

      {(((axisOption === "result") ||
          (axisOption === "lgbt") ||
          (axisOption === "gender")) &&
          isSummaryPage) && (
        <XAxis
        type="number"
        axisLine={true}
        tickLine={true}
        />
      )}

      {isSummaryPage &&
      ((axisOption === "result") ||
      (axisOption === "lgbt") ||
      (axisOption === "gender")) && (
        <YAxis
        axisLine={true}
        tickLine={true}
        tickCount={ticks}
        tick={{ fontSize: xTextSize }}
        type="category"
        dataKey="name"
        tickFormatter={(name: string) =>
          t(`countries.${name}.fullName`)
        }
        >
        </YAxis>
      )}

      <Legend
        verticalAlign="top"
        formatter={(value, entry, index) => {
          if (i18n.language === "en") {
            if (value === "status.Accepted") {
              return t("dashboardPage.result.A");
            } else if (value === "status.Rejected") {
              return t("dashboardPage.result.R");
            } else if (value === "lgbt") {
              return t("dashboardPage.lgbt")
            } else if (value === "gender.Male") {
              return t("filterPage.sex.male")
            } else if (value === "gender.Female") {
              return t("filterPage.sex.female")
            }
          }
          return t(value);
        }}
      />
    </BarChart>
  );
};
