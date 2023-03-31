import { useTranslation } from "react-i18next";

interface dropDownProps {
  selectedOption: string
  setOption: React.Dispatch<React.SetStateAction<string>>
}

export const ContinentDropDown = ({ selectedOption, setOption }: dropDownProps) => {
  const handleMenuChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOption(event.target.value)
  }

  const { t } = useTranslation();

  const asiaText = t("continentDropDown.options.asia");
  const euroText = t("continentDropDown.options.europe");
  const americaText = t("continentDropDown.options.america");
  const africaText = t("continentDropDown.options.africa");

  return (
    <select value={selectedOption} onChange={handleMenuChange}
      style={{
        height: "30px",
        width: "140px",
        fontWeight: "bold",
        border: "4px outset #78A6F5",
        backgroundColor: "#3E54AC",
        color: "white",
        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.35)",
        borderRadius: "8px",
        fontSize: "13px",
        marginLeft: "25px",
        marginRight: "25px",
        marginTop: "1px",
        marginBottom: "25px",
      }}
    >
        <option value="asia">{asiaText}</option>
        <option value="america">{americaText}</option>
        <option value="africa">{africaText}</option>
        <option value="europe">{euroText}</option>
    </select>
  )
}
