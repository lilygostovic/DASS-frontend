import { useTranslation } from "react-i18next";

interface CheckBoxDropDownProps {
  selectedOption: string
  setOption: React.Dispatch<React.SetStateAction<string>>
}

export const CheckBoxDropDown = ({ selectedOption, setOption }: CheckBoxDropDownProps) => {
  const handleMenuChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOption(event.target.value)
  }

  const { t } = useTranslation();

  const allText = t("continentDropDown.options.all");
  const asiaText = t("continentDropDown.options.asia");
  const euroText = t("continentDropDown.options.europe");
  const americaText = t("continentDropDown.options.america");
  const africaText = t("continentDropDown.options.africa");
  const otherText = t("continentDropDown.options.other");

  return (
    <select value={selectedOption} onChange={handleMenuChange}
      style={{
        height: "23px",
        color: "black",
        borderRadius: "15px",
        border: "1px solid grey",
        fontSize: "15px",
        marginLeft: "15px",
        width: "172px",
        marginBottom: "15px",
        cursor: "pointer",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
      }}
    >
        <option value="all">{allText}</option>
        <option value="asia">{asiaText}</option>
        <option value="america">{americaText}</option>
        <option value="africa">{africaText}</option>
        <option value="europe">{euroText}</option>
        <option value="other">{otherText}</option>
    </select>
  )
}
