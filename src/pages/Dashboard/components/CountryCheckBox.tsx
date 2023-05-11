import React, { useState } from "react";
import { useTranslation } from "react-i18next";

interface CountryCheckBoxProps {

  // "options" is the total list of options that the chart supplies to the checkbox
  options: string[]

  setCheckedOptionsChart: React.Dispatch<React.SetStateAction<string[]>>
}

export const CountryCheckBox = ({ options, setCheckedOptionsChart }: CountryCheckBoxProps) => {
  const [checkedOptions, setCheckedOptions] = useState<string[]>([]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const opt = event.target.value;

    if (event.target.checked) {
      setCheckedOptions([...checkedOptions, opt]);
    } else {
      setCheckedOptions(checkedOptions.filter((o) => o !== opt));
    }
  };

  const handleSubmitClick = () => { setCheckedOptionsChart(checkedOptions); }

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
