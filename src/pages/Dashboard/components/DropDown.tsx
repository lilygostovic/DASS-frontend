import { useTranslation } from "react-i18next";

interface dropDownProps {
  selectedOption: string
  setOption: React.Dispatch<React.SetStateAction<string>>
}

export const DropDown = ({ selectedOption, setOption }: dropDownProps) => {
  const handleMenuChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOption(event.target.value)
  }

  const { t } = useTranslation();

  const resultText = t("summaryDropDown.options.result");
  const genderText = t("summaryDropDown.options.gender");
  const motiveText = t("summaryDropDown.options.motive");
  const lgbtText = t("summaryDropDown.options.lgbt")

  return (
     <select value={selectedOption} onChange={handleMenuChange}
      style={{
        height: "35px",
        width: "190px",
        fontWeight: "bold",
        border: "1px solid grey",
        color: "black",
        borderRadius: "15px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
        fontSize: "19px",
        margin: "20px 25px",
        cursor: "pointer",
        padding: "5px 10px",
      }}
    >
        <option value="result">{resultText}</option>
        <option value="gender">{genderText}</option>
        <option value="motive">{motiveText}</option>
        <option value="lgbt">{lgbtText}</option>
      </select>
  )
}
