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
  id: number;
  name: string;
  continent: string;
  last_modified: string;
  Accepted: number;
  Rejected: number;
  Unknown: number;
  Total: number;
  LGBT: number;
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
  countryEntries?: Country[];
}

export const SummaryChart = ({
  data, genderData,
  w,
  h,
  isSummaryPage,
  axisOption,
  continentOption,
  checkedCountryOptions,
  countryNames,
  countryEntries,
}: SummaryChartProps) => {
  const { t } = useTranslation();

  let leftMargin;

  // The default displayed data is the fake country dataset
  // eslint-disable-next-line
  let displayedData: any[] = data;
  let ticks = data.length;
  let xTextSize;
  const initialTextSize = 20;
  const TextSizeDecreaseRate = 5;

  // The y-axis label needs more space to be displayed if we are on summary
  if (isSummaryPage) { leftMargin = 38 };

  // Display the fake gender dataset if selected in the dropdown
  if (axisOption === "gender") {
    displayedData = genderData;
    ticks = displayedData.length;
  }

  // The below block is responsible for adding checked countries to the chart.
  // It loops through all country names in the database,
  // and every name that appears as "checked" is added to the currently displayed dataset
  if ((checkedCountryOptions !== undefined) && (countryEntries !== undefined) && (axisOption === "country") && isSummaryPage) {
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
  if (axisOption === "country" && continentOption !== "all" && isSummaryPage) {
    if (continentOption === "Amerika") {
      displayedData = displayedData.filter((c) => (c.continent === "Nordamerika") || (c.continent === "Sydamerika"));
      ticks = displayedData.length;
    } else {
      displayedData = displayedData.filter((c) => (c.continent === continentOption));
      ticks = displayedData.length;
    }
  }

  // Sort displayed data according to number of cases
  displayedData = displayedData.sort((a, b) => (b.Total - a.Total));

  // Decrease x-axis text size as the number of added countries increase
  if (isSummaryPage) {
    xTextSize = Math.max(10, initialTextSize - (TextSizeDecreaseRate * Math.ceil(displayedData.length / 10)));
  } else { xTextSize = 15 }

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
      {((isSummaryPage) && (axisOption === "country")) && (
        <XAxis
        dataKey="name"
        axisLine={true}
        tickLine={true}
        tick={{ fontSize: xTextSize }}
        tickFormatter={(name: string) =>
          t(`countries.${name}.fullName`)
        }
      />
      )}
      {((!isSummaryPage)) && (
        <XAxis
        dataKey="name"
        axisLine={true}
        tickLine={true}
        tickFormatter={(name: string) =>
          t(`countries.${name}.fullName`)
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
