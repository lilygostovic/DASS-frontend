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

  const allText = t("continentDropDown.options.all");
  const asiaText = t("continentDropDown.options.asia");
  const euroText = t("continentDropDown.options.europe");
  const americaText = t("continentDropDown.options.america");
  const africaText = t("continentDropDown.options.africa");
  const OtherText = t("continentDropDown.options.other");

  return (
    <select value={selectedOption} onChange={handleMenuChange}
      style={{
        height: "20px",
        width: "140px",
        fontWeight: "bold",
        color: "black",
        borderRadius: "15px",
        border: "1px solid grey",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
        fontSize: "15px",
        marginLeft: "25px",
        marginRight: "25px",
        marginTop: "1px",
        marginBottom: "20px",
        cursor: "pointer",
        padding: "0px 5px",
      }}
    >
        <option value="all">{allText}</option>
        <option value="Asien">{asiaText}</option>
        <option value="Amerika">{americaText}</option>
        <option value="Afrika">{africaText}</option>
        <option value="Europa">{euroText}</option>
        <option value="Other">{OtherText}</option>
    </select>
  )
}
