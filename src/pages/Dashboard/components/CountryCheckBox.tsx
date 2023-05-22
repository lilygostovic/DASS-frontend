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
  const [isHovered, setHovered] = useState<boolean>(false);

  const { t } = useTranslation();
  const boxHeader = t("dashboardPage.boxHeader");
  const addText = t("dashboardPage.addButton");
  const resetText = t("dashboardPage.reset")

  // Options are sorted according to their English/Danish names from JSON
  const sortedOptions = options.sort((a, b) => {
    const transA = t(`countries.${a}.fullName`);
    const transB = t(`countries.${b}.fullName`);

    return transA.localeCompare(transB);
  })

  // Some limit to signal when the chart should increase
  const optionslimit = 8;

  // How much the chart grows for every added country
  const chartGrowth = 50;

  // State hook for counrting the number of selected countries in the box
  const [numberOfCheckedOptions, setNumberOfCheckedOptions] = useState<number>(0);

  // This function renders options as checked or unchecked
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const opt = event.target.value;

    // Add the newly checked option, or remove an unchecked option
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

  // Reset checkbox
  const handleResetClick = () => {
    setCheckedOptions([]);

    setCheckedOptionsChart([]);

    setHeight(initialChartHeight);

    setNumberOfCheckedOptions(0);
  }

  // Set to true when we have hovering over the confirm button
  const handleMouseHover = () => { setHovered(true); };

  // Set to false when we are no longer hovering over the confirm button
  const handleMouseStatic = () => { setHovered(false); };

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
        height: "510px",
        overflowY: "scroll",
      }}>
        {sortedOptions.map((o) => (
          <div key={o} style={{ fontSize: "15px" }}>
            <label>
              <input
                type="checkbox"
                value={o}
                checked={checkedOptions.includes(o)}
                onChange={handleCheckboxChange}>
              </input>
              <span>{t(`countries.${o}.fullName`)}</span>
            </label>
          </div>
        ))}
      </div>

      <button onClick={handleResetClick} style={{
        cursor: "pointer",
        marginTop: "10px",
        marginBottom: "10px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
        width: "100%",
      }}>
        {resetText}
      </button>

      <input type="submit" value={addText} onClick={handleSubmitClick} style={{
        width: "100%",
        height: "40px",
        marginTop: "15px",
        borderRadius: "15px",
        border: "1px solid grey",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
        backgroundColor: isHovered ? "#E0E0E0" : "white",
        transition: "background-color 0.1s",
        cursor: "pointer",
        fontWeight: "bold",
      }}
      onMouseEnter={handleMouseHover}
      onMouseLeave={handleMouseStatic}
      >
      </input>
    </div>
  );
}
