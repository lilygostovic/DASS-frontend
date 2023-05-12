import {
  Bar,
  BarChart,
  CartesianGrid,
  Label,
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
  country: string;
  total: number;
  female: number;
  male: number;
  lgbtq: number;
  Accepted: number;
  Rejected: number;
  continent: string;
}

interface Gender {
  gender: string;
  total: number;
  Accepted: number;
  Rejected: number;
}

interface SummaryChartProps {
  data: Country[];
  genderData: Gender[];
  w: number
  h: number
  isSummaryPage: boolean
  axisOption?: string
  continentOption?: string
  checkedCountryOptions?: string[]
  countryNames?: string[];
}

export const SummaryChart = ({ data, genderData, w, h, isSummaryPage, axisOption, continentOption, checkedCountryOptions, countryNames }: SummaryChartProps) => {
  const { t } = useTranslation();

  let leftMargin;

  // The default displayed data is the fake country dataset
  // displayedData: Country[] | Gender[] ???
  // eslint-disable-next-line
  let displayedData: any[] = data;
  let ticks = data.length;

  // The y-axis label needs more space to be displayed if we are on summary
  if (isSummaryPage) { leftMargin = 38 };

  // Display the fake gender dataset if selected in the dropdown
  if (axisOption === "gender") {
    displayedData = genderData;
    ticks = displayedData.length;
  }

  // Display the fake country dataset if selected in the dropdown
  // and display only countries from the selected continent
  if (axisOption === "country" && continentOption !== "all") {
    displayedData = data.filter((c) => (c.continent === continentOption));
    ticks = displayedData.length;
  }

  // READ: The below dummy lines are a test to see if the chart correctly reacts to what you select in the checkbox.
  // It's the same code duplicated 3 times for each test entry.
  // When we have to generalize with real back-end data, it should be a matter of looping through
  // the list of checkbox options and doing the below code within that loop

  // *** DUMMY COUNTRY ENTRIES THAT ARE ADDED TO THE CHART FROM THE CHECKBOX *** //
  if ((checkedCountryOptions !== undefined) && (axisOption === "country")) {
    countryNames?.forEach((c) => {
      if (checkedCountryOptions.includes(c)) {
        const test: Country = {
          country: c,
          total: 4000,
          female: 2400,
          male: 1600,
          lgbtq: 3000,
          Accepted: 1500,
          Rejected: 2500,
          continent: "europe",
        };

        if (!displayedData.some((cou) => cou.country === c)) {
          displayedData.push(test);
          ticks = ticks + 1;
        }
      } else {
        displayedData = displayedData.filter((cou) => cou.country !== c);
        if (displayedData.length !== data.length) { ticks = ticks - 1; }
      }
    });
  }
  // *** DUMMY COUNTRY ENTRIES THAT ARE ADDED TO THE CHART FROM THE CHECKBOX *** //

  return (
    <BarChart
      width={w}
      height={h}
      data={displayedData}
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
      </defs>
      <Tooltip />
      <Bar
        type="monotone"
        dataKey={"Accepted"}
        stackId="1"
        stroke="green"
        fill="url(#colorAccepted)"
      />
      <Bar
        type="monotone"
        dataKey={"Rejected"}
        stackId="1"
        stroke="red"
        fill="url(#colorRejected)"
      />
      <CartesianGrid strokeDasharray="2 3" opacity={0.1} vertical={false} />
      {axisOption === "gender" && (
        <XAxis
        dataKey="gender"
        axisLine={true}
        tickLine={true}
        tickFormatter={(gender: string) =>
          t(`${gender}`)
        }
      />
      )}
      {((axisOption === "country") || (!isSummaryPage)) && (
        <XAxis
        dataKey="country"
        axisLine={true}
        tickLine={true}
        tickFormatter={(country: string) =>
          t(`countries.${country}.fullName`)
        }
      />
      )}
      <YAxis axisLine={true} tickLine={false} tickCount={ticks} >
      {isSummaryPage && (
        <Label
          value="Number of Cases"
          angle={-90}
          position="insideLeft"
          offset={-30}
          style={{ fontWeight: "bold", fontSize: "19px", fill: "black" }}
        />
      )}
      </YAxis>
      <Legend
        verticalAlign="top"
        formatter={(value, entry, index) =>
          i18n.language === "english" ? value : t(value)
        }
      />
    </BarChart>
  );
};
