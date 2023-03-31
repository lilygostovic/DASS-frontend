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
}

interface SummaryChartProps {
  data: Country[];
  w: number
  h: number
  isSummaryPage: boolean
  axisOption?: string
}

export const SummaryChart = ({ data, w, h, isSummaryPage, axisOption }: SummaryChartProps) => {
  const { t } = useTranslation();

  let leftMargin = 0;

  // The y-axis label needs more space to be displayed if we are on summary
  if (isSummaryPage) { leftMargin = 38 };

  return (
    <BarChart
      width={w}
      height={h}
      data={data}
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
      <XAxis
        dataKey="country"
        axisLine={true}
        tickLine={true}
        tickFormatter={(country: string) =>
          t(`countries.${country}.fullName`)
        }
      />
      <YAxis axisLine={true} tickLine={false} tickCount={8} >
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
      <Tooltip />
      <Legend
        verticalAlign="top"
        formatter={(value, entry, index) =>
          i18n.language === "english" ? value : t(value)
        }
      />
    </BarChart>
  );
};
