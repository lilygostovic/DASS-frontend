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

  const countryText = t("summaryDropDown.options.country");
  const genderText = t("summaryDropDown.options.gender");
  const motiveText = t("summaryDropDown.options.motive");
  const lgbtqText = t("summaryDropDown.options.lgbtq")

  return (
    <select value={selectedOption} onChange={handleMenuChange}
      style={{
        height: "40px",
        width: "190px",
        fontWeight: "bold",
        border: "4px outset #78A6F5",
        backgroundColor: "#3E54AC",
        color: "white",
        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.35)",
        borderRadius: "8px",
        fontSize: "19px",
        margin: "20px 25px",
        cursor: "pointer",
      }}
    >
        <option value="country">{countryText}</option>
        <option value="gender">{genderText}</option>
        <option value="motive">{motiveText}</option>
        <option value="lgbtq">{lgbtqText}</option>
    </select>
  )
}
