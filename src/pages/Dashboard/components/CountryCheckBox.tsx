import React, { useState } from "react";
import { useTranslation } from "react-i18next";

interface CountryCheckBoxProps {
  options: string[];
  setCheckedOptionsChart: React.Dispatch<React.SetStateAction<string[]>>;
  setHeight: React.Dispatch<React.SetStateAction<number>>;
  initialChartHeight: number;
}

export const CountryCheckBox = ({ options, setCheckedOptionsChart, setHeight, initialChartHeight }: CountryCheckBoxProps) => {
  const [checkedOptions, setCheckedOptions] = useState<string[]>([]);

  // Some limit to signal when the chart should increase
  const optionslimit = 8;

  // How much the chart grows for every added country
  const chartGrowth = 50;

  // State hook for counrting the number of selected countries in the box
  const [numberOfCheckedOptions, setNumberOfCheckedOptions] = useState<number>(0);

  // This function renders options as checked or unchecked
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const opt = event.target.value;

    if (event.target.checked) {
      setCheckedOptions([...checkedOptions, opt]);
      setNumberOfCheckedOptions(numberOfCheckedOptions + 1)
    } else {
      setCheckedOptions(checkedOptions.filter((o) => o !== opt));
      setNumberOfCheckedOptions(numberOfCheckedOptions - 1)
    }
  };

  // This function sets the list of countries that the chart should render,
  // and computes a new height for the chart if necessary
  const handleSubmitClick = () => {
    setCheckedOptionsChart(checkedOptions);

    // Increase height if we are over the addition limit
    if (numberOfCheckedOptions > optionslimit) {
      const limitDiff = Math.abs(numberOfCheckedOptions - optionslimit);

      setHeight(initialChartHeight + (chartGrowth * limitDiff));
    } else {
      setHeight(initialChartHeight);
    }
  }

  const { t } = useTranslation();
  const boxHeader = t("dashboardPage.boxHeader");
  const addText = t("dashboardPage.addButton");

  return (
    <div style={{
      marginLeft: "15px",
      marginRight: "15px",
      borderRadius: "8px",
    }}>
      <div style={{
        fontWeight: "bold",
        marginBottom: "5px",
        fontSize: "18px",
      }}>
        {boxHeader}
      </div>
      <div style={{
        border: "1px solid grey",
        borderRadius: "4px",
        height: "550px",
        overflowY: "scroll",
      }}>
        {options.map((o) => (
          <div key={o} style={{ fontSize: "15px" }}>
            <label>
              <input
                type="checkbox"
                value={o}
                checked={checkedOptions.includes(o)}
                onChange={handleCheckboxChange}>
              </input>
              <span>{o.charAt(0).toUpperCase() + o.slice(1)}</span>
            </label>
          </div>
        ))}
      </div>
      <input type="submit" value={addText} onClick={handleSubmitClick} style={{
        width: "100%",
        height: "40px",
        marginTop: "15px",
      }}></input>
    </div>
  );
}
