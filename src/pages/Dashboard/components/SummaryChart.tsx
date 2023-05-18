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
import React from "react";
import i18n from "../../../i18n/config";
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
  let displayedData: any[] = data;
  let ticks = data.length;
  let height = h;
  const numberOfDataPointLimit = 15;
  const xTextSize = 15;
  const chartLayout = ((axisOption === "result") || (axisOption === "lgbt") || (axisOption === "gender") || !isSummaryPage) ? "vertical" : "horizontal";
  const emptyPageText1 = t("dashboardPage.emptyPage1");
  const emptyPageText2 = t("dashboardPage.emptyPage2");

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
      if (checkedCountryOptions.includes(c)) {
        const singleCountryDataPoint = countryEntries.find((x) => x.name === c);

        // eslint-disable-next-line
        if (!displayedData.some((cou) => cou.name === c) && (singleCountryDataPoint !== undefined)) {
          displayedData.push(singleCountryDataPoint);
        }
      } else {
        // NOTE: The below line is strange for multiple reasons
        // (1) If you name the parameter variable within the filter call, anything other than "c"
        // then the default countries are removed from the dataset.
        // (2) If you comment out this line then the first country of every continent list on the checkbox
        // will disappear once the option is unchecked again.
        // For example, if you check off Albania, and then uncheck it, it's gone?
        // However, keeping the below line makes the chart work :)
        // If this part of the code becomes a problem later we will have to discuss what to do about it
        displayedData = displayedData.filter((c) => (c.name !== c));
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
      </defs>
      <Tooltip/>

      {((isSummaryPage && (axisOption === "result")) || !isSummaryPage) && (
        <>
          <Bar
            type="monotone"
            dataKey={"status.Accepted"}
            stackId="1"
            stroke="green"
            fill="url(#colorAccepted)"
            name="Accepted"
          />
          <Bar
            type="monotone"
            dataKey={"status.Rejected"}
            stackId="1"
            stroke="red"
            fill="url(#colorRejected)"
            name="Rejected"
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
          name="LGBT"
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
          name="Males"
        />
        <Bar
          type="monotone"
          dataKey={"gender.Female"}
          stackId="1"
          stroke="purple"
          fill="url(#colorFemale)"
          name="Females"
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
